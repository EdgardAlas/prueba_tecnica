<?php

namespace App\Http\Requests;

use App\Models\VehicleEntry;
use Illuminate\Foundation\Http\FormRequest;

class CheckOutVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $plate_number = $this->route("plate_number");
        $exists = VehicleEntry::query()->with([
            "vehicle" => function ($query) use ($plate_number) {
                $query->where("plate_number", $plate_number);
            }
        ])->whereNull("check_out_time")->first();


        return !!$exists;
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
