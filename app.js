// FastPress Labs agency — nav, form. Zero dependencies.
(function () {
  'use strict';

  // ----- year in footer (not used, footer is static; kept for future) -----
  // ----- mobile menu -----
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.hasAttribute('data-open');
      if (open) { menu.removeAttribute('data-open'); }
      else { menu.setAttribute('data-open', ''); }
      btn.setAttribute('aria-expanded', String(!open));
      btn.textContent = open ? 'Menu' : 'Close';
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.hasAttribute('data-open')) {
        menu.removeAttribute('data-open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu';
      }
    });
    document.addEventListener('click', function (e) {
      if (menu.hasAttribute('data-open') && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.removeAttribute('data-open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu';
      }
    });
  }

  // ----- contact form (FormSubmit AJAX) -----
  var form = document.querySelector('.lead-form');
  if (!form) return;
  var status = form.querySelector('.form-status');
  var submit = form.querySelector('button[type="submit"]');

  function show(msg, ok) {
    if (!status) return;
    status.textContent = msg;
    status.classList.toggle('ok', !!ok);
    status.classList.toggle('err', !ok);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var honey = form.querySelector('input[name="_honey"]');
    if (honey && honey.value) return; // silent drop — bot filler

    var email = (form.querySelector('#f-email') || {}).value || '';
    var message = (form.querySelector('#f-msg') || {}).value || '';
    email = String(email).trim(); message = String(message).trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { show('Please enter a valid email address.', false); return; }
    if (message.length < 10) { show('Tell us a bit more — at least 10 characters.', false); return; }

    var page = form.getAttribute('data-page') || 'agency';
    var payload = {
      email: email,
      message: message,
      request_type: 'AI agency enquiry',
      page: page,
      date: new Date().toISOString(),
      _subject: '[FastPress Labs] Agency enquiry',
      _template: 'table',
      _captcha: 'false'
    };

    if (location.protocol === 'file:') {
      show('Open this page over http(s) to send the form — or email meetcode99@gmail.com directly.', false);
      return;
    }

    if (submit) { submit.disabled = true; submit.textContent = 'Sending…'; }
    show('Sending…', true);

    fetch('https://formsubmit.co/ajax/meetcode99@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      return r.json().then(function (j) { return { ok: r.ok, j: j }; });
    }).then(function (res) {
      if (res.ok && String(res.j.success) === 'true') {
        show('Got it — we reply within one business day. Check your inbox for the confirmation.', true);
        form.reset();
      } else {
        show('Sending failed. Email us directly: meetcode99@gmail.com', false);
      }
    }).catch(function () {
      show('Network problem. Email us directly: meetcode99@gmail.com', false);
    }).finally(function () {
      if (submit) { submit.disabled = false; submit.textContent = 'Send enquiry'; }
    });
  });
})();
