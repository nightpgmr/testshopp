<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ChangePasswordRequest;
use App\Http\Requests\Auth\ForgotPasswordRequest;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Services\Auth\PasswordService;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PasswordController extends Controller
{
    use ApiResponse;

    public function __construct(
        private readonly PasswordService $passwordService
    ) {}

    public function forgot(ForgotPasswordRequest $request): JsonResponse
    {
        $this->passwordService->sendResetLink($request->validated('email'));

        return $this->success(null, 'Password reset link sent to your email');
    }

    public function reset(ResetPasswordRequest $request): JsonResponse
    {
        $this->passwordService->reset($request->validated());

        return $this->success(null, 'Password reset successfully');
    }

    public function change(ChangePasswordRequest $request): JsonResponse
    {
        $this->passwordService->change(
            $request->user(),
            $request->validated('current_password'),
            $request->validated('password')
        );

        return $this->success(null, 'Password changed successfully');
    }
}
