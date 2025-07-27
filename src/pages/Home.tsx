import { Mail, Phone } from "lucide-react";
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

const Home = () => {
  const workshops = [
    {
      id: "sem-basics-advanced",
      title: "Structural Equation Modelling – Basics to Advanced",
      instructor: "Dr. Rahseed K",
      instructorTitle: "Asst. Professor, Aaliya University Kolkata",
      instructorImage: instructor1,
      posterImage: semWorkshop,
      description: "Master the fundamentals and advanced concepts of SEM, including CFA and path analysis using AMOS and LISREL software.",
      keywords: ["SEM", "CFA", "AMOS", "LISREL"],
      date: "9th Aug",
      fee: "₹299",
      mode: "Online",
      day: "Saturday",
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
      date: "16th Aug",
      fee: "₹299",
      mode: "Online",
      day: "Saturday",
    },
    {
      id: "factor-analysis-spss",
      title: "Factor Analysis using SPSS",
      instructor: "Dr. Ahsan Sadiq",
      instructorTitle: "Asst. Professor, Aligarh Muslim University",
      instructorImage: instructor3,
      posterImage: spssWorkshop,
      description: "Comprehensive guide to Exploratory and Confirmatory Factor Analysis using SPSS for data reduction and validation.",
      keywords: ["SPSS", "EFA", "PCA", "Data Reduction"],
      date: "23rd Aug",
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
      date: "30th Aug",
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
      
      {/* Main Content Container with 0.75cm margins */}
      <div className="mx-auto" style={{ paddingLeft: '28px', paddingRight: '28px' }}>
        {/* Announcement Banner */}
        <section className="pt-40 pb-2">
          <div className="mx-auto px-4">
            <div 
              className="rounded-xl px-12 py-8 text-center max-w-4xl mx-auto"
              style={{ backgroundColor: '#101820' }}
            >
              <p className="font-semibold text-sm leading-relaxed mb-6" style={{ color: '#00C851' }}>
                Join a growing learning community empowering scholars, professionals, and educators through practical, research-driven workshops, mentorships, and courses designed to fit your academic and career aspirations.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto text-sm"
              >
                <Mail size={16} />
                <Phone size={16} />
                Contact us
              </button>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <main>
          {/* Workshops Section */}
          <section className="py-16 bg-background">
            <div className="mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-lg font-bold mb-4" style={{ color: '#00C851' }}>
                  Live Workshops
                </h2>
                <p className="text-sm" style={{ color: '#101820' }}>
                  Interactive learning sessions with industry experts and academics
                </p>
              </div>
              
              <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                {workshops.map((workshop) => (
                  <div key={workshop.id} className="w-7/10 mx-auto" style={{ width: '70%' }}>
                    <WorkshopCard {...workshop} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mentorship Section */}
          <section id="mentorship" className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-lg font-bold mb-4" style={{ color: '#00C851' }}>
                  Mentorship That Makes a Difference
                </h2>
                <p className="text-sm" style={{ color: '#101820' }}>
                  Personalized guidance from experienced academics and industry professionals
                </p>
              </div>
              
              <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                {mentorshipPrograms.map((program) => (
                  <div key={program.id} className="mx-auto" style={{ width: '70%' }}>
                    <MentorshipCard {...program} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Online Courses Section */}
          <section id="courses" className="py-16 bg-background">
            <div className="mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-lg font-bold mb-4" style={{ color: '#00C851' }}>
                  On-Demand Courses (Start Anytime)
                </h2>
                <p className="text-sm" style={{ color: '#101820' }}>
                  Self-paced learning with lifetime access to course materials
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {onlineCourses.map((course) => (
                  <div key={course.id} className="mx-auto" style={{ width: '70%' }}>
                    <CourseCard {...course} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
