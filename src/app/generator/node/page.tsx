"use client";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

const NodeGenerator: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedDatabase, setSelectedDatabase] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const handleCopy = () => {
    const drizzleFlag = ["mysql", "postgres"].includes(selectedDatabase) ? " --orm drizzle" : "";
    const codeSnippet = `backendforger create-node-app ${projectName} ${
      selectedLanguage === "typescript" ? "--typescript" : ""
    } --framework express ${
      selectedDatabase ? `--database ${selectedDatabase}` : ""
    }${drizzleFlag}`;

    navigator.clipboard.writeText(codeSnippet);
    setIsButtonClick(true);
    setTimeout(() => {
      setIsButtonClick(false);
    }, 2000);
  };

  return (
    <div className="min-h-dvh w-full flex flex-col items-center justify-center mt-2">
      <button
        onClick={toggleDropdown}
        className="btn select-primary w-full max-w-xs"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Build Your Node App
      </button>
      {isOpen && (
        <div className="w-full flex flex-col items-center mt-4">
          <input
            type="text"
            className="input input-primary w-full max-w-xs mb-4"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            aria-label="Project Name"
          />
          <select
            className="select select-primary select-bordered w-full max-w-xs"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            aria-label="Select Language"
          >
            <option value="">Select Language</option>
            <option value="javascript">Javascript</option>
            <option value="typescript">Typescript</option>
          </select>
          <div className="my-2"></div>
          <select
            className="select select-primary select-bordered w-full max-w-xs"
            value={selectedDatabase}
            onChange={(e) => setSelectedDatabase(e.target.value)}
            aria-label="Select Database"
          >
            <option value="">Select Database</option>
            <option value="mongodb">MongoDB</option>
            <option value="mysql">MySQL</option>
            <option value="postgres">PostgreSQL</option>
          </select>
        </div>
      )}

      {projectName && selectedLanguage && selectedDatabase && (
        <div className="my-4 border p-4 border-blue-500 rounded-xl">
          <pre>
            <code>
              backendforger create-node-app {projectName}{" "}
              {selectedLanguage === "typescript" ? "--typescript " : ""}--framework express{" "}
              {selectedDatabase ? `--database ${selectedDatabase} ` : ""}
              {["mysql", "postgres"].includes(selectedDatabase) ? " --orm drizzle" : ""}
            </code>
            <button
              onClick={handleCopy}
              className="mt-1 p-1 mx-4 text-white rounded"
              aria-label="Copy Code"
            >
              <FaCopy />
            </button>
          </pre>
        </div>
      )}
      {isButtonClick && (
        <div
          role="alert"
          className={`alert alert-info absolute top-10 transition-slide duration-500 ease-in-out transform ${
            isButtonClick ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Code Copied</span>
        </div>
      )}
    </div>
  );
};

export default NodeGenerator;
