"use client";
import { useTextContext } from "@/context/TestContext";
import Link from "next/link";
import React from "react";

function Hero() {
  const { state } = useTextContext();
  return (
    <div>
      {state} <Link href={"/product/1"}>Go to product</Link>
    </div>
  );
}

export default Hero;
