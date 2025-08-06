import React from "react";

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow flex justify-between items-center">
      <div className="text-xl font-bold">MyApp</div>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="/about" className="hover:text-gray-300">About</a></li>
        <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
}
