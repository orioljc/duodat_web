/* ==========================================================================
   Duodat — site behaviour
   No dependencies. Everything degrades gracefully without JS.
   ========================================================================== */
(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  /* ----------------------------------------------------------- helpers --- */

  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ------------------------------------------------------ sticky header --- */

  var header = $('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ------------------------------------------------- mobile nav + menus --- */

  var nav = $('.nav');
  var burger = $('.nav__burger');

  var closeAllMenus = function (except) {
    $$('[data-menu]').forEach(function (menu) {
      if (menu === except) return;
      menu.setAttribute('data-open', 'false');
      var btn = $('[aria-controls="' + menu.id + '"]');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  };

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', open ? 'false' : 'true');
      burger.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (open) closeAllMenus();
    });
  }

  $$('[aria-controls]').forEach(function (btn) {
    var menu = document.getElementById(btn.getAttribute('aria-controls'));
    if (!menu || !menu.hasAttribute('data-menu')) return;
    btn.addEventListener('click', function (ev) {
      ev.stopPropagation();
      var open = menu.getAttribute('data-open') === 'true';
      closeAllMenus(open ? null : menu);
      menu.setAttribute('data-open', open ? 'false' : 'true');
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  });

  document.addEventListener('click', function (ev) {
    if (!ev.target.closest('.nav__item--has-menu, .lang')) closeAllMenus();
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return;
    closeAllMenus();
    if (nav && nav.getAttribute('data-open') === 'true') {
      nav.setAttribute('data-open', 'false');
      if (burger) { burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
    }
  });

  /* ------------------------------------------------------ reveal on scroll */

  var revealables = $$('.reveal');
  if (revealables.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      revealables.forEach(function (el) { io.observe(el); });
    } else {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    }
  }

  /* ----------------------------------------------------- language memory */

  // Remember the visitor's chosen language so the logo/home link keeps it.
  $$('[data-lang-pick]').forEach(function (link) {
    link.addEventListener('click', function () {
      try { localStorage.setItem('duodat:lang', link.getAttribute('data-lang-pick')); } catch (e) {}
    });
  });

  /* ---------------------------------------------------------------- form */

  $$('form[data-duodat-form]').forEach(initForm);

  function initForm(form) {
    var cfg      = JSON.parse(form.getAttribute('data-config') || '{}');
    var okBox    = $('[data-alert="ok"]', form);
    var errBox   = $('[data-alert="err"]', form);
    var errText  = $('[data-alert-text]', errBox || form);
    var submit   = $('[data-submit]', form);
    var endpoint = form.getAttribute('action');
    var keyReady = form.getAttribute('data-key-ready') === 'true';

    // Record which page the lead came from.
    var pageField = $('[name="page_url"]', form);
    if (pageField) pageField.value = window.location.href;

    // Prefill the interest field from ?interes= / ?interest= when present.
    try {
      var params = new URLSearchParams(window.location.search);
      var wanted = params.get('interes') || params.get('interest') || params.get('caso') || params.get('cas');
      var select = $('[name="use_case"]', form);
      if (wanted && select) {
        $$('option', select).forEach(function (opt) {
          if (opt.value === wanted) select.value = wanted;
        });
      }
    } catch (e) {}

    var showErr = function (msg) {
      if (!errBox) return;
      if (errText) errText.innerHTML = msg;
      errBox.setAttribute('data-show', 'true');
      errBox.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    };

    var hideAlerts = function () {
      if (errBox) errBox.setAttribute('data-show', 'false');
      if (okBox) okBox.setAttribute('data-show', 'false');
    };

    var fieldError = function (input, msg) {
      input.setAttribute('aria-invalid', 'true');
      var holder = input.closest('.field') || input.closest('.check');
      var slot = holder ? $('.field__err', holder) : null;
      if (slot) slot.textContent = msg;
    };

    var clearFieldError = function (input) {
      input.removeAttribute('aria-invalid');
      var holder = input.closest('.field') || input.closest('.check');
      var slot = holder ? $('.field__err', holder) : null;
      if (slot) slot.textContent = '';
    };

    $$('.input, .select, .textarea, input[type="checkbox"]', form).forEach(function (input) {
      input.addEventListener('input', function () { clearFieldError(input); });
      input.addEventListener('change', function () { clearFieldError(input); });
    });

    var validate = function () {
      var firstBad = null;
      $$('[required]', form).forEach(function (input) {
        clearFieldError(input);
        var bad = false;
        if (input.type === 'checkbox') bad = !input.checked;
        else if (!input.value.trim()) bad = true;
        else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())) bad = true;

        if (bad) {
          var msg = input.type === 'email' && input.value.trim()
            ? (cfg.errEmail || 'Enter a valid email address.')
            : (cfg.errRequired || 'This field is required.');
          fieldError(input, msg);
          if (!firstBad) firstBad = input;
        }
      });
      if (firstBad) {
        firstBad.focus();
        firstBad.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return false;
      }
      return true;
    };

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      hideAlerts();
      if (!validate()) return;

      // Honeypot: silently accept and do nothing.
      // Note: an unchecked checkbox still reports value "on", so only
      // `checked` may be tested here.
      var pot = $('[name="botcheck"]', form);
      if (pot && (pot.type === 'checkbox' ? pot.checked : !!pot.value)) return;

      if (!keyReady) {
        showErr(cfg.errNoKey || 'The form is not connected yet.');
        return;
      }

      var data = {};
      new FormData(form).forEach(function (value, key) {
        if (key === 'botcheck') return;
        data[key] = typeof value === 'string' ? value : String(value);
      });

      submit.setAttribute('data-loading', 'true');

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (res) { return res.json().then(function (body) { return { ok: res.ok, body: body }; }); })
        .then(function (res) {
          if (!res.ok || res.body.success === false) throw new Error(res.body && res.body.message);
          try { localStorage.setItem('duodat:lead', '1'); } catch (e) {}
          if (cfg.thanksUrl) {
            window.location.assign(cfg.thanksUrl);
            return;
          }
          form.reset();
          if (okBox) okBox.setAttribute('data-show', 'true');
        })
        .catch(function () {
          showErr(cfg.errSend || 'Something went wrong. Please try again.');
        })
        .then(function () {
          submit.removeAttribute('data-loading');
        });
    });
  }
})();
