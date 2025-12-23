import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/shamraiz79',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shamraiz-imtiaz',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      href: 'mailto:shamraizimtaizimtiaz@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-poppins mb-4">Shamraiz.dev</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Frontend Developer passionate about creating beautiful, 
              user-friendly web experiences with modern technologies.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 shamraizimtaizimtiaz@gmail.com</p>
              <p>📱 0315-0762985</p>
              <p>🌍 Available Worldwide</p>
              <div className="flex items-center justify-center md:justify-end gap-1 mt-4 text-sm">
                <span>Status:</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © {currentYear} Shamraiz Imtiaz. All rights reserved.
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;