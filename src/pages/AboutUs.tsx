import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/screen/About";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>DailyBuy - About</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy About Page"
        />
      </Helmet>
      <About />
    </div>
  );
};

export default AboutUs;
