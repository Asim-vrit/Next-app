"use client";
import { logout } from "@/server-actions/auth-actions";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="p-4 mr-4 flex flex-col gap-3 text-2xl h-screen border-r">
      <Link href={"/admin"}>Dashboard</Link>
      <Link href={"/admin/user"}>Users</Link>
      <Link href={"/admin/product"}>Product</Link>
      <button
        onClick={async () => await logout()}
        className="mt-auto mb-10 cursor-pointer hover:underline"
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
