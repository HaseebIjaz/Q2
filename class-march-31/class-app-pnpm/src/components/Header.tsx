import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-gray-300 p-5 justify-between">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
}

export default Header;
