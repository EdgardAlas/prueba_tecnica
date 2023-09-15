<?php

namespace App\Http\UseCases;

use App\Models\Vehicle;
use App\Models\VehicleEntry;
use App\Models\VehicleType;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class CheckOutVehicleUseCase
{
    public function execute(string $plate_number): array
    {

        $vehicle_entry = VehicleEntry::query()
            ->with("vehicle")
            ->with("vehicle_type")
            ->whereHas("vehicle", function ($query) use ($plate_number) {
                $query->where("plate_number", $plate_number);
            })
            ->whereNull("check_out_time")->first();

        return DB::transaction(function () use ($vehicle_entry, $plate_number, &$total_to_pay) {
            $vehicle = $vehicle_entry->vehicle;

            $vehicle_entry->check_out_time = now();

            $vehicle_entry->save();

            $total_to_pay = $this->calculateTotalToPay($vehicle_entry, $vehicle);

            return [
                "message" => "Vehicle with plate number {$plate_number} has been checked in.",
                "total_to_pay" => $total_to_pay["total_to_pay"],
                "pay_on_departure" => $vehicle_entry->vehicle_type->pay_on_departure,
                "fee" => $vehicle->vehicle_type->fee,
                "minutes_between" => $total_to_pay["minutes_between"],
            ];
        });
    }

    private function calculateTotalToPay(VehicleEntry $vehicle_entry, Vehicle $vehicle): array
    {
        $total_to_pay = 0;
        $startDate = Carbon::parse($vehicle_entry->check_in_time);
        $endDate = Carbon::parse($vehicle_entry->check_out_time);

        $minutesBetween = $endDate->diffInMinutes($startDate);

        if ($vehicle->vehicle_type->id === VehicleType::$RESIDENTE_ID) {
            $vehicle->increment("accumulated_minutes", $minutesBetween);
        }else if ($vehicle->vehicle_type->id === VehicleType::$NO_OFICIAL_ID || $vehicle->vehicle_type->pay_on_departure) {
            $total_to_pay = $vehicle_entry->vehicle_type->fee * $minutesBetween;
        }

        return [
            "total_to_pay" => $total_to_pay,
            "minutes_between" => $minutesBetween,
        ];
    }
}
