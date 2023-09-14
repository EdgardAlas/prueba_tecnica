<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\VehicleEntryController;
use \App\Http\Controllers\VehicleControler;

Route::group([
    "middleware" => "api",
], function () {

    Route::group(["prefix" => "vehicle-entry"], function(){
        Route::get("/to-select", [VehicleEntryController::class, "getVehiclesToSelect"]);
        Route::get("/payment/to-select", [VehicleEntryController::class, "getVehicleTypeForPaymentSelect"]);
        Route::get("/", [VehicleEntryController::class, "index"]);
        Route::get("/payments/{vehicle_type}", [VehicleEntryController::class, "getPayments"]);
        Route::post("/check-in", [VehicleEntryController::class, "checkInVehicle"]);
        Route::post("/start-month", [VehicleEntryController::class, "startMonth"]);
        Route::patch("/check-out/{plate_number}", [VehicleEntryController::class, "checkOutVehicle"]);
    });

    Route::group(["prefix" => "vehicles"], function (){
        Route::get("/", [VehicleControler::class, "getAllVehicles"]);
        Route::patch("/change-vehicle-type/{plate_number}", [VehicleControler::class, "changeVehicleType"]);
    });
});
