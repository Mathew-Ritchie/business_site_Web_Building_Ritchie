// Packages.js (or your component file name)
import React from "react";
import packagesImage from "../assets/packages.png"; // Ensure path is correct

export default function Packages() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center  overflow-hidden">
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
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Packages</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Choose from our range of packages tailored to meet your needs.
        </p>
      </div>
      <div className="mb-12">
        {" "}
        {/* Added margin-bottom to ensure content isn't hidden */}
        <div className="container mx-auto px-4 grid grid-cols-[350px] md:grid-cols-3 gap-8 text-center justify-items-center">
          {/* Package 1 */}
          <div className="bg-white/90 p-6 px-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Single-page</h3>
            <ul className="mb-4 list-disc text-left">
              <li>Single, long-scrolling page split into sections</li>
              <li>
                Sections: Hero/Header, About Us/Services Summary, Contact Form, and one other
                section (like a small Gallery or Testimonial section).
              </li>
              <li>Sticky navigation/menu that scrolls to different sections of the same page.</li>
              <li>Mobile-Responsive Design.</li>
              <li>Client's Logo integration, Favicon setup.</li>
              <li>Standard SSL certificate services varying on hosting plan.</li>
              <li>Basic SEO setup (title tag, meta description)</li>
            </ul>
          </div>
          {/* Package 2 */}
          <div className="bg-white/90 p-6 px-8  rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Four-page</h3>
            <ul className="mb-4 list-disc text-left">
              <li>Includes all features in the single page site</li>
              <li>Mid sized option where multiple pages are required.</li>
              <li>4 distinct pages (e.g., Home, About, Services/Products, Contact).</li>
              <li>
                Dedicated About Us page with detailed company info, Dedicated Services or Products
                page.
              </li>
              <li>
                Enhanced customization, inclusion of a Photo Gallery or Portfolio page/section.
              </li>
              <li>
                Basic copywriting refinement (editing and structuring client's provided text for web
                readability).
              </li>
              <li>Enhanced SEO setup (page-specific titles, image alt-tags on all pages).</li>
              <li>Integration with Google Analytics or similar tracking tool.</li>
            </ul>
          </div>
          {/* Package 3 */}
          {/* <div className="bg-white/90 p-6 px-8  rounded-lg shadow-md">
            <h3 className="text-lg font-bold">six-page</h3>
            <ul className="mb-4 list-disc text-left">
              <li>Multi page site with blog option.</li>
              <li>
                6 distinct pages (e.g., Home, About, Services, Contact, Blog, Privacy Policy/Terms).
              </li>
              <li>
                Full Blog section with a dedicated main page, individual post templates, and
                categories/tags.
              </li>
            </ul>
          </div> */}
        </div>
        <div>
          <div className="container flex flex-col md:flex-row justify-center items-center mt-8 mx-auto px-4 gap-8 text-center ">
            <div className="bg-white/90 p-6 px-8  rounded-lg shadow-md w-[350px]">
              <h3 className="text-lg font-bold">Search Engine Optimisation (SEO)</h3>
              <ul className="mb-4 list-disc text-left">
                <li>Multi page site with blog option.</li>
                <li>Addition of a dedicated blog/news page.</li>
                <li>Perfect for the business that would like to send out updates and news.</li>
              </ul>
            </div>
            <div className="bg-white/90 p-6 px-8  rounded-lg shadow-md w-[350px]">
              <h3 className="text-lg font-bold">Hosting</h3>
              <ul className="mb-4 list-disc text-left">
                <li>Multi page site with blog option.</li>
                <li>Addition of a dedicated blog/news page.</li>
                <li>Perfect for the business that would like to send out updates and news.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
