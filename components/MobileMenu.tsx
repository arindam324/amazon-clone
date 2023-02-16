import React, { useState } from "react";
import Link from "next/link";
import { XMarkIcon, HomeIcon } from "@heroicons/react/24/outline";

const MobileMenu: React.FC<{
  open: boolean;
  setIsOpen: (open: boolean) => void;
}> = ({ open, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!open);
  };

  return (
    <div className="flex space-x-3">
      <div
        className={`fixed top-0 left-0 w-[70%] h-screen z-50 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="bg-white h-full overflow-y-auto">
          <div className="container mx-auto">
            <div className="bg-gray-600 font-semibold p-2 pb-3 flex flex-col justify-end w-full h-40 text-white">
              <p className="text-xl">Browse</p>
              <p className="text-2xl">Amazon</p>
            </div>
            <div className="text-black">
              <Link href="/">
                <div className="flex px-2 font-semibold py-4 items-center justify-between">
                  <p className="text-xl">Amazon Home</p>
                  <HomeIcon className="h-6" />
                </div>
              </Link>
              <div className="w-full h-1 bg-gray-300" />
              <div className="px-4 py-2">
                <h2 className="text-xl font-semibold">Trending</h2>
                <div className="space-y-4 mt-4">
                  <p>Best Sellers</p>
                  <p>New Releases</p>
                  <p>Movers and Shakers</p>
                </div>
              </div>
              <div className="w-full h-1 bg-gray-300" />
              <div className="px-4 py-2">
                <h2 className="text-xl font-semibold">
                  Top Cattegories for you
                </h2>
                <div className="space-y-4 mt-4">
                  <p>Mobiles</p>
                  <p>Computers</p>
                  <p>Books</p>
                  <p>Amazon Fashion</p>
                  <p>See All categories</p>
                </div>
              </div>
              <div className="w-full h-1 bg-gray-300" />
              <div className="px-4 py-2">
                <h2 className="text-xl font-semibold">Programs & Features</h2>
                <div className="space-y-4 mt-4">
                  <p>Today's Deals</p>
                  <p>Amazon Pay</p>
                  <p>Try Prime</p>
                  <p>#FounditONAmazon</p>
                  <p>Sell on Amazon</p>
                  <p>Style Feed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="fixed top-0 right-0 m-6 text-gray-900 hover:text-gray-700 font-medium"
          onClick={toggleMenu}
        >
          <XMarkIcon className="h-10 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
