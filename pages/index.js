import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import About from "../partials/Home/AboutHome";
import Hero from "../partials/Home/HeroHome";

const Explore = dynamic(() => import("../partials/Home/ExploreHome"));
const GetStarted = dynamic(() => import("../partials/Home/GetStarted"));
const WhatsNew = dynamic(() => import("../partials/Home/WhatsNew"));
const World = dynamic(() => import("../partials/Home/World"));
const Insights = dynamic(() => import("../partials/Home/Insights"));
const Feedback = dynamic(() => import("../partials/Home/Feedback"));

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
