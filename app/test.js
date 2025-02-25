"use client"; // Add this if using Next.js App Router

import React from "react";
import Typed from "react-typed";

export default function TestTyped() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">I am a</h1>
      <Typed
        strings={["Software Developer", "Web Developer", "Mobile Developer"]}
        typeSpeed={100}
        backSpeed={80}
        loop
        className="text-2xl text-gray-600"
      />
    </div>
  );
}
