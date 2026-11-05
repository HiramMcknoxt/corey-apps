# Sideload Guide — Corey's Apps on His iPhone (Windows PC, no Mac)

**The one thing to understand first:** iOS is not Android. There is no
"download the file like an APK" — Apple requires every app on your phone
to be *signed* with a certificate tied to an Apple ID and your specific
device, or it won't open. That's why this works the way it does:

- GitHub builds your three apps and gives you **unsigned** `.ipa` files.
- **SideStore**, an app on your iPhone, signs them with **your own free
  Apple ID** right on the phone and installs them.
- The signing is done by Muse's Linux machine **never** — it can't be.
  The signing step is yours, it happens inside SideStore, and after the
  one-time setup below it takes about a minute per app.

Everything runs on your Windows PC. No Mac, no $99 developer account.

---

## ⚠️ Read this before you start: the 3-app limit (the honest math)

A free Apple ID can have only **3 sideloaded apps active at once** — and
**SideStore itself counts as one of the three.** This is Apple's rule,
verified against SideStore's current documentation; AltStore has the
exact same limit. So, plainly:

> **Only 2 of your 3 apps fit on the phone next to SideStore at a time.**

Recommended setup:

1. **Part 107 Study** — the daily driver while you're studying.
2. **The Stoic Opposition** — the command center (Ledger, Take a Seat,
   Scorecard, Pipeline).
3. **Cabot Lore** — rotate it in when you want it (delete one of the
   others from SideStore's list first — your saved data in the deleted
   app is lost, so export notes first), **or** use the workaround below.

**Workaround that fits all three: LiveContainer.** It's a free app that
runs other apps *inside itself*, so apps inside it don't count toward
the 3-app limit. Install LiveContainer through SideStore, then open the
third app (say, Cabot Lore) inside LiveContainer instead of installing
it directly. Slightly less native, totally workable.

**Permanent fix:** a paid Apple Developer account ($99/year) removes
the 3-app limit and stretches signing from 7 days to a full year. Not
needed now — just know it's the only way the limit truly goes away.

Two more free-account facts: free signing **expires after 7 days**
(SideStore auto-refreshes over Wi-Fi so you never notice — see Step 3),
and a free account can register at most **10 new app IDs per week**
(you need 3 — no problem unless you're installing lots of other
sideloaded apps the same week).

---

## Step 0 — Get the .ipa files from GitHub Releases

The repo is **corey-apps** under your GitHub account (**HiramMcknoxt**).

1. On your iPhone (Safari) or your PC, open the repo's **Releases** page.
2. Open the latest release (e.g. **"Corey Apps v1.0.0"**).
3. Download the three files:
   - `Part107-Study.ipa`
   - `Cabot-Lore.ipa`
   - `Stoic-Opposition.ipa`
4. On the iPhone they land in the **Files** app (Downloads folder) —
   that's where SideStore will pick them from. On the PC, you can also
   download them there and AirDrop/USB them over later, but straight to
   the phone is simpler.

**Public or private repo?** Either works, but know the tradeoff:
release files in a **private** repo require you to be signed in to
GitHub in the phone's browser to download. A **public** repo makes
downloading one tap simpler. The repo contains no secrets either way —
the builds are unsigned and the source is your own apps.

*If a release doesn't exist yet:* someone (you or Muse) needs to run
the build once — repo → **Actions** → **"Release all apps"** → **Run
workflow** → tag `v1.0.0`. GitHub's Macs build all three apps in a few
minutes and attach the IPAs to the release automatically.

## Step 1 — One-time SideStore setup on the Windows PC (~15 minutes)

Do this once. After it, the PC is out of the loop.

1. **On the iPhone:** Settings → Privacy & Security → **Developer Mode**
   → turn it ON (the phone will restart). Required since iOS 16.
2. **On the Windows PC:** install **iTunes** and **iCloud for Windows**
   from **Apple's website (apple.com)** — *not* the Microsoft Store
   versions. SideStore's installer needs Apple's own drivers; the Store
   versions don't include them. (You don't have to use or even open
   iTunes/iCloud afterward — this is just for the drivers.)
3. **Install SideStore using its official Windows path** — follow the
   "Get Started / Install" guide at **sidestore.io** for the current
   steps. In outline, you'll either:
   - use **AltServer** (from altstore.io) on the PC to install the
     SideStore app onto the phone over USB/Wi-Fi, then sign in to
     SideStore with your Apple ID; **or**
   - use SideStore's documented **pairing-file** method (a small utility
     generates a pairing file while the phone is plugged in, you copy
     it into SideStore), which is what makes on-device refreshing work.
   Either way: plug the phone into the PC with a cable for this step,
   and when the phone asks, tap **Trust** this computer.
