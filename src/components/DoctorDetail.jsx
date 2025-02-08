import React from "react";
import { useParams } from "react-router-dom";

const doctorData = [
  {
    id: 1,
    img: "/img/doc1.jpeg",
    name: "Dr. Ryan Decuza",
    specialties: "Counselor",
    qualification: "PhD in Clinical Psychology",
    location: "Mumbai, India",
    description:
      "Dr. Ryan Decuza is an experienced counselor specializing in anxiety, depression, and personal development. He has over 10 years of experience in psychotherapy.",
  },
  {
    id: 2,
    img: "/img/doc2.jpeg",
    name: "Dr. Abhishek Mehra",
    specialties: "Psychiatrist",
    qualification: "MD in Psychiatry",
    location: "Delhi, India",
    description:
      "Dr. Mehra is a renowned psychiatrist helping patients with mental disorders such as schizophrenia, bipolar disorder, and severe depression.",
  },
  {
    id: 3,
    img: "/img/doc3.jpeg",
    name: "Dr. Casber Rodriguez",
    specialties: "Pediatrician",
    qualification: "MBBS, MD (Pediatrics)",
    location: "Bangalore, India",
    description:
      "Dr. Rodriguez is a child specialist with expertise in child growth monitoring, vaccinations, and childhood illnesses.",
  },
  {
    id: 4,
    img: "/img/doc4.jpeg",
    name: "Dr. Victor Nguyen",
    specialties: "Neurologist",
    qualification: "DM in Neurology",
    location: "Chennai, India",
    description:
      "Dr. Nguyen treats neurological disorders such as epilepsy, migraines, and Parkinson’s disease with advanced neurodiagnostics.",
  },
  {
    id: 5,
    img: "/img/doc5.jpeg",
    name: "Dr. Julie Carter",
    specialties: "Psychiatrist",
    qualification: "MD in Psychiatry",
    location: "Pune, India",
    description:
      "Dr. Carter is an expert in treating anxiety, stress disorders, and PTSD, offering cognitive behavioral therapy (CBT).",
  },
];

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctorData.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <h1 className="text-center text-2xl mt-10">Doctor Not Found</h1>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 pt-16">
      <div className="max-w-lg bg-white shadow-lg rounded-lg p-5 text-center">
        <img src={doctor.img} alt={doctor.name} className="w-full rounded-lg" />
        <h1 className="text-3xl font-semibold mt-4">{doctor.name}</h1>
        <h2 className="text-lg text-gray-600">{doctor.specialties}</h2>
        <p className="text-sm mt-2">📍 {doctor.location}</p>
        <p className="mt-4">{doctor.description}</p>
        <p className="mt-2 font-semibold">🎓 {doctor.qualification}</p>
      </div>
    </div>
  );
};

export default DoctorDetail;
