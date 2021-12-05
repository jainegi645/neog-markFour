import React from "react";

function Home() {
  return (
    <div className="bgImage bg-center">
      <main className=" relative overflow-hidden h-screen">
        <div className=" bg-cover h-screen flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-white mb-7"></span>
              <h1 className=" uppercase text-6xl sm:text-8xl font-bold flex leading-none text-white ">
                Jai
                <span className=" text-white font-bold pl-6 pb-4">Negi</span>
              </h1>
              <p className="sm:text-base customTextColor3 leading-relaxed text-base md:text-2xl mb-8 text-center md:text-left">
                welcome! myself Jai, I am a front-end developer.Currenlty
                exploring the front-end development environment, making projects
                along the way and flowing with the wind.
              </p>
              <div className=" mt-8">             
                <a
                  href="#"
                  className=" uppercase py-2 px-4 rounded-lg bg-transparent border-2 cutomOnHover text-white  hover:text-white text-md"
                >
                  Projects
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src="/images/object/10.png"
                className="max-w-xs md:max-w-sm m-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
