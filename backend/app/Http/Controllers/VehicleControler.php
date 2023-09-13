<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidatePlateNumberBody;
use App\Http\UseCases\AddOficialVehicleUseCase;
use App\Http\UseCases\AddResidentialVehicleUseCase;
use App\Http\UseCases\GetAllVehiclesUseCase;
use Illuminate\Http\JsonResponse;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class VehicleControler extends Controller
{
    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function getAllVehicles(GetAllVehiclesUseCase $getAllVehiclesUseCase): JsonResponse
    {
        $vehicle_type  = request()->get("vehicle_type");
        $vehicles =  $getAllVehiclesUseCase->execute($vehicle_type);
        return response()->json($vehicles);
    }

    public function addVehicleToOficial(AddOficialVehicleUseCase $addOficialVehicleUseCase, ValidatePlateNumberBody $request): JsonResponse
    {
        $plate_number = $request->get("plate_number");

        $addOficialVehicleUseCase->execute($plate_number);

        return response()->json([
            "message" => "Vehicle added to oficial"
        ]);
    }

    public function addVehicleToResidential(AddResidentialVehicleUseCase $addResidentialVehicleUseCase, ValidatePlateNumberBody $request): JsonResponse
    {
        $plate_number = $request->get("plate_number");

        $addResidentialVehicleUseCase->execute($plate_number);

        return response()->json([
            "message" => "Vehicle added to residential"
        ]);
    }
}
