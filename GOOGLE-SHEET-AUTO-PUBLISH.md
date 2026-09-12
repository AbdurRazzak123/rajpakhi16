# Google Sheet → Website: automatic static publishing

## How to publish a new news item
1. Add the next news row in the connected Google Sheet.
2. Give it a unique ID (for example `32`).
3. Add the title, full article text and image URL in the existing columns.
4. Save the Sheet.
5. GitHub Actions checks the Sheet every 5 minutes and generates `news/32.html` automatically.
6. The homepage/category cards and latest-news links use the permanent `news/32.html` URL.

## Performance design
- The public website does **not** fetch the Google Sheet in the browser.
- Article pages are pre-generated static HTML files.
- Images are copied into the repository when publicly downloadable, so the article does not depend on a live Google Drive request.
- The generator builds pages in a staging folder and validates them before replacing the live `news/` folder.
- If Google Sheets or Drive temporarily fails, the previous live article pages are kept.
- The workflow retries failed syncs and prevents overlapping sync jobs.

## URL example
`https://abdurrazzak123.github.io/banglanews.2026/news/32.html`
