"use client";
import React, { useRef } from "react";
import { blogData } from "@/json/blog/blog";
import Image from "next/image";
import { Carousel } from "antd";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useMediaQuery } from "react-responsive";

const Blog = () => {
  const carouselRef = useRef<any>(null); // Ref for the Carousel
  const isMobile = useMediaQuery({ maxWidth: 425 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet (641px to 1024px)
        settings: {
          slidesToShow: 2, // Show 4 images on tablet
        },
      },
      {
        breakpoint: 640, // Mobile (up to 640px)
        settings: {
          slidesToShow: 1, // Show 2 images on mobile
        },
      },
    ],
  };
  return (
    <div className=" mx-auto xl:mx-10 my-8 ">
      <div className="mt-8 px-5 md:px-10 mx-auto max-w-screen-2xl">
        <span className="flex justify-center flex-col items-center">
          <h1 className="font-bold text-[14px] mt-5 md:text-xl xl:text-2xl">
            LATEST FROM BLOG
          </h1>
          <p className="italic text-[#777977] xl:text-xl">
            The freshest and most exciting news
          </p>
        </span>
        <div className="flex gap-3 justify-end my-3">
          <button
            onClick={() => carouselRef.current?.prev()}
            className="bg-secondary-color hover:bg-red-300 text-white  lg:p-1 rounded-full "
          >
            <MdOutlineKeyboardArrowLeft size={isMobile ? 25 : 30} />
          </button>
          <button
            onClick={() => carouselRef.current?.next()}
            className=" bg-secondary-color hover:bg-red-300 text-white  lg:p-1 rounded-full "
          >
            <MdKeyboardArrowRight size={isMobile ? 25 : 30} />
          </button>
        </div>
        <div className="overflow-y-hidden overflow-x-hidden ">
          <Carousel {...settings} ref={carouselRef}>
            {blogData.map((data) => {
              return (
                <div className="px-2">
                  <Image src={data.url} alt="image" />
                  <h2 className="xl:text-xl">{data.title}</h2>
                  <p className="text-[#777977] text-xs lg:text-sm font-semibold">
                    {data.writter}
                  </p>
                  <p className="text-[#777977] text-xs lg:text-sm leading-6">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Blog;
