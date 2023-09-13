<?php

namespace App\Http\UseCases;

use App\Models\Vehicle;
use App\Models\VehicleType;

class CreateVehicleIfNotExists
{

    public function execute(string $plate_number): Vehicle
    {
        $vehicle = Vehicle::query()->where("plate_number", $plate_number)->first();
        $default_vehicle_type = VehicleType::query()->where("is_default_type", true)->first();

        if ($vehicle === null) {
            $vehicle = new Vehicle();
            $vehicle->plate_number = $plate_number;
            $vehicle->vehicle_type_id = $default_vehicle_type->id;
            $vehicle->save();
        }

        return $vehicle;
    }
}
