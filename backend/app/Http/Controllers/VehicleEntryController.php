<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckInVehicleRequest;
use App\Http\Requests\CheckOutVehicleRequest;
use App\Http\Requests\ValidateVehicleTypePayment;
use App\Http\UseCases\CheckInVehicleUseCase;
use App\Http\UseCases\CheckOutVehicleUseCase;
use App\Http\UseCases\GetAllOficialEntriesUseCase;
use App\Http\UseCases\GetAllVehicleEntriesUseCase;
use App\Http\UseCases\GetAllVehicleTypesPaymentUsecase;
use App\Http\UseCases\GetAllVehicleTypesUseCase;
use App\Http\UseCases\GetPaymentsByVehicleTypeUseCase;
use App\Http\UseCases\StartMonthUseCase;
use App\Models\VehicleEntry;
use App\Models\VehicleType;
use Illuminate\Http\JsonResponse;

class VehicleEntryController extends Controller
{
    public function index(GetAllVehicleEntriesUseCase $allVehicleEntriesUseCase): JsonResponse {
        $entries = $allVehicleEntriesUseCase->execute();

        return response()->json($entries);
    }

    public function getVehiclesToSelect(GetAllVehicleTypesUseCase $getAllVehicleTypesUseCase): JsonResponse {
        $vehicle_types = $getAllVehicleTypesUseCase->execute();

        return response()->json($vehicle_types);
    }

    public function getVehicleTypeForPaymentSelect(GetAllVehicleTypesPaymentUsecase $getPaymentsByVehicleTypeUseCase): JsonResponse {
        $payments = $getPaymentsByVehicleTypeUseCase->execute();

        return response()->json($payments);
    }

    public function getOficialVehicleEntries(GetAllOficialEntriesUseCase $allOficialEntriesUseCase): JsonResponse {
        $entries = $allOficialEntriesUseCase->execute();

        return response()->json($entries);
    }

    public function getPayments(ValidateVehicleTypePayment $request, GetPaymentsByVehicleTypeUseCase $getPaymentsByVehicleTypeUseCase): \Illuminate\Http\Response
    {

        $vehicle_type = $request->route("vehicle_type");
        $filename = $request->query("filename", "payments");

        $report = $getPaymentsByVehicleTypeUseCase->execute($vehicle_type, $filename);

        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView("payments", [
            "payments" => $report,
        ]);

        return $pdf->download("{$filename}.pdf");
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
