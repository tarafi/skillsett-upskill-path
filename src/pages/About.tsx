import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About SkillSett.in
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              SkillSett.in is a growing community of learners and mentors from academia and industry. 
              We offer high-quality, accessible learning opportunities through workshops, mentoring programs, and online courses.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-accent-foreground">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Democratize access to research and upskilling by providing high-quality, 
                    affordable education that bridges the gap between academia and industry practice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Make research and analytics skills mainstream in India's knowledge economy, 
                    empowering every learner to excel in their academic and professional journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What We Offer
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Live Workshops</h3>
                <p className="text-muted-foreground">
                  Interactive sessions with expert instructors covering cutting-edge research methods and tools.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Mentorship Programs</h3>
                <p className="text-muted-foreground">
                  Personalized guidance from experienced professionals for career development and research excellence.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Online Courses</h3>
                <p className="text-muted-foreground">
                  Self-paced learning modules designed for busy professionals and students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to start your learning journey? We're here to help!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">Email Us</h3>
                          <p className="text-muted-foreground">skillsett.in@gmail.com</p>
                          <p className="text-muted-foreground">info@skillsett.in</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">WhatsApp</h3>
                          <p className="text-muted-foreground">+91 9605806896</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">Location</h3>
                          <p className="text-muted-foreground">Kerala, India</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Media & Additional Info */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-primary mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Instagram className="w-6 h-6" />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-primary mb-4">Why Choose SkillSett.in?</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          <span>Expert instructors from top institutions</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          <span>Affordable and accessible learning</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          <span>Practical, industry-relevant skills</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          <span>Supportive learning community</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;