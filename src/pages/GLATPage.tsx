import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Calendar, Clock, FileText, GraduationCap, BookOpen, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GLATPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GLAT 2025</h1>
          <p className="text-xl opacity-95">Gujarat Law Admission Test</p>
          <Badge className="mt-4 bg-accent text-accent-foreground">Gujarat State Exam</Badge>
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
                  About GLAT
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  The Gujarat Law Admission Test (GLAT) is a state-level entrance examination conducted for admission to various law colleges in Gujarat. It is designed to assess candidates' aptitude for legal studies and their general knowledge.
                </p>
                <p className="text-foreground">
                  GLAT provides opportunities for students to pursue undergraduate law programmes (BA LLB/BBA LLB) in Gujarat's law institutions. The exam evaluates analytical reasoning, logical thinking, and comprehension skills essential for legal education.
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
                    <h3 className="font-semibold text-lg mb-2 text-foreground">For UG Law Programmes</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>Passed 10+2 or equivalent examination from a recognized board</li>
                      <li>General/OBC: Minimum 45% marks in qualifying examination</li>
                      <li>SC/ST: Minimum 40% marks in qualifying examination</li>
                      <li>Candidates appearing in 12th examination can also apply</li>
                      <li>Age limit may vary based on specific college requirements</li>
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
                      <p className="text-muted-foreground">100 MCQs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Total Marks</p>
                      <p className="text-muted-foreground">100 marks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Mode</p>
                      <p className="text-muted-foreground">Offline/Online</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-foreground mb-2">Marking Scheme:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground">
                    <li>+1 mark for each correct answer</li>
                    <li>Negative marking may apply (check official notification)</li>
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
                  <p className="text-foreground mb-3">The GLAT syllabus typically covers the following areas:</p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">1. Legal Aptitude</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Legal reasoning, principles of law, application of legal concepts, basic understanding of Indian Constitution and legal system
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">2. Logical Reasoning</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Analytical reasoning, logical deductions, syllogisms, blood relations, coding-decoding, series completion
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">3. English Language</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Reading comprehension, grammar, vocabulary, sentence correction, error detection, synonyms and antonyms
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">4. General Knowledge</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Current affairs (national and international), history, geography, Indian polity, economics, general science
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">5. Mathematics</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Basic arithmetic, algebra, geometry (10th standard level), data interpretation
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
                    <span className="text-muted-foreground">To be announced</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Application End</span>
                    <span className="text-muted-foreground">To be announced</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Admit Card Release</span>
                    <span className="text-muted-foreground">To be announced</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Exam Date</span>
                    <span className="text-accent font-semibold">May 2025 (Expected)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Result Declaration</span>
                    <span className="text-muted-foreground">To be announced</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  *Dates are tentative. Please check the official website for confirmed schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Participating Colleges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">GLAT scores may be accepted by various law colleges in Gujarat, including:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "Gujarat National Law University (GNLU), Gandhinagar",
                    "Various affiliated law colleges in Gujarat",
                    "Private law institutions accepting GLAT",
                    "State universities offering law programmes",
                  ].map((college, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm text-foreground">{college}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Note: Please verify with individual colleges for their specific admission requirements and whether they accept GLAT scores.
                </p>
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
                    <p className="text-foreground">Create a structured study plan covering all sections equally</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Focus on legal aptitude and reasoning sections as they carry significant weightage</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Stay updated with current affairs, especially legal and constitutional developments</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Practice mock tests to improve speed and accuracy</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Strengthen English language skills through daily reading and comprehension practice</p>
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

export default GLATPage;
