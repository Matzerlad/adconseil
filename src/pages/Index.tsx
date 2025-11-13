import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Zones } from "@/components/Zones";
import { Patrimoine } from "@/components/Patrimoine";
import { Immobilier } from "@/components/Immobilier";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Zones />
        <Patrimoine />
        <Immobilier />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
