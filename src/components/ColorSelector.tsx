import React from "react";

type ColorSelectorProps = {
  colors: string[]; // Array of hex color codes (e.g., ["#000000", "#FFFFFF"])
  selectedColor: string | null; // Currently selected hex color code
  onColorSelect: (colorCode: string) => void; // Callback function to handle color selection
};

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  onColorSelect,
}) => {
  return (
    <div className="flex items-center justify-start gap-4">
      {colors.map((colorCode) => (
        <div
          key={colorCode}
          className="relative w-10 h-10 rounded-full cursor-pointer border border-black border-opacity-40"
          style={{ backgroundColor: colorCode }} // Apply hex color directly
          onClick={() => onColorSelect(colorCode)} // Pass the hex code to the callback
        >
          {selectedColor === colorCode && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 rounded-full border-1 border-black border-opacity-30">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorSelector;
