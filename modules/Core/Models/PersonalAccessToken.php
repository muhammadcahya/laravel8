<?php

namespace Modules\Core\Models;

use Laravel\Sanctum\PersonalAccessToken as Model;

class PersonalAccessToken extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'laravel_personal_access_tokens';
}
