"use client";

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollingButtons() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleScrollUp = () => {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  }

  return (
    <div
      className="right-4 flex flex-col gap-2"
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        zIndex: 100, // Ensure the buttons are above other content
      }}
    >
      <button
        onClick={handleScrollUp}
        className="bg-gray-700/70 text-white font-bold p-2 hover:bg-gray-800 transition-colors duration-300"
      >
        <FaArrowUp className="text-2xl" />
      </button>
      <button
        onClick={handleScrollDown}
        className="bg-gray-700/70 text-white font-bold p-2 hover:bg-gray-800 transition-colors duration-300"
      >
        <FaArrowDown className="text-2xl" />
      </button>
    </div>
  );
}
