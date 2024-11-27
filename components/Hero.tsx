// *********************
// Role of the component: Classical hero component on home page with animations
// Name of the component: Hero.tsx
// Developer: Nathnael Kassa
// Version: 1.1
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices, animated
// *********************
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-blue-500 max-lg:h-[900px] max-md:h-[750px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10"
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          className="flex flex-col gap-y-5 max-lg:order-last col-span-2"
        >
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            THE PRODUCT OF THE FUTURE
          </h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white max-sm:text-sm"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi
            iure laudantium necessitatibus ab, voluptates vitae ullam. Officia
            ipsam iusto beatae nesciunt, consequatur deserunt minima maiores
            earum obcaecati. Optio, nam!
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1"
          >
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
              BUY NOW
            </button>
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
              LEARN MORE
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          <Image
            src="/lock banner.png"
            width={400}
            height={400}
            alt="smart watch"
            className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
