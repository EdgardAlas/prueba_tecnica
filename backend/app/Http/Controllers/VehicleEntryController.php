<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckInVehicleRequest;
use App\Http\Requests\CheckOutVehicleRequest;
use App\Http\UseCases\CheckInVehicleUseCase;
use App\Http\UseCases\CheckOutVehicleUseCase;
use Illuminate\Http\JsonResponse;

class VehicleEntryController extends Controller
{

    public function pong (): JsonResponse {
        return response()->json([
            "message" => "pong"
        ]);
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
}
