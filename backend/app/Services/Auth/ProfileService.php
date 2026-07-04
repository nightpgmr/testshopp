<?php

namespace App\Services\Auth;

use App\Models\User;
use App\Repositories\Contracts\UserRepositoryInterface;

class ProfileService
{
    public function __construct(
        private readonly UserRepositoryInterface $userRepository
    ) {}

    public function update(User $user, array $data): User
    {
        return $this->userRepository->update($user, $data);
    }
}
