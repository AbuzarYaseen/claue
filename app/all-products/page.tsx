"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { trendingItems } from "@/json/home/homeData";
import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const page = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  console.log("testing sku", trendingItems);

  // Function to handle product hover
  const handleHover = (itemId: any) => {
    setHoveredProductId(itemId);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleAddToCartButtonClick = (item: any) => {
    console.log("Item added to cart.", item);
  };

  return (
    <div className="mx-auto xl:mx-10 my-8">
      <div className="mt-8 px-5 md:px-10 mx-auto max-w-screen-2xl">
        <span className="flex justify-center flex-col items-center">
          <h1 className="font-bold text-[14px] mt-5 mb-5 md:text-xl xl:text-2xl">
            All Products
          </h1>
          <p className="text-[14px] xl:text-xl">
            Go sporty this summer with this vintage navy and white striped
            v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing
            with denim and white kicks for a stylish sporty vibe. Will fit a UK
            8-10, model shown is a UK 8 and 5’5. Typography is the work of
            typesetters, compositors, typographers, graphic designers, art
            directors, manga artists, comic book artists, graffiti artists, and
            now—anyone who arranges words, letters, numbers, and symbols for
            publication, display, or distribution—from clerical workers and
            newsletter writers to anyone self-publishing materials.
          </p>
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 gap-4">
          {trendingItems.map((item) => {
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
                  <CiShoppingCart size={25} className="hover:cursor-pointer " />
                </button>
                {/* Show "Add to Cart" button on hover for larger screens */}
                {hoveredProductId === item.id ? (
                  <>
                    <button
                      className="hidden md:block absolute top-28 font-semibold text-[14px] xl:text-xl left-7 md:top-1/2 md:left-12 lg:left-1/3 xl:left-1/4 bg-white text-black hover:bg-black hover:text-white rounded-3xl md:font-bold p-2 px-4"
                      onClick={() => handleAddToCartButtonClick(item)}
                    >
                      Add to cart
                    </button>
                  </>
                ) : null}
                <Link href={`/product-details/${item.id}`} key={item.id}>
                  <Image
                    width={340}
                    height={300}
                    src={item.url}
                    alt="product"
                  />
                  <p className="mt-3 text-[14px] xl:text-xl md:font-bold">
                    {item.itemName}
                  </p>
                  <p className="text-[14px] xl:text-xl">{item.price}</p>
                  <p className="text-[14px] xl:text-xl">{item.rating}⭐</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
