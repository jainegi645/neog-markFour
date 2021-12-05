import React from "react";

function Blogs() {
  return (
    <div className="contentBg ">
      <section className="text-white body-font overflow-hidden ">
        <div className="container px-5 py-20 mx-auto">
          <h2 className="customTextColor max-w-md  font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none mb-14 xl:max-w-lg">
            Blogs
          </h2>
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap ">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font customTextColor">
                  CATEGORY
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  Front-end Framework
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium customTextColor2 title-font mb-2">
                  Next.js Over Plain React
                </h2>
                <p className="leading-relaxed customTextColor3">
                  Next.js is a framework created by Vercel ,an open-source based
                  on Node js. Next.js is a meta-framework of React Web
                  technologies had came accross server-side rendering using PHP
                  then Client-side rendering using React and now back to its
                  origin phase using Next js which provides the best of Both
                  client-side and server-side rendering world.
                </p>
                <a
                  href="https://jainegi.hashnode.dev/nextjs-over-plain-react"
                  target="_blank"
                  className="customTextColor inline-flex items-center mt-4"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="customTextColor font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  Css Framework
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium customTextColor2 title-font mb-2">
                  The Rise of Tailwind Css
                </h2>
                <p className="leading-relaxed customTextColor3">
                  According to official documentation, Tailwind is a
                  utility-first CSS framework packed with classes that can be
                  composed to build any design, directly in your markup.
                  Tailwind is highly customizable and makes your design easy to
                  implement without putting too much effort into CSS. you can
                  style your whole page without ever leaving your Html file. It
                  comes with the most commonly used CSS property and the color
                  pallets that are so easy to use.
                </p>
                <a
                  href="https://jainegi.hashnode.dev/rise-of-tailwind"
                  target="_blank"
                  className="customTextColor inline-flex items-center mt-4"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
