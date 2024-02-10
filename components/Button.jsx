import Link from "next/link";
import React from "react";

const Button = () => (
  <Link
    href={"/explore"}
    type="button"
    className="px-6 py-2 hidden lg:flex rounded-full bg-primary text-white"
  >
    Get Started
  </Link>
);

export default Button;
