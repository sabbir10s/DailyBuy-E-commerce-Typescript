import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BlogDetailsArea from "../components/screen/Blog/BlogDetailsArea";
import RecentBlog from "../components/screen/Blog/RecentBlog";
import ProcessingSteps from "../components/screen/ProcessingSteps";

type blogType = {
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
};

const BlogDetails: React.FC = () => {
  const [blogs, setBlogs] = useState<blogType[]>([]);

  const fetchData = () => {
    axios
      .get<blogType[]>("/blogs.json")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>DailyBuy - Blog Details</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy Blog Details Page"
        />
      </Helmet>
      <BlogDetailsArea blogs={blogs} />
      <RecentBlog blogs={blogs} />
      <ProcessingSteps />
    </>
  );
};

export default BlogDetails;
