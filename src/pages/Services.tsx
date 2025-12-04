import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { payrollServices } from "@/data/payrollServices";

const Services = () => {
  return (
    <Layout>
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Payroll Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Tailored Payroll Solutions for Your Business
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From payroll processing to compliance management, we provide a comprehensive suite of services designed to streamline employee payments and HR administration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {payrollServices.map((service) => (
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
        </div>
      </section>
    </Layout>
  );
};

export default Services;
