import { useRouter } from "next/router";
import { Footer, Navbar } from "../../components/home";
import HeroExploreProjects from "../../components/explore/HeroExploreProjects";
import MainExploreProjects from "../../components/explore/MainExploreProjects";

export default function Page() {
  const router = useRouter();
  const query = router.query.projects;
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <HeroExploreProjects name={query} />
      <MainExploreProjects query={query} />
      <Footer />
    </div>
  );
}
