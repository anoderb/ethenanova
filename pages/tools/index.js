// import React from "react";
import { Footer, Navbar } from "../../components";
import { Hero } from "../../sections";
import Product from "../../sections/tools/Product";

export default function Tools() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <Product />
      <Footer />
    </div>
  );
}
