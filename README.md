# Apeiron Derby 🏇

A horse-themed "stop the clock at exactly 10.000s" game for the trade stand.
Stop the horse the moment its nose hits the finish line. Built as a single-page
web app with an optional **live, shared leaderboard**.

**Live version:** https://pietoff.github.io/Horse-game/ *(after you enable GitHub Pages — see below)*

---

## What's in here

| File | Purpose |
|---|---|
| `index.html` | The whole game (self-contained). |
| `config.js` | Firebase config for the shared leaderboard. Placeholder = local-only. |
| `firestore.rules` | Security rules for the leaderboard collection. |

The game **always works offline**: if `config.js` isn't filled in (or there's no
internet), each tablet keeps its own leaderboard in local storage. Fill in
`config.js` and it switches to one **shared, live** board across every device —
the header badge shows **Live** vs **Local**.

---

## 1. Put it on GitHub (live updates)

From this folder:

```bash
git init
git add .
git commit -m "Apeiron Derby"
git branch -M main
git remote add origin https://github.com/PietOff/Horse-game.git
git push -u origin main
```

Then turn on hosting: on GitHub go to **Settings → Pages → Build and deployment**,
set **Source = Deploy from a branch**, **Branch = main / (root)**, Save.
Your game is live at **https://pietoff.github.io/Horse-game/** within a minute.

**Every future change** is just: edit → `git commit` → `git push`, and the live
site updates automatically. (Refresh the tablet to pick up the new version.)

---

## 2. Turn on the shared live leaderboard (optional but recommended)

The board updates in real time on every tablet at once. You need a Firebase
project with **Cloud Firestore** enabled (free "Spark" tier is plenty).

**Option A — reuse the existing Apeiron Firebase project (fastest):**
1. In `config.js`, comment out the placeholder block and uncomment the Apeiron block.
2. Add the `derbyScores` rule from `firestore.rules` into the Apeiron project's
   existing rules (copy only the `match /derbyScores/... {}` block — don't replace
   the whole file), then from the `apeiron-web` project run:
   ```bash
   firebase deploy --only firestore:rules
   ```

**Option B — a brand-new free project (keeps the game separate):**
1. Create a project at https://console.firebase.google.com → add a **Web App**.
2. **Build → Firestore Database → Create database** (production mode is fine).
3. Copy that Web App's config values into `config.js`.
4. Put the contents of `firestore.rules` into **Firestore → Rules → Publish**
   (or `firebase deploy --only firestore:rules`).
5. `git commit` + `git push` the updated `config.js`.

That's it — the header badge flips to **Live** and scores sync everywhere.

---

## Running the stand

- Open the live URL on the tablet, then **Add to Home Screen** and launch from
  that icon for a clean fullscreen kiosk (no browser bars).
- Works with touch: tap the big button, or tap anywhere on the track to stop.
- **Easy mode** shows the live clock (for practice). Turn it off for the challenge.
- **Clear leaderboard**: local mode clears that tablet; live mode is cleared from
  the Firebase console (so a stray tap can't wipe everyone's scores).

## Tweaks

- Nose landing on the line: the `NOSE` constant near the top of the script in
  `index.html` (default `0.44`) shifts where the muzzle sits — raise it if the
  nose overshoots, lower it if it stops short.

Made for Apeiron · closest to 10.000s wins.
