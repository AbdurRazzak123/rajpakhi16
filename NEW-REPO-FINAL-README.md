# Banglasangbad — New Repository Final Build

এই build-এ `news/ID.html` হলো SEO-friendly Full News page।

- Home/category pages-এর Latest News এবং 6 Card → `news/ID.html`
- `news/ID.html` → Home-style layout + full news
- পুরোনো `news/article.html` সরানো হয়েছে
- Numeric news pages: 30টি
- Generator GitHub repository name থেকে Pages URL নিজে তৈরি করতে পারে।

## New repository
যে কোনো GitHub Pages repository-তে ব্যবহার করা যাবে। GitHub Actions-এ `GITHUB_REPOSITORY` থেকে `https://OWNER.github.io/REPO/` তৈরি হবে। Custom domain/URL হলে repository variable `SITE_BASE_URL` সেট করতে পারো।

## Upload
ZIP খুলে ভেতরের সব ফাইল নতুন repository-এর root-এ upload করো। ZIP ফাইলটাকে নিজে repository-তে upload করে রাখবে না।
