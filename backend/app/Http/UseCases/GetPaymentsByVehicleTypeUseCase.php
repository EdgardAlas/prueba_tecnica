<?php

namespace App\Http\UseCases;


use App\Models\Vehicle;
use App\Models\VehicleEntry;

class GetPaymentsByVehicleTypeUseCase
{

    public function execute(string $vehicle_type, string $filename = "payments"): array
    {
        $registers = Vehicle::query()
            ->with("vehicle_type")
            ->where("vehicle_type_id", $vehicle_type)
            ->where("accumulated_minutes", ">", 0)
            ->get();

        return $registers->map(function ($register) {
            return [
                "plate_number" => $register->plate_number,
                "accumulated_minutes" => $register->accumulated_minutes,
                "payment" => sprintf("$%01.2f", round($register->vehicle_type->fee * $register->accumulated_minutes, 2)),
            ];
        })->toArray();
    }

}
