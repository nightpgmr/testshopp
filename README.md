# TestShopp — فروشگاه آنلاین

[![Deploy GitHub Pages](https://github.com/Faris/testshopp/actions/workflows/deploy.yml/badge.svg)](https://github.com/Faris/testshopp/actions/workflows/deploy.yml)

یک پروژه E-commerce کامل و production-ready با **Laravel 12** و **Vue.js 3** — مناسب برای پورتفولیو.

> 🎭 **دمو زنده:** [مشاهده دمو استاتیک فارسی RTL](https://faris.github.io/testshopp/) *(پس از deploy)*

---

## Tech Stack

| Backend | Frontend |
|---------|----------|
| Laravel 12, PHP 8.4 | Vue.js 3, Vite |
| MySQL, Sanctum | Vue Router, Pinia |
| Spatie Permission | Tailwind CSS, VueUse |
| Queue, Notifications | Chart.js, Axios |

---

## Project Structure

```
testshopp/
├── backend/          # Laravel 12 REST API
├── frontend/         # Vue 3 SPA
├── documentation/    # Architecture & API docs (markdown)
├── docs/             # GitHub Pages build output (auto-generated)
├── .github/workflows/
└── README.md
```

---

## Phase 1 — Completed ✅

- [x] Architecture & folder structure
- [x] Database design (ER diagram)
- [x] Authentication module (backend API)
- [x] RBAC with Spatie Permission
- [x] Persian RTL static demo (GitHub Pages)
- [x] Home page with hero, products, categories
- [x] Auth UI (login, register, forgot password)
- [x] Dark mode, toast notifications, responsive design

### Pending Modules (awaiting confirmation)

- [ ] Phase 2: Products + Categories + Brands
- [ ] Phase 3: Cart + Wishlist + Checkout
- [ ] Phase 4: Orders + Reviews + Coupons
- [ ] Phase 5: Admin Dashboard + Settings
- [ ] Phase 6: Notifications + Media Manager

---

## Quick Start — Static Demo

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for GitHub Pages

```bash
cd frontend
npm run build:pages
# Output → ../docs/
```

---

## Backend Setup (requires PHP 8.4+)

```bash
cd backend
composer create-project laravel/laravel . "^12.0"
# Copy scaffold files from this repo into the Laravel project
composer require laravel/sanctum spatie/laravel-permission

cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

API base: `http://localhost:8000/api/v1`

### Default Accounts (after seed)

| Role | Email | Password |
|------|-------|----------|
| Super Admin | superadmin@testshopp.ir | password |
| Admin | admin@testshopp.ir | password |

---

## GitHub Pages Deployment

Your site URL: **https://nightpgmr.github.io/testshopp/**

### One-time setup (required!)

1. Open **https://github.com/nightpgmr/testshopp/settings/pages**
2. Under **Build and deployment → Source**, select **GitHub Actions** (not "Deploy from branch → main")
3. Push to `main` — the workflow builds and deploys automatically

> If you see the README instead of the shop, Pages is pointing at the `main` branch. Switch to **GitHub Actions** or set branch to **`gh-pages`** / root.

### Manual build

```bash
cd frontend
npm run build:pages
```

---

## Documentation

- [Architecture](./documentation/ARCHITECTURE.md)
- [Database ER Diagram](./documentation/DATABASE.md)
- [Auth API](./documentation/API_AUTH.md)
- [Backend README](./backend/README.md)

---

## License

MIT — Free for portfolio use.
