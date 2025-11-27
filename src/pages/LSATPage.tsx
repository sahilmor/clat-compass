import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Calendar, Clock, FileText, GraduationCap, BookOpen, Target, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LSATPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LSAT India 2024</h1>
          <p className="text-xl opacity-95">Law School Admission Test</p>
          <Badge className="mt-4 bg-accent text-accent-foreground">International Standard</Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="shadow-card border-l-4 border-destructive">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-destructive mb-2">Important Notice</p>
                    <p className="text-foreground">
                      The LSAT India test has been discontinued. Students looking to get admission to colleges that used to accept LSAT India should check with respective college authorities. Some institutions like OP Jindal now accept LNAT UK for UG law admissions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <AdPlaceholder size="medium" />

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  About LSAT India
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  The Law School Admission Test (LSAT) India was a standardized test conducted by Pearson VUE on behalf of the Law School Admission Council (LSAC). It was designed to assess reading comprehension, logical reasoning, and analytical reasoning skills.
                </p>
                <p className="text-foreground">
                  LSAT India was accepted by multiple law schools across India for admission to their undergraduate and postgraduate law programmes. The test followed international standards and was recognized for its rigorous assessment methodology.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Eligibility Criteria (Historical Reference)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">For UG Programmes</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>Passed 10+2 or equivalent examination from a recognized board</li>
                      <li>Minimum 50% marks for General category</li>
                      <li>Minimum 45% marks for SC/ST/OBC/PWD categories</li>
                      <li>No upper age limit</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">For PG Programmes</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>LLB degree from a recognized university</li>
                      <li>Minimum marks as per individual college requirements</li>
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
                  Exam Pattern (Historical Reference)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Duration</p>
                      <p className="text-muted-foreground">2 hours 20 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Total Questions</p>
                      <p className="text-muted-foreground">92 MCQs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Scoring</p>
                      <p className="text-muted-foreground">120-180 scale</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Mode</p>
                      <p className="text-muted-foreground">Computer-based</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-foreground mb-2">Marking Scheme:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground">
                    <li>All questions carried equal weight</li>
                    <li>No negative marking for incorrect answers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Test Sections (Historical Reference)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-foreground">1. Analytical Reasoning (22-24 questions)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Logic games, pattern recognition, grouping and ordering problems, relationship mapping
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-foreground">2. Logical Reasoning (44-46 questions - Two Sections)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Argument analysis, critical reasoning, assumptions, inferences, strengthen/weaken questions
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-foreground">3. Reading Comprehension (22-24 questions)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Dense reading passages from various subjects, understanding arguments, identifying main ideas, making inferences
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <AdPlaceholder size="medium" />

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Alternative Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">Since LSAT India has been discontinued, students can consider these alternatives:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">CLAT (Common Law Admission Test)</p>
                      <p className="text-sm text-muted-foreground">For admission to 22 National Law Universities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">AILET (All India Law Entrance Test)</p>
                      <p className="text-sm text-muted-foreground">For admission to NLU Delhi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">LNAT UK</p>
                      <p className="text-sm text-muted-foreground">Now accepted by some Indian institutions like OP Jindal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">University-specific entrance exams</p>
                      <p className="text-sm text-muted-foreground">Check with individual law schools for their admission criteria</p>
                    </div>
                  </div>
                </div>
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

export default LSATPage;
