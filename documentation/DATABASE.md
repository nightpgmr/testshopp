# Database Design

## ER Diagram

```mermaid
erDiagram
    users ||--o{ orders : places
    users ||--o{ addresses : has
    users ||--o{ reviews : writes
    users ||--o{ wishlists : has
    users ||--o{ carts : has

    roles ||--o{ model_has_roles : assigned
    permissions ||--o{ model_has_permissions : assigned
    roles ||--o{ role_has_permissions : has

    categories ||--o{ categories : parent
    categories ||--o{ products : contains

    brands ||--o{ products : owns

    products ||--o{ product_images : has
    products ||--o{ product_variants : has
    products ||--o{ product_tags : tagged
    products ||--o{ reviews : receives
    products ||--o{ cart_items : in
    products ||--o{ order_items : in
    products ||--o{ wishlist_items : in

    tags ||--o{ product_tags : used

    orders ||--o{ order_items : contains
    orders ||--o{ order_status_histories : tracks
    orders }o--|| addresses : billing
    orders }o--|| addresses : shipping

    coupons ||--o{ orders : applied

    carts ||--o{ cart_items : contains
    wishlists ||--o{ wishlist_items : contains
```

## Roles (Spatie Permission)

| Role | Description |
|------|-------------|
| super-admin | Full system access |
| admin | Manage products, orders, customers |
| customer | Default for registered users |

## Migrations

All migrations are in `backend/database/migrations/`:

1. `0001_01_01_000000_create_users_table.php` — Users + Sanctum tokens
2. `0001_01_01_000001_create_catalog_tables.php` — Products, categories, brands
3. `0001_01_01_000002_create_commerce_tables.php` — Orders, cart, reviews, settings

Run Spatie Permission migration after install:
```bash
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
php artisan migrate
```
