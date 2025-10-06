import React from "react";

import "../App.css"; // You'll need to create this CSS file

import consult from "../assets/icons/consult.png";
import planning from "../assets/icons/planning.png";
import develop from "../assets/icons/develop.png";
import test from "../assets/icons/test.png";
import launch from "../assets/icons/launch.png";
import support from "../assets/icons/support.png";

export default function TheProcess() {
  return (
    <section
      id="our-process"
      className="the-process-section bg-gray-800 min-h-screen w-full relative overflow-hidden flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 text-center text-black">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-100">Our Process</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100">
          Our process is designed to ensure that we deliver high-quality, tailored web solutions
          that meet your unique needs and goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white/10 p-6 rounded-lg shadow-xl shadow-white/20 text-gray-100">
            <img src={consult} alt="Consultation Icon" className="h-16 mx-auto" />
            <h3 className="text-lg font-bold mb-4">1. Consultation</h3>
            <p>
              We start by understanding your business, goals, and target audience. This helps us
              tailor our services to your specific needs.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-xl shadow-white/20 text-gray-100">
            <img src={planning} alt="Planning Icon" className=" h-16 mx-auto" />
            <h3 className="text-lg font-bold mb-4">2. Planning</h3>
            <p>
              We create a detailed plan outlining the project scope, timeline, and deliverables.
              This ensures transparency and sets clear expectations.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-xl shadow-white/20 text-gray-100">
            <img src={develop} alt="Development Icon" className=" h-16 mx-auto" />
            <h3 className="text-lg font-bold mb-4">3. Design & Development</h3>
            <p>
              Our team designs and develops your website, focusing on user experience, aesthetics,
              and functionality. We keep you involved throughout the process to ensure alignment
              with your vision.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-xl shadow-white/20 text-gray-100">
            <img src={test} alt="Testing Icon" className=" h-16 mx-auto" />
            <h3 className="text-lg font-bold mb-4">4. Review & Testing</h3>
            <p>
              Before launch, we conduct thorough testing to ensure your website is fully functional,
              responsive, and optimized for performance across all devices and browsers.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-xl shadow-white/20 text-gray-100">
            <img src={launch} alt="Launch Icon" className="h-16 mx-auto" />
            <h3 className="text-lg font-bold mb-4">5. Launch</h3>
            <p>
              Once everything is approved, we launch your website and ensure a smooth transition. We
              also provide training if needed to help you manage your new site.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-xl shadow-white/20 text-gray-100">
            <img src={support} alt="Support Icon" className=" h-16 mx-auto" />
            <h3 className="text-lg font-bold mb-4">6. Ongoing Support</h3>
            <p>
              We offer ongoing support and maintenance to keep your website updated, secure, and
              performing at its best. We're here to help as your business grows and evolves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
