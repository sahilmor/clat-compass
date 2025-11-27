import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, FileText, ArrowRight } from "lucide-react";

const exams = [
  {
    name: "CLAT",
    fullName: "Common Law Admission Test",
    description: "National level entrance exam for admission to 22 National Law Universities (NLUs) in India",
    eligibility: "12th Pass or Equivalent",
    duration: "2 hours",
    questions: "120 MCQs",
    badge: "Most Popular",
  },
  {
    name: "AILET",
    fullName: "All India Law Entrance Test",
    description: "Conducted by National Law University, Delhi for admission to BA LLB and LLM programs",
    eligibility: "12th Pass (50% for General)",
    duration: "90 minutes",
    questions: "150 MCQs",
    badge: "NLU Delhi",
  },
  {
    name: "LSAT India",
    fullName: "Law School Admission Test",
    description: "Standardized test for admission to undergraduate and postgraduate law programs",
    eligibility: "12th Pass or Equivalent",
    duration: "2 hours 20 minutes",
    questions: "92 MCQs",
    badge: "International Standard",
  },
  {
    name: "GLAT",
    fullName: "Gujarat Law Admission Test",
    description: "State level entrance exam for admission to law colleges in Gujarat",
    eligibility: "12th Pass (45% for General)",
    duration: "2 hours",
    questions: "100 MCQs",
    badge: "Gujarat State",
  },
];

const ExamsOverview = () => {
  return (
    <section id="exams" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Law Entrance Exams</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore detailed information about major law entrance examinations in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exams.map((exam, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-2xl text-primary">{exam.name}</CardTitle>
                    <CardDescription className="text-xs mt-1">{exam.fullName}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {exam.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground">{exam.description}</p>
                
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Eligibility:</span>
                    <span className="font-medium text-foreground">{exam.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium text-foreground">{exam.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Questions:</span>
                    <span className="font-medium text-foreground">{exam.questions}</span>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-primary hover:bg-primary/90" size="sm">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamsOverview;
