import Navbar from "./ui/home/sections/Navbar";
import Hero from "./ui/home/sections/Hero";
import Sample from "./ui/home/sections/Sample";
import Footer from "./ui/home/sections/Footer";

export default function Home() {
  return (
    <main className=" bg-black">
      <Navbar />
      <Hero />
      <Sample />
      <Footer />
    </main>
  );
}