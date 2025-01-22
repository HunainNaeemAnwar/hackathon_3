"use client";
import React from "react";
import getStarRating from "./Rating";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shopCo";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="place-self-center">
      <div className="  md:px-10  md:py-10 px-3 py-3   rounded-lg relative group ">
        {" "}
        <div
          className="w-[170px] h-[160px] md:w-[200px] md:h-[190px] lg:w-[140px] lg:h-[130px] "
          style={{
            background: `url(${urlFor(product.images[0]).url()})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay absolute top-0 rounded-lg left-0 right-0 w-full h-full bg-[#000] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-10 flex-col  justify-end  text-black">
            <button
              onClick={() => {
                dispatch(addToCart(product));
                toast.success(
                  `${product?.title.substring(0, 8)}... addedToCart`
                );
              }}
              className="text-sm font-Satoshi relative  py-2 rounded-b-lg bg-black text-white "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>{" "}
      <Link href={`/product/${product?.slug?.current}`}>
        <h5 className=" text-sm  text-black mt-4 mb-1 font-Poppins font-bold">
          {product.title.toUpperCase()}
        </h5>
      </Link>
      <div className="flex flex-row justify-start items-center gap-3">
        <span>{getStarRating(product.ratings)}</span>
        <span className="flex justify-center items-center text-[16px]">
          <p>{product.ratings}</p>
          <p className="opacity-50">/5</p>
        </span>
      </div>
      <div className="flex flex-row gap-2">
        <p className=" text-[18px] md:text-[24px] font-Satoshi ">{`$ ${product.price.toString().substring(0, 10)}`}</p>
        {product.oldprice !== undefined && product.oldprice !== 0 && (
          <p className="text-[18px] md:text-[24px] text-black  font-Satoshi line-through opacity-50 ">{`${product.oldprice}`}</p>
        )}

        {product.oldprice !== undefined && product.oldprice > 0 && (
          <div className="text-[#DB4444] px-3  bg-[#FF33331A] rounded-full flex items-center justify-center text-[12px] font-Satoshi  ">
            {`-${
              product.oldprice
                ? Math.round(
                    ((product.oldprice - product.price) / product.oldprice) *
                      100
                  )
                : 0
            }%`}
          </div>
        )}
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
            fontSize: "16px",
            fontFamily: "poppins",
          },
        }}
      />
    </div>
  );
};
export default Product;
