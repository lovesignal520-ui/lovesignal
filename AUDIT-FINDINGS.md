# Current LoveSignal audit findings — August 5, 2026

## High priority

1. Feedback and show-request forms currently show a success toast but do not send data anywhere.
2. Profile changes currently disappear after refresh.
3. Reminder buttons currently do not identify or persist an upcoming show.
4. The “New Release” filter is hard-coded to 2026.
5. The Privacy modal says there is no third-party tracking, while Google Analytics is loaded in `index.html`.
6. The repository has no crawl-control, sitemap, manifest, static legal pages or original guide pages.

## Content quality

- `allShows` is hard-coded inside a large JavaScript file and `data.json` is empty.
- Several `episodesCount` values do not match the number of episode URLs.
- Some artwork uses third-party hotlinks that may fail.
- Some hero images are stored as very large base64 strings, increasing JavaScript download size.
- Upcoming content is represented by generic placeholder cards although the upcoming data array is empty.

## SEO architecture

The app can create `?show=` URLs in the browser, but show details are rendered only with JavaScript. This may limit how reliably individual show content is indexed and shared. The included static guide/legal pages provide crawlable content now; a later V3 can create one static HTML page per show.

## Monetization readiness

The site should not apply for display advertising until original content, accurate navigation, legal/contact details and content QA are stronger. Donations can remain active, and affiliate links can be added only to official/licensed platforms with clear disclosure.
