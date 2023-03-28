export const ADMIN_ROLE = 'admin';
export const CUSTOMER_ROLE = 'customer';

export type ErrorResponse = {
  error: { message: string };
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
};
