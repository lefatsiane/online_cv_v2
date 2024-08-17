/* eslint-disable */

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-orange-500 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold  ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
              Hello World, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Lefa",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Web Developer",
                3000,
                "A SEO Pro",
                3000,
                "An UI/UX Designer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl text-base ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div>
            <button className="px-6 py-3 rounded-full w-fit sm:w-fit mr-4 bg-gradient-to-br  from-orange-500 via-red-500 to-yellow-500 hover:bg-purple-800  ">
              Hire Me{" "}
            </button>
            <button className="px-1 py-1 rounded-full w-fit sm:w-fit bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500  hover:bg-purple-800 lg:bg-transparent ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                {" "}
                Download CV{" "}
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 rounded-full bg-[#1f1f1f] animate-pulse"></div>
            <Image
              src="/images/mainImg.JPG"
              alt="something"
              width={300}
              height={300}
              className="absolute transform rounded-full w-[200px] lg:w-[350px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>

          {/* <div className=" relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] animate-pulse ">
            <Image
              src="/images/mainImg.JPG"
              alt="something"
              width={300}
              height={300}
              className=" absolute transform rounded-full w-[200px] lg:w-[350px]  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " 
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
