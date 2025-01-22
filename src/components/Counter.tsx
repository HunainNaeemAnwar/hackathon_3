"use client";
import React, { useState } from "react";

type CounterProps = {
  initialValue?: number; // Optional prop to set an initial value
};

const Counter: React.FC<CounterProps> = ({ initialValue = 1 }) => {
  const [quantity, setQuantity] = useState<number>(initialValue);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center justify-center relative bg-[#F0F0F0]  py-2 rounded-full ">
      <button
        onClick={handleDecrease}
        className="text-3xl  absolute left-3 hover:text-black  text-gray-500 md:left-2 lg:left-3 "
      >
        -
      </button>
      <span className="text-lg font-Satoshi">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="text-2xl absolute right-3 lg:px-2 md:right-2 lg:right-3 text-gray-500 hover:text-black "
      >
        +
      </button>
    </div>
  );
};

export default Counter;
