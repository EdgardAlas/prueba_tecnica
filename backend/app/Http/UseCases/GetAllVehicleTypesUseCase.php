<?php

namespace App\Http\UseCases;

use App\Models\VehicleType;

class GetAllVehicleTypesUseCase
{
    public function execute()
    {
        return VehicleType::all([
            'id',
            'vehicle_type',
        ])->map(function ($vehicleType) {
            return [
                'value' => $vehicleType->id,
                'label' => $vehicleType->vehicle_type,
            ];
        });
    }
}

