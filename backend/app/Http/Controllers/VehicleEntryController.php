<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckInVehicleRequest;
use App\Http\Requests\CheckOutVehicleRequest;
use App\Http\Requests\ValidateVehicleTypePayment;
use App\Http\UseCases\CheckInVehicleUseCase;
use App\Http\UseCases\CheckOutVehicleUseCase;
use App\Http\UseCases\GetAllVehicleEntriesUseCase;
use App\Http\UseCases\StartMonthUseCase;
use App\Models\VehicleEntry;
use Illuminate\Http\JsonResponse;

class VehicleEntryController extends Controller
{
    public function index(GetAllVehicleEntriesUseCase $allVehicleEntriesUseCase): JsonResponse {
        $entries = $allVehicleEntriesUseCase->execute();

        return response()->json($entries);
    }

    public function getPayments(ValidateVehicleTypePayment $request) {

        $vehicle_type = $request->route("vehicle_type");

        $registers = VehicleEntry::query()->with("vehicle")->whereHas("vehicle", function ($query) use ($vehicle_type) {
            $query->where("vehicle_type_id", $vehicle_type)->where("accumulated_minutes", ">", 0);
        })->get();


        $report = $registers->map(function ($register) {
            return [
                "plate_number" => $register->vehicle->plate_number,
                "accumulated_minutes" => $register->vehicle->accumulated_minutes,
                "payment" => round($register->vehicle->vehicle_type->fee * $register->vehicle->accumulated_minutes, 2),
            ];
        });

        return response()->json($report);
    }

    public function checkInVehicle (CheckInVehicleRequest $request, CheckInVehicleUseCase $checkInVehicleUseCase): JsonResponse {
        $plate_number = $request->get("plate_number");

        $checkInVehicleUseCase->execute($plate_number);

        return response()->json([
            "message" => "Vehicle with plate number {$plate_number} has been checked in."
        ]);
    }

    public function checkOutVehicle(CheckOutVehicleRequest $request, CheckOutVehicleUseCase $checkOutVehicleUseCase): JsonResponse {

       $plate_number = $request->route("plate_number");
       $response = $checkOutVehicleUseCase->execute($plate_number);
       return response()->json($response);
    }

    public function startMonth(StartMonthUseCase $startMonthUseCase): JsonResponse {

        $startMonthUseCase->execute();

        return response()->json([
            "message" => "Month has been started."
        ]);
    }
}
