import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpeg";
import img2 from "../assets/img/blog2.jpeg";
import img3 from "../assets/img/blog3.jpeg";
import img4 from "../assets/img/blog4.jpeg";
import img5 from "../assets/img/blog5.jpeg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Our Latest posts will show you the dedication of our doctors and the hospital towards the children's health.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" />
          <BlogCard img={img2} headlines="The Healthy Diet" />
          <BlogCard
            img={img3}
            headlines="Communicating with a Child"
          />
          <BlogCard img={img4} headlines="Navigating Mental Health" />
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;