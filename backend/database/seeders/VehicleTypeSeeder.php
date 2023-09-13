<?php

namespace Database\Seeders;

use App\Models\VehicleType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VehicleTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*
         * Residencial, Oficial, No Oficial
         * */

        $vehicleTypes = [
            [
                'id' => VehicleType::$RESIDENTE_ID,
                'vehicle_type' => 'Residencial',
                'fee' => 0.05,
                'pay_on_departure' => false,
            ],
            [
                'id' => VehicleType::$OFICIAL_ID,
                'vehicle_type' => 'Oficial',
                'fee' => 0,
                'pay_on_departure' => false,
            ],
            [
                'id' => VehicleType::$NO_OFICIAL_ID,
                'vehicle_type' => 'No Oficial',
                'fee' => 0.5,
                'pay_on_departure' => true,
                "is_default_type" => true,
            ]
        ];

        foreach ($vehicleTypes as $vehicleType) {
            VehicleType::create($vehicleType);
        }


    }
}
