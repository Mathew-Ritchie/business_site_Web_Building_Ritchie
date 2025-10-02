import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Packages from "./components/OurPackages";
import Footer from "./components/Footer";
import Clients from "./components/Clients";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Packages />
      <Clients />
      <Footer />
    </div>
  );
}
