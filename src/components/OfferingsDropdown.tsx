import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const OfferingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const workshops = [
    { id: "sem-basics-advanced", title: "Structural Equation Modelling – Basics to Advanced" },
    { id: "stata-data-analysis", title: "Mastering Large-scale Data Analysis using Stata" },
    { id: "factor-analysis-spss", title: "Factor Analysis using SPSS" },
    { id: "python-zero-coding", title: "Python for Data Analysis – Zero Coding" },
  ];

  const mentorshipPrograms = [
    { id: "phd-fast-track", title: "PhD Aspirant – Fast Track" },
    { id: "research-mentor-early-career", title: "Research Mentor for Early Career Scholars" },
    { id: "academic-career-starter", title: "Academic Career Starter for Final Year PG Students" },
  ];

  const onlineCourses = [
    { id: "research-methods-simplified", title: "Research Methods Simplified" },
    { id: "ai-educators-students", title: "AI for Educators & Students" },
    { id: "data-visualization-essentials", title: "Data Visualization Essentials" },
  ];

  return (
    <div className="relative">
      <Button
        variant="hero"
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:w-auto"
      >
        Start Learning. Stay Ahead.
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg z-50 p-6">
          <div className="space-y-6">
            {/* Workshops */}
            <div>
              <h3 className="font-semibold text-primary mb-3">Live Workshops</h3>
              <div className="space-y-2">
                {workshops.map((workshop) => (
                  <Link
                    key={workshop.id}
                    to={`/workshop/${workshop.id}`}
                    className="block text-sm text-foreground hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {workshop.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mentorship */}
            <div>
              <h3 className="font-semibold text-primary mb-3">Mentorship Programs</h3>
              <div className="space-y-2">
                {mentorshipPrograms.map((program) => (
                  <Link
                    key={program.id}
                    to={`/mentorship/${program.id}`}
                    className="block text-sm text-foreground hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {program.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Online Courses */}
            <div>
              <h3 className="font-semibold text-primary mb-3">Online Courses</h3>
              <div className="space-y-2">
                {onlineCourses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/course/${course.id}`}
                    className="block text-sm text-foreground hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default OfferingsDropdown;