import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, ExternalLink, FileText } from "lucide-react";

const resources = [
  {
    category: "Study Materials",
    icon: BookOpen,
    items: [
      "Current Affairs for CLAT 2024",
      "Legal Reasoning Practice Sets",
      "Logical Reasoning Workbook",
      "English Comprehension Guide",
    ],
  },
  {
    category: "Previous Papers",
    icon: FileText,
    items: [
      "CLAT 2023 Question Paper",
      "AILET 2023 Question Paper",
      "LSAT India 2023 Paper",
      "All NLU Papers Collection",
    ],
  },
  {
    category: "Important Links",
    icon: ExternalLink,
    items: [
      "Official CLAT Website",
      "NLU Consortium Portal",
      "Law School Rankings 2024",
      "Admission Dates & Deadlines",
    ],
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Study Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive study materials, previous papers, and useful links
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{resource.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-left h-auto py-2 px-3 hover:bg-primary/5"
                        >
                          <Download className="h-4 w-4 mr-2 text-accent shrink-0" />
                          <span className="text-sm text-foreground">{item}</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
