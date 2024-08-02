import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./1337527.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl text-white opacity-80 font-bold">Backend Forger</h1>
          <p className="mb-5 text-lg text-white opacity-80">
            Backend Forger is your go-to tool for instantly generating starter
            code for Node, Go, and Python projects. Simplify your backend
            development with pre-configured templates, so you can focus on
            building features, not setting up your project.
          </p>
            <Link href="/generator">
          <button className="btn btn-primary">
            Get Started 
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};