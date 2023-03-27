import React from "react";
import { Helmet } from "react-helmet";
import FaqComponents from "../components/screen/FAQ/FaqComponents";

const FAQ = () => {
  return (
    <div>
      <Helmet>
        <title>DailyBuy - FAQ</title>
        <meta charSet="utf-8" name="description" content="DailyBuy FAQ Page" />
      </Helmet>
      <FaqComponents />
    </div>
  );
};

export default FAQ;
