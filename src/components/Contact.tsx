import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle,
  Clock,
  User
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_e0uztau',
        'template_wep01r9',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Shamraiz Imtiaz',
        },
        '8Ci_gRg_aKvzE5Tu3'
      );
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "shamraizimtaizimtiaz@gmail.com",
      href: "mailto:shamraizimtaizimtiaz@gmail.com",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/shamraiz79",
      href: "https://github.com/shamraiz79",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/shamraiz-imtiaz",
      href: "https://linkedin.com/in/shamraiz-imtiaz",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "0315-0762985",
      href: "tel:+923150762985",
      color: "bg-primary/10 text-primary"
    }
  ];

  const quickStats = [
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Response Time",
      value: "Within 24 hours"
    },
    {
      icon: <User className="w-6 h-6" />,
      label: "Collaboration Style",
      value: "Agile & Communicative"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      label: "Availability",
      value: "Open to new projects"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-secondary mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? I'd love to hear about your ideas and discuss 
            how we can bring them to life together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <Card className="shadow-elegant hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-poppins text-secondary mb-6 flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or ask any questions..."
                      rows={6}
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-hero text-white py-3 rounded-full font-medium hover:shadow-hover transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-poppins text-secondary mb-6">
                Get in Touch
              </h3>
              {contactInfo.map((contact, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className={`p-3 rounded-lg ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{contact.label}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">Why Work With Me?</h4>
                <div className="space-y-4">
                  {quickStats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {stat.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground text-sm">{stat.label}</h5>
                        <p className="text-xs text-muted-foreground">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Status */}
            <Card className="shadow-card bg-gradient-card border border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Currently Available</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm actively seeking new opportunities and collaborations. 
                  Let's discuss your next project!
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Open for new projects</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-muted-foreground">
            Prefer a direct approach? Feel free to reach out via{' '}
            <a
              href="mailto:shamraizimtaizimtiaz@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              email
            </a>{' '}
            or connect with me on{' '}
            <a
              href="https://linkedin.com/in/shamraiz-imtiaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;