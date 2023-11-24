import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full overflow-hidden">
        <p className="text-pink-600 text-2xl">Hi, my name is</p>
        <motion.h1
          className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
          initial={{
            x: "-100vw",
            // opacity: 0,
          }}
          animate={{
            x: 0,
            // opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 1.5,
          }}
        >
          Abdus Shakir.
        </motion.h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Front End Developer.
        </h2>
        <p className=" text-gray-400 text-lg py-4 max-w-[700px]">
          I am a front-end developer with a strong passion for front-end web
          development, particularly focusing on React.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            Explore My Works
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
