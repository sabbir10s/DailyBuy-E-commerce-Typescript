export interface Product {
  _id: number;
  name: string;
  nickname: string;
  product_code: string;
  desc: string;
  price: number;
  del_price: number;
  rating: number;
  review: number;
  discount: number;
  stock: boolean;
  main_img_url: string;
  small_img_url: string[];
  details_benefit: string[];
  full_description: string;
  packaging_and_delivery: string;
  other_things_of_product: string;
}

export interface CartItem extends Product {
  cartQuantity: number;
}

export interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

export interface AddToCartAction {
  type: string;
  payload: Product;
}

export interface DecreaseCartAction {
  type: string;
  payload: Product;
}

export interface RemoveFromCartAction {
  type: string;
  payload: Product;
}
