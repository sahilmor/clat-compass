import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">LawPrep Master</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("exams")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Exams
            </button>
            <button
              onClick={() => scrollToSection("preparation")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Preparation
            </button>
            <button
              onClick={() => scrollToSection("resources")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Resources
            </button>
            <Button size="sm" className="bg-gradient-hero text-primary-foreground hover:opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
