import React from "react";
import "../App.css"; // You'll need to create this CSS file
import maichatron from "../assets/maichatron-logo.png"; // Ensure path is correct

export default function Clients() {
  return (
    <section className="min-h-screen bg-gray-600 w-full flex flex-col items-center justify-center  overflow-hidden">
      <div className="container text-white mx-auto px-4 text-center text-black">
        <h1 className="text-5xl  md:text-6xl font-extrabold mb-6">Our Clients</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          We Are a young flourishing business, and although out client list is small, we are proud
          of the work we have done for them. We can also devout more time to them and their dreams.
        </p>
        <div className="flex justify-center items-center mt-8">
          <img className="client-logos" src={maichatron} />
        </div>
      </div>
    </section>
  );
}
