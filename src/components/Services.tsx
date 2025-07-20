import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  Palette, 
  Code, 
  Search,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Crafting clean, scalable user interfaces with a focus on usability, speed, and design consistency.",
      features: [
        "React.js & Modern JavaScript",
        "Responsive Design",
        "Component-Based Architecture",
        "State Management"
      ],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Creating seamless experiences across all devices with mobile-first responsive design principles.",
      features: [
        "Mobile Optimization",
        "Cross-Browser Compatibility",
        "Touch-Friendly Interfaces",
        "Progressive Enhancement"
      ],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, accessibility, and search engine visibility.",
      features: [
        "Fast Loading Times",
        "SEO Optimization",
        "Accessibility Standards",
        "Code Splitting"
      ],
      color: "bg-secondary/10 text-secondary border-secondary/20"
    }
  ];

  const technologies = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 88 },
    { name: "HTML/CSS", level: 95 },
    { name: "Git/GitHub", level: 80 },
    { name: "Firebase", level: 75 }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-secondary mb-4">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I provide comprehensive frontend development services to help bring your digital vision to life 
            with modern technologies and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-poppins text-secondary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Card className="shadow-card hover:shadow-hover transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-poppins text-secondary mb-8 text-center">
                Technical Proficiency
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-hero h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${tech.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Card className="max-w-2xl mx-auto shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-poppins text-secondary mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Let's collaborate to create something amazing together. I'm here to help you 
                build fast, responsive, and user-friendly web applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToContact}
                  className="bg-gradient-hero text-white px-8 py-3 rounded-full font-medium hover:shadow-hover transform hover:scale-105 transition-all duration-300"
                >
                  Start a Project
                </Button>
                <Button
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  variant="outline"
                  className="px-8 py-3 rounded-full font-medium border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  View My Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;