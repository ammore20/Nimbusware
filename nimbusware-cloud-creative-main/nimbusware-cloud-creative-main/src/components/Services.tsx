import { Button } from "@/components/ui/button";
import { Code, Palette, Smartphone, TrendingUp, Users, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technologies, optimized for performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Ready"]
    },
    {
      icon: TrendingUp,
      title: "SEO Enhancement",
      description: "Boost your online visibility and drive organic traffic with our proven SEO strategies.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"]
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Expert guidance to help you make informed decisions about your digital strategy.",
      features: ["Strategy Planning", "Technology Consulting", "Digital Transformation", "Growth Planning"]
    },
    {
      icon: Globe,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with our comprehensive maintenance services.",
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive digital solutions that drive growth and success for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-slide-up border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Button variant="hero" size="lg">
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;