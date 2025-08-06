import React from "react";

const base = "px-4 py-2 rounded font-semibold focus:outline-none transition-colors";
const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export function Button({ children, variant = "primary", onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
