import React from "react";
import { Helmet } from "react-helmet";
import Blogs from "../components/screen/Blog/Blogs";
import ProcessingSteps from "../components/screen/ProcessingSteps";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>DailyBuy - Blog</title>
        <meta charSet="utf-8" name="description" content="DailyBuy Blog Page" />
      </Helmet>
      <Blogs />
      <ProcessingSteps />
    </>
  );
};
export default BlogPage;
