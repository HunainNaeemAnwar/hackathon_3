"use client";
import React, { useState } from "react";
import Image from "next/image";
import getStarRating from "@/components/Rating";
import ColorSelector from "@/components/ColorSelector";
import SizeSelector from "@/components/SizeSelector";
import Counter from "@/components/Counter";
import Tabs from "@/components/Tabs";
import { urlFor } from "@/sanity/lib/image";

const ProductDetails = ({ productDetails }: any) => {
  // Set the first image as the selected image by default
  const [selectedImage, setSelectedImage] = useState<string>(
    urlFor(productDetails?.images[0]).url() // Assuming images is an array
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName); // Update selected color state
  };

  return (
    <div className="flex flex-col gap-6 mx-auto mt-20">
      {/* Product Details Section */}
      <div className="w-full grid grid-cols-1 py-6  md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="px-10 h-[600px] relative">
          {productDetails.images.map((img: any, index: number) => {
            // Get the image URL
            const imageUrl = urlFor(img).url();

            // Filter out the selected image from the images list
            const filteredImages = productDetails.images.filter(
              (image: any) => urlFor(image).url() !== selectedImage
            );

            return (
              <div
                key={index}
                className="grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 absolute top-0 left-0 w-full h-full place-content-center place-items-center"
              >
                {/* Non-selected images (medium screen) */}
                <div className="lg:flex flex-row md:flex-col gap-6 xl:gap-12 lg:col-span-1 lg:row-span-3 hidden">
                  {filteredImages.map((img: any, idx: number) => {
                    const filteredImageUrl = urlFor(img).url();
                    return (
                      <div
                        key={idx}
                        className="relative lg:w-20 lg:h-20 xl:w-24 xl:h-24 hover:border-2 border-black rounded-2xl"
                      >
                        <Image
                          src={filteredImageUrl}
                          layout="fill"
                          alt={`Option ${idx + 1}`}
                          onClick={() => setSelectedImage(filteredImageUrl)}
                          className="cursor-pointer absolute rounded-2xl"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Display the selected image */}
                <div className="col-span-3 row-span-3">
                  <div className="relative xl:w-96 xl:h-96 h-72 w-72">
                    <Image
                      src={selectedImage}
                      layout="fill"
                      alt="Selected Product Image"
                      className="absolute rounded-2xl"
                    />
                  </div>
                </div>

                {/* Non-selected images (mobile screen) */}
                <div className="flex flex-row gap-5 col-span-1 row-span-1 lg:hidden">
                  {filteredImages.map((img: any, idx: number) => {
                    const filteredImageUrl = urlFor(img).url();
                    return (
                      <div key={idx} className="relative w-20 h-20">
                        <Image
                          src={filteredImageUrl}
                          layout="fill"
                          objectFit="cover"
                          alt={`Option ${idx + 1}`}
                          onClick={() => setSelectedImage(filteredImageUrl)}
                          className="cursor-pointer absolute rounded-2xl"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4 px-6 md:pt-7 lg:pt-20 xl:p-10">
          <div className="font-Integral text-4xl">{productDetails.title}</div>
          <div className="flex">
            <span>{getStarRating(productDetails.ratings)}</span>
            <p>{`${productDetails.ratings}/5`}</p>
          </div>
          <div className="flex gap-5 items-center justify-start">
            <p className="text-3xl font-medium font-Satoshi">{`$${productDetails.price}`}</p>
            <p className="text-3xl font-medium line-through opacity-30 font-Poppins">
              {productDetails.oldprice ? `$${productDetails.oldprice}` : ""}
            </p>
            <span className="text-lg font-medium font-Satoshi bg-[#FF33331A] text-[#FF3333] px-4 rounded-full">
              {productDetails.oldprice
                ? `-${Math.floor(
                    ((productDetails.oldprice - productDetails.price) /
                      productDetails.oldprice) *
                      100
                  )} %`
                : ""}
            </span>
          </div>
          <div className="font-Satoshi text-sm opacity-70">
            {productDetails.description}
          </div>

          <div className="w-full h-[1px] bg-black opacity-30"></div>

          <div className="flex items-center justify-start font-Satoshi opacity-70">
            <p>Select Color</p>
          </div>
          <div className="flex items-center justify-start gap-4 md:gap-2 lg:gap-4">
            <ColorSelector
              colors={productDetails.colors} // Pass the color names array
              selectedColor={selectedColor} // Pass selected color
              onColorSelect={handleColorSelect} // Pass the selection handler
            />
          </div>

          <div className="w-full h-[1px] bg-black opacity-30"></div>

          <div className="flex items-center justify-start font-Satoshi opacity-70">
            <p>Choose Size</p>
          </div>
          <div>
            <SizeSelector sizes={productDetails.sizes} />
          </div>

          <div className="w-full h-[1px] bg-black opacity-30"></div>

          <div className="grid grid-cols-[30%_70%] gap-x-2 relative">
            <div className="w-full">
              <Counter />
            </div>
            <button className="font-Satoshi text-sm bg-black text-white rounded-full w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <Tabs
          reviews={productDetails.reviews}
          details={productDetails.details}
          faqs={productDetails.faqs || []}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
