"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Generator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col p-6">
      <div>
        <h1 className="text-3xl font-bold text-center mb-4">
          Project Generator
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Select a programming language to generate a starter project.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-4 justify-center">
        <div className="card card-compact bg-base-100 w-96 shadow-xl mb-4">
          <figure>
            <img src="/Golang.png" alt="Golang" />
          </figure>
          <div className="card-body flex-[0_0_0]">
            <h2 className="card-title">Golang</h2>
            <p>
              Go is a statically typed, compiled high-level programming language
              designed at Google by Robert Griesemer, Rob Pike, and Ken
              Thompson.
            </p>
            <p>Following are the covered frameworks:</p>
            <ol className="list-decimal list-inside">
              <li>Gin</li>
              <li>Fibre</li>
              <li>Echo</li>
              <li>Mux</li>
              <li>Default HTTP</li>
            </ol>
            <p>Following are the databases:</p>
            <ol className="list-decimal list-inside">
              <li>PostGres</li>
              <li>SQLite</li>
              <li>MYSQL</li>
              <li>MongoDB</li>
            </ol>
            <div className="card-actions justify-end">
              <Link href="/generator/go" className="btn btn-primary">
                Click here
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-96 shadow-xl mb-4 ">
          <figure>
            <img src="/node.jpeg" alt="Node" />
          </figure>
          <div className="card-body flex-[0_0_0]">
            <h2 className="card-title">Node</h2>
            <p className="">
              Node.js is an open-source, cross-platform JavaScript runtime
              environment and library for running web applications outside the
              client's browser.
            </p>
            <p className="">Following are the covered languages:</p>
            <ul className="list-decimal list-inside ">
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
            <p>Following are the databases:</p>
            <ol className="list-decimal list-inside">
              <li>MongoDB</li>
              <li>PostGreSQL</li>
              <li>MySQL</li>
            </ol>
            <p>Following are the ORMS:</p>
            <ol className="list-decimal list-inside">
              <li>Drizzle</li>
              <li>Mongoose</li>
            </ol>
            
            <div className="card-actions justify-end">
              <Link href="/generator/node" className="btn btn-primary">
                Click here
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-96 shadow-xl mb-4">
          <figure>
            <img src="/python.jpg" alt="Python" />
          </figure>
          <div className="card-body h-full">
            <h2 className="card-title">Python</h2>
            <p className="flex-grow-0">
              Python is a high-level, general-purpose programming language. Its
              design philosophy emphasizes code readability with the use of
              significant indentation.
            </p>
            <p className="flex-grow-0">Following are the covered frameworks:</p>
            <ol className="list-decimal list-inside">
              <li>Flask</li>
              <li>Fast API</li>
            </ol>
            <p className="flex-grow-0">Following are the databases:</p>
            <ol className="list-decimal list-inside">
              <li>Postgres</li>
              <li>SQLite</li>
              <li>MySQL</li>
            </ol>
            <p className="text-lg text-pretty flex-grow-0">
              More frameworks and databases can be added on request. Please
              raise an issue on the GitHub repository.
            </p>
            <div className="card-actions flex-nowrap h-full items-end justify-end">
              <Link href="/generator/python" className="btn btn-primary">
                Click here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
