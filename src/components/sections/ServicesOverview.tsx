import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  BookOpen, 
  FileText, 
  Briefcase, 
  ClipboardCheck, 
  PieChart,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Comprehensive financial management and reporting for your business operations.",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description: "Accurate record-keeping and transaction management to maintain financial clarity.",
  },
  {
    icon: FileText,
    title: "Tax Preparation",
    description: "Strategic tax planning and filing services to optimize your tax position.",
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description: "Expert guidance on financial decisions, growth strategies, and business planning.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Reporting",
    description: "Ensure regulatory compliance with accurate and timely financial reporting.",
  },
  {
    icon: PieChart,
    title: "Financial Analysis",
    description: "In-depth analysis and insights to drive informed business decisions.",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From day-to-day bookkeeping to strategic financial advisory, we offer a full spectrum of accounting services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg" className="group">
            <Link to="/services" className="gap-2">
              View All Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}