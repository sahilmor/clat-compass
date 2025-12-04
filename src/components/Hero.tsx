import { Button } from "@/components/ui/button";
import { BookOpen, Award, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTAtMTAtNC40NzctMTAtMTB6bTAgMjBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMC0xMC00LjQ3Ny0xMC0xMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Your Law Entrance Exams
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Complete preparation guide for CLAT, AILET, LSAT and other law entrance exams. Expert guidance, resources, and strategies to achieve your dream of studying law.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-elevated">
              Start Preparation
            </Button>
            <Button size="lg" variant="outline" className="bg-accent border-accent text-accent-foreground hover:bg-accent/90">
              View Exam Details
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6">
              <BookOpen className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Comprehensive Study Material</h3>
              <p className="text-sm opacity-90">Complete syllabus coverage with updated content</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6">
              <Award className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
              <p className="text-sm opacity-90">Tips and strategies from top law school graduates</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6">
              <TrendingUp className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Track Progress</h3>
              <p className="text-sm opacity-90">Monitor your improvement with practice tests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
