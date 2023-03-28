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

// Review Section
export interface ReviewType {
  _id: number;
  name:string;
  rating:number;
  date:string;
  review_title:string;
  comments:string

}
export interface ReviewProps {
  review: ReviewType;
};

// Blogs Section
export interface BlogType {
  _id: number;
  date: string;
  blog_title: string;
  img: string;
  category: string;
  length: number;
  blog_details: string;
  banner_img: string;
  writer: string;
  writer_img: string;
}
export interface BlogProps {
  blogs: BlogType[];
};



