import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '@/assets/profile-picture.jpg';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Frontend Developer & Tech Enthusiast";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-bounce-gentle animation-delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-bounce-gentle animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                👋 Welcome to my Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-secondary mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Shamraiz Imtiaz
                </span>
              </h1>
              <div className="text-xl sm:text-2xl text-muted-foreground mb-6 h-8">
                <span className="border-r-2 border-primary pr-1 animate-pulse">
                  {displayedText}
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Computer Science graduate passionate about creating clean, responsive, and user-friendly web experiences. 
                I transform ideas into impactful digital solutions using modern technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-gradient-hero text-white px-8 py-3 rounded-full font-medium hover:shadow-hover transform hover:scale-105 transition-all duration-300"
              >
                View Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full font-medium border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/shamraiz79"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full shadow-card hover:shadow-hover hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/shamraiz-imtiaz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full shadow-card hover:shadow-hover hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shamraizimtaizimtiaz@gmail.com"
                className="p-3 bg-card rounded-full shadow-card hover:shadow-hover hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-elegant border-4 border-white">
                <img
                  src={profileImage}
                  alt="Shamraiz Imtiaz - Frontend Developer"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-card border border-border animate-bounce-gentle">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-secondary">Available for Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;