import React from "react";
import webPic from "../assets/web-pic.png";
import "../App.css"; // You'll need to create this CSS file

export default function About() {
  return (
    <section
      id="about-us"
      className="about-section min-h-screen w-full relative overflow-hidden flex items-center justify-center md:justify-end"
    >
      <div
        className="absolute inset-0 bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${webPic})`,
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "50%",
        }}
      ></div>
      <div className="w-1/2 container  px-4 text-center md:text-start text-black">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About Us</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          We are dedicated to excellence and innovation in our field.
        </p>
      </div>
    </section>
  );
}
