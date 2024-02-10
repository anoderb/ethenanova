import { Footer, Navbar } from '../../components/home';
import Bridge from '../../sections/Bridge/Bridge';
import { Hero } from '../../sections/home';

function Bridgepage() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <Bridge/>
      <Footer />
    </div>
  );
}

export default Bridgepage;