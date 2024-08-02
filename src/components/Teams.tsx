import Image from "next/image";
import React from "react";

export const Teams = () => {
  return (
    <div
      id="team"
      className="flex flex-col justify-center items-center p-4"
    >
      <h1 className="text-3xl leading-tight font-bold mt-4">Our Dynamic Team</h1>
      <div className="flex flex-row justify-center items-center">
      <div className="md:w-1/2 md:px-4 lg:w-1/4">
        <div className="bg-white rounded-lg border border-gray-300 p-8">
          <Image
            src="/rishi.png"
            alt="rishi"
            className="mx-auto"
            width={500}
            height={360}
          />

          <h4 className="text-xl font-bold mt-4">Rishi Mishra</h4>
          <p className="mt-1">One Hell Of A Software Developer</p>
        </div>
      </div>

      <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 h-full lg:w-1/4">
        <div className="bg-white rounded-lg border border-gray-300 p-8">
          <Image
            src="/nikhil.png"
            alt="Nikhil"
            className="mx-auto"
            width={240}
            height={400}
          />

          <h4 className="text-xl font-bold mt-4">Nikhil Parbat</h4>
          <p className="mt-1">Aspiring Data Scientist</p>
        </div>
      </div>

      <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
        <div className="bg-white rounded-lg border border-gray-300 p-8">
          <Image
            src="/Sarvesh.jpeg"
            alt="sarvesh"
            width={280}
            height={180}
            className="mx-auto"
          />

          <h4 className="text-xl font-bold mt-4">Sarvesh Shinde</h4>
          <p className="mt-1">
            A Passionate Developer who loves to code and solve problems
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};
