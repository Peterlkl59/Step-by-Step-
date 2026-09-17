# Step by Step! V5.1

Fixes: single Past 7 days view (includes today), compact custom range inputs, hardened badge rendering, grey locked/colour unlocked badge book, corrected measurement chart grid, and approved mood PNGs.

# Step by Step! with Saucisse — V4 Draft

This draft consolidates the latest agreed changes.

- Home greeting is **Hello!** in both English and French.
- Tagline: **Step by step, for a healthier you.**
- Add Food opens on **Custom**, with Favourites and Essentials available as tabs.
- Daily charts: weekday above value, then bar, then `DD/MM`.
- Monthly charts: `MMM YY`; calorie/protein bars are average per logged day.
- Monthly calorie/protein charts include a small explanatory info note.
- Weight/waist charts only show dates on which a measurement exists.
- Badge cards are tappable.
- Locked badge modal shows name, unlock requirement and progress.
- Unlocked badge modal congratulates the user and stores an unlock date.
- Badge unlocks are permanent once earned.
- New badge unlocks trigger an in-app celebration.
- 20-badge system retained.
- Existing V2/V3 local data remains on the `nourish-v2` storage key.

Note: Essentials remain a provisional starter list until the curated CoFID values are integrated.

## V4.1 fixes
- Fixed badge tapping on mobile using delegated click/tap handling.
- Locked and unlocked badges now reliably open their detail modal.
- Removed fake `N/A` bars for weight and waist when no measurements exist.
- Added Saucisse measurement empty states instead.
- Increased spacing between chart columns and bottom date labels.

## V4.2 food system
- Essentials now state whether values are per 100g, per 100ml, or per item.
- Built-in starter values are CoFID-backed reference values.
- Essentials open an amount picker before adding.
- Gram/ml foods calculate kcal and protein proportionally to the entered amount.
- Unit foods such as eggs calculate by item quantity.
- Favourites also support amount/quantity before adding.
- Tapping a logged food now opens a full Edit Food sheet.
- Edit Food supports food name, meal, amount, calories, protein, save, and delete.
- Changing the amount recalculates calories/protein proportionally.
- Custom foods remain manual and can be saved as favourites.

Reference values are intended for generic foods; use packaging for branded/prepared foods when available.

## V4.3 badge interaction fix
- Badge taps now use document-level event delegation, which is more reliable on iOS/PWA.
- Badge child elements no longer intercept taps.
- Badge detail modal z-index increased to ensure it appears above navigation/sheets.

## V4.4 chart polish
- Increased the gap between the bottom of every chart bar and its date label.
- Added a subtle chart baseline so labels sit visually below the plotting area.
- Applied the same spacing treatment across calorie, protein, weight and waist charts.
- Keeps the V4.3 badge tap fix.

## V4.5
- Replaced the previous badge modal/tap system with a new standalone popup created directly on tap.
- Each badge button now binds its own click action after rendering.
- Locked badges show unlock requirement and progress.
- Unlocked badges show congratulations and unlock date.
- New badge celebrations use the same robust popup.
- Increased the visual gap below bars to 28px before the date label.
- Moved the chart baseline above the date-label area.

## V4.8
Built from the known-working V4.5 base.

- Badge layout remains as-is but each badge now includes a short description.
- Unlocked badges show a concise achievement description plus `✓ Unlocked`.
- Locked badges show the unlock requirement plus live progress.
- Badge cards no longer rely on tap/pop-up behaviour.
- Weight and waist empty-state mascot/content are centred.
- No chart/baseline line is shown in weight/waist empty states.


## V4.9 Final visual + badge refresh
Built directly from the locked V4.8 working baseline.

- Replaced emoji / Unicode UI icons with the approved PNG asset set.
- Replaced the hero sun emoji with `sun.png`.
- Added the final revised 20-badge system and individual approved Saucisse badge images.
- Removed streak-only achievements and added Full Day Pup, Favourite Find, Quick Pick Pup and Keeping Track.
- Balanced Day now requires calories within ±5% of target plus protein target met.
- Balanced Week requires a complete 7-day logged period with average calories within ±5% and average protein at/above target.
- Badge descriptions and progress counters updated to match the final unlock logic.
- No diary storage key or existing food/exercise/measurement data model changed.


## V5.0 - tested GitHub Pages build
- Approved splash-screen image, app icon and transparent horizontal in-app logo.
- Home: two new gauge bars for net calories and protein. Net calories are green at/below target and red above; protein is red below target and green at/above target.
- Progress: Last 7 days (including today), Previous 7 days (excluding today), Monthly, and Custom date range.
- Progress averages recalculate from the selected period. Monthly calorie/protein bars remain daily averages for each month.
- Weight and waist charts are filtered to the selected period, show only recorded dates and use corrected full-height chart geometry.
- Custom remains the default Add Food tab.
- Existing local-storage key and data model retained; restore normalizes older backups safely.
- Service worker changed to network-first with skipWaiting/clients.claim to reduce stale GitHub Pages caching.
- Boot process always exits the splash screen and shows a visible error card instead of hanging indefinitely if a runtime issue occurs.
