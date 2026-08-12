/* ============================================================================
 * Apeiron Derby — leaderboard backend config
 * ----------------------------------------------------------------------------
 * Fill this in to turn ON the shared, live leaderboard across all tablets.
 * If you leave the placeholder apiKey (or there's no internet), the game
 * automatically uses each tablet's own local storage instead — it always works.
 *
 * TWO OPTIONS:
 *
 *  A) Reuse the existing Apeiron Firebase project (fastest — values below are
 *     already the Apeiron web config). You just need to add the `derbyScores`
 *     rules from firestore.rules to that project and deploy them. See README.
 *
 *  B) Create a brand-new free Firebase project (keeps the game separate from the
 *     production app). Create it at https://console.firebase.google.com, add a
 *     Web App, enable Firestore, then paste that project's config values below.
 * ========================================================================== */

window.APEIRON_DERBY_CONFIG = {
  apiKey: "PASTE_YOUR_WEB_API_KEY",              // <-- replace to enable the live board
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  appId: "your-app-id"
};

/* --- Option A: the Apeiron project (uncomment to use it instead) ------------
window.APEIRON_DERBY_CONFIG = {
  apiKey: "AIzaSyBpPvsPQZafM0M06XVYupSJnU4yZfaGhMA",
  authDomain: "apeiron-web-2026-po.firebaseapp.com",
  projectId: "apeiron-web-2026-po",
  appId: "1:10814263156:web:1d0cac41be0f6fbb132621"
};
--------------------------------------------------------------------------- */
