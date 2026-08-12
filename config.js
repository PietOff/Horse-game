/* ============================================================================
 * Apeiron Derby — leaderboard backend config
 * ----------------------------------------------------------------------------
 * These values point the shared "Cloud" leaderboard at the Apeiron Firebase
 * project. Firebase web keys are NOT secret (they ship in every web app); the
 * board is protected by Firestore rules that only expose the `derbyScores`
 * collection. See firestore.rules.
 *
 * ADMIN_PIN unlocks the in-app delete / clear controls on the board. Note: the
 * cloud board's delete is a convenience gate, not hard security (it's a public
 * arcade board) — change the PIN, and don't rely on it to protect real data.
 * ========================================================================== */

window.APEIRON_DERBY_CONFIG = {
  apiKey: "AIzaSyBpPvsPQZafM0M06XVYupSJnU4yZfaGhMA",
  authDomain: "apeiron-web-2026-po.firebaseapp.com",
  projectId: "apeiron-web-2026-po",
  appId: "1:10814263156:web:1d0cac41be0f6fbb132621"
};

window.APEIRON_DERBY_ADMIN_PIN = "2610";   // <-- change this to your own PIN
