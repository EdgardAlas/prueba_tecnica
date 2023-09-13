<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckInVehicleRequest;
use App\Http\Requests\CheckOutVehicleRequest;
use App\Models\Vehicle;
use App\Models\VehicleEntry;
use App\Models\VehicleType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VehicleEntryController extends Controller
{
    public function pong (): JsonResponse {
        return response()->json([
            "message" => "pong"
        ]);
    }

    public function checkInVehicle (CheckInVehicleRequest $request): JsonResponse {
        $plate_number = $request->get("plate_number");

        /*
           Caso de uso "Registra entrada"
        */

        $vehicle = Vehicle::query()->where("plate_number", $plate_number)->first();

        $default_vehicle_type = VehicleType::query()->where("is_default_type", true)->first();

        if ($vehicle === null) {
            $vehicle = new Vehicle();
            $vehicle->plate_number = $plate_number;
            $vehicle->vehicle_type_id = $default_vehicle_type->id;
            $vehicle->save();
        }

        VehicleEntry::query()->create([
            "vehicle_id" => $vehicle->id,
            "check_in_time" => now(),
        ]);

        return response()->json([
            "message" => "Vehicle with plate number {$plate_number} has been checked in."
        ]);
    }

    public function checkOutVehicle(CheckOutVehicleRequest $request){

        $plate_number = $request->route("plate_number");

        $total_to_pay = 0;

        $vehicle_entry = VehicleEntry::query()->with([
            "vehicle" => function ($query) use ($plate_number) {
                $query->where("plate_number", $plate_number);
            }
        ])->whereNull("check_out_time")->first();


        return DB::transaction(function () use ($vehicle_entry, $plate_number, &$total_to_pay) {
            $vehicle = $vehicle_entry->vehicle;

            $vehicle_entry->check_out_time = now();

            $vehicle_entry->save();

            $minutesBetween = $vehicle_entry->check_in_time->diffInMinutes($vehicle_entry->check_out_time);

            if ($vehicle->vehicle_type->id === VehicleType::$RESIDENTE_ID) {
                $vehicle->increment("accumulated_minutes", $minutesBetween);
            }

            if ($vehicle->vehicle_type->id === VehicleType::$NO_OFICIAL_ID) {

                $total_to_pay = $vehicle->vehicle_type->fee * $minutesBetween;
            }

            return response()->json([
                "message" => "Vehicle with plate number {$plate_number} has been checked in.",
                "total_to_pay" => $total_to_pay,
                "pay_on_departure" => $vehicle->vehicle_type->pay_on_departure,
            ]);
        });
    }
}
