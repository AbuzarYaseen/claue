"use client";
import React, { useState } from "react";
import { trendingItems } from "@/json/home/homeData";
import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import StarRating from "@/lib/StartRating";

const Trending = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  // Function to handle product hover
  const handleHover = (itemId: any) => {
    setHoveredProductId(itemId);
    // console.log("hover testing", itemId);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleAddToCartButtonClick = (item: any) => {
    console.log("Item added to cart.", item);
  };

  return (
    <>
      <div className=" mx-auto xl:mx-10 my-8 ">
        <div className="w-full  mt-8 px-5 md:px-10 xl:w-full mx-auto max-w-screen-2xl">
          <div className="mt-8">
            <span className="flex justify-center flex-col items-center">
              <h1 className="font-bold text-xs mt-5 md:text-xl xl:text-2xl">
                TRENDING
              </h1>
              <p className="italic text-[#777977] xl:text-xl">
                Top view in this week
              </p>
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 gap-4 ">
              {trendingItems.slice(0, 8).map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col relative hover:cursor-pointer"
                    onMouseEnter={() => handleHover(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Show cart icon only on mobile screens */}
                    <button
                      className="absolute top-2 right-2 md:hidden bg-white text-black hover:bg-black hover:text-white rounded-full p-2"
                      onClick={() => handleAddToCartButtonClick(item)}
                    >
                      <CiShoppingCart
                        size={25}
                        className="hover:cursor-pointer "
                      />
                    </button>
                    {/* Show "Add to Cart" button on hover for larger screens */}
                    {hoveredProductId === item.id && (
                      <>
                        <button
                          className="hidden md:block absolute top-28 font-semibold text-xs xl:text-sm left-7 md:top-1/2 md:left-12  lg:left-1/3 xl:left-1/4 bg-white text-black hover:bg-hovered-color hover:text-white rounded-3xl  p-2 px-4"
                          onClick={() => handleAddToCartButtonClick(item)}
                        >
                          Add to cart
                        </button>
                      </>
                    )}
                    <Link href={`/product-details/${item.id}`} key={item.id}>
                      <Image
                        width={340}
                        height={300}
                        src={item.url}
                        alt="product"
                      />
                      <p className="mt-3 text-xs xl:text-sm md:font-bold">
                        {item.itemName}
                      </p>
                      <p className="text-xs xl:text-sm">$ {item.price}</p>
                      {/* <p className="text-xs xl:text-sm">{item.rating}⭐</p> */}
                      <StarRating rating={parseFloat(item.rating)} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:justify-between h-72 gap-4">
            <div className="md:w-2/4 h-full  overflow-hidden">
              <div className="divImg1  flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
                <h1 className="font-bold text-white text-[30px]">
                  LOOKBOOK 2023
                </h1>
                <h1 className="font-bold text-white text-[17px]">
                  MAKE LOVE THIS BOOK
                </h1>
              </div>
            </div>
            <div className="md:w-2/4  h-full overflow-hidden">
              <div className="divImg2 flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
                <h1 className="font-bold text-white text-[20px] ">
                  SUMMER SALE
                </h1>
                <h1 className="font-bold text-white text-[40px] ">UP TO 70%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
