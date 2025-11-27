import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Calendar, Clock, FileText, GraduationCap, BookOpen, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AILETPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gradient-hero text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AILET 2025</h1>
          <p className="text-xl opacity-95">All India Law Entrance Test</p>
          <Badge className="mt-4 bg-accent text-accent-foreground">NLU Delhi</Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <AdPlaceholder size="medium" />

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  About AILET
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  The All India Law Entrance Test (AILET) is conducted by National Law University, Delhi (NLU Delhi) for admission to its BA LLB (Hons.), LLM, and PhD programmes. It is one of the most prestigious law entrance exams in India.
                </p>
                <p className="text-foreground">
                  NLU Delhi is among the top law schools in India, and AILET serves as the gateway to quality legal education at this esteemed institution. The exam is typically held in December every year.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">For BA LLB (Hons.)</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>Passed 10+2 or equivalent examination</li>
                      <li>General/OBC: Minimum 50% marks in qualifying examination</li>
                      <li>SC/ST/PWD: Minimum 45% marks in qualifying examination</li>
                      <li>Maximum age: 20 years for General/OBC, 22 years for SC/ST/PWD</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">For LLM</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>LLB degree or equivalent from a recognized university</li>
                      <li>Minimum 55% marks (50% for SC/ST/PWD candidates)</li>
                      <li>No age limit</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <AdPlaceholder size="medium" />

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Exam Pattern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Duration</p>
                      <p className="text-muted-foreground">2 hours (120 minutes)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Total Questions</p>
                      <p className="text-muted-foreground">150 MCQs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Total Marks</p>
                      <p className="text-muted-foreground">150 marks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Mode</p>
                      <p className="text-muted-foreground">Offline (Pen and Paper)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-foreground mb-2">Marking Scheme:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground">
                    <li>+1 mark for each correct answer</li>
                    <li>-0.25 mark for each incorrect answer (negative marking)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Syllabus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-3 text-primary">AILET 2025 has three sections with 150 questions:</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">1. English (35 questions)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Reading comprehension, grammar, vocabulary, verbal ability, sentence correction, fill in the blanks
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">2. General Knowledge & Current Affairs (50 questions)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Current affairs (national and international), history, geography, political science, economics, general science, and static GK
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">3. Reasoning (65 questions)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Legal Reasoning:</strong> Application of legal principles to given fact situations, legal maxims and principles
                        <br />
                        <strong>Logical Reasoning:</strong> Analytical reasoning, logical deductions, syllogisms, analogies, number series
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <AdPlaceholder size="medium" />

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Important Dates 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Application Start</span>
                    <span className="text-muted-foreground">August 2024</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Application End</span>
                    <span className="text-muted-foreground">October 2024</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Admit Card Release</span>
                    <span className="text-muted-foreground">November 2024</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Exam Date</span>
                    <span className="text-accent font-semibold">December 2024</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Result Declaration</span>
                    <span className="text-muted-foreground">December 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Preparation Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Focus on current affairs from the last 1-2 years, especially legal and constitutional developments</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Practice reading comprehension passages daily to improve speed and accuracy</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Solve previous years' AILET question papers to understand the exam pattern</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Strengthen legal reasoning by studying legal principles and applying them to case scenarios</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Take regular mock tests to improve time management and identify weak areas</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <AdPlaceholder size="sidebar" />
              <AdPlaceholder size="small" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AILETPage;
