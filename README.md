# TrueStudio — GitHub Pages Demo (Static)

Folder structure:
- index.html (landing)
- about.html, contact.html
- blog/, shop/, ai-chat/, dashboard/
- assets/css/style.css
- assets/js/main.js (theme + small behaviors)
- assets/js/dashboard.js (simulated login)

## How to deploy to GitHub Pages
1. Create repository named `truestudio.github.io` (or any repo)
2. Upload all files, ensure index.html is in repo root
3. In GitHub Settings -> Pages, set branch `main` root to serve
4. (Optional) Add `truestudio.my.id` as custom domain in Pages settings
5. Add DNS records at your domain provider:
   - A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME: www -> truestudio.github.io

## Admin login (simulated)
- Open /dashboard/login.html
- Use demo credentials: admin@truestudio.my.id / 1234
- This is only client-side simulation (no server/database)

