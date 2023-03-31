import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";
import { AddToCartAction, CartState, DecreaseCartAction, Product, RemoveFromCartAction } from "../../models/types";

const initialState: CartState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")!) : [],
  cartTotalQuantity: localStorage.getItem("cartQuantity") ? JSON.parse(localStorage.getItem("cartQuantity")!) : 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: AddToCartAction) {
      // check already exist or not
      const itemIndex = state.cartItems.findIndex((item: Product) => item._id === action.payload._id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info("increased product quantity", { position: "top-right" });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("added a new product", { position: "top-right" });
      }
      //   update cart quantity
      state.cartTotalQuantity += 1;

      //   save to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartQuantity", JSON.stringify(state.cartTotalQuantity));
    },

    decreaseCart: (state, action: DecreaseCartAction) => {
      const itemIndex = state.cartItems.findIndex((cartItem: Product) => cartItem._id === action.payload._id);
      if (itemIndex >= 0) {
        // check if itemIndex is valid
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.info(`decreased cart quantity`, {
            position: "top-right",
          });
        } else if (state.cartItems[itemIndex].cartQuantity === 1) {
          const nextCartItems = state.cartItems.filter((cartItem: Product) => cartItem._id !== action.payload._id);

          state.cartItems = nextCartItems;
          toast.error(`item removed from cart`, {
            position: "top-right",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    removeFromCart: (state, action: RemoveFromCartAction) => {
      const nextCartItems = state.cartItems.filter((cartItem: Product) => cartItem._id !== action.payload._id);

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`item removed from cart`, {
        position: "top-right",
      });
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
