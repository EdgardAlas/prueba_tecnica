import { PaginationResponse } from './pagination.types';

export interface Vehicle {
  id: number;
  plate_number: string;
  vehicle_type: string;
}

export type VehiclePagination = PaginationResponse<Vehicle>;
