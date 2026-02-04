import Hero from "@/components/container/Hero";
import Trending from "@/components/container/Trending";
import NewReleaseSection from "@/components/container/NewRelease";

export default function Home() {
  return (
    <div className="bg-black min-h-screen relative">
      <Hero />
      <Trending />
      <NewReleaseSection />
    </div>
  );
}
