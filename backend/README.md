# TestShopp Backend API

Laravel 12 REST API for the TestShopp e-commerce platform.

## Requirements

- PHP 8.4+
- Composer 2.x
- MySQL 8.x
- Redis (optional, recommended for cache/queue)

## Installation

```bash
# From project root
cd backend

# Install Laravel (if starting fresh)
composer create-project laravel/laravel . "^12.0"

# Or install dependencies if scaffold exists
composer install

cp .env.example .env
php artisan key:generate

# Configure database in .env, then:
php artisan migrate --seed
php artisan storage:link
php artisan serve
```

## API Base URL

```
http://localhost:8000/api/v1
```

## Authentication (Sanctum)

### Register
`POST /api/v1/auth/register`

### Login
`POST /api/v1/auth/login`

### Logout
`POST /api/v1/auth/logout` (Bearer token required)

### Profile
`GET /api/v1/auth/profile`
`PUT /api/v1/auth/profile`

See [docs/API_AUTH.md](../docs/API_AUTH.md) for full documentation.

## Folder Structure

```
app/
├── Http/
│   ├── Controllers/Api/V1/
│   ├── Middleware/
│   ├── Requests/
│   └── Resources/
├── Models/
├── Policies/
├── Repositories/
│   ├── Contracts/
│   └── Eloquent/
├── Services/
└── Notifications/
config/
database/
├── migrations/
├── factories/
└── seeders/
routes/
└── api.php
```
