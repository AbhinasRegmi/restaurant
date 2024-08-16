<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/auth/redirect/github', [AuthController::class, 'githubLogin']);
Route::get('/auth/callback-url/github', [AuthController::class, 'githubCallback']);
Route::get('/auth/logout', [AuthController::class, 'logout']);

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');
