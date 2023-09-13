<?php

namespace App\Http\UseCases;

use App\Models\VehicleType;
use Symfony\Component\HttpFoundation\Response;

class AddOficialVehicleUseCase
{

    public function execute(string $plate_number ): void
    {
        $vehicle = new CreateVehicleIfNotExists();
        $vehicle = $vehicle->execute($plate_number);

        if($vehicle->vehicle_type_id == VehicleType::$OFICIAL_ID){
            abort(Response::HTTP_CONFLICT, "This vehicle is already oficial");
        }

        $vehicle->vehicle_type_id = VehicleType::$OFICIAL_ID;

        $vehicle->save();
    }
}
