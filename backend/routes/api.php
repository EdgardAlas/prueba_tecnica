<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\VehicleEntryController;
use \App\Http\Controllers\VehicleControler;

Route::group([
    "middleware" => "api",
], function () {

    Route::group(["prefix" => "vehicle-entry"], function(){
        Route::get("/ping", [VehicleEntryController::class, "pong"]);
        Route::post("/check-in", [VehicleEntryController::class, "checkInVehicle"]);
        Route::patch("/check-out/{plate_number}", [VehicleEntryController::class, "checkOutVehicle"]);
    });

    Route::group(["prefix" => "vehicles"], function (){
        Route::post("/oficial", [VehicleControler::class, "addVehicleToOficial"]);
        Route::post("/residential", [VehicleControler::class, "addVehicleToResidential"]);
        Route::get("/", [VehicleControler::class, "getAllVehicles"]);
    });
});
