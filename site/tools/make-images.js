/**
 * Generates the raster brand images the HTML references:
 *   assets/img/og-image.png        1200x630 social preview
 *   assets/img/apple-touch-icon.png  180x180 home-screen icon
 *   assets/img/icon-512.png          512x512 large icon
 *
 * Everything is drawn from geometric primitives and encoded with Node's own
 * zlib — no image libraries, no fonts. The "duodat" wordmark is built from
 * round-capped strokes so it matches the logo mark.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

/* ------------------------------------------------------------ PNG write --- */

let CRC_TABLE = null;
function crc32(buf) {
  if (!CRC_TABLE) {
    CRC_TABLE = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      CRC_TABLE[n] = c;
    }
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

/** rgb: Uint8Array of width*height*3 */
function encodePNG(width, height, rgb) {
  const stride = width * 3;
  const raw = Buffer.alloc(height * (stride + 1));
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    for (let i = 0; i < stride; i++) raw[y * (stride + 1) + 1 + i] = rgb[y * stride + i];
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 2;  // colour type: truecolour
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

/* -------------------------------------------------------------- canvas --- */

const SS = 3; // supersampling factor; the buffer is downsampled on export

function Canvas(w, h) {
  this.w = w;
  this.h = h;
  this.W = w * SS;
  this.H = h * SS;
  this.buf = new Uint8Array(this.W * this.H * 3);
}

Canvas.prototype._set = function (X, Y, c) {
  if (X < 0 || Y < 0 || X >= this.W || Y >= this.H) return;
  const i = (Y * this.W + X) * 3;
  this.buf[i] = c[0];
  this.buf[i + 1] = c[1];
  this.buf[i + 2] = c[2];
};

/** Fill every pixel from a callback receiving logical coordinates. */
Canvas.prototype.fill = function (fn) {
  for (let Y = 0; Y < this.H; Y++) {
    for (let X = 0; X < this.W; X++) {
      this._set(X, Y, fn((X + 0.5) / SS, (Y + 0.5) / SS));
    }
  }
};

/** Iterate device pixels over a logical bounding box. */
Canvas.prototype._box = function (x0, y0, x1, y1, test, c) {
  const X0 = Math.max(0, Math.floor(x0 * SS));
  const Y0 = Math.max(0, Math.floor(y0 * SS));
  const X1 = Math.min(this.W - 1, Math.ceil(x1 * SS));
  const Y1 = Math.min(this.H - 1, Math.ceil(y1 * SS));
  for (let Y = Y0; Y <= Y1; Y++) {
    for (let X = X0; X <= X1; X++) {
      const x = (X + 0.5) / SS;
      const y = (Y + 0.5) / SS;
      if (test(x, y)) this._set(X, Y, c);
    }
  }
};

Canvas.prototype.roundRect = function (x, y, w, h, r, c) {
  const rr = Math.min(r, w / 2, h / 2);
  this._box(x, y, x + w, y + h, function (px, py) {
    const dx = Math.max(x + rr - px, 0, px - (x + w - rr));
    const dy = Math.max(y + rr - py, 0, py - (y + h - rr));
    return dx * dx + dy * dy <= rr * rr;
  }, c);
};

Canvas.prototype.disc = function (cx, cy, r, c) {
  this._box(cx - r, cy - r, cx + r, cy + r, function (px, py) {
    const dx = px - cx, dy = py - cy;
    return dx * dx + dy * dy <= r * r;
  }, c);
};

/** Round-capped straight stroke. */
Canvas.prototype.capsule = function (x0, y0, x1, y1, width, c) {
  const hw = width / 2;
  const vx = x1 - x0, vy = y1 - y0;
  const len2 = vx * vx + vy * vy;
  this._box(Math.min(x0, x1) - hw, Math.min(y0, y1) - hw, Math.max(x0, x1) + hw, Math.max(y0, y1) + hw,
    function (px, py) {
      let t = len2 === 0 ? 0 : ((px - x0) * vx + (py - y0) * vy) / len2;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const dx = px - (x0 + t * vx), dy = py - (y0 + t * vy);
      return dx * dx + dy * dy <= hw * hw;
    }, c);
};

/**
 * Round-capped arc. Angles in radians, measured from +x and increasing
 * clockwise on screen (y grows downwards).
 */
Canvas.prototype.arc = function (cx, cy, r, width, a0, a1, c) {
  const hw = width / 2;
  const outer = r + hw;
  const TAU = Math.PI * 2;
  const span = a1 - a0;
  this._box(cx - outer, cy - outer, cx + outer, cy + outer, function (px, py) {
    const dx = px - cx, dy = py - cy;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (Math.abs(d - r) > hw) return false;
    if (span >= TAU) return true;
    let a = Math.atan2(dy, dx) - a0;
    a = ((a % TAU) + TAU) % TAU;
    return a <= span;
  }, c);
  if (span < TAU) {
    this.disc(cx + r * Math.cos(a0), cy + r * Math.sin(a0), hw, c);
    this.disc(cx + r * Math.cos(a1), cy + r * Math.sin(a1), hw, c);
  }
};

Canvas.prototype.ring = function (cx, cy, r, width, c) {
  this.arc(cx, cy, r, width, 0, Math.PI * 2 + 0.001, c);
};

/** Box-downsample to logical resolution and encode. */
Canvas.prototype.toPNG = function () {
  const out = new Uint8Array(this.w * this.h * 3);
  const n = SS * SS;
  for (let y = 0; y < this.h; y++) {
    for (let x = 0; x < this.w; x++) {
      let r = 0, g = 0, b = 0;
      for (let dy = 0; dy < SS; dy++) {
        for (let dx = 0; dx < SS; dx++) {
          const i = ((y * SS + dy) * this.W + (x * SS + dx)) * 3;
          r += this.buf[i]; g += this.buf[i + 1]; b += this.buf[i + 2];
        }
      }
      const o = (y * this.w + x) * 3;
      out[o] = Math.round(r / n);
      out[o + 1] = Math.round(g / n);
      out[o + 2] = Math.round(b / n);
    }
  }
  return encodePNG(this.w, this.h, out);
};

/* --------------------------------------------------------------- brand --- */

const TEAL_900 = [4, 43, 49];
const TEAL_800 = [6, 66, 75];
const TEAL_700 = [10, 90, 102];
const TEAL_500 = [21, 148, 158];
const AMBER = [246, 169, 75];
const WHITE = [255, 255, 255];

function mix(a, b, t) {
  const k = t < 0 ? 0 : t > 1 ? 1 : t;
  return [
    Math.round(a[0] + (b[0] - a[0]) * k),
    Math.round(a[1] + (b[1] - a[1]) * k),
    Math.round(a[2] + (b[2] - a[2]) * k)
  ];
}

/** The logo mark: rounded square, dot, two arcs. */
function drawMark(cv, x, y, size) {
  const s = size;
  const k = function (v) { return (v / 48) * s; };

  // Rounded square with the brand diagonal gradient, painted per pixel.
  const rr = k(12);
  const X0 = Math.floor(x * SS), Y0 = Math.floor(y * SS);
  const X1 = Math.ceil((x + s) * SS), Y1 = Math.ceil((y + s) * SS);
  for (let Y = Math.max(0, Y0); Y <= Math.min(cv.H - 1, Y1); Y++) {
    for (let X = Math.max(0, X0); X <= Math.min(cv.W - 1, X1); X++) {
      const px = (X + 0.5) / SS, py = (Y + 0.5) / SS;
      const dx = Math.max(x + rr - px, 0, px - (x + s - rr));
      const dy = Math.max(y + rr - py, 0, py - (y + s - rr));
      if (dx * dx + dy * dy > rr * rr) continue;
      const t = ((px - x) / s + (py - y) / s) / 2;
      const col = t < 0.55 ? mix(TEAL_500, TEAL_700, t / 0.55) : mix(TEAL_700, TEAL_900, (t - 0.55) / 0.45);
      cv._set(X, Y, col);
    }
  }

  // Dot and the two voice arcs.
  cv.disc(x + k(16.5), y + k(24), k(4.6), WHITE);
  cv.arc(x + k(16.5), y + k(24), k(11.5), k(3.6), -0.91, 0.91, WHITE);
  cv.arc(x + k(16.5), y + k(24), k(18), k(3.4), -0.86, 0.86, AMBER);
}

/**
 * "duodat" wordmark from round-capped strokes.
 * xh = x-height in pixels. Returns the advance width.
 */
function drawWordmark(cv, x, baseline, xh, colorMain, colorAccent) {
  const s = xh * 0.215;          // stroke weight
  const asc = xh * 0.66;         // ascender above the x-height
  const Y = baseline - xh;       // top of the x-height
  const r = (xh - s) / 2;        // bowl centreline radius
  const track = s * 0.62;
  let cx = x;

  const bowl = function (left, c) {
    cv.ring(left + xh / 2, Y + xh / 2, r, s, c);
  };

  const glyph = {
    d: function (left, c) {
      bowl(left, c);
      cv.capsule(left + xh - s / 2, Y - asc, left + xh - s / 2, Y + xh - s / 2, s, c);
      return xh;
    },
    u: function (left, c) {
      cv.capsule(left + s / 2, Y, left + s / 2, Y + xh / 2, s, c);
      cv.capsule(left + xh - s / 2, Y, left + xh - s / 2, Y + xh - s / 2, s, c);
      cv.arc(left + xh / 2, Y + xh / 2, r, s, 0, Math.PI, c);
      return xh;
    },
    o: function (left, c) {
      bowl(left, c);
      return xh;
    },
    a: function (left, c) {
      bowl(left, c);
      cv.capsule(left + xh - s / 2, Y, left + xh - s / 2, Y + xh - s / 2, s, c);
      return xh;
    },
    t: function (left, c) {
      cv.capsule(left + s / 2, Y - asc * 0.72, left + s / 2, Y + xh - s / 2, s, c);
      cv.capsule(left - s * 0.5, Y, left + s * 1.9, Y, s, c);
      return s * 2.1;
    }
  };

  // "duo" in the main colour, "dat" in the accent colour.
  const letters = [['d', 0], ['u', 0], ['o', 0], ['d', 1], ['a', 1], ['t', 1]];
  for (const [ch, accent] of letters) {
    cx += glyph[ch](cx, accent ? colorAccent : colorMain) + track;
  }
  return cx - track - x;
}

/** Measure the wordmark without drawing (same advance arithmetic). */
function wordmarkWidth(xh) {
  const s = xh * 0.215;
  const track = s * 0.62;
  return xh * 5 + s * 2.1 + track * 5;
}

/* ---------------------------------------------------------------- icons --- */

function makeIcon(size) {
  const cv = new Canvas(size, size);
  cv.fill(function () { return TEAL_900; });
  drawMark(cv, 0, 0, size);
  return cv.toPNG();
}

function makeOgImage() {
  const W = 1200, H = 630;
  const cv = new Canvas(W, H);

  // Background: diagonal brand gradient plus a soft teal glow top-right.
  cv.fill(function (x, y) {
    const t = (x / W) * 0.45 + (y / H) * 0.55;
    let col = mix(TEAL_900, TEAL_800, t);
    const gx = x - W * 0.78, gy = y - H * -0.05;
    const glow = Math.max(0, 1 - Math.sqrt(gx * gx + gy * gy) / (W * 0.62));
    col = mix(col, TEAL_500, glow * glow * 0.42);
    const ax = x - W * 0.08, ay = y - H * 1.05;
    const warm = Math.max(0, 1 - Math.sqrt(ax * ax + ay * ay) / (W * 0.45));
    return mix(col, AMBER, warm * warm * 0.16);
  });

  // Logo lockup, optically centred.
  const markSize = 150;
  const xh = 108;
  const gap = 46;
  const total = markSize + gap + wordmarkWidth(xh);
  const left = (W - total) / 2;
  const midY = H * 0.46;

  drawMark(cv, left, midY - markSize / 2, markSize);
  drawWordmark(cv, left + markSize + gap, midY + xh / 2, xh, WHITE, AMBER);

  // Waveform strip underneath, suggesting a live call.
  const bars = [0.30, 0.62, 0.95, 0.52, 0.78, 1.0, 0.44, 0.70, 0.34, 0.58, 0.88, 0.40];
  const barW = 9, barGap = 17;
  const stripW = bars.length * barW + (bars.length - 1) * (barGap - barW);
  let bx = (W - stripW) / 2;
  const by = H * 0.74;
  const maxBar = 54;
  bars.forEach(function (level, i) {
    const half = (maxBar * level) / 2;
    const col = i % 3 === 2 ? AMBER : mix(TEAL_500, WHITE, 0.45);
    cv.capsule(bx + barW / 2, by - half, bx + barW / 2, by + half, barW, col);
    bx += barGap;
  });

  return cv.toPNG();
}

/* --------------------------------------------------------------- export --- */

module.exports = function makeImages(outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'og-image.png'), makeOgImage());
  fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), makeIcon(180));
  fs.writeFileSync(path.join(outDir, 'icon-512.png'), makeIcon(512));
};

if (require.main === module) {
  const target = process.argv[2] || path.join(__dirname, '..', '..', 'output_duodat.com', 'assets', 'img');
  module.exports(target);
  console.log('Images written to ' + target);
}
