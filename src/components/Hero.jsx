import React from "react";
import webPic from "../assets/little-lion-03.png";
import "../App.css"; // You'll need to create this CSS file

export default function Hero() {
  return (
    <section className="hero-section h-screen w-full relative overflow-hidden flex items-center justify-center md:justify-end">
      <div
        className="absolute inset-0 bg-no-repeat -z-10 bg-position-[bottom_left_4rem]"
        style={{
          backgroundImage: `url(${webPic})`,
          // backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "40%",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="container pr-5 text-center md:text-left text-white w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 ">Little Lion</h1>
        <h2 className="global-accent-text text-center md:text-start md:pr-25 text-4xl md:text-3xl font-extrabold mb-6">
          Web Designs
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Even Small businesses can make a big impression
        </p>
      </div>
    </section>
  );
}
