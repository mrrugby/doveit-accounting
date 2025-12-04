import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
  { name: "Complete Payroll Processing", href: "/services" },
  { name: "Tax & Compliance Management", href: "/services" },
  { name: "Direct Deposits & Payment Management", href: "/services" },
  { name: "Employee Onboarding & Records", href: "/services" },
  { name: "HR Support & Consultation", href: "/services" },
],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              


              <div className="w-10 h-10 rounded-full flex items-center justify-center">
             <img
                 src="/logo.svg"            
                 alt="Sovereign Payroll Services Logo"
                 className="w-8 h-8 object-contain"       
              />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Sovreign Payroll Services<span className="text-accent">.</span>
            </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Professional accounting and financial consulting services for individuals and businesses. Building trust through excellence.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-accent">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-accent">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-accent">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">sovereignpayrollservices@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">+356 9903 84430</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Tarxien, Malta
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Sovreign Payroll Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}