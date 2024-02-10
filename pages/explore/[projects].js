import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
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
    <Layout>
      <HeroExploreProjects name={query} />
      <MainExploreProjects query={query} />
    </Layout>
  );
}
