import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Smartphone, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="text-primary/30 w-16 h-16" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Palette className="text-primary/30 w-12 h-12" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Smartphone className="text-primary/30 w-14 h-14" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <TrendingUp className="text-primary/30 w-10 h-10" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Welcome to <br />
              <span className="relative text-primary-dark">
                Nimbusware
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary opacity-100 rounded-full"></div>
              </span>
            </h1>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transforming ideas into digital excellence. We craft innovative solutions 
              that elevate your business in the digital landscape.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              🚀 Just launched and ready to revolutionize your digital presence with cutting-edge technology and creative excellence.
            </p>
          </div>

          <div className="animate-scale-in flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="hover:shadow-soft">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Dedication</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;