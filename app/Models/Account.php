<?php

namespace App\Models;

use App\Enums\Provider\ProviderEnums;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        'provider_name',
        'provider_id',
        'account_name',
        'account_email',
        'account_avatar',
        'user_id',
    ];

    public function User(): BelongsTo
    {

        return $this->belongsTo(User::class);
    }

    protected function casts(): array
    {
        return [
            'provider_name' => ProviderEnums::class,
        ];
    }
}
