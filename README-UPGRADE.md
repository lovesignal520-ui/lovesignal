# LoveSignal V2 upgrade pack

This pack is designed for the GitHub repository `lovesignal520-ui/lovesignal`.

## What has been fixed in `app.js`

- Watchlist local-storage reading is protected against corrupted data.
- Profile name, avatar and bio persist after refresh.
- Upcoming reminders persist on the current device.
- Feedback and show-request forms no longer display a false success message when no receiver is connected.
- The “New Release” tab uses the current year automatically.
- Hero slides are clickable and keyboard accessible.
- External links use safer new-tab behavior.
- Share links use a clipboard fallback and direct show URLs.
- Page title, description, canonical URL and social metadata update for show-detail views.
- Search includes title, category, description, tags, year and status.
- Related shows are selected by category and shared tags.
- Empty watchlist and upcoming-show states are clearer.
- Browser back/forward navigation handles direct show links.
- Privacy wording acknowledges Google Analytics.

## Upload steps

1. Download a backup ZIP of your current GitHub repository.
2. Upload every file and folder in this pack to the repository root. Allow GitHub to replace `index.html`, `app.js` and `style.css`.
3. In `app.js`, find `SITE_CONFIG` near the start of the file.
4. Create two form endpoints using Formspree or another trusted form service and paste their full HTTPS URLs into `feedbackEndpoint` and `showRequestEndpoint`. Until then, the forms correctly say they are not connected.
5. In `dmca.html` and `privacy.html`, add a monitored contact email before applying for advertising. Do not publish an email you do not check.
6. Open `https://lovesignal520-ui.github.io/lovesignal/sitemap.xml` after GitHub Pages redeploys. Then submit that exact URL in Google Search Console.
7. Test on an incognito/private window: search, tabs, details, share link, watchlist, profile, forms, donation link and legal pages.
8. Update the version number in the `style.css?v=3` and `app.js?v=3` URLs when you make later changes, so browsers do not keep stale files.

## Add a show correctly

Use `SHOW-DATA-TEMPLATE.js` and complete `CONTENT-QA-CHECKLIST.md`. Your current dataset needs a manual pass because some displayed episode totals do not match the number of episode links. Also replace non-direct/hotlinked image URLs and large base64 images with optimized files stored in an `images/` folder.

## Add upcoming shows

At present, the `upcomingShows` array is empty. Add only confirmed titles. Give each object at least `id`, `title` and `image`. The reminder button will then save locally.

## Advertising

Do not rename `ads.txt.example` or paste the AdSense snippet until a network has approved the site and given you real publisher/slot values. Read `MONETIZATION-GUIDE.md` first.

## Important limitation

This pack does not publish itself to GitHub. It must be uploaded or committed to your repository. It also does not create Formspree, AdSense or affiliate accounts because those require the site owner’s login and approval.
