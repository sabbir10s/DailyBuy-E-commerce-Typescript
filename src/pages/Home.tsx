import React, { useEffect } from "react";
import BestSales from "../components/screen/BestSales";
import FeatureProduct from "../components/screen/FeatureProduct";
import FoodCategoryV2 from "../components/screen/FoodCategoryV2";
import Hero from "../components/screen/Hero";
import OfferTimerBanner from "../components/screen/OfferTimerBanner";
import PosterOffer from "../components/screen/PosterOffer";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import ScrollBottom from "../components/shared/ScrollBottom";
// import ScrollCart from "../components/shared/ScrollCart";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <FeatureProduct />
      <PosterOffer />
      <BestSales />
      <OfferTimerBanner />
      <FoodCategoryV2 />
      <ProcessingSteps />
      <ScrollBottom />
      {/* <ScrollCart /> */}
    </div>
  );
};

export default Home;
