import React from "react";

const Connect = () => {
  return (
    <div name="contact" className="w-full ">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full pt-20 px-8">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Feel free to send me a message.</p>
        </div>
        <form
          method="POST"
          action="https://getform.io/f/63d1ea70-b498-4e54-a4a9-baa2df94a170"
          className="flex flex-col max-w-[600px] w-full pt-4"
        >
          <input
            className="bg-[#ccd6f6] focus:bg-white p-2 placeholder-gray-600 focus:placeholder-opacity-50 border-2 focus:border-pink-600 rounded-sm outline-none duration-300 "
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]  focus:bg-white placeholder-gray-600 focus:placeholder-opacity-50 border-2 focus:border-pink-600 rounded-sm outline-none duration-300 "
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6]  focus:bg-white p-2 placeholder-gray-600 focus:placeholder-opacity-60  focus:border-pink-600 border-2 rounded-sm  outline-none duration-300 "
            name="message"
            rows="8"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
