import React from "react";
import Banner from "./bannerComponent/Banner";
import Hero from "./heroComponent/Hero";
import Trending from "./trending/Trending";
import BestSelling from "./bestSelling/BestSelling";
import Blog from "./blogComponent/Blog";
import Social from "./socialMedia/Social";
import Support from "./supportComponent/Support";

const HomeCom = () => {
  return (
    <>
      <Banner />
      <Hero />
      <Trending />
      <BestSelling />
      <Blog />
      <Social />
      <Support />
    </>
  );
};

export default HomeCom;
