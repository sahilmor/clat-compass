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
          <p className="text-xl opacity-95">Geeta Law Admission Test</p>
          <Badge className="mt-4 bg-accent text-accent-foreground">Geeta Institute of Law</Badge>
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
                  The Geeta Law Admission Test (GLAT) is a university-level entrance examination conducted by Geeta Institute of Law, Geeta University, Panipat, Haryana. The exam is designed for admission to undergraduate law programs including BA LLB (Hons.) and BBA LLB (Hons.).
                </p>
                <p className="text-foreground">
                  GLAT evaluates candidates through a written test followed by a personal interview. The qualifying students must appear for both stages of the selection process. The exam assesses analytical reasoning, legal aptitude, and comprehension skills essential for pursuing legal education.
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
                    <h3 className="font-semibold text-lg mb-2 text-foreground">For UG Law Programmes (BA LLB/BBA LLB)</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>Passed 10+2 or equivalent examination from a recognized board</li>
                      <li>Minimum aggregate marks as per university norms</li>
                      <li>Candidates appearing in 12th examination can also apply</li>
                      <li>Must appear for written test and personal interview</li>
                      <li>Age limit and other criteria as per Geeta University guidelines</li>
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
                      <p className="font-semibold text-foreground">Selection Process</p>
                      <p className="text-muted-foreground">Written Test + Personal Interview</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Test Format</p>
                      <p className="text-muted-foreground">Online/Offline Written Test</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Programs Offered</p>
                      <p className="text-muted-foreground">BA LLB (Hons.) & BBA LLB (Hons.)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Duration</p>
                      <p className="text-muted-foreground">5 Years (Full Time)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-foreground mb-2">Selection Stages:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground">
                    <li>Stage 1: Written Test (Online Application)</li>
                    <li>Stage 2: Personal Interview for qualifying candidates</li>
                    <li>Final merit list based on combined performance</li>
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
                  <p className="text-foreground mb-3">The GLAT written test typically evaluates candidates on:</p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">1. Legal Aptitude & Reasoning</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Legal reasoning, application of legal principles, understanding of basic legal concepts, interpretation of legal passages, constitutional knowledge
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">2. Logical Reasoning</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Analytical reasoning, logical deductions, pattern recognition, critical thinking, syllogisms, puzzles
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">3. English Language & Comprehension</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Reading comprehension, grammar, vocabulary, sentence formation, error detection, comprehension passages
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">4. General Knowledge & Current Affairs</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Current affairs, legal current events, Indian polity, history, geography, general awareness
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">5. Quantitative Aptitude</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Basic mathematics, numerical ability, data interpretation, problem-solving (10+2 level)
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    *Note: Please check the official GLAT website for the most current and detailed syllabus.
                  </p>
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
                    <span className="font-medium text-foreground">Application Last Date</span>
                    <span className="text-accent font-semibold">12 June 2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Exam Date</span>
                    <span className="text-accent font-semibold">14 June 2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Result Declaration</span>
                    <span className="text-muted-foreground">To be announced</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">Counselling/Interview</span>
                    <span className="text-muted-foreground">After result declaration</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  *Please check the official website at <a href="http://www.geetalawcollege.in/G-LAT/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">geetalawcollege.in</a> for the latest updates.
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
                <p className="mb-4 text-foreground">GLAT is conducted exclusively for admission to:</p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Geeta Institute of Law, Geeta University</h4>
                  <p className="text-sm text-muted-foreground mb-2">GT Road, Village Karhans, Samalkha, Panipat, Haryana</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-foreground"><span className="font-medium">Programs:</span> BA LLB (Hons.) - 5 Years, BBA LLB (Hons.) - 5 Years</p>
                    <p className="text-foreground"><span className="font-medium">Total Fees:</span> ₹8.45 Lakh (approximate)</p>
                    <p className="text-foreground"><span className="font-medium">Rating:</span> 4.2/5</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-foreground"><span className="font-semibold">Official Website:</span> <a href="http://www.geetalawcollege.in/G-LAT/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">geetalawcollege.in/G-LAT</a></p>
                  <p className="text-sm text-foreground"><span className="font-semibold">Contact:</span> 0120-4160880, 0120-4160881</p>
                  <p className="text-sm text-foreground"><span className="font-semibold">Email:</span> info@admissionhelp.com</p>
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
                    <p className="text-foreground">Create a balanced study plan covering legal aptitude, logical reasoning, and general knowledge</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Focus on legal reasoning and aptitude - understand basic legal principles and constitutional provisions</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Stay updated with current legal affairs, landmark judgments, and constitutional amendments</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Practice previous year question papers and sample tests available on the official website</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Improve English comprehension through regular reading of legal articles and newspapers</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-foreground">Prepare well for the personal interview round - practice speaking about current legal issues and your interest in law</p>
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
