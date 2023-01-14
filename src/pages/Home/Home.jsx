import About from "components/About/About";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";
import Home from "components/Home/Home";
import Qualification from "components/Qualification/Qualification";
import React from "react";
import ScrollUp from "components/ScrollUp/ScrollUp";
import Skills from "components/Skills/Skills";
import Testimonials from "components/Testimonials/Testimonials";
const HomePage = () => {
  return (
    <>
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default HomePage;
