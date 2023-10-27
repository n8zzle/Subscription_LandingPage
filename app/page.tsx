import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-full h-full px-3 md:px-10 md:py-5">
      <Navbar />
    </main>
  );
}
