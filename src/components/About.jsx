import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 self-center gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-1">
          <div className=" sm:text-right text-2xl md:text-4xl font-bold px-2">
            <p> Hi again!</p>
            <p> Here is a little bit of me and my journey into web dev.</p>
          </div>
          <div>
            <p className="md:text-xl px-2">
              My journey into the realm of technology began when I pursued a
              Masters degree in Data Science at the University of Greenwich.
              Although I enrolled in the program with high hopes and
              expectations, I soon realized that my true passion lay in a
              different domain. It was during the course, particularly through
              the web development module, that I discovered my profound interest
              in front-end development, as I have always loved the idea of
              creating something new. I am currently trying to master ReactJS. I
              have a passion for learning latest tools and technologies that
              will make my works smoother and easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
