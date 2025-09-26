import { Users, MessageCircle, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkshopCard from "@/components/WorkshopCard";
import MentorshipCard from "@/components/MentorshipCard";
import CourseCard from "@/components/CourseCard";

// Import all the generated images
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";
import instructor4 from "@/assets/instructor-4.jpg";
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
import aiAgentsWorkshop from "@/assets/ai-agents-workshop.jpg";

const Home = () => {
  const workshops = [
    {
      id: "factor-analysis-spss",
      title: "Factor Analysis using SPSS",
      instructor: "Dr. Rasheed K",
      instructorTitle: "Assistant Professor, Aliyah University Kolkata",
      instructorImage: instructor3,
      posterImage: spssWorkshop,
      description: "Comprehensive guide to Exploratory and Confirmatory Factor Analysis using SPSS for data reduction and validation.",
      keywords: ["SPSS", "EFA", "PCA", "Data Reduction"],
      date: "27 September 2025",
      fee: "₹159",
      mode: "Online",
      day: "Saturday",
      externalLink: "https://pages.razorpay.com/factoranalysis",
      brochureLink: "https://drive.google.com/file/d/1wsLclRKrYIOZWlhlz-tFFl0kqi2Yyq-u/view?usp=sharing",
    },
    {
      id: "master-ai-agents",
      title: "Master AI Agents",
      instructor: "Dhilber",
      instructorTitle: "Consultant AI Developer, Deloitte Bangalore",
      instructorImage: instructor4,
      posterImage: aiAgentsWorkshop,
      description: "A focused program to design, build, and deploy production-grade AI agents—tool-using, goal-driven, and reliable—leveraging LLMs, vector search, and orchestration best practices.",
      keywords: ["AI agents", "autonomous agents", "LLM orchestration", "LangChain", "multi-agent systems"],
      date: "13 September 2025",
      fee: "₹99",
      mode: "Online",
      day: "Friday",
      externalLink: "https://pages.razorpay.com/aiagents",
    },
    {
      id: "stata-data-analysis",
      title: "Mastering Large-scale Data Analysis using Stata",
      instructor: "Dr. Muhammed Rafi",
      instructorTitle: "Asst. Professor, Duxford International Business School",
      instructorImage: instructor2,
      posterImage: stataWorkshop,
      description: "Learn comprehensive data analysis techniques using Stata for large datasets, including regression analysis and data cleaning.",
      keywords: ["Stata", "Regression", "Data Cleaning", "IHDS"],
      date: "{Date yet to be announced}",
      fee: "₹299",
      mode: "Online",
      day: "Saturday",
    },
    {
      id: "python-zero-coding",
      title: "Python for Data Analysis – Zero Coding",
      instructor: "Dr. Muhammed Rafi",
      instructorTitle: "Asst. Professor, Duxford International Business School",
      instructorImage: instructor4,
      posterImage: pythonWorkshop,
      description: "Learn Python data analysis using AI tools and automation, perfect for beginners with no coding background.",
      keywords: ["Python", "Pandas", "AI Tools", "Automation"],
      date: "{Date yet to be announced}",
      fee: "₹299",
      mode: "Online",
      day: "Saturday",
    },
  ];

  const mentorshipPrograms = [
    {
      id: "phd-fast-track",
      title: "PhD Aspirant – Fast Track",
      posterImage: phdMentorship,
      description: "Comprehensive guidance for PhD applications, research proposal writing, and interview preparation for management, commerce, and economics aspirants.",
      keywords: ["PhD", "SOP", "B-Schools", "Research"],
      duration: "5 months",
      fee: "₹5000",
      target: "For Management, Commerce & Econ aspirants",
    },
    {
      id: "research-mentor-early-career",
      title: "Research Mentor for Early Career Scholars",
      posterImage: researchMentorship,
      description: "Expert mentoring for faculty and M.Phil scholars focusing on research methodology, journal publication, and academic writing skills.",
      keywords: ["Writing", "Journals", "Methods", "Reviews"],
      duration: "5 months",
      fee: "₹5000",
      target: "For faculty & M.Phil scholars",
    },
    {
      id: "academic-career-starter",
      title: "Academic Career Starter for Final Year PG Students",
      posterImage: careerMentorship,
      description: "Complete guidance for final year postgraduate students on academic career planning, UGC-NET preparation, and research publication ethics.",
      keywords: ["Career", "UGC-NET", "Drafting", "Ethics"],
      duration: "5 months",
      fee: "₹5000",
      target: "Focus on publishing & NET prep",
    },
  ];

  const onlineCourses = [
    {
      id: "research-methods-simplified",
      title: "Research Methods Simplified",
      posterImage: researchMethods,
      keywords: ["Research Design", "Sampling", "Validity"],
    },
    {
      id: "ai-educators-students",
      title: "AI for Educators & Students",
      posterImage: aiCourse,
      keywords: ["Prompting", "Claude", "ChatGPT", "NotebookLM"],
    },
    {
      id: "data-visualization-essentials",
      title: "Data Visualization Essentials",
      posterImage: dataViz,
      keywords: ["Excel", "Tableau", "Storytelling", "Reports"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-8">
        <div className="container mx-auto px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Hero Text - Left Side */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-bold text-green-600 mb-4 md:mb-6">
                Learn, Apply, and Lead...
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                At skillsett.in, we bring students, researchers, educators, and professionals together to master research, analytics, and technology through immersive, outcome-driven learning experiences.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                We also offer dedicated mentorship programs for PhD aspirants and early-career scholars in management, economics, and commerce guiding you through research design, publishing, and academic career growth with personalized support from experienced mentors.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Join our growing community and start your journey toward future-ready skills today.
              </p>
              <a 
                href="https://chat.whatsapp.com/BwszMadMGomB5DpkwLllvB?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Join Now
              </a>
            </div>

            {/* Featured Program Card - Right Side */}
            <div className="lg:w-96 flex">
              <div className="bg-card border rounded-lg overflow-hidden shadow-lg flex flex-col h-full relative">
                {/* Featured Workshop Header */}
                <div className="bg-green-600 text-white px-4 py-2 text-center font-semibold text-sm absolute top-0 left-0 right-0 z-10">
                  Featured Workshop
                </div>
                <div className="flex-1 overflow-hidden pt-10">
                  <img 
                    src="/lovable-uploads/factor-analysis-rasheed.jpg" 
                    alt="Factor Analysis using SPSS Workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-shrink-0">
                  <div className="flex gap-2">
                    <a 
                      href="https://pages.razorpay.com/factoranalysis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex-1 text-center font-semibold"
                    >
                      Apply Now
                    </a>
                    <a 
                      href="https://drive.google.com/file/d/1wsLclRKrYIOZWlhlz-tFFl0kqi2Yyq-u/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary text-secondary-foreground px-3 py-3 rounded-lg hover:bg-secondary/90 transition-colors flex items-center justify-center"
                      title="Download Brochure"
                    >
                      <Download size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main>
        {/* Workshops Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Live Workshops
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Interactive learning sessions with industry experts and academics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
              {workshops.map((workshop) => (
                <WorkshopCard key={workshop.id} {...workshop} />
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship Section */}
        <section id="mentorship" className="py-16 bg-secondary">
          <div className="container mx-auto px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Mentorship That Makes a Difference
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Personalized guidance from experienced academics and industry professionals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mentorshipPrograms.map((program) => (
                <MentorshipCard key={program.id} {...program} />
              ))}
            </div>
          </div>
        </section>

        {/* Online Courses Section */}
        <section id="courses" className="py-16 bg-background">
          <div className="container mx-auto px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                On-Demand Courses (Start Anytime)
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Self-paced learning with lifetime access to course materials
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {onlineCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
