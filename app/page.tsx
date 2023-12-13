import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <About />
    </main>
  );
}
