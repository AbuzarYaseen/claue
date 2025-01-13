"use client";
import { useState } from "react";
import { useParams } from "next/navigation"; // Use useParams from next/navigation
import { trendingItems } from "@/json/home/homeData";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import StarRating from "@/lib/StartRating";

const ProductDetails = ({}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const params = useParams(); // Get the dynamic params from the URL
  const { id } = params; // Extract the id

  // Find the product using the dynamic ID from the URL
  const product = trendingItems.find((item) => item.id === parseInt(id));

  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(product.images[0].image);

  // Handle cases where the product is not found
  if (!product) {
    return <p>this is testing {id}</p>;
  }

  const handleIncrement = () => {
    console.log("plus clicked");
  };

  const handleDecrement = () => {
    console.log("minus clicked");
  };

  const handleAddToCartButtonClick = (product) => {
    console.log("add to cart");
  };

  return (
    <div className=" mx-auto xl:mx-10 my-8 ">
      <div className="flex flex-col md:flex-row md:gap-8 px-5 md:px-10 xl:w-full max-w-screen-2xl m-auto">
        <div className="flex flex-col  mt-4 ">
          <Image
            width={500}
            height={300}
            src={selectedImage}
            alt={product.itemName}
          />
          {/* Thumbnails */}
          <div className="mt-8 flex space-x-2">
            {product.images.map((image, index) => (
              <Image
                key={index}
                width={120}
                height={120}
                src={image.image}
                alt={`${product.itemName} - ${index + 1}`}
                onClick={() => setSelectedImage(image.image)}
                className={`cursor-pointer min-w-9 w-24 md:w-32  ${
                  selectedImage === image.image
                    ? "border-2 border-blue-500"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className="md: pt-2">
          <h1 className="text-[14px] mt-2 md:mt-4 md:text-2xl xl:text-4xl  font-bold">
            {product.itemName}
          </h1>
          <p className="mt-2 md:mt-4 text-xs md:text-sm">
            Price: $ <span className="font-semibold"> {product.price}</span>
          </p>
          {/* <p className="mt-2 md:mt-4 text-xs md:text-sm">
            Rating: {product.rating}
          </p> */}
          <StarRating rating={parseFloat(product.rating)} />

          {/* Ordered List for brief description */}
          <ol className="list-disc ml-5 mt:2 md:mt-4">
            {product.brief_desc.map((desc, index) => (
              <li key={index} className="mt-2 text-xs md:text-sm">
                {desc}
              </li>
            ))}
          </ol>
          <p className="mt:2 md:mt-4 text-xs md:text-sm">
            {product.desc || "No description available"}
          </p>

          {/* Increment/Decrement Buttons */}
          <div className="flex items-center mt-4 gap-3 md:gap-6">
            <div className="flex items-center gap-5 justify-center border xl:px-10 xl:rounded-full border-gray-500  px-2 rounded-3xl py-1">
              <FaMinus
                className="hover:cursor-pointer hover:text-hovered-color"
                onClick={handleDecrement}
                size={12}
              />
              <span className="font-semibold text-xs md:text-sm">{0}</span>
              <FaPlus
                className="hover:cursor-pointer hover:text-hovered-color"
                onClick={handleIncrement}
                size={12}
              />
            </div>
            <div>
              <button
                className=" font-semibold text-xs md:text-sm xl:px-10 xl:rounded-full py-2 bg-hovered-color hover:bg-black text-white rounded-3xl md:font-bold p-2 px-5"
                onClick={() => handleAddToCartButtonClick(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
