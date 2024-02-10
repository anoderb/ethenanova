import { Footer, Navbar } from "../../components/home";
import Hero from "../../sections/explore/Hero";
import Product1 from "../../sections/explore/Product1";

function Explore() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <Product1 />
      <Footer />
    </div>
  );
}

export default Explore;
