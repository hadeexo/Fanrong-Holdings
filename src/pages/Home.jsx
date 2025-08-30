import React from "react";
import { Hero } from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Subsidaries from "../components/Subsidaries";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Subsidaries />
      <Testimonials />
    </div>
  );
};

export default Home;
