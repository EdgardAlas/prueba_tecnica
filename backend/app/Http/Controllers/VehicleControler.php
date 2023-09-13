<?php

namespace App\Http\Controllers;

use App\Http\UseCases\GetAllVehiclesUseCase;
use App\Models\Vehicle;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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
}
