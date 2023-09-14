import { PaginationResponse } from './pagination.types';

export interface VehicleEntry {
  id: number;
  plate_number: string;
  vehicle_type: string;
  check_in_time: string;
  check_out_time: string;
}

export type VehicleEnties = PaginationResponse<VehicleEntry>;