4. **Trust the certificate:** after SideStore is installed, go to
   iPhone Settings → General → **VPN & Device Management** → your Apple
   ID → **Trust**. SideStore should now open.

Use your real Apple ID or a spare one — the signing certificate is tied
to whichever account you sign in with. A spare/burner Apple ID is fine
and keeps your main account out of it.

## Step 2 — Install the apps in SideStore

For each `.ipa` (remember: pick **two** for direct install — see the
limit box above; the third goes in LiveContainer or waits):

1. Open **SideStore** → **My Apps** tab → tap **+** (top left).
2. Pick the `.ipa` from the Files app (e.g. `Part107-Study.ipa`).
3. SideStore signs it with your Apple ID and installs it. ~1 minute.
4. Repeat for the second app.
5. The apps appear on your home screen like any other app. Open them —
   all data (study progress, ledger entries, shelf, notes) is stored
   on the phone and survives refreshes and updates, as long as you
   don't fully delete the app.

## Step 3 — Turn on auto-refresh so the 7-day expiry never bites

Free-Apple-ID signatures die after 7 days. SideStore's whole job is to
refresh them before that happens:

1. In SideStore's settings, enable **background/Wi-Fi refresh**
   (SideStore uses its local VPN — LocalDevVPN — to refresh on-device;
   allow the VPN profile when it asks).
2. Leave SideStore installed (it has to exist to do the refreshing —
   that's the slot it occupies).
3. If an app ever shows as expired, open SideStore → **Refresh All**
   while on Wi-Fi. Your data is untouched by a refresh.

## Fallback route — AltStore on Windows

If SideStore fights you, AltStore is the older, same-idea tool:

1. Install **AltServer** on the PC from altstore.io (+ iTunes/iCloud
   from Apple's site, same driver note as above).
2. Install AltStore onto the phone from AltServer, sign in with your
   Apple ID, trust the certificate (same Settings path).
3. In AltStore: **Browse/My Apps → +** → pick the `.ipa` files.
4. **Difference that matters:** AltStore refreshes over your home Wi-Fi
   and needs the PC **on, with AltServer running**, on the same
   network. SideStore doesn't — that's why it's the recommendation.
5. Same 3-app limit (AltStore counts as one), same 7-day expiry.

## If you ever get Mac access — the Xcode route

Not needed, just for completeness: open `<app>/ios/App/App.xcworkspace`
in Xcode, plug in the iPhone, choose your "Personal Team" (your Apple
ID) as the signing team, and Run. Free provisioning expires after
**7 days**; re-sign by opening the project and running it again. This
route has the same 3-app free limit.

## What's in each app

| App file | What it is | Project path |
|---|---|---|
| `Part107-Study.ipa` | Part 107 Study: 60-question study bank (FAA-G-8082-22 topics), 10-question drills with instant explanations, miss bank, timed 60-question practice exams, streak/accuracy home panel, "two straight ≥85%" booking gate, 14-day sprint + IACRA→insurance checklists | `part107/` |
| `Cabot-Lore.ipa` | Cabot Lore: 18 Repository topic stories (condensed, linked to full write-ups at cabotlore.org), timeline, mayors roster (1979–c.1995 gap labeled), 20-photo Encyclopedia of Arkansas gallery with credits, search, My Shelf, Ask queue with draft answers labeled NOT YET APPROVED, Contribute review queue | `cabot-lore/` |
| `Stoic-Opposition.ipa` | Stoic Opposition: manifesto + Four Pillars, Plebeian Reclamation playbook, §601.4 as a labeled summary (never the adopted text), Living Ledger (seeded with §601.4, Ordinance 21, Ordinance 33, Plebocracy amendment), Take a Seat quorum calculator + committee tracker (Lonoke County pre-loaded), Anti-Politician Scorecard, content Pipeline, Premise Check + 32-fallacy catalog | `stoic-opposition/` |

## Troubleshooting quick hits

- **"Maximum number of apps reached"** — you're at 3 active apps
  (including SideStore). Remove one in SideStore, or use LiveContainer.
- **"Maximum App ID limit has been reached"** — 10 new app IDs per
  week on a free account. Wait for the week to roll over, or use a
  different Apple ID in SideStore.
- **App won't open / "developer not trusted"** — Settings → General →
  VPN & Device Management → trust your Apple ID's certificate; check
  Developer Mode is still on.
- **Refresh keeps failing** — get on Wi-Fi, open SideStore, tap
  Refresh All. If it still fails, re-run the one-time pairing step
  from the SideStore guide with the phone plugged into the PC.
- **Updated an app?** Download the new release's IPA and install it
  over the old one in SideStore — same bundle ID means your data
  carries over.
