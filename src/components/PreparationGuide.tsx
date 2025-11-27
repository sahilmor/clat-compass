import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import AdPlaceholder from "./AdPlaceholder";

const preparationTips = [
  {
    title: "Understand the Syllabus",
    tips: [
      "Download and thoroughly review the official exam syllabus",
      "Identify your strong and weak subjects",
      "Create a subject-wise study plan",
      "Focus on high-weightage topics first",
    ],
  },
  {
    title: "Study Strategy",
    tips: [
      "Allocate daily study hours for each subject",
      "Use standard reference books and study materials",
      "Make concise notes for quick revision",
      "Practice previous year question papers",
    ],
  },
  {
    title: "Time Management",
    tips: [
      "Create a realistic timetable and stick to it",
      "Take regular breaks to avoid burnout",
      "Practice solving questions within time limits",
      "Take full-length mock tests regularly",
    ],
  },
];

const PreparationGuide = () => {
  return (
    <section id="preparation" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Preparation Strategy
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow these proven strategies to ace your law entrance exam
              </p>
            </div>

            <AdPlaceholder size="medium" className="mb-8" />

            <div className="grid md:grid-cols-3 gap-6">
              {preparationTips.map((section, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <AdPlaceholder size="medium" className="mt-8" />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <AdPlaceholder size="sidebar" />
              <AdPlaceholder size="small" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreparationGuide;
