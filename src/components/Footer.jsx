import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">WeCare</h1>
          <p className=" text-sm">
            Our team of dedicated doctors, each specializing in unique fields
            such as Psychiatrist, Neurologist, Pediatrician, Psychoanalyst, and
            more.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Mental Health
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <p>123 Park Street, Springdale, US.</p>
            <p>support@care.com</p>
            <p>+123-456-7890</p>
          </nav>
          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-hoverColor transition-all"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/your-twitter-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-hoverColor transition-all"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/your-instagram-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-hoverColor transition-all"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          Copyright © 2024 WeCare | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
