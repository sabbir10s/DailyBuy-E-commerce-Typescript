import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

type blogType = {
  _id: number;
  date: string;
  blog_title: string;
  img: string;
  category: string;
};
const Blogs = () => {
  const [Blogs, setBlogs] = useState<blogType[]>([]);

  const fetchData = () => {
    axios
      .get("/blogs.json")
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
    <div className="container mt-[80px] lg:mt-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Blogs.map((blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
