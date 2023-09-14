<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateVehicleTypeRequest;
use App\Http\Requests\UpdateVehicleTypeRequest;
use App\Models\VehicleType;
use Illuminate\Http\JsonResponse;

class VehicleTypeController extends Controller
{
    public function index (): JsonResponse
    {
        return response()->json(VehicleType::query()->paginate(10));
    }

    public function create (CreateVehicleTypeRequest $request): JsonResponse
    {

        if ($request->is_default_type) {
            VehicleType::query()->update(["is_default_type" => false]);
        }

        $vehicle_type = VehicleType::query()->create($request->validated());
        return response()->json($vehicle_type);
    }


    public function update (UpdateVehicleTypeRequest $request, VehicleType $vehicle_type): JsonResponse
    {
        if ($request->is_default_type) {
            VehicleType::query()->update(["is_default_type" => false]);
        }

        $vehicle_type->update($request->validated());
        return response()->json($vehicle_type);
    }

    public function delete (VehicleType $vehicle_type): JsonResponse
    {
        if ($vehicle_type->is_default_type) {
            return response()->json(["message" => "Can't delete default vehicle type"], 400);
        }

        $vehicle_type->delete();
        return response()->json(["message" => "Vehicle type deleted"]);
    }

}
