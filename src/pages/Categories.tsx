import React from "react";
import { Helmet } from "react-helmet";
import CategoriesBanner from "../components/screen/Categories/CategoriesBanner";
import CategoriesFilter from "../components/screen/Categories/CategoriesFilter";
import CategoriesProduct from "../components/screen/Categories/CategoriesProduct";
import ProcessingSteps from "../components/screen/ProcessingSteps";

const Categories = () => {
  return (
    <div className=" mt-12 lg:mt-0">
      <Helmet>
        <title>DailyBuy - Categories</title>
        <meta charSet="utf-8" name="description" content="DailyBuy Categories Page" />
      </Helmet>
      {/* categories main section */}
      <section className="grid grid-cols-4 lg:grid-cols-5 gap-8 container mt-8">
        <div className="hidden lg:block">
          <CategoriesFilter />
        </div>
        <div className="col-span-4 ml-0 md:ml-12">
          <CategoriesBanner />
          <CategoriesProduct />
        </div>
      </section>
      <ProcessingSteps />
    </div>
  );
};

export default Categories;
