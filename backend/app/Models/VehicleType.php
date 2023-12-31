<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleType extends Model
{
    use HasFactory;

    protected $fillable = [
        'vehicle_type',
        'fee',
        'pay_on_departure',
        "is_default_type"
    ];

    public function vehicles () {
        return $this->hasMany(Vehicle::class);
    }

    public function vehicle_entries () {
        return $this->hasMany(VehicleEntry::class);
    }

    public static $RESIDENTE_ID = 1;
    public static $OFICIAL_ID = 2;
    public static $NO_OFICIAL_ID = 3;
}
