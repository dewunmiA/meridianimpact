/* =========================================================================
   Meridian Impact Group — script.js
   Single job: the mobile navigation toggle. No dependencies.
   ========================================================================= */

(function () {
  "use strict";

  var toggle = document.querySelector(".s-nav-toggle");
  var menu = document.getElementById("primary-menu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  // Toggle on hamburger click
  toggle.addEventListener("click", function () {
    setOpen(!isOpen());
  });

  // Close after tapping any link in the panel
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  // Close on Escape, return focus to the toggle
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset state when resizing up to the desktop layout
  var mql = window.matchMedia("(min-width: 881px)");
  function onChange(e) {
    if (e.matches) setOpen(false);
  }
  if (mql.addEventListener) {
    mql.addEventListener("change", onChange);
  } else if (mql.addListener) {
    mql.addListener(onChange); // older Safari
  }
})();
