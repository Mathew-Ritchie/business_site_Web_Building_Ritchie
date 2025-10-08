// Packages.js (or your component file name)
import React from "react";
import packagesImage from "../assets/packages.png"; // Ensure path is correct

export default function OurServices() {
  return (
    <section
      id="our-packages"
      className="relative min-h-screen w-full flex flex-col items-center justify-center  overflow-hidden pt-20"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat -z-10" // Use absolute inset-0 for positioning within the section
        style={{
          backgroundImage: `url(${packagesImage})`,
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "60%",
          backgroundAttachment: "fixed", // Adjust size as needed
          // backgroundSize: 'contain', // 'contain' ensures the whole image fits without cropping
          // You might want to adjust this or use '50%' as before,
          // depending on how large you want the packages image to appear.
          // '50%' would make it half the width/height of the section.
          // backgroundAttachment: 'fixed', // If this component *itself* needs to scroll over a truly fixed background,
          // you'd use this. But if the background is part of THIS section, 'absolute' is fine.
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Services</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Choose from our range of packages tailored to meet your needs.
        </p>
      </div>
      <div className="mb-12">
        {" "}
        {/* Added margin-bottom to ensure content isn't hidden */}
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center justify-items-center">
          {/* Package 1 */}
          <div className="bg-white/90 p-6 px-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Website development</h3>
            <p>
              Bring your business online with a professional, modern website tailored to your needs.
              We create sites that look great, perform smoothly, and help you connect with clients.
            </p>
            <ul className="mb-4 list-disc text-left">
              <li>
                <strong>Custom Designs</strong> – Unique layouts that reflect your brand
              </li>
              <li>
                <strong>Responsive & Mobile-Friendly</strong> – Perfect on all devices
              </li>
              <li>
                <strong>Clear Navigation</strong> – Easy-to-use menus and smooth flow
              </li>
              <li>
                <strong>Content & Media Integration</strong> – Services, galleries, videos, and more
              </li>
              <li>
                <strong>Contact & Lead Features</strong> – Forms, click-to-call, and bookings
              </li>
              <li>
                <strong>SEO-Optimized</strong> – Built to get your business noticed online
              </li>
              <li>
                <strong>Fast & Secure</strong> – Quick-loading pages with SSL protection
              </li>
              <li>
                <strong>Post-Launch Support</strong> – Assistance to keep your site running smoothly
              </li>
            </ul>
          </div>

          <div className="bg-white/90 p-6 px-8  rounded-lg shadow-md ">
            <h3 className="text-lg font-bold">Search Engine Optimisation (SEO)</h3>
            <p>
              Get your business noticed online with SEO that drives traffic, generates leads, and
              grows your brand.
            </p>
            <ul className="mb-4 list-disc text-left">
              <li>
                <strong>Keyword Strategy</strong> – Find the terms your customers are searching for
              </li>
              <li>
                <strong>On-Page SEO</strong> – Optimize content, headings, meta tags, and images
              </li>
              <li>
                <strong>Technical SEO</strong> – Boost site speed, mobile usability, and security
              </li>
              <li>
                <strong>Local SEO</strong> – Help local customers find your business easily
              </li>
              <li>
                <strong>Content Optimization</strong> – Improve existing pages and create
                high-impact content
              </li>
              <li>
                <strong>Analytics & Reporting</strong> – Track performance and get actionable
                insights
              </li>
              <li>
                <strong>Ongoing SEO</strong> – Continuous improvements to maintain top rankings
              </li>
            </ul>
            <p>Let us help your business reach the right audience with SEO that works.</p>
          </div>
          <div className="bg-white/90 p-6 px-8  rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Hosting</h3>
            <p>
              Keep your website online, fast, and secure with our professional hosting services.
            </p>
            <ul className="mb-4 list-disc text-left">
              <li>
                <strong>Fast & Reliable</strong> – Quick loading times and consistent uptime
              </li>
              <li>
                <strong>Secure</strong> – SSL and security measures to protect your site
              </li>
              <li>
                <strong>Support</strong> – Expert help whenever you need it
              </li>
            </ul>
            <p>
              Let us handle the technical side, so your website is always secure, fast, and ready
              for your visitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
