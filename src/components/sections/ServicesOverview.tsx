import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { payrollServices } from "@/data/payrollServices";

type ServicesOverviewProps = {
  preview?: boolean; // show only a few if true
};

export function ServicesOverview({ preview = true }: ServicesOverviewProps) {
  const displayedServices = preview ? payrollServices.slice(0, 3) : payrollServices;

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Payroll Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Tailored Payroll Solutions for Your Business
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From payroll processing to compliance management, we provide a comprehensive suite of services designed to streamline employee payments and HR administration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => (
            <div
              key={service.title}
              className="premium-card bg-background p-8 group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {preview && (
          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg" className="group">
              <Link to="/services" className="gap-2">
                View All Services
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
