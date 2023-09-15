import { PaginationResponse } from './pagination.types';

export interface Payment {
  plate_number: string;
  accumulated_minutes: number;
  payment: string;
}

export type PaymentResponse = PaginationResponse<Payment>;
