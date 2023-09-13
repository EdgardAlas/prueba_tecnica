<?php

namespace App\Http\UseCases;

use App\Models\VehicleType;
use Symfony\Component\HttpFoundation\Response;

class AddResidentialVehicleUseCase
{

    public function execute(string $plate_number ): void
    {
        $vehicle = new CreateVehicleIfNotExists();
        $vehicle = $vehicle->execute($plate_number);

        if($vehicle->vehicle_type_id == VehicleType::$RESIDENTE_ID){
            abort(Response::HTTP_CONFLICT, "This vehicle is already a residential vehicle");
        }

        $vehicle->vehicle_type_id = VehicleType::$RESIDENTE_ID;

        $vehicle->save();
    }
}
