import React from "react";
import mathew from "../assets/me.jpeg";

export default function AboutMe() {
  return (
    // Updated background color to a light gray (neutral-50) and added padding for visual breathing room
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-50 py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Updated text color to a deep charcoal gray (neutral-800) */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-12 text-center text-neutral-800">
          Who you will be working with
        </h1>

        {/* Modernized layout: gap, alignment, and maximum width for readability */}
        <div className="flex flex-col md:flex-row justify-center items-start mt-8 mx-auto max-w-6xl gap-12 text-neutral-700">
          {/* Image Container */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-end">
            {/* Updated image styling: A specific size, rounded-xl, and a slight shadow */}
            <img
              className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl shadow-xl"
              src={mathew}
              alt="Mathew"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* NOTE: **Mathew** replaced with <strong>Mathew</strong> */}
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              I am <strong>Mathew</strong>, a dedicated web developer with a passion for creating
              beautiful and functional websites. With a creative mind and a keen eye for detail, I
              strive to deliver exceptional results that exceed client expectations.
            </p>
            {/* NOTE: **Code Space Academy** and skills replaced with <strong>...</strong> */}
            <p className="text-lg sm:text-xl leading-relaxed">
              My web development journey began at <strong>Code Space Academy</strong>, where I honed
              my skills in
              <strong> HTML, CSS, JavaScript, and React</strong>, which are all important tools for
              building modern and dynamic websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
