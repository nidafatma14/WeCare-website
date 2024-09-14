import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        At WeCare Psychology Hospital, we are dedicated to nurturing the mental and emotional well-being of children and adolescents. Our mission is to provide compassionate, evidence-based care to help young minds thrive in a supportive and understanding environment. With a team of highly trained child psychologists, therapists, and pediatric specialists, we address a wide range of psychological and behavioral challenges, from anxiety and depression to developmental disorders and trauma recovery.
        </p>
        <p className="text-justify lg:text-start">
        Our hospital offers personalized treatment plans designed to meet each child is unique needs. We believe in working closely with families, caregivers, and schools to create a comprehensive support network that fosters resilience and emotional growth. Our services include individual therapy, family counseling, group therapy sessions, and specialized programs for ADHD, autism, and learning difficulties.
        </p>
        <p className="text-justify lg:text-start">
        At WeCare, we understand the importance of early intervention in shaping healthy futures. We are committed to creating a safe, welcoming space where children can express themselves freely and begin their journey toward mental wellness. Together, we aim to empower children to overcome challenges, build confidence, and lead fulfilling lives.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;