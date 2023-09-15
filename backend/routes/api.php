<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\VehicleEntryController;
use \App\Http\Controllers\VehicleControler;
use \App\Http\Controllers\VehicleTypeController;

Route::group([
    "middleware" => "api",
], function () {

    Route::group(["prefix" => "vehicle-entry"], function(){
        Route::get("/to-select", [VehicleEntryController::class, "getVehiclesToSelect"]);
        Route::get("/payment/to-select", [VehicleEntryController::class, "getVehicleTypeForPaymentSelect"]);
        Route::get("/oficial", [VehicleEntryController::class, "getOficialVehicleEntries"]);
        Route::get("/", [VehicleEntryController::class, "index"]);
        Route::patch("/check-out/{plate_number}", [VehicleEntryController::class, "checkOutVehicle"]);
        Route::get("/payments/{vehicle_type}", [VehicleEntryController::class, "getPayments"]);
        Route::post("/check-in", [VehicleEntryController::class, "checkInVehicle"]);
        Route::post("/start-month", [VehicleEntryController::class, "startMonth"]);
    });

    Route::group(["prefix" => "vehicles"], function (){
        Route::get("/", [VehicleControler::class, "getAllVehicles"]);
        Route::patch("/change-vehicle-type/{plate_number}", [VehicleControler::class, "changeVehicleType"]);
    });

    Route::group(["prefix"=>"vehicle-types"], function(){
        Route::get("/", [VehicleTypeController::class, "index"]);
        Route::post("/", [VehicleTypeController::class, "create"]);
        Route::put("/{vehicle_type}", [VehicleTypeController::class, "update"]);
        Route::delete("/{vehicle_type}", [VehicleTypeController::class, "delete"]);
    });
});
