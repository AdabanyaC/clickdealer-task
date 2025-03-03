import React from "react";
import Promotions from "./components/Promotions";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-6 md:py-8 lg:py-10">
      <Navbar />
      <Hero />
      <Promotions />
      <Footer />
    </div>
  );
};

export default App;
