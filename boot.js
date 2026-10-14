/* Runs before the app: paints the saved look (light or dark, and the theme)
   so a dark-mode phone never flashes white while the app loads. A separate
   file because the site's security policy allows no inline scripts. */
try {
  var saved = JSON.parse(localStorage.getItem("finnest-adhd-life-planner.demo") || "null");
  var st = (saved && saved.settings) || {};
  var dark = st.mode === "dark" || (st.mode !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.dataset.mode = dark ? "dark" : "light";
  if (st.theme) document.documentElement.dataset.theme = st.theme;
} catch (e) {
  /* storage blocked: the app shows its own notice */
}
