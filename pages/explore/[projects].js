import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Footer, Navbar } from "../../components/home";
import HeroExploreProjects from "../../components/explore/HeroExploreProjects";
import MainExploreProjects from "../../components/explore/MainExploreProjects";

export default function Page() {
  const allowedSlugs = ["onramps", "bridge", "tools", "social", "defi", "nfts"];

  const router = useRouter();
  const query = router.query.projects;

  // Periksa apakah query adalah string
  if (typeof query !== "string" || !allowedSlugs.includes(query)) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <HeroExploreProjects name={query} />
      <MainExploreProjects query={query} />
      <Footer />
    </div>
  );
}
