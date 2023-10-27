import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="w-full p-5 bg-white">
      <Navbar />
      <Hero />
    </main>
  );
}
