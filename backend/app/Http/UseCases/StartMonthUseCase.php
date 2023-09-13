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
            VehicleEntry::query()->whereHas("vehicle", function($query){
                $query->where("vehicle_type_id", VehicleType::$OFICIAL_ID);
            })->delete();

        });
    }

}
