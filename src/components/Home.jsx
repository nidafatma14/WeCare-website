import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-black bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
        At WeCare, we understand the importance of early intervention in shaping healthy futures. We are committed to creating a safe, welcoming space where children can express themselves freely and begin their journey toward mental wellness. Together, we aim to empower children to overcome challenges, build confidence, and lead fulfilling lives.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;