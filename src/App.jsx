import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Connect from "./components/Connect";

const App = () => {
  return (
    <div className="bg-[#0a192f] px-4">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Connect />
    </div>
  );
};

export default App;
