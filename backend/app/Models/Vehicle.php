<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        "vehicle_type_id",
    "plate_number",
        "accumulated_minutes",
    ];

    public function vehicle_type () {
        return $this->belongsTo(VehicleType::class);
    }

    public function vehicle_entries () {
        return $this->hasMany(VehicleEntry::class);
    }
}
