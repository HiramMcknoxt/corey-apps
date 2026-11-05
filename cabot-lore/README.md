# Cabot Lore (Capacitor project)

- **App ID:** `org.cabotlore.app` · **Web build:** `www/index.html` + `www/assets/photos/` (single page, no server; data in localStorage)
- **Content:** snapshot of The Cabot Lore Repository corpus as of Nov 4, 2026 — all 18 topic stories condensed from the live site (cabotlore.org) with links to the full sourced write-ups; a timeline; the mayors roster **with the 1979–c.1995 gap labeled as a gap**; a 20-photo gallery subset of the Encyclopedia of Arkansas photographs with captions and credits exactly as published (full 110-photo gallery stays on the website).
- **Features:** story search; My Shelf (save stories, mark read, research notes); Ask queue — questions get a draft answer generated on-device from the story texts, always stamped **DRAFT ANSWER — NOT YET APPROVED** until Corey approves it, per his standing rule; Contribute review queue for memories/photos/oral-history leads. Nothing in the app publishes anything.
- **Build:** GitHub Actions — see `../.github/workflows/build-cabot-lore.yml` (artifact) and `release-all.yml` (Release asset `Cabot-Lore.ipa`). The `ios/` project is pre-generated; if it's ever deleted, step 1 on any machine with Node is `npm install && npx cap add ios`.
- **Icon:** `icon.png` (1024×1024, burgundy "CL" bookplate), already copied into the Xcode project's AppIcon set.
- **Note:** story content is a build-time snapshot; it refreshes when the app is rebuilt after a new approved corpus batch lands on the public site.
