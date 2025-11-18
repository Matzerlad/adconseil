import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Patrimoine } from "@/components/Patrimoine";

const PatrimoinePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Patrimoine />
      </main>
      <Footer />
    </div>
  );
};

export default PatrimoinePage;
