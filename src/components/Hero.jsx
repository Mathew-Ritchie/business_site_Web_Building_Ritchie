import React from "react";
import webPic from "../assets/web-pic.png";
import "../App.css"; // You'll need to create this CSS file

export default function Hero() {
  return (
    <section className="hero-section h-screen w-full relative overflow-hidden flex items-center justify-end">
      <div
        className="absolute inset-0 bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${webPic})`,
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50%",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="container pr-5 text-left text-white w-1/2">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Mathew Ritchie</h1>
        <h2 className="global-accent-text text-end pr-25 text-4xl md:text-3xl font-extrabold mb-6">
          Web Designs
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Providing a personalised and unique approach to web design and development.
        </p>
      </div>
    </section>
  );
}
