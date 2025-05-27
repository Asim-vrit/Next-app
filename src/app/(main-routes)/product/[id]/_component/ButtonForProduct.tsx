"use client"; // these are called directives
import { useTextContext } from "@/context/TestContext";
import React from "react";

function ButtonForProduct({ children }: { children: React.ReactNode }) {
  const { state, setState } = useTextContext();
  return (
    <>
      <button
        onClick={() => {
          if (setState) setState("hello to youy too");
        }}
        className="border rounded-2xl p-2"
      >
        {state}
        {children}
      </button>
    </>
  );
}

export default ButtonForProduct;
