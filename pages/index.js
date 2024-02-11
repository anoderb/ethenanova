import Layout from "../components/Layout";
import About from "../partials/Home/AboutHome";
import Explore from "../partials/Home/ExploreHome";
import Feedback from "../partials/Home/Feedback";
import GetStarted from "../partials/Home/GetStarted";
import Hero from "../partials/Home/HeroHome";
import Insights from "../partials/Home/Insights";
import WhatsNew from "../partials/Home/WhatsNew";
import World from "../partials/Home/World";

export default function index() {
  return (
    <Layout>
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
    </Layout>
  );
}
