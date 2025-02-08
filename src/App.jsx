import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import DoctorDetail from "./components/DoctorDetail"; // Component for doctor details
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="doctors">
                <Doctors />
              </div>
              <div id="blog">
                <Blogs />
              </div>
            </>
          }
        />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
};
export default App;
