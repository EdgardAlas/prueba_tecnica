<?php


namespace App\Http\UseCases;

use App\Models\Vehicle;
use Illuminate\Pagination\LengthAwarePaginator;

class GetAllVehiclesUseCase
{

    public function execute(string $vehicle_type = null ): LengthAwarePaginator
    {
        $vehicle_query = Vehicle::query();

        if($vehicle_type){
            $vehicle_query->whereHas("vehicle_type", function ($query) use ($vehicle_type){
                $query->where("vehicle_type", $vehicle_type);
            });
        }

        return $vehicle_query->paginate(10);
    }
}
