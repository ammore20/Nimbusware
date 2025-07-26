import { Button } from "@/components/ui/button";
import { Lightbulb, Target, Zap, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Every project is crafted with meticulous attention to detail and strategic thinking."
    },
    {
      icon: Zap,
      title: "Speed",
      description: "We deliver high-quality solutions quickly without compromising on excellence."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about what we do and committed to your success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Nimbusware
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Born from a vision to revolutionize digital experiences, we're here to transform your ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Our Journey Begins Now
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  🌟 <strong>Fresh Perspective:</strong> As a newly launched company, we bring fresh ideas and innovative approaches to every project. We're not bound by legacy thinking – we embrace the latest technologies and methodologies.
                </p>
                <p className="text-lg leading-relaxed">
                  💡 <strong>Agile & Adaptive:</strong> Being new means we're incredibly agile. We adapt quickly to your needs, pivot when necessary, and always keep your goals at the forefront of everything we do.
                </p>
                <p className="text-lg leading-relaxed">
                  🚀 <strong>Hungry for Success:</strong> Our hunger for success is unmatched. Every project is an opportunity to prove ourselves, which means you get our absolute best effort every single time.
                </p>
                <p className="text-lg leading-relaxed">
                  🎯 <strong>Personal Attention:</strong> With a smaller client base, you're not just another number. You get personalized service, direct access to our team, and solutions tailored specifically for your unique needs.
                </p>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h4 className="text-2xl font-bold mb-6 text-foreground">Why Choose a Startup?</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong>Competitive Pricing:</strong> Lower overhead means better value for you
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong>Direct Communication:</strong> Work directly with decision-makers
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong>Flexibility:</strong> Quick pivots and custom solutions
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong>Innovation:</strong> Latest technologies and fresh approaches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-card inline-block">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Ready to Grow Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Join us on this exciting journey. Let's build something amazing together and make your mark in the digital world.
              </p>
              <Button variant="hero" size="lg">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;