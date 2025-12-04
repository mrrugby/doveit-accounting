import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Over 15 years of experience in financial consulting",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient service delivery without compromising quality",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Tailored solutions for every unique business need",
  },
];

export function AboutPreview() {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Sovreign Payroll Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Financial Excellence, <br />Delivered with Integrity
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Sovreign Payroll Services, we believe that every business deserves access to premium financial expertise. Our team of certified professionals brings together decades of experience in accounting, tax planning, and business advisory to help you achieve your financial goals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We combine traditional accounting principles with modern technology to deliver efficient, accurate, and insightful financial services that drive business growth.
            </p>
            <Button asChild variant="outline" className="group">
              <Link to="/about" className="gap-2">
                Learn More About Us
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="premium-card p-6 flex items-start gap-5"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}