import { Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-8 w-8" />
              <span className="text-xl font-bold">LawPrep Master</span>
            </div>
            <p className="text-sm opacity-90 max-w-md">
              Your comprehensive guide to law entrance exam preparation. We provide expert guidance, 
              study materials, and resources to help you achieve your dream of studying law.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#home" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#exams" className="hover:opacity-100 transition-opacity">Exams</a></li>
              <li><a href="#preparation" className="hover:opacity-100 transition-opacity">Preparation</a></li>
              <li><a href="#resources" className="hover:opacity-100 transition-opacity">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Popular Exams</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#clat" className="hover:opacity-100 transition-opacity">CLAT</a></li>
              <li><a href="#ailet" className="hover:opacity-100 transition-opacity">AILET</a></li>
              <li><a href="#lsat" className="hover:opacity-100 transition-opacity">LSAT India</a></li>
              <li><a href="#others" className="hover:opacity-100 transition-opacity">Other Exams</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>© {currentYear} LawPrep Master. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
