import React from "react";
import useBlogs from "../../../hooks/useBlogs";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [Blogs] = useBlogs();
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
