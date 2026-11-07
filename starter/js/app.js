// app.js: the page's behavior.
// Sprint 0 does one thing: the theme toggle flips the mode defined in css/tokens.css.
// Sprint 2 adds the screen switcher and the fork below this.

const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {
  const root = document.documentElement;              // the <html> element
  const isDark = root.dataset.theme === "dark";
  root.dataset.theme = isDark ? "light" : "dark";     // sets data-theme="..." on <html>
  toggle.textContent = isDark ? "Dark" : "Light";     // the button names what it will do next
});
