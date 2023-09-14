<?php
namespace App\Http\UseCases;

use App\Models\VehicleType;

class GetAllVehicleTypesPaymentUsecase
{
    public function execute()
    {
        return VehicleType::query()->where(
            "fee", ">", 0
        )->where("pay_on_departure", false)->get()->map(function ($vehicle_type) {
            return [
                "label" => $vehicle_type->vehicle_type,
                "value" => $vehicle_type->id,
            ];
        });
    }
}
