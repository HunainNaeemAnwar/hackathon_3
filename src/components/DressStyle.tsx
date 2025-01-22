import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategorySection = () => {
  return (
    <section className=" flex flex-col gap-10 rounded-3xl mt-[60px] py-10 bg-[#F0F0F0] w-full   ">
      <div className="flex justify-center items-center  text-center text-[36px] lg:text-[48px] font-Integral ">
        <p>BROWSE BY dress STYLE</p>
      </div>
      <div className="flex flex-col px-10 gap-10 ">
        <div className="flex md:flex-row flex-col justify-center items-center gap-10 ">
          <Link href={"/casual"}>
            {" "}
            <div className="relative w-[400px] h-[250px] ">
              <Image
                src={"/Images/DressStyle/casual.svg"}
                alt="casual"
                style={{ objectFit: "cover" }}
                layout="fill"
                className="absolute rounded-2xl"
              />
              <p className="absolute left-5 tracking-tight top-6 text-2xl font-Satoshi ">
                {" "}
                Casual
              </p>
            </div>
          </Link>
          <Link href={"/formal"}>
            <div className="relative w-[400px] md:w-[600px] h-[250px]">
              <Image
                src={"/Images/DressStyle/formal.svg"}
                layout="fill"
                style={{ objectFit: "cover" }}
                className="absolute rounded-2xl "
                alt="formal"
              />
              <p className="absolute left-5 tracking-tight top-6 text-2xl font-Satoshi ">
                {" "}
                Formal
              </p>
            </div>
          </Link>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-10">
          {" "}
          <Link href={"/party"}>
            {" "}
            <div className="relative w-[400px] md:w-[600px] h-[250px] ">
              <Image
                src={"/Images/DressStyle/party.svg"}
                layout="fill"
                style={{ objectFit: "cover" }}
                className="absolute rounded-2xl "
                alt="party"
              />
              <p className="absolute left-5 tracking-tight top-6 text-2xl font-Satoshi ">
                {" "}
                Party
              </p>
            </div>
          </Link>
          <Link href={"/gym"}><div className="relative w-[400px] h-[250px]">
            <Image
              src={"/Images/DressStyle/gym.svg"}
              layout="fill"
              style={{ objectFit: "cover" }}
              className="absolute rounded-2xl"
              alt="gym"
            />
            <p className="absolute left-5 tracking-tight top-6 text-2xl font-Satoshi ">
              {" "}
              Gym
            </p>
          </div></Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
