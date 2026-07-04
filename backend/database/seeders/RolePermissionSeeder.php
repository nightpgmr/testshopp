<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            'products.view', 'products.create', 'products.update', 'products.delete',
            'categories.view', 'categories.manage',
            'brands.view', 'brands.manage',
            'orders.view', 'orders.update', 'orders.cancel',
            'users.view', 'users.manage',
            'coupons.manage', 'settings.manage',
            'reviews.moderate', 'dashboard.view',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        $superAdmin = Role::firstOrCreate(['name' => 'super-admin', 'guard_name' => 'web']);
        $superAdmin->syncPermissions(Permission::all());

        $admin = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);
        $admin->syncPermissions([
            'products.view', 'products.create', 'products.update',
            'categories.view', 'categories.manage',
            'brands.view', 'brands.manage',
            'orders.view', 'orders.update',
            'users.view', 'coupons.manage', 'reviews.moderate', 'dashboard.view',
        ]);

        Role::firstOrCreate(['name' => 'customer', 'guard_name' => 'web']);
    }
}
