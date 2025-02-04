import { NextFunction, Request, Response } from "express";

export interface INewUserRequestBody {
  _id: string;
  name: string;
  email: string;
  photo?: string;
  gender?: string;
  dob?: Date;
  mobile?: string;
  password?: string;
}

export type controllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;

export interface IBaseQuery {
  name?: {
    $regex: string;
    $options: string;
  };
  price?: { $lte: number };
  category?: string;
  gender?:string;
}

export type SearchRequestQuery = {
  search?: string;
  price?: string;
  category?: string;
  sort?: string;
  page?: string;
  gender?:string;
};

export interface INewProductRequestBody {
  name: string;
  category: string;
  price: number;
  sellingPrice : number;
  stock: number;
  description: string;
  gender:string;
}
export interface INewCouponRequestBody {
  coupon: string;
  amount: number;
}

export type InvalidateCacheProps = {
  product?: boolean;
  order?: boolean;
  admin?: boolean;
  userId?: string;
  orderId?: string;
  review?: boolean;
  productId?: string | string[];
};

export type OrderItemType = {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  productId: string;
};

export type ShippingInfoType = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: number;
};

export interface NewOrderRequestBody {
  shippingInfo: ShippingInfoType;
  user: string;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  orderItems: OrderItemType[];
  paymentMethod: "Online" | "COD";
}
