import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
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
              A premier institution dedicated to providing high-quality
              technical and vocational education.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1AwoUWzhCx/"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/mission-vision"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#departments"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions/entry-requirements"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/downloads/prospectus"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-bold mb-4">Departments</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/departments/ict"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Computing & Informatics
                </Link>
              </li>
              <li>
                <Link
                  to="/departments/building"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Building & Civil Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/departments/electrical"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Electrical & Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/departments/hospitality"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Hospitality
                </Link>
              </li>
              <li>
                <Link
                  to="/departments/mechanical"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Mechanical Engineering
                </Link>
              </li>
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
                <a
                  href="tel:+254716066759"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  +254 716 066 759
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@kibratvc.ac.ke"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  info@kibratvc.ac.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Kibra Technical & Vocational College.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
