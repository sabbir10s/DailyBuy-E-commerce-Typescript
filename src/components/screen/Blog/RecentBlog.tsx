import React from "react";
import { useParams } from "react-router";
import { BlogProps, BlogType } from "src/models/types";
import ThemeSuspense from "../../theme/ThemeSuspense";
import BlogCard from "./BlogCard";

const RecentBlog = ({ blogs }: BlogProps) => {
  const { blogId } = useParams<{
    blogId: string;
  }>();

  if (!blogs.length) {
    return <ThemeSuspense />;
  }
  const recentBlog = blogs
    .filter((blog) => blog._id !== Number(blogId))
    .slice(0, 3);

  return (
    <div className="container">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-[48px] lg:mt-[80px] mb-[48px]">
        Related posts
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-[28px]">
        {recentBlog.map((blog: BlogType) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
