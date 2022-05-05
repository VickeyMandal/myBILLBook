import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Plans from "../components/plans";
import Stats from "../components/stats";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      <div className="snap-y">
        <div>
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
        <div >
          <div className="h-1 w-56 bg-billOrange"></div>
          <div className="snap-start">
            <Stats />
          </div>
        </div>
        <div className="snap-start ">
          <Plans />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
