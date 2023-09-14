<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateVehicleTypeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "vehicle_type" => ["required", "string", "max:255"],
            "fee" => ["required", "numeric"],
            "pay_on_departure" => ["required", "boolean"],
            "is_default_type" => ["required", "boolean"],
        ];
    }
}
