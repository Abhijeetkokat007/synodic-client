import React from "react";
import bgimage from "../../components/Navbar/images/background1.jpg";
import ellipse from "../../assets/images/Ellipse 21.png";

import Activtiy from "../../components/Activity/Activtiy";
import Navbar from "./../../components/Navbar/Navbar"
import Footer from "./../../components/Footer/Footer"
function Home() {
  return (
    <>
    <Navbar/>
      <div className="h-screen w-full relative flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={bgimage}
            alt="background"
          />
        </div>

        {/* Left Side Text */}
        <div className=" relative left-10 lg:left-20 xl:left-28 text-white z-10  w-[450px] h-[301px] mb-18  gap-0">
          <div className="bg-opacity-10 p-8 rounded-lg">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter font-titillium text-[50px] leading-[75.97px]">
              WHAT COULD <br /> B≡ HIGHER THAN <br /> THE SKY
            </h1>
            <p className="mt-4 text-lg">The only space!</p>

            {/* Ellipse with Read More button */}
            <div className="flex items-center mt-14">
              <div className="w-[48.14px] h-[48.14px] flex-row  ml-52 relative">
                <img
                  className="w-full h-full object-cover"
                  src={ellipse}
                  alt="ellipse"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs ml-6 whitespace-nowrap">
                  Read more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Activtiy />
      <Footer/>
    </>

  );
}

export default Home;
