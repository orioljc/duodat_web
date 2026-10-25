/* Inline SVG icons (Feather-style, 24x24, currentColor). */

const PATHS = {
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>',
  shield: '<path d="M12 3l7 3v5c0 4.2-2.9 8.1-7 10-4.1-1.9-7-5.8-7-10V6l7-3z"/><path d="M9.2 12.2l2 2 3.6-3.9"/>',
  plug: '<path d="M9 3v6M15 3v6"/><path d="M7 9h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V9z"/><path d="M12 17v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3.2 2"/>',
  bell: '<path d="M18 15V10a6 6 0 1 0-12 0v5l-1.5 2.5h15L18 15z"/><path d="M10 20a2.3 2.3 0 0 0 4 0"/>',
  user: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.6-3.6 3.4-5.6 7-5.6s6.4 2 7 5.6"/>',
  users: '<circle cx="9.5" cy="8.5" r="3.2"/><path d="M3.5 20c.5-3.3 3-5.1 6-5.1s5.5 1.8 6 5.1"/><path d="M16.5 5.6a3.2 3.2 0 0 1 0 6.1M17.3 14.4c2 .6 3.3 2.2 3.7 4.5"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="9.5" rx="2.2"/><path d="M8.2 10.5V7.8a3.8 3.8 0 0 1 7.6 0v2.7"/>',
  'phone-missed': '<path d="M4 4.8l2.8-.4 1.5 3.3-1.9 1.6a12.5 12.5 0 0 0 5.9 5.9l1.6-1.9 3.3 1.5-.4 2.8c-.1.9-.9 1.5-1.8 1.4C9.1 18.1 5 13.6 4 7.1c-.1-.9.5-1.7 1.4-1.8z" transform="translate(-0.4 0.4)"/><path d="M15 3.5l5 5M20 3.5l-5 5"/>',
  phone: '<path d="M5.3 4.4l3.1-.5 1.7 3.7-2.2 1.8a14 14 0 0 0 6.6 6.6l1.8-2.2 3.7 1.7-.5 3.1c-.1 1-1 1.7-2 1.6-7.2-1-12.8-6.6-13.8-13.8-.1-1 .6-1.9 1.6-2z"/>',
  repeat: '<path d="M4 9V8a3 3 0 0 1 3-3h10l-2.5-2.5M20 15v1a3 3 0 0 1-3 3H7l2.5 2.5" transform="translate(0 -0.5)"/>',
  heart: '<path d="M12 20s-7-4.4-7-9.3A4.2 4.2 0 0 1 12 7.8 4.2 4.2 0 0 1 19 10.7c0 4.9-7 9.3-7 9.3z"/>',
  calendar: '<rect x="3.8" y="5.5" width="16.4" height="14.5" rx="2.4"/><path d="M3.8 10h16.4M8.5 3.5v3.5M15.5 3.5v3.5"/>',
  'file-text': '<path d="M14 3.5H7.4A1.9 1.9 0 0 0 5.5 5.4v13.2a1.9 1.9 0 0 0 1.9 1.9h9.2a1.9 1.9 0 0 0 1.9-1.9V8l-4.5-4.5z"/><path d="M13.8 3.7V8H18M9 12.5h6M9 16h4.5"/>',
  home: '<path d="M4.5 10.5L12 4.3l7.5 6.2V19a1.4 1.4 0 0 1-1.4 1.4H5.9A1.4 1.4 0 0 1 4.5 19v-8.5z"/><path d="M9.8 20.4v-6h4.4v6"/>',
  'check-circle': '<circle cx="12" cy="12" r="9"/><path d="M8.2 12.2l2.6 2.6 5-5.4"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>',
  message: '<path d="M20 12.8c0 3.6-3.6 6.5-8 6.5a9.7 9.7 0 0 1-2.6-.3L5 20.5l1.2-3.2A6.2 6.2 0 0 1 4 12.8c0-3.6 3.6-6.5 8-6.5s8 2.9 8 6.5z"/>',
  sliders: '<path d="M4 8h10M18 8h2M4 16h3M11 16h9"/><circle cx="16" cy="8" r="2"/><circle cx="9" cy="16" r="2"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M15.8 15.8L20.5 20.5"/>',
  filter: '<path d="M4 5.5h16l-6.2 7.3v6.7l-3.6-2v-4.7L4 5.5z"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2.2"/><path d="M4 7l8 5.5L20 7"/>',
  refresh: '<path d="M19.5 11a7.5 7.5 0 0 0-13-4.2L4 9.5"/><path d="M4.5 13a7.5 7.5 0 0 0 13 4.2L20 14.5"/><path d="M4 5v4.5h4.5M20 19v-4.5h-4.5"/>',
  list: '<path d="M8.5 7h11M8.5 12h11M8.5 17h11"/><circle cx="4.8" cy="7" r="1.2"/><circle cx="4.8" cy="12" r="1.2"/><circle cx="4.8" cy="17" r="1.2"/>',
  'bar-chart': '<path d="M5.5 20V13M12 20V5M18.5 20v-9"/>',
  'help-circle': '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.6a2.5 2.5 0 0 1 4.9.6c0 1.7-2.5 1.9-2.5 3.6"/><circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none"/>',
  alert: '<path d="M12 4.5l8.5 15H3.5L12 4.5z"/><path d="M12 10v4"/><circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none"/>',
  inbox: '<path d="M3.8 13h4l1.3 2.4h5.8L16.2 13h4"/><path d="M4.6 13L7 5.6A1.6 1.6 0 0 1 8.5 4.5h7a1.6 1.6 0 0 1 1.5 1.1L19.4 13v5.4a1.6 1.6 0 0 1-1.6 1.6H6.2a1.6 1.6 0 0 1-1.6-1.6V13z"/>',
  check: '<path d="M4.5 12.5l4.8 4.8L19.5 6.8"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  'arrow-right': '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>',
  'chevron-down': '<path d="M6 9.5l6 6 6-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none"/>',
  send: '<path d="M20.5 3.5L10.5 13.5M20.5 3.5l-6.5 17-3.5-7-7-3.5 17-6.5z"/>',
  volume: '<path d="M11 4.8L6.4 8.8H3.3v6.4h3.1L11 19.2V4.8z"/><path d="M14.8 9.4a3.6 3.6 0 0 1 0 5.2M17.6 6.8a7.3 7.3 0 0 1 0 10.4"/>',
  mic: '<rect x="9.2" y="3" width="5.6" height="11" rx="2.8"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3"/>'
};

/**
 * @param {string} name   key in PATHS
 * @param {number} size   pixel size
 * @param {number} stroke stroke width
 */
function icon(name, size, stroke) {
  const body = PATHS[name];
  if (!body) throw new Error('Unknown icon: ' + name);
  return '<svg class="icon icon--' + name + '" width="' + (size || 24) + '" height="' + (size || 24) +
    '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (stroke || 1.8) +
    '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + body + '</svg>';
}

module.exports = { icon, PATHS };
