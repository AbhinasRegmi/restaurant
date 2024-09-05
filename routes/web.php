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

Route::get('/menu', function () {
    return Inertia::render('menu');
})->name('menu');

Route::get('/menu/{category:string}', function (string $category) {
    return Inertia::render('category', compact('category'));
})->name('menu.category');

Route::get('/product/{productId:int}', function (string $productId) {
    return Inertia::render('product', compact('productId'));
})->name('product');

Route::get('/cart', function () {
    return Inertia::render('cart');
})->name('cart');

Route::get('/order', function () {
    return Inertia::render('order');
})->name('order');