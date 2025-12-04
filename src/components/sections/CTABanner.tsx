import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Streamline Your Finances?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Partner with Sovreign Payroll Services and experience the difference that professional financial management can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="xl" className="group">
              <Link to="/contact" className="gap-2">
                Request a Quote
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="xl"
              className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}