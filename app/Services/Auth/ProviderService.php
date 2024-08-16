<?php

namespace App\Services\Auth;

use App\Enums\Provider\ProviderEnums;
use App\Models\Account;
use App\Models\User as ModelUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Contracts\User;

class ProviderService
{
    public static function RegisterOrLoginProviderUser(User $user, ProviderEnums $provider)
    {
        // Handle cases like transaction failure properly.
        $account = Account::where(
            'account_email',
            $user->getEmail()
        )->first();

        if (! $account) {
            DB::transaction(

                function () use ($user, $provider) {
                    $newUser = ModelUser::create(
                        [
                            'name' => $user->getName(),
                            'email' => $user->getEmail(),
                        ]
                    );

                    $newUser->account()->create(
                        [
                            'provider_name' => $provider->value,
                            'provider_id' => $user->getId(),
                            'account_name' => $user->getName(),
                            'account_email' => $user->getEmail(),
                            'account_avatar' => $user->getAvatar(),

                        ]
                    );

                }
            );
        }

        $loginUser = ModelUser::where(
            'email', $user->getEmail()
        )->first();

        Auth::login($loginUser);
    }
}
