import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Code2, 
  Palette, 
  Users, 
  Clock, 
  Lightbulb,
  Monitor,
  Database,
  Settings
} from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "BS Computer Science",
      year: "2025",
      icon: <GraduationCap className="w-5 h-5" />,
      status: "current"
    },
    {
      degree: "F.Sc Pre-Engineering",
      year: "2021",
      icon: <GraduationCap className="w-5 h-5" />,
      status: "completed"
    },
    {
      degree: "Matriculation (Science)",
      year: "2019",
      icon: <GraduationCap className="w-5 h-5" />,
      status: "completed"
    }
  ];

  const skills = [
    {
      category: "Languages",
      icon: <Code2 className="w-5 h-5" />,
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
      color: "bg-primary/10 text-primary"
    },
    {
      category: "Frameworks",
      icon: <Monitor className="w-5 h-5" />,
      items: ["React.js", "Tailwind CSS", "Bootstrap"],
      color: "bg-accent/10 text-accent"
    },
    {
      category: "Tools",
      icon: <Settings className="w-5 h-5" />,
      items: ["Git", "GitHub", "Firebase", "Figma (basic)"],
      color: "bg-secondary/10 text-secondary"
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      items: ["Problem-Solving", "Collaboration", "Time Management"],
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-secondary mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Science graduate and passionate Frontend Developer who loves turning ideas into clean, 
            user-friendly web experiences. I'm driven by continuous learning, creative problem-solving, 
            and building impactful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Timeline */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold font-poppins text-secondary mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education Timeline
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${edu.status === 'current' ? 'bg-primary/10 text-primary animate-pulse-glow' : 'bg-muted'}`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-muted-foreground">🎓 {edu.year}</span>
                          {edu.status === 'current' && (
                            <Badge className="bg-primary/10 text-primary text-xs">Current</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold font-poppins text-secondary mb-8 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-primary" />
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${skillGroup.color}`}>
                        {skillGroup.icon}
                      </div>
                      <h4 className="font-semibold text-foreground">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-background border border-border hover:border-primary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Values */}
        <div className="mt-16 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Always exploring new technologies and creative solutions to complex problems.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Design-First</h4>
                <p className="text-sm text-muted-foreground">
                  Focusing on user experience and creating beautiful, intuitive interfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Efficiency</h4>
                <p className="text-sm text-muted-foreground">
                  Delivering high-quality solutions on time with clean, maintainable code.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;