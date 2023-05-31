import React from "react";
import Link from "next/link";

const NavBar = () => {
  console.log("NavBar rendered");

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default React.memo(NavBar);
