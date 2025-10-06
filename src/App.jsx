import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Packages from "./components/OurPackages";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import AboutMe from "./components/AboutMe";
import TheProcess from "./components/TheProcess";
import NavModalHeader from "./components/NavBar";
import OurServices from "./components/OurServices";

export default function App() {
  return (
    <div className="App">
      <NavModalHeader />
      <Hero />
      <About />
      <OurServices />
      {/* <Packages /> */}
      <TheProcess />
      <Clients />
      {/* <AboutMe /> */}
      <Footer />
    </div>
  );
}
