import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Teams } from "@/components/Teams";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="flex justify-center items-center">
        <Teams />
      </div>
    </>
  );
}