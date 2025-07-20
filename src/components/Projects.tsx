import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  ExternalLink, 
  Heart, 
  Building, 
  Home,
  Code,
  Palette,
  Server
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Prediction System",
      description: "AI-integrated platform for early diagnosis using Flask & Python with machine learning algorithms to predict cardiovascular risks.",
      role: "Frontend Developer & AI Integrator",
      icon: <Heart className="w-6 h-6" />,
      technologies: ["Flask", "Python", "Machine Learning", "HTML/CSS", "JavaScript", "Bootstrap"],
      features: [
        "Machine Learning Integration",
        "Real-time Risk Assessment",
        "User-friendly Interface",
        "Data Visualization"
      ],
      github: "https://github.com/shamraiz79/heart-disease-prediction",
      demo: "#",
      color: "bg-red-500/10 text-red-600 border-red-200"
    },
    {
      title: "Hostel Management System",
      description: "Comprehensive web application for managing room assignments, payments, and student records with admin dashboard.",
      role: "Full Stack Developer",
      icon: <Building className="w-6 h-6" />,
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT"],
      features: [
        "Room Assignment System",
        "Payment Tracking",
        "Student Records Management",
        "Admin Dashboard"
      ],
      github: "https://github.com/shamraiz79/hostel-management",
      demo: "#",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Real Estate Website",
      description: "Modern property showcase platform with advanced image galleries, filtering system, and responsive design.",
      role: "Frontend Developer",
      icon: <Home className="w-6 h-6" />,
      technologies: ["React.js", "Tailwind CSS", "Firebase", "Framer Motion", "React Router"],
      features: [
        "Property Listings",
        "Advanced Filtering",
        "Image Galleries",
        "Mobile Responsive"
      ],
      github: "https://github.com/shamraiz79/real-estate-website",
      demo: "#",
      color: "bg-green-500/10 text-green-600 border-green-200"
    }
  ];

  const stats = [
    { number: "3+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "6+", label: "Technologies Used" },
    { number: "2025", label: "Started Journey" }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-secondary mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in frontend development, 
            AI integration, and full-stack web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 group animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-secondary">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {project.role}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-border hover:border-primary transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Actions */}
                <div className="p-6 pt-0 bg-muted/20 border-t border-border">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-primary hover:text-white transition-colors"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-hero text-white hover:shadow-hover transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold font-poppins text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Development Process */}
        <div className="animate-fade-in-up">
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-poppins text-secondary mb-8 text-center">
                My Development Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Design & Planning</h4>
                  <p className="text-sm text-muted-foreground">
                    Understanding requirements, creating wireframes, and planning the architecture.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing clean, maintainable code with modern technologies and best practices.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Testing & Deployment</h4>
                  <p className="text-sm text-muted-foreground">
                    Thorough testing, optimization, and deployment to production environment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold font-poppins text-secondary mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-hero text-white px-8 py-3 rounded-full font-medium hover:shadow-hover transform hover:scale-105 transition-all duration-300"
          >
            Let's Collaborate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;