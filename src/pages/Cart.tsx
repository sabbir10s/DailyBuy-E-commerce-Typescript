import React from "react";
import { Helmet } from "react-helmet";
import ProductCart from "src/components/screen/Cart/ProductCart";

const Cart = () => {
  return (
    <div>
      <Helmet>
        <title>DailyBuy - Cart</title>
        <meta charSet="utf-8" name="description" content="DailyBuy Cart Page" />
      </Helmet>
      <ProductCart />
    </div>
  );
};

export default Cart;
