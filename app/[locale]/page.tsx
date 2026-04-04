import Hero from "@/components/sections/Hero";
import About from "../../components/sections/About";
import Works from "@/components/sections/Works";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      {/* باقي الأقسام ستنضاف هنا بنفس الطريقة */}
    </>
  );
}