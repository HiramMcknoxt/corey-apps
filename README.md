# Corey Apps — sideloadable iOS builds

Three of Corey's apps, packaged as Capacitor projects that build into
**unsigned** `.ipa` files on GitHub's macOS runners. The IPAs are then
installed on Corey's iPhone with **SideStore**, which signs them with his
free Apple ID. No Mac and no $99 developer account required.

**Start here: [SIDELOAD-GUIDE.md](SIDELOAD-GUIDE.md)** — the full
Windows + SideStore walkthrough.

## The apps

| Folder | App | Bundle ID | Release file |
|---|---|---|---|
| `part107/` | Part 107 Study — FAA Part 107 drills, miss bank, practice exams, 14-day sprint | `com.coreyspangler.part107` | `Part107-Study.ipa` |
| `cabot-lore/` | Cabot Lore — The Cabot Lore Repository companion | `org.cabotlore.app` | `Cabot-Lore.ipa` |
| `stoic-opposition/` | The Stoic Opposition — Ledger, Take a Seat, Scorecard, Pipeline, Premise Check | `com.thestoicopposition.app` | `Stoic-Opposition.ipa` |

Each project is a standalone, self-contained web app in its `www/` folder
(no server; all data persists in on-device localStorage) wrapped with
Capacitor. The `ios/` Xcode project is already generated and committed,
with the app's icon installed.

## Getting the .ipa files

- **Releases (the deliverable):** Actions → **"Release all apps"** →
  Run workflow (or push a tag like `v1.0.0`). All three unsigned IPAs are
  attached to a GitHub Release named e.g. "Corey Apps v1.0.0" with
  permanent direct download links that work from an iPhone browser.
- **Per-app artifacts (secondary):** each app also has its own workflow
  (`build-part107.yml`, etc.) that uploads its IPA as a workflow artifact
  on pushes to that app's folder. Artifacts expire and need a GitHub
  login — Releases are the better route.

## The one hard limit to know

A free Apple ID allows only **3 sideloaded apps active at once, and
SideStore itself takes one slot** — so only **2 of these 3 apps** fit
next to SideStore at a time. SIDELOAD-GUIDE.md explains the options
(install the two daily drivers; run the third inside LiveContainer; or a
paid developer account removes the limit entirely).

## Repo visibility

corey-apps can be private — but then release downloads from the phone
require being signed in to GitHub in the phone's browser. Public is
simpler for downloading. The repo contains no secrets either way: the
builds are unsigned and the source is Corey's own apps.

## Updating an app

Edit the app's `www/` files, push, run the Release workflow with a new
tag. Re-install the new IPA in SideStore — your saved data survives as
long as the bundle ID doesn't change.
