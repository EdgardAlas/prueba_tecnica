import { PaginationResponse } from './pagination.types';

export interface VehicleTypes {
  id?: number;
  vehicle_type: string;
  fee: number;
  pay_on_departure: number | boolean;
  is_default_type: number | boolean;
  created_at?: string;
  updated_at?: string;
}

export type VehicleTypesPagination = PaginationResponse<VehicleTypes>;
