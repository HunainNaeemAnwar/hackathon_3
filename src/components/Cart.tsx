"use client";
import React from "react";
import { useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { BiTag } from "react-icons/bi";
import { urlFor } from "@/sanity/lib/image";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/redux/shopCo";
import { TrashIcon } from "lucide-react";
import { FaMinus, FaPlus } from "react-icons/fa";

import Image from "next/image";
import { useDispatch } from "react-redux";
const Cart = () => {
  const { productData } = useSelector((state: any) => state.shop);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  mt-10 place-items-center py-10" >
      <div className="mx-auto flex-col py-10 mt-8 ">
        {productData?.length > 0 ? (
          <div className="grid grid-cols-1 p-4  gap-4 border-2 rounded-lg">
            {productData?.map((item: any) => (
              <div key={item._id}>
                <div className="grid grid-cols-3  gap-6 p-4  ">
                  <div className="w-20 h-20 relative border rounded-md col-span-1              ">
                    <Image
                      src={urlFor(item.images[0]).url()}
                      layout="fill"
                      alt="img"
                      className="absolute rounded-md"
                    />
                  </div>
                  <div className=" flex flex-col gap-2  col-span-1 font-Satoshi">
                    <h2>{item?.title}</h2>
                    <p>{`$${item?.price}`}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute right-2 top-0">
                      <TrashIcon
                        onClick={() => {
                          dispatch(deleteProduct(item._id));
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center col-span-1 absolute bottom-0 right-2  gap-4">
                      <button
                        onClick={() => {
                          dispatch(decreaseQuantity({ _id: item?._id }));
                        }}
                      >
                        <FaMinus />
                      </button>
                      <p className="font-Poppins">{item?.quantity}</p>
                      <button
                        onClick={() => {
                          dispatch(increaseQuantity({ _id: item?._id }));
                        }}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-b border-black border-opacity-20 mt-2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-centre items-center font-Satoshi">
            <p>No Products Available</p>
          </div>
        )}
      </div>
      <div className="flex flex-col relative   gap-2 font-Satoshi border-2 rounded-md mt-[90px] px-4 py-2 ">
        <h2 className="font-SatoshiBold text-[32px]">Order Summary</h2>
        <div className="font-Satoshi text-[20px]">
          <div className="flex flex-row justify-between items-center">
            <p>Subtotal</p>
            <p>200</p>
          </div>

          <div className="flex flex-row justify-between items-center">
            <p>Total</p>
            <p>$467</p>
          </div>
        </div>
        <div className="grid md:grid-cols-1  lg:grid-cols-2 gap-2">
          <div className="flex flex-row gap-2 items-center">
            <form className="flex flex-col gap-3  font-Satoshi relative ">
              <input
                type="text"
                placeholder="            Add  a coupon code"
                className="rounded-3xl pr-20  py-2  text-sm text-black text-center "
              />
              <BiTag className=" absolute w-6 h-6 top-[8px] left-4 text-opacity-30 text-start text-black " />
            </form>
          </div>
          <button className="rounded-full px-6 md:px-7 py-2 bg-black text-white">
            Apply Now
          </button>
        </div>
        <button className="rounded-full px-20 py-3 bg-black text-white  w-full ">
          <div className="flex items-center justify-center gap-2">
            {" "}
            Go To CheckOut <BsArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cart;
