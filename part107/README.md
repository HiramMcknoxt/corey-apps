# Part 107 Study (Capacitor project)

- **App ID:** `com.coreyspangler.part107` · **Web build:** `www/index.html` (single file, no server; progress in localStorage)
- **Content:** fresh 60-question study bank (12 each: Regulations, Airspace & Charts, Weather, Loading & Performance, Operations) authored from FAA-G-8082-22 topics and labeled in-app as study questions, not real exam items.
- **Features:** 10-question topic/mixed drills with instant feedback + explanations; personal miss bank re-tested until answered correctly; timed 60-question practice exam (2-hour clock, score at the end, per-topic breakdown); home panel with day streak, reps today, per-topic accuracy, and the "two straight practice exams ≥ 85%" booking-gate tracker; 14-day sprint checklist and IACRA-to-insurance checklist, both persistent.
- **Build:** GitHub Actions — see `../.github/workflows/build-part107.yml` (artifact) and `release-all.yml` (Release asset `Part107-Study.ipa`). The `ios/` project is pre-generated; if it's ever deleted, step 1 on any machine with Node is `npm install && npx cap add ios`.
- **Icon:** `icon.png` (1024×1024), already copied into the Xcode project's AppIcon set.
