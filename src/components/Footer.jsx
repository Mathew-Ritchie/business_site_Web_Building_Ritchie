import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "../App.css"; // You'll need to create this CSS file
import speechBubble from "../assets/speech-bubble.png";

export default function Footer() {
  return (
    <div
      id="contact-us"
      className="bg-gray-800 footer-container w-full h-screen relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* <div
        className="bg-color-gray-800 absolute inset-0 -z-10 bg-no-repeat bg-left bg-fixed bg-top-20-percent"
        style={{
          backgroundImage: `url(${speechBubble})`,
          backgroundSize: "45%", // Keep size inline since it's a specific percentage
        }}
      ></div> */}
      <div className="w-full p-10 rounded-2xl flex flex-col md:flex-row justify-center md:justify-center items-center  md:gap-5 lg:gap-15 text-white z-10">
        <img src={speechBubble} className="w-90" />
        <div className="flex flex-col items-start justify-center md:items-start text-left gap-3 md:gap-5 mr-10">
          {/* Phone Number */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#00cccc"
            >
              <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" />
            </svg>
            <p>+27 82 853 3541</p>
          </div>

          {/* Email Address */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#00cccc"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <p>
              <a href={"mailto:mathew.j.ritchie@gmail.com"}> mathew.j.ritchie@gmail.com</a>
            </p>
          </div>

          {/* Physical Address */}
          <div className=" flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#00cccc"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <div>
              <p>Hout Bay, Cape Town</p>
            </div>
          </div>
        </div>
        {/* <div className="md:flex flex-col items-start hidden">
          <p className="global-accent-text font-bold">Quick Links</p>
        </div> */}
      </div>
      <div className="flex flex-col justify-center items-center gap-5 pt-5 global-accent-text z-10">
        <p className="text-xl">Why not follow us?</p>
        <a href="https://www.linkedin.com/in/mathew-ritchie-802a9114b/" target="_blank">
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
    </div>
  );
}
