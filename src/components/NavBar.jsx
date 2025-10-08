import React, { useState } from "react";
// The import for `next/a` has been removed as it is not available in this environment.
// Standard <a> tags are used instead for navigation.

export default function NavModalHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsServicesOpen(false);
    setIsGalleryOpen(false);
    setIsAboutUsOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);

    setIsGalleryOpen(false);
    setIsAboutUsOpen(false);
  };

  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);

    setIsServicesOpen(false);
    setIsAboutUsOpen(false);
  };

  const toggleAboutUs = () => {
    setIsAboutUsOpen(!isAboutUsOpen);

    setIsServicesOpen(false);
    setIsGalleryOpen(false);
  };

  return (
    <>
      {/* <div className="transparent-tech-grey w-screen h-10"></div> */}
      {/* Main header bar */}
      <div className="bg-gray-900/70 flex items-center justify-end p-2 text-white shadow-lg w-full fixed  z-30">
        {/* Hamburger menu button for sm/md screens */}
        <button
          className="lg:hidden text-white hover:text-gray-400 focus:outline-none p-2 rounded-md transition duration-300"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation for lg and up */}
        <nav className="hidden lg:flex items-center space-x-2 text-xl pr-5">
          <a
            href="#about-us"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200 text-shadow-xs text-shadow-neutral-700"
          >
            About Us
          </a>
          <a
            href="#our-packages"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200  text-shadow-xs text-shadow-neutral-700"
          >
            Our Services
          </a>
          <a
            href="#our-process"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200  text-shadow-xs text-shadow-neutral-700"
          >
            Our Process
          </a>
          <a
            href="#our-clients"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200  text-shadow-xs text-shadow-neutral-700"
          >
            Our Clients
          </a>
          <a
            href="#contact-us"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200  text-shadow-xs text-shadow-neutral-700"
          >
            Contact Us
          </a>
        </nav>
      </div>

      {/* Backdrop for the navigation modal. Closes the modal on click. */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleNav}
        aria-hidden={!isNavOpen}
      ></div>

      {/* Navigation modal content */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-xl transform transition-transform duration-300 z-50 lg:hidden ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Modal header with a close button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            className="text-white hover:text-gray-400 focus:outline-none p-2 rounded-md transition duration-300"
            onClick={toggleNav}
            aria-label="Close navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Modal navigation as */}
        <div className="flex flex-col justify-between items-start h-140">
          <nav className="p-4 space-y-2">
            {/* About Us Drop down */}
            <a
              href="#about-us"
              className="block p-2 hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              About Us
            </a>
            <a
              href="#our-packages"
              className="block p-2 hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              Our Services
            </a>
            <a
              href="#our-process"
              className="block p-2 hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              Our Process
            </a>
            <a
              href="#our-clients"
              className="block p-2 hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              Our Clients
            </a>
            <a
              href="#contact-us"
              className="block p-2 hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              Contact Us
            </a>
          </nav>
          {/* <div className="flex flex-col gap-2 pl-2">
            <div className="flex justify-start gap-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="var(--orange)"
              >
                <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" />
              </svg>
              <p>0119668056 / 0799556130</p>
            </div>
            <div className="flex justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="var(--orange)"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <p>
                <a href={"mailto:consult@maichatron.co.za"}> consult@maichatron.co.za</a>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
