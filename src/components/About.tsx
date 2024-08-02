"use client";
import React from "react";
import { Testimonial } from "./Testimonal";

export const About = () => {
  
  return (
    <section

      id="about"
      className="px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32"
    >
      <div className="flex flex-col lg:flex-row lg:-mx-8">
        <div className="w-full lg:w-1/2 lg:px-8">
          <h2 className="text-3xl leading-tight font-bold mt-4">
            Welcome to Backend-Forger!
          </h2>

          <p className="mt-2 leading-relaxed">
            Simplify your backend development with pre-configured templates, so
            you can focus on building features, not setting up your project.
          </p>

          <Testimonial />
        </div>

        <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
          <div className="md:flex">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
            </div>
            <div className="md:ml-8 mt-4 md:mt-0">
              <h4 className="text-xl font-bold leading-tight">
                Get more done with our streamlined templates!
              </h4>
              <p className="mt-2 leading-relaxed">
                Looking to streamline your backend development? Our
                pre-configured templates can help! With ready-made setups, you
                can skip the tedious project configuration and jump straight
                into building the features that matter.
              </p>
            </div>
          </div>

          <div className="md:flex mt-8">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
            </div>
            <div className="md:ml-8 mt-4 md:mt-0">
              <h4 className="text-xl font-bold leading-tight">
                Simplify your workflow
              </h4>
              <p className="mt-2 leading-relaxed">
                Elevate your backend development efficiency with our ready-made
                templates. Simplify your development process, save time, and
                boost productivity with our easy-to-use templates. Perfect for
                developers who want to focus on coding, not configuration. Start
                your next project effortlessly and get ahead faster!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
