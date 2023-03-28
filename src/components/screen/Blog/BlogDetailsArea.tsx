/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import linkedIn from "../../../assets/icon/social_primary_color_lin.png";
import facebook from "../../../assets/icon/social_primary_color_fb.png";
import twitter from "../../../assets/icon/social_primary_color_tw.png";
import ThemeSuspense from "../../theme/ThemeSuspense";
import { useParams } from "react-router";
import { BlogProps } from "src/models/types";

const BlogDetailsArea = ({ blogs }: BlogProps) => {
  const { blogId } = useParams<{ blogId: string }>();

  if (!blogs.length) {
    return <ThemeSuspense />;
  }

  const blogInfo = blogs.find((blog) => blog._id === Number(blogId));
  if (!blogInfo) {
    return <ThemeSuspense />;
  }
  const { blog_title, blog_details, banner_img, date, writer, writer_img } =
    blogInfo;

  return (
    <div className="mt-[80px] lg:mt-[20px]">
      <div
        className="h-[200px] md:h-[300px] lg:h-[400px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${banner_img})`,
        }}
      ></div>
      <div className="container max-w-[1000px]">
        <div className="bg-white mt-[-50px] md:mt-[-100px] lg:mt-[-180px] p-[13px] md:p-[20px] lg:p-[64px] rounded-[12px] shadow-[0px_10px_60px_rgba(0,0,0,0.1)]">
          <h1 className="text-[16px] md:text-[30px] lg:text-[50px] font-bold">
            {blog_title}
          </h1>
          <div className="my-[20px] md:my-[30px] lg:my-[48px] flex items-center justify-between">
            <div className="flex items-center gap-[15px] md:gap-[32px]">
              <img className="w-[50px] md:h-full" src={writer_img} alt="" />
              <div>
                <h3 className="text-sm md:text-lg font-semibold">{writer}</h3>
                <p className="text-sm md:text-lg text-[#6F757D]">{date}</p>
              </div>
            </div>
            <div className="flex items-center gap-[12px] md:gap-[25px]">
              <a href="#">
                {" "}
                <img
                  className="w-[19px] md:w-[30px] lg:w-full"
                  src={linkedIn}
                  alt=""
                />
              </a>
              <a href="#">
                {" "}
                <img
                  className="w-[19px] md:w-[30px] lg:w-full"
                  src={twitter}
                  alt=""
                />
              </a>
              <a href="#">
                {" "}
                <img
                  className="w-[19px] md:w-[30px] lg:w-full"
                  src={facebook}
                  alt=""
                />
              </a>
            </div>
          </div>
          <p>{blog_details.slice(0, 475)}</p>
          <br />
          <p>{blog_details.slice(476, 1256)}</p>
          <br />
          <p>{blog_details.slice(0, 475)}</p>
          <br />
          <p>{blog_details.slice(476, 1256)}</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
