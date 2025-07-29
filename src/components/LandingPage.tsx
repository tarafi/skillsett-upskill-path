import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

// Import images
import semWorkshop from "@/assets/sem-workshop.jpg";
import stataWorkshop from "@/assets/stata-workshop.jpg";
import spssWorkshop from "@/assets/spss-workshop.jpg";
import pythonWorkshop from "@/assets/python-workshop.jpg";
import phdMentorship from "@/assets/phd-mentorship.jpg";
import researchMentorship from "@/assets/research-mentorship.jpg";
import careerMentorship from "@/assets/career-mentorship.jpg";
import researchMethods from "@/assets/research-methods.jpg";
import aiCourse from "@/assets/ai-course.jpg";
import dataViz from "@/assets/data-viz.jpg";

interface LandingPageData {
  title: string;
  description: string;
  posterImage: string;
  fee?: string;
  duration?: string;
  type: "workshop" | "mentorship" | "course";
}

const landingData: Record<string, LandingPageData> = {
  "stata-data-analysis": {
    title: "Mastering Large-scale Data Analysis using Stata",
    description: "Learn comprehensive data analysis techniques using Stata for large datasets, including regression analysis and data cleaning. Perfect for researchers working with complex survey data.",
    posterImage: stataWorkshop,
    fee: "₹299",
    type: "workshop",
  },
  "factor-analysis-spss": {
    title: "Factor Analysis using SPSS",
    description: "Comprehensive guide to Exploratory and Confirmatory Factor Analysis using SPSS for data reduction and validation. Learn to identify underlying constructs in your data.",
    posterImage: spssWorkshop,
    fee: "₹299",
    type: "workshop",
  },
  "python-zero-coding": {
    title: "Python for Data Analysis – Zero Coding",
    description: "Learn Python data analysis using AI tools and automation, perfect for beginners with no coding background. Discover how to leverage AI to analyze data efficiently.",
    posterImage: pythonWorkshop,
    fee: "₹299",
    type: "workshop",
  },
  "phd-fast-track": {
    title: "PhD Aspirant – Fast Track",
    description: "Comprehensive guidance for PhD applications, research proposal writing, and interview preparation for management, commerce, and economics aspirants. Get personalized mentoring from experienced academics.",
    posterImage: phdMentorship,
    fee: "₹5000",
    duration: "5 months",
    type: "mentorship",
  },
  "research-mentor-early-career": {
    title: "Research Mentor for Early Career Scholars",
    description: "Expert mentoring for faculty and M.Phil scholars focusing on research methodology, journal publication, and academic writing skills. Accelerate your research career with expert guidance.",
    posterImage: researchMentorship,
    fee: "₹5000",
    duration: "5 months",
    type: "mentorship",
  },
  "academic-career-starter": {
    title: "Academic Career Starter for Final Year PG Students",
    description: "Complete guidance for final year postgraduate students on academic career planning, UGC-NET preparation, and research publication ethics. Start your academic journey on the right foot.",
    posterImage: careerMentorship,
    fee: "₹5000",
    duration: "5 months",
    type: "mentorship",
  },
  "research-methods-simplified": {
    title: "Research Methods Simplified",
    description: "Comprehensive online course covering research design, sampling techniques, and validity measures. Perfect for students and researchers looking to strengthen their methodological foundations.",
    posterImage: researchMethods,
    type: "course",
  },
  "ai-educators-students": {
    title: "AI for Educators & Students",
    description: "Learn to effectively use AI tools like ChatGPT, Claude, and NotebookLM for educational purposes. Discover prompting techniques and best practices for academic use.",
    posterImage: aiCourse,
    type: "course",
  },
  "data-visualization-essentials": {
    title: "Data Visualization Essentials",
    description: "Master the art of data storytelling using Excel, Tableau, and other visualization tools. Learn to create compelling reports and presentations that communicate insights effectively.",
    posterImage: dataViz,
    type: "course",
  },
};

const LandingPage = () => {
  const { type, id } = useParams();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    position: "",
    location: "",
  });

  const data = landingData[id || ""];

  if (!data) {
    return <div>Program not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "We'll contact you soon with payment details.",
    });
  };

  const handlePayment = () => {
    // Simulate payment redirection
    toast({
      title: "Redirecting to Payment",
      description: "You'll be redirected to Razorpay for secure payment.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-2xl mx-auto border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-primary mb-4">
                  Application Submitted Successfully!
                </h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest in {data.title}. Our team will contact you within 24 hours with payment details and next steps.
                </p>
                <div className="space-y-4">
                  <Button onClick={handlePayment} variant="accent" size="lg" className="w-full">
                    Proceed to Payment (Razorpay)
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a confirmation email shortly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Program Details */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4 capitalize">
                  {data.type}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {data.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.description}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={data.posterImage}
                  alt={data.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {(data.fee || data.duration) && (
                <div className="space-y-2">
                  {data.fee && (
                    <p className="text-lg">
                      <span className="font-semibold text-primary">Fee:</span> {data.fee}
                    </p>
                  )}
                  {data.duration && (
                    <p className="text-lg">
                      <span className="font-semibold text-primary">Duration:</span> {data.duration}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Application Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Apply Now</h2>
                <p className="text-muted-foreground">
                  Fill out the form below to secure your spot
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="position">Current Position *</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      placeholder="e.g., PhD Student, Faculty, Industry Professional"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="City, State, Country"
                      required
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;