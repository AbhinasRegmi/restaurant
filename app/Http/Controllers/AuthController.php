<?php

namespace App\Http\Controllers;

use App\Enums\Provider\ProviderEnums;
use App\Services\Auth\ProviderService;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function githubLogin()
    {
        return Socialite::driver(ProviderEnums::GITHUB->value)->redirect();
    }

    public function githubCallback()
    {
        $githubUser = Socialite::driver(ProviderEnums::GITHUB->value)->user();
        ProviderService::RegisterOrLoginProviderUser($githubUser, ProviderEnums::GITHUB);

        return redirect()->route(config('auth.defaults.login_redirect'));
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->route(config('auth.defaults.login_redirect'));
    }
}
