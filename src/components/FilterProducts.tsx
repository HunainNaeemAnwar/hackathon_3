"use client";
import {
  RiArrowDropRightLine,
  RiArrowDropUpLine,
  RiArrowDropDownLine,
} from "react-icons/ri";
import Link from "next/link";
import React, { useState } from "react";
import ColorSelector from "./ColorSelector";
import { Filter } from "lucide-react";
import SizeSelector from "./SizeSelector";

const colors = ["Red", "Blue", "Green", "orange"];
const sizes = ["S", "M", "L", "XL"];

const FilterProducts = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isFilterVisible, setFilterVisible] = useState(true);
  const [sections, setSections] = useState<{
    category: boolean;
    price: boolean;
    color: boolean;
    size: boolean;
    style: boolean;
  }>({
    category: true,
    price: true,
    color: true,
    size: true,
    style: true,
  });

  const toggleSection = (section: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName); // Update selected color state
  };

  return (
    <div className="px-2 col-span-2 min-h-max">
      {/* Filter icon for small screens */}
      <button
        className="md:hidden flex items-center gap-2 px-4 py-2 bg-black text-white font-Satoshi rounded"
        onClick={() => setFilterVisible(!isFilterVisible)}
      >
        <Filter className="w-6 h-6" />
        Filters
      </button>

      {/* Filter menu */}
      {isFilterVisible && (
        <div className="md:grid grid-col-1 gap-8 hidden ">
          {/* Categories */}
          <div className="flex flex-col gap-4 border-b border-black border-opacity-30 text-[16px] font-SatoshiRegular">
            <div
              className="flex flex-row justify-between px-7 py-3 border-t border-b border-black border-opacity-30 cursor-pointer"
              onClick={() => toggleSection("category")}
            >
              <h3 className="font-SatoshiSatoshi text-[20px]">Filters</h3>
              {sections.category ? (
                <RiArrowDropUpLine className="w-6 h-6" />
              ) : (
                <RiArrowDropDownLine className="w-6 h-6" />
              )}
            </div>
            {sections.category && (
              <>
                {["TShirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
                  (item) => (
                    <div
                      className="flex flex-row justify-between px-6"
                      key={item}
                    >
                      <Link href={"/CategoryPagge"}>{item}</Link>
                      <RiArrowDropRightLine className="w-6 h-6" />
                    </div>
                  )
                )}
              </>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col text-[16px] font-SatoshiRegular border-b border-black border-opacity-30 py-4">
            <div
              className="flex justify-between font-SatoshiSatoshi text-[20px] cursor-pointer"
              onClick={() => toggleSection("price")}
            >
              <p>Price</p>
              {sections.price ? (
                <RiArrowDropUpLine className="w-6 h-6" />
              ) : (
                <RiArrowDropDownLine className="w-6 h-6" />
              )}
            </div>
            {sections.price && (
              <div className="flex flex-col">
                <input
                  type="range"
                  max={200}
                  min={10}
                  className="appearance-none cursor-pointer slider-thumb rounded-lg bg-black"
                  id="priceRange"
                />
                <div className="flex flex-row mt-3 justify-evenly">
                  <p>$20</p>
                  <p>$50</p>
                </div>
              </div>
            )}
          </div>

          {/* Colors */}
          <div className="text-[16px] font-SatoshiRegular border-b border-black border-opacity-30 pb-6">
            <div
              className="flex flex-row justify-between text-[20px] font-SatoshiSatoshi cursor-pointer"
              onClick={() => toggleSection("color")}
            >
              <p>Colors</p>
              {sections.color ? (
                <RiArrowDropUpLine className="w-6 h-6" />
              ) : (
                <RiArrowDropDownLine className="w-6 h-6" />
              )}
            </div>
            {sections.color && (
              <div>
                <ColorSelector
                  colors={colors}
                  selectedColor={selectedColor}
                  onColorSelect={handleColorSelect}
                />
              </div>
            )}
          </div>

          {/* Sizes */}
          <div className="flex flex-col border-b border-black border-opacity-30 pb-6 gap-6">
            <div
              className="flex flex-row justify-between text-[20px] font-SatoshiSatoshi cursor-pointer"
              onClick={() => toggleSection("size")}
            >
              <p>Size</p>
              {sections.size ? (
                <RiArrowDropUpLine className="w-6 h-6" />
              ) : (
                <RiArrowDropDownLine className="w-6 h-6" />
              )}
            </div>
            {sections.size && (
              <div className="   ">
                <SizeSelector sizes={sizes} />
              </div>
            )}
          </div>

          {/* Dressing Style */}
          <div className="grid grid-col-1">
            <div className="flex flex-col gap-4 text-[16px] font-SatoshiRegular">
              <div
                className="flex flex-row justify-between text-[20px] font-SatoshiSatoshi cursor-pointer"
                onClick={() => toggleSection("style")}
              >
                <h3>Dressing Style</h3>
                {sections.style ? (
                  <RiArrowDropUpLine className="w-6 h-6" />
                ) : (
                  <RiArrowDropDownLine className="w-6 h-6" />
                )}
              </div>
              {sections.style && (
                <>
                  {["Casual", "Formal", "Party", "Gym"].map((style) => (
                    <div
                      className="flex flex-row justify-between px-6"
                      key={style}
                    >
                      <Link href={"/CategoryPagge"}>{style}</Link>
                      <RiArrowDropRightLine className="w-6 h-6" />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterProducts;
