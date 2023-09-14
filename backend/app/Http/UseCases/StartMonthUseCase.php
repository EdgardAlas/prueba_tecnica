<?php

namespace App\Http\UseCases;

use App\Models\Vehicle;
use App\Models\VehicleEntry;
use App\Models\VehicleType;
use Illuminate\Support\Facades\DB;

class StartMonthUseCase
{
    public function execute(): void
    {
        DB::transaction(function(){
            Vehicle::query()->update([
                "accumulated_minutes" => 0
            ]);


            $existsVehicleCheckIn = VehicleEntry::query()
                ->whereNull("check_out_time")
                ->exists();

            if($existsVehicleCheckIn){
                throw new \Exception("There are vehicles that have not checked out yet.");
            }

            VehicleEntry::query()->delete();

        });
    }

}
