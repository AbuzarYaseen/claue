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
import { Dropdown, Space, Typography, Menu, MenuProps } from "antd"; // Import Menu
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null); // Track user state
  const router = useRouter();
  const pathname = usePathname();

  const renderHome = () => {
    router.push("/home");
  };

  const handleCartClick = () => {
    console.log("Cart clicked");
    // Add cart functionality if needed
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
          <div className="relative inline-block">
            <CiShoppingCart
              size={30}
              className="hover:cursor-pointer"
              onClick={handleCartClick}
              aria-label="Shopping Cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
