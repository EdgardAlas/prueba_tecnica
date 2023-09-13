<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangeVehicleTypeRequest;
use App\Http\Requests\ValidatePlateNumberBody;
use App\Http\UseCases\AddOficialVehicleUseCase;
use App\Http\UseCases\ChangeVehicleTypeUseCase;
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

    public function changeVehicleType(ChangeVehicleTypeRequest $request, ChangeVehicleTypeUseCase $changeVehicleTypeUseCase): JsonResponse
    {
        $plate_number = $request->route("plate_number");
        $vehicle_type = $request->get("vehicle_type");

        $changeVehicleTypeUseCase->execute($plate_number, $vehicle_type);

        return response()->json([
            "message" => "Vehicle type changed to residential"
        ]);
    }
}
