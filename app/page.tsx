import Navbar from "./ui/home/sections/Navbar";
import Hero from "./ui/home/sections/Hero";
import DepthCarousel from "./ui/home/components/depth-carousel";

export default function Home() {
  return (
    <main className=" bg-black">
      <Navbar />
      <Hero />
      <DepthCarousel />
    </main>
  );
}