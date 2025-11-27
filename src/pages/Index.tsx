import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExamsOverview from "@/components/ExamsOverview";
import PreparationGuide from "@/components/PreparationGuide";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ExamsOverview />
      <PreparationGuide />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
