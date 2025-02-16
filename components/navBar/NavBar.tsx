"use client";

import React, { useState } from "react";
import Image from "next/image";
import navLinks from "@/json/navLinks/navlinks";
import Link from "next/link";
import logo from "@/public/assests/logo_claue_1.png";
import { CiShoppingCart } from "react-icons/ci";
import { useRouter, usePathname } from "next/navigation";
import { trendingItems } from "@/json/home/homeData";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography, Menu, MenuProps, message } from "antd"; // Import Menu
import { HiMenuAlt3 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null); // Track user state
  const router = useRouter();
  const pathname = usePathname();

  const cart = useSelector((state: any) => {
    return state.cart.count;
  });

  const renderHome = () => {
    router.push("/home");
  };

  const handleCartClick = () => {
    console.log("Cart clicked");
    // Add cart functionality if needed
    if (cart === 0) {
      message.error("Cart is empty.");
    } else {
      router.push("/cart-details");
    }
  };

  // Extract unique categories
  const categories = Array.from(new Set(trendingItems.map((item) => item.cat)));

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <button className="text-gray-700 hover:text-red-300">Man</button>,
    },
    {
      key: "2",
      label: (
        <button className="text-gray-700 hover:text-red-300">Child</button>
      ),
    },
    {
      key: "3",
      label: (
        <button className="text-gray-700 hover:text-red-300">Watches</button>
      ),
    },
    {
      key: "4",
      label: (
        <button className="text-gray-700 hover:text-red-300">Footwear</button>
      ),
    },
  ];
  return (
    <div className="mx-auto xl:mx-10 my-8">
      <div className="flex justify-between py-4 items-center border-b mt-8 px-5 md:px-10 mx-auto max-w-screen-2xl">
        <HiMenuAlt3
          size={30}
          className="lg:hidden cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        />
        {/* Logo */}
        <div className="flex-grow text-center lg:flex-grow-0">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Logo"
            onClick={renderHome}
            className="hover:cursor-pointer"
          />
        </div>

        {/* Navbar Links */}
        <div className="hidden lg:flex">
          <ul className="flex flex-row space-x-14">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`cursor-pointer font-bold relative xl:text-lg ${
                  pathname === link.url ? "text-red-400" : "hover:text-red-300"
                }`}
              >
                {link.label === "Categories" ? (
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>Categories</Space>
                    </a>
                  </Dropdown>
                ) : (
                  <Link href={link.url} className="xl:text-[18px]">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Icons */}
        <div className="flex w-36 justify-end space-x-4 md:w-36 md:gap-3">
          {/* <CiSearch size={30} className="hover:cursor-pointer" /> */}

          <div className="relative inline-block">
            <CiShoppingCart
              size={30}
              className="hover:cursor-pointer "
              onClick={handleCartClick}
            />
            {cart > 0 ? (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center xl:text-[17px]">
                {cart}
              </span>
            ) : null}
          </div>
        </div>

        {/* Side Drawer for Mobile and Tablet */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`} // Show on mobile and tablet
        >
          <div className="flex justify-between items-center p-4">
            <Image src={logo} width={80} height={80} alt="Logo" />
            <AiOutlineClose
              size={30}
              className="cursor-pointer"
              onClick={() => setDrawerOpen(false)}
            />
          </div>
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.id} className="text-lg font-bold">
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
