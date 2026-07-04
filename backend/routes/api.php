<?php

use App\Http\Controllers\Api\V1\Auth\AuthController;
use App\Http\Controllers\Api\V1\Auth\EmailVerificationController;
use App\Http\Controllers\Api\V1\Auth\PasswordController;
use App\Http\Controllers\Api\V1\Auth\ProfileController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {

    Route::prefix('auth')->group(function () {

        Route::post('register', [AuthController::class, 'register'])
            ->middleware('throttle:3,1');

        Route::post('login', [AuthController::class, 'login'])
            ->middleware('throttle:5,1');

        Route::post('forgot-password', [PasswordController::class, 'forgot'])
            ->middleware('throttle:3,1');

        Route::post('reset-password', [PasswordController::class, 'reset']);

        Route::middleware('auth:sanctum')->group(function () {
            Route::post('logout', [AuthController::class, 'logout']);
            Route::get('profile', [ProfileController::class, 'show']);
            Route::put('profile', [ProfileController::class, 'update']);
            Route::put('change-password', [PasswordController::class, 'change']);

            Route::post('email/resend', [EmailVerificationController::class, 'resend'])
                ->middleware('throttle:3,1');
        });

        Route::get('email/verify/{id}/{hash}', [EmailVerificationController::class, 'verify'])
            ->middleware(['signed', 'throttle:6,1'])
            ->name('verification.verify');
    });
});
