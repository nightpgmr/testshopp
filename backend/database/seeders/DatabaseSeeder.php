<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RolePermissionSeeder::class,
        ]);

        $superAdmin = User::create([
            'name' => 'مدیر ارشد',
            'email' => 'superadmin@testshopp.ir',
            'phone' => '09120000001',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'is_active' => true,
        ]);
        $superAdmin->assignRole('super-admin');

        $admin = User::create([
            'name' => 'مدیر فروشگاه',
            'email' => 'admin@testshopp.ir',
            'phone' => '09120000002',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'is_active' => true,
        ]);
        $admin->assignRole('admin');

        User::factory(50)->create()->each(fn (User $user) => $user->assignRole('customer'));
    }
}
