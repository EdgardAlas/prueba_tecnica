<?php

namespace App\Http\Requests;

use App\Models\VehicleType;
use Illuminate\Foundation\Http\FormRequest;

class ValidateVehicleTypePayment extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {

        $vehicle_type = $this->route("vehicle_type");
        return VehicleType::query()->where("id", $vehicle_type)->exists();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }
}
