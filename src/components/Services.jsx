import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <RiMicroscopeLine size={35} className="text-backgroundColor" />,
      title: "Lab Test",
      shortDescription: "Get timely lab tests for better health monitoring.",
      fullDescription:
        "We offer a wide range of lab tests, including blood tests, pathology, and diagnostic screenings, ensuring accurate results and early detection of health conditions.",
    },
    {
      icon: <MdHealthAndSafety size={35} className="text-backgroundColor" />,
      title: "Health Check",
      shortDescription: "Regular checkups for a healthy life.",
      fullDescription:
        "Our health check packages include blood pressure monitoring, cholesterol checks, diabetes screening, and personalized health assessments to keep you fit and aware of your well-being.",
    },
    {
      icon: <FaHeartbeat size={35} className="text-backgroundColor" />,
      title: "Mental Health",
      shortDescription: "Expert support for your mental well-being.",
      fullDescription:
        "We provide therapy for stress, anxiety, and trauma recovery. Our certified professionals offer one-on-one counseling, meditation guidance, and mental wellness strategies.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            We offer a range of services designed to support your physical and
            mental health.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            icon={service.icon}
            title={service.title}
            shortDescription={service.shortDescription}
            fullDescription={service.fullDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
