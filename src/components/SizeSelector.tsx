import React, { useState } from "react";

type SizeSelectorProps = {
  sizes: string[]; // Array of available sizes (e.g., ["S", "M", "L", "XL"])
};

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size); // Update the selected size
  };

  return (
    <div className="grid xl:grid-cols-5 grid-cols-4 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center  gap-y-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => handleSizeSelect(size)}
          className={`py-3 lg:w-20 w-20 md:w-16  rounded-full text-black  font-Satoshi transition-colors 
            ${selectedSize === size ? "bg-black text-white" : "bg-[#F0F0F0] hover:bg-gray-400 "}`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
