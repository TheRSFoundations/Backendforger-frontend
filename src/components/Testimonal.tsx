"use client";
import React, { useEffect, useState } from "react";

export const Testimonial = () => {
  return (
    <section className="flex justify-center items-center ">
      <div className="w-full ">
        <h2 className="text-3xl leading-tight text-left font-bold mt-4 mb-2">
          Why Choose BackendForger?
        </h2>
        <ol className="list-decimal list-inside text-lg text-left leading-relaxed mb-8">
          <li className="mb-4">
            BackendForger simplifies backend development with pre-configured
            templates that eliminate setup hassles.
          </li>
          <li className="mb-4">
            Our feature-rich solutions include built-in security, seamless
            database integration, and robust API support.
          </li>
          <li className="mb-4">
            Whether you're starting a small project or scaling an enterprise
            application, BackendForger offers flexibility and scalability.
            Focus on innovation and coding with our streamlined workflow,
            supported by expert assistance and regular updates based on industry
            feedback.
          </li>
          <li className="mb-4">
            Save time and reduce costs by leveraging our cost-effective,
            ready-made templates for your next development endeavor.
          </li>
        </ol>
      </div>
    </section>
  );
};
