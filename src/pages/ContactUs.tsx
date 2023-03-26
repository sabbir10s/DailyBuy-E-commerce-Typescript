import React from "react";
import { Helmet } from "react-helmet";
import Contact from "../components/screen/Contact";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>DailyBuy - Contact us</title>
        <meta charSet="utf-8" name="description" content="DailyBuy Contact us Page" />
      </Helmet>
      <Contact />
    </div>
  );
};

export default ContactUs;
