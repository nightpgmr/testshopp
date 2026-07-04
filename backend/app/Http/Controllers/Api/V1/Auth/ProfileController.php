<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\UpdateProfileRequest;
use App\Http\Resources\UserResource;
use App\Services\Auth\ProfileService;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    use ApiResponse;

    public function __construct(
        private readonly ProfileService $profileService
    ) {}

    public function show(Request $request): JsonResponse
    {
        return $this->success(
            new UserResource($request->user()->load('roles')),
            'Profile retrieved'
        );
    }

    public function update(UpdateProfileRequest $request): JsonResponse
    {
        $user = $this->profileService->update($request->user(), $request->validated());

        return $this->success(
            new UserResource($user),
            'Profile updated successfully'
        );
    }
}
