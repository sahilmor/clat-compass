import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Calendar, Clock, FileText, GraduationCap, BookOpen, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CLATPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CLAT 2025</h1>
          <p className="text-xl opacity-95">Common Law Admission Test</p>
          <Badge className="mt-4 bg-accent text-accent-foreground">Most Popular Law Entrance Exam</Badge>
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
                  About CLAT
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  The Common Law Admission Test (CLAT) is a national-level entrance examination conducted by the Consortium of National Law Universities for admissions to undergraduate (UG) and postgraduate (PG) law programmes offered by 22 National Law Universities (NLUs) across India.
                </p>
                <p className="text-foreground">
                  CLAT is one of the most competitive law entrance exams in India, attracting thousands of aspirants every year who dream of pursuing their legal education at prestigious NLUs.
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
                    <h3 className="font-semibold text-lg mb-2 text-foreground">For UG (BA LLB)</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>Passed 10+2 or equivalent examination from a recognized board</li>
                      <li>General/OBC: Minimum 45% marks in qualifying examination</li>
                      <li>SC/ST: Minimum 40% marks in qualifying examination</li>
                      <li>No upper age limit</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">For PG (LLM)</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>Completed or appearing in final year of LLB or equivalent</li>
                      <li>General/OBC: Minimum 50% marks</li>
                      <li>SC/ST: Minimum 45% marks</li>
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
                      <p className="text-muted-foreground">120 MCQs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Total Marks</p>
                      <p className="text-muted-foreground">120 marks</p>
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
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">For UG Programme (BA LLB)</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold text-foreground">1. English Language (28-32 questions)</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Comprehension passages, grammar, vocabulary, and verbal ability
                        </p>
                      </div>
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold text-foreground">2. Current Affairs & General Knowledge (35-39 questions)</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Current affairs (last 2 years), general knowledge including static GK
                        </p>
                      </div>
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold text-foreground">3. Legal Reasoning (28-32 questions)</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Legal propositions, application to fact situations, legal maxims
                        </p>
                      </div>
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold text-foreground">4. Logical Reasoning (22-26 questions)</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Logical sequences, analogies, patterns, syllogisms
                        </p>
                      </div>
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold text-foreground">5. Quantitative Techniques (13-17 questions)</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Class 10 level mathematics, data interpretation, basic arithmetic
                        </p>
                      </div>
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
                    <span className="text-muted-foreground">January 2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Application End</span>
                    <span className="text-muted-foreground">April 2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Admit Card Release</span>
                    <span className="text-muted-foreground">May 2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Exam Date</span>
                    <span className="text-accent font-semibold">May 2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Result Declaration</span>
                    <span className="text-muted-foreground">June 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Participating NLUs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">CLAT is accepted by 22 National Law Universities across India, including:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "National Law School of India University, Bangalore",
                    "NALSAR University of Law, Hyderabad",
                    "National Law Institute University, Bhopal",
                    "West Bengal National University of Juridical Sciences, Kolkata",
                    "National Law University, Jodhpur",
                    "Hidayatullah National Law University, Raipur",
                    "Gujarat National Law University, Gandhinagar",
                    "Ram Manohar Lohiya National Law University, Lucknow",
                    "Rajiv Gandhi National University of Law, Patiala",
                    "Chanakya National Law University, Patna",
                  ].map((nlu, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm text-foreground">{nlu}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">...and 12 more NLUs</p>
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

export default CLATPage;
