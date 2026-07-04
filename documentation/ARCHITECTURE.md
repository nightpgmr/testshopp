# Architecture Overview

## System Design

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Pages (Static Demo)               │
│              frontend build → docs/ (Persian RTL)            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ (Production)
┌─────────────────────────────────────────────────────────────┐
│                    Vue 3 SPA (frontend/)                     │
│  Vue Router │ Pinia │ Axios │ Tailwind │ VueUse │ Chart.js  │
└─────────────────────────────────────────────────────────────┘
                              │ REST API /api/v1/
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Laravel 12 API (backend/)                  │
│  Sanctum │ Spatie Permission │ Queue │ Notifications        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         MySQL 8.x                            │
└─────────────────────────────────────────────────────────────┘
```

## Clean Architecture Layers (Backend)

```
Request → Route → Middleware → Controller → FormRequest
                                    ↓
                              Service Layer
                                    ↓
                           Repository Interface
                                    ↓
                           Repository (Eloquent)
                                    ↓
                                 Model
                                    ↓
                              Resource (JSON)
```

## Module Roadmap

| Phase | Module | Status |
|-------|--------|--------|
| 1 | Architecture + Auth | ✅ Current |
| 2 | Products + Categories + Brands | Pending |
| 3 | Cart + Wishlist + Checkout | Pending |
| 4 | Orders + Reviews + Coupons | Pending |
| 5 | Admin Dashboard + Settings | Pending |
| 6 | Notifications + Media Manager | Pending |

See full doc in repository.
