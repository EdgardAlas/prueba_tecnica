<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\VehicleEntryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group([
    "middleware" => "api",
    "prefix" => "vehicle-entry"
], function () {
    Route::get("/ping", [VehicleEntryController::class, "pong"]);
    Route::post("/check-in", [VehicleEntryController::class, "checkInVehicle"]);
    Route::patch("/check-out/{plate_number}", [VehicleEntryController::class, "checkOutVehicle"]);
});
