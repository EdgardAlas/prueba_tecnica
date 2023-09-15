<?php
 namespace App\Http\UseCases;

 use App\Models\VehicleEntry;
 use App\Models\VehicleType;
 use Illuminate\Pagination\LengthAwarePaginator;

 class GetAllOficialEntriesUseCase {

     public function execute (): LengthAwarePaginator {
         return VehicleEntry::query()
             ->with("vehicle")
                ->with("vehicle_type")
             ->whereNull("check_out_time")
             ->where("vehicle_type_id", VehicleType::$OFICIAL_ID)
             ->orderByDesc("id")
             ->paginate(10)->through(function ($entry){
             return [
                 "id" => $entry->id,
                 "plate_number" => $entry->vehicle->plate_number,
                 "vehicle_type" => $entry->vehicle_type->vehicle_type,
                 "check_in_time" => $entry->check_in_time,
                 "check_out_time" => $entry->check_out_time
             ];
         });
     }
 }
