import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    {
      id: 1,
      img: "/src/assets/img/doc1.jpeg",
      name: "Dr. Ryan Decuza",
      specialties: "Counselor",
      qualification: "PhD in Clinical Psychology",
      location: "Mumbai, India",
      description:
        "Dr. Ryan Decuza is an experienced counselor specializing in anxiety, depression, and personal development. He has over 10 years of experience in psychotherapy.",
    },
    {
      id: 2,
      img: "/src/assets/img/doc2.jpeg",
      name: "Dr. Abhishek Mehra",
      specialties: "Psychiatrist",
      qualification: "MD in Psychiatry",
      location: "Delhi, India",
      description:
        "Dr. Mehra is a renowned psychiatrist helping patients with mental disorders such as schizophrenia, bipolar disorder, and severe depression.",
    },
    {
      id: 3,
      img: "/src/assets/img/doc3.jpeg",
      name: "Dr. Casber Rodriguez",
      specialties: "Pediatrician",
      qualification: "MBBS, MD (Pediatrics)",
      location: "Bangalore, India",
      description:
        "Dr. Rodriguez is a child specialist with expertise in child growth monitoring, vaccinations, and childhood illnesses.",
    },
    {
      id: 4,
      img: "/src/assets/img/doc4.jpeg",
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
      qualification: "DM in Neurology",
      location: "Chennai, India",
      description:
        "Dr. Nguyen treats neurological disorders such as epilepsy, migraines, and Parkinson’s disease with advanced neurodiagnostics.",
    },
    {
      id: 5,
      img: "/src/assets/img/doc5.jpeg",
      name: "Dr. Julie Carter",
      specialties: "Psychiatrist",
      qualification: "MD in Psychiatry",
      location: "Pune, India",
      description:
        "Dr. Carter is an expert in treating anxiety, stress disorders, and PTSD, offering cognitive behavioral therapy (CBT).",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1023, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-start">
            The best community your child needs.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((doctor) => (
            <Link key={doctor.id} to={`/doctor/${doctor.id}`}>
              <div className="h-[350px] text-black rounded-xl shadow-md mb-2 cursor-pointer">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="h-56 rounded-t-xl w-full"
                />
                <div className="flex flex-col justify-center items-center p-3">
                  <h1 className="font-semibold text-xl">{doctor.name}</h1>
                  <h3 className="pt-2">{doctor.specialties}</h3>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
