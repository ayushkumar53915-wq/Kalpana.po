(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---- Contact details from config.js ---- */
  var digits = String(cfg.whatsappNumber || "").replace(/\D/g, "");
  if (digits) {
    var waUrl = "https://wa.me/" + digits;
    if (cfg.whatsappMessage) waUrl += "?text=" + encodeURIComponent(cfg.whatsappMessage);
    $$("[data-whatsapp]").forEach(function (a) { a.href = waUrl; });

    $$("[data-phone-link]").forEach(function (a) { a.href = "tel:+" + digits; });
  }
  if (cfg.phoneDisplay) $$("[data-phone-text]").forEach(function (el) { el.textContent = cfg.phoneDisplay; });
  if (cfg.email) {
    $$("[data-email-link]").forEach(function (a) { a.href = "mailto:" + cfg.email; });
    $$("[data-email-text]").forEach(function (el) { el.textContent = cfg.email; });
  }
  if (cfg.addressLines && cfg.addressLines.length) {
    var addr = $("[data-address]");
    if (addr) {
      addr.textContent = "";
      cfg.addressLines.forEach(function (line, i) {
        if (i) addr.appendChild(document.createElement("br"));
        addr.appendChild(document.createTextNode(line));
      });
    }
  }
  if (typeof cfg.latitude === "number" && typeof cfg.longitude === "number") {
    var pos = cfg.latitude + "," + cfg.longitude;
    $$("[data-map-link]").forEach(function (a) { a.href = "https://www.google.com/maps/search/?api=1&query=" + pos; });
    $$("[data-directions-link]").forEach(function (a) { a.href = "https://www.google.com/maps/dir/?api=1&destination=" + pos; });
  }

  /* ---- Mobile navigation ---- */
  var toggle = $(".nav-toggle");
  var nav = $("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$("a", nav).forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Menu category filter ---- */
  var tabs = $$(".tab");
  var cats = $$(".menu-cat");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var f = tab.getAttribute("data-filter");
      tabs.forEach(function (t) { t.setAttribute("aria-pressed", String(t === tab)); });
      cats.forEach(function (c) { c.hidden = !(f === "all" || c.getAttribute("data-cat") === f); });
    });
  });

  /* ---- Highlight today in the hours table ---- */
  var today = String(new Date().getDay());
  var row = $('.hours tr[data-day="' + today + '"]');
  if (row) row.classList.add("today");

  /* ---- Footer year ---- */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
