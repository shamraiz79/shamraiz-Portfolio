import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    "Building responsive UI with React.js & Tailwind CSS",
    "Collaborating with team using Git & GitHub",
    "Integrating APIs and optimizing performance",
    "Participating in code reviews and agile workflows",
    "Creating reusable components and maintaining code quality"
  ];

  const technologies = [
    "React.js", "Tailwind CSS", "JavaScript", "Git", "GitHub", "Firebase", "API Integration"
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-secondary mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the valuable experience I've gained working with modern web technologies.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Card className="shadow-elegant hover:shadow-hover transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <div className="bg-gradient-hero p-1">
              <CardContent className="bg-background m-0 p-8 rounded-lg">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-poppins text-secondary mb-2">
                      Frontend Developer Intern
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <Briefcase className="w-5 h-5" />
                      <span>Dev Clean Software Company</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>July 2025 – Present</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 self-start md:self-center">
                    Current Position
                  </Badge>
                </div>

                {/* Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Impact/Achievement */}
                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Key Achievements
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Successfully contributed to multiple client projects, improved UI performance by implementing 
                    efficient React patterns, and collaborated effectively with a distributed team using modern 
                    development workflows and version control practices.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="max-w-2xl mx-auto shadow-card hover:shadow-hover transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold font-poppins text-secondary mb-4">
                Looking Forward
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm actively seeking opportunities to expand my expertise in modern web development, 
                contribute to innovative projects, and grow as a full-stack developer while making 
                meaningful impact through technology.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-primary/20 text-primary">Full-Stack Development</Badge>
                <Badge variant="outline" className="border-accent/20 text-accent">React Ecosystem</Badge>
                <Badge variant="outline" className="border-secondary/20 text-secondary">Team Leadership</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;