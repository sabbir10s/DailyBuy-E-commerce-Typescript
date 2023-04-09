import React from "react";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import YourWishlist from "../components/screen/YourWishlist";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  return (
    <div>
      <Helmet>
        <title>DailyBuy - Wishlist</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy - Wishlist Page"
        />
      </Helmet>
      <YourWishlist />
      <ProcessingSteps />
    </div>
  );
};

export default Wishlist;
