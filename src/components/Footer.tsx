import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kibra TVC</h3>
            <p className="text-white/80 mb-4">
              A premier institution dedicated to providing high-quality technical and vocational education.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1J1gR9SdJ1/" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/Kibra_tvc" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/Kibra_tvc" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/kibra-tvc-44955b408?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@kibratvc?_r=1&_t=ZS-968N2700wbN" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about/history" className="text-white/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/departments/ict" className="text-white/80 hover:text-accent transition-colors">Departments</Link></li>
              <li><Link to="/courses" className="text-white/80 hover:text-accent transition-colors">Courses</Link></li>
              <li><Link to="/admissions/entry-requirements" className="text-white/80 hover:text-accent transition-colors">Admissions</Link></li>
              <li><Link to="/downloads/prospectus" className="text-white/80 hover:text-accent transition-colors">Downloads</Link></li>
              <li><Link to="/admin/login" className="text-white/80 hover:text-accent transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-bold mb-4">Departments</h3>
            <ul className="space-y-2">
              <li><Link to="/departments/ict" className="text-white/80 hover:text-accent transition-colors">Computing & Informatics</Link></li>
              <li><Link to="/departments/building" className="text-white/80 hover:text-accent transition-colors">Building & Civil Engineering</Link></li>
              <li><Link to="/departments/electrical" className="text-white/80 hover:text-accent transition-colors">Electrical & Electronics</Link></li>
              <li><Link to="/departments/hospitality" className="text-white/80 hover:text-accent transition-colors">Hospitality</Link></li>
              <li><Link to="/departments/mechanical" className="text-white/80 hover:text-accent transition-colors">Mechanical Engineering</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span className="text-white/80">Kibra, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+254716066759" className="text-white/80 hover:text-accent transition-colors">
                  +254 716066759
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@kibratvc.ac.ke" className="text-white/80 hover:text-accent transition-colors">
                  info@kibratvc.ac.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Kibra Technical & Vocational College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};