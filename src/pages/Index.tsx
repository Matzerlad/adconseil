import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Expertises } from "@/components/Expertises";
import { Zones } from "@/components/Zones";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Expertises />
        <Zones />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
