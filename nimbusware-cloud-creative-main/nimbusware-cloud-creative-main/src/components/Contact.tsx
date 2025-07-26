import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your digital presence? We're here to listen, understand, and create solutions that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">First Name</label>
                      <Input placeholder="John" className="transition-all duration-300 focus:shadow-soft" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Last Name</label>
                      <Input placeholder="Doe" className="transition-all duration-300 focus:shadow-soft" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input type="email" placeholder="john@example.com" className="transition-all duration-300 focus:shadow-soft" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Phone (Optional)</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" className="transition-all duration-300 focus:shadow-soft" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Service Needed</label>
                    <select className="w-full p-3 border border-input rounded-md bg-background text-foreground transition-all duration-300 focus:shadow-soft focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Select a service</option>
                      <option>Website Development</option>
                      <option>UI/UX Design</option>
                      <option>App Development</option>
                      <option>SEO Enhancement</option>
                      <option>Consulting</option>
                      <option>Website Maintenance</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Project Details</label>
                    <Textarea 
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className="min-h-[120px] transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                <div className="bg-gradient-secondary rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email Us</h4>
                        <p className="text-muted-foreground">nimbusware2025@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Call Us</h4>
                        <p className="text-muted-foreground">+91 9324405985</p>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-card">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Why Work With Us?</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Free Consultation:</strong> We start every relationship with a comprehensive discussion about your goals</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Transparent Pricing:</strong> No hidden fees, clear communication about costs upfront</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Quick Response:</strong> We typically respond within 24 hours</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Personalized Service:</strong> Every client gets our full attention and customized solutions</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="outline" size="lg" className="hover:shadow-soft">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;