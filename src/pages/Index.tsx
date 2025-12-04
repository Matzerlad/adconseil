import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import SeLogerEmbed from "@/components/SeLogerEmbed";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SeLogerEmbed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
