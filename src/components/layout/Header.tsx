import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
             <img
                 src="/logo.svg"            
                 alt="Sovereign Payroll Services Logo"
                 className="w-8 h-8 object-contain"       
              />
            </div>
            <span className="font-bold text-xl text-foreground tracking-tight">
              Sovreign Payroll Services<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 accent-underline ${
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" size="default">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      
            {/* Mobile Navigation */}
{isMobileMenuOpen && (
  <div className="md:hidden py-6 border-t border-border bg-background shadow-sm">
    <div className="flex flex-col gap-4 px-1">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`text-base font-medium py-2 transition-colors ${
            location.pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.name}
        </Link>
      ))}
      <Button asChild variant="default" className="mt-2">
        <Link to="/contact">Request a Quote</Link>
      </Button>
    </div>
  </div>
)}


      </nav>
    </header>
  );
}