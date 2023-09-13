<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleEntry extends Model
{
    use HasFactory;

    protected $fillable = [
        'vehicle_id',
        'check_in_time',
        'check_out_time',
    ];

    public function vehicle () {
        return $this->belongsTo(Vehicle::class);
    }

}
