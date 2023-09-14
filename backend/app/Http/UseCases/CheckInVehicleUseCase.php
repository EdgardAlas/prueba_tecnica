<?php

namespace App\Http\UseCases;

use App\Models\Vehicle;
use App\Models\VehicleEntry;
use App\Models\VehicleType;

class CheckInVehicleUseCase
{
    public function execute(string $plate_number): void
    {

        $vehicle = new CreateVehicleIfNotExists();
        $vehicle = $vehicle->execute($plate_number);

        VehicleEntry::query()->create([
            "vehicle_id" => $vehicle->id,
            'vehicle_type_id' => $vehicle->vehicle_type_id,
            "check_in_time" => now(),
        ]);
    }
}
