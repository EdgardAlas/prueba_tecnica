<?php

namespace App\Http\UseCases;

use App\Models\VehicleType;
use Symfony\Component\HttpFoundation\Response;

class ChangeVehicleTypeUseCase
{

    public function execute(string $plate_number, int $vehicle_type ): void
    {
        $vehicle = new CreateVehicleIfNotExists();
        $vehicle = $vehicle->execute($plate_number);

        $vehicle->vehicle_type_id = $vehicle_type;

        $vehicle->save();
    }
}
