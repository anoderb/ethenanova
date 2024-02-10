import { Footer, Navbar } from '../../components/home';
import { About, Hero } from '../../sections/home';

function Aboutpage() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About/>
      <Footer />
    </div>
  );
}

export default Aboutpage;