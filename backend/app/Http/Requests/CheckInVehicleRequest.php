<?php

namespace App\Http\Requests;

use App\Models\VehicleEntry;
use Illuminate\Foundation\Http\FormRequest;

class CheckInVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $plate_number = $this->get("plate_number");
        $exists = VehicleEntry::query()->whereHas("vehicle", function ($query) use ($plate_number) {
            $query->where("plate_number", $plate_number);
        })->whereNull("check_out_time")->first();

        return $exists === null;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "plate_number" => "required|string",
        ];
    }
}
