import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Java Enterprise Dashboard",
      description: "A comprehensive enterprise dashboard built with Java Spring Boot, featuring real-time analytics and advanced data visualization.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["Java", "Spring Boot", "Dashboard", "Analytics"],
      category: "Web Development",
      client: "TechCorp Solutions",
      completedDate: "March 2024"
    },
    {
      id: 2,
      title: "MacBook Pro Productivity App",
      description: "A native macOS productivity application designed for professionals, featuring task management and time tracking capabilities.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["macOS", "Swift", "Productivity", "Native App"],
      category: "App Development",
      client: "ProductivityPlus",
      completedDate: "February 2024"
    },
    {
      id: 3,
      title: "Colorful Web Code Platform",
      description: "An innovative online code editor with syntax highlighting, collaborative features, and real-time compilation for multiple programming languages.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tags: ["React", "Code Editor", "Real-time", "Collaboration"],
      category: "Web Development",
      client: "CodeShare Inc.",
      completedDate: "January 2024"
    },
    {
      id: 4,
      title: "Developer Workspace Solution",
      description: "A complete workspace management system for developers, featuring project organization, code snippets, and team collaboration tools.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["TypeScript", "Node.js", "Workspace", "Team Tools"],
      category: "Web Development",
      client: "DevWorkspace LLC",
      completedDate: "December 2023"
    },
    {
      id: 5,
      title: "Modern Office Setup App",
      description: "A sleek desktop application for managing modern office environments, including equipment tracking and space optimization.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      tags: ["Electron", "Desktop App", "Office Management", "UI/UX"],
      category: "App Development",
      client: "ModernOffice Co.",
      completedDate: "November 2023"
    },
    {
      id: 6,
      title: "Corporate Tower Management",
      description: "A comprehensive building management system for corporate towers, featuring tenant management, maintenance tracking, and facility optimization.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Building Management", "Corporate", "Facilities"],
      category: "Web Development",
      client: "Tower Management Group",
      completedDate: "October 2023"
    }
  ];

  const categories = ["All", "Web Development", "App Development", "UI/UX Design"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Our Recent Works
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the innovative solutions we've crafted for our clients. Each project represents our commitment to excellence and cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="hover:shadow-soft transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{project.completedDate}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-accent">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-secondary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's bring your vision to life with our expertise and innovative approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="hover:shadow-soft">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Works;