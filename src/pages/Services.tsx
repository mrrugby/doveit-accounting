import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  BookOpen, 
  FileText, 
  Briefcase, 
  ClipboardCheck, 
  PieChart,
  ArrowRight,
  Check
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Comprehensive financial management and reporting for your business operations. We handle your entire accounting function with precision and care.",
    features: [
      "Financial statement preparation",
      "General ledger management",
      "Accounts payable & receivable",
      "Monthly reconciliations",
    ],
    price: "Starting at KES 15,000/month",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description: "Accurate record-keeping and transaction management to maintain financial clarity. Keep your books organized and up-to-date at all times.",
    features: [
      "Daily transaction recording",
      "Bank reconciliations",
      "Expense categorization",
      "Financial reports",
    ],
    price: "Starting at KES 8,000/month",
  },
  {
    icon: FileText,
    title: "Tax Preparation",
    description: "Strategic tax planning and filing services to optimize your tax position. Maximize savings while ensuring full compliance with tax regulations.",
    features: [
      "Individual tax returns",
      "Corporate tax filing",
      "Tax planning & strategy",
      "VAT compliance",
    ],
    price: "Starting at KES 10,000",
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description: "Expert guidance on financial decisions, growth strategies, and business planning. Get the insights you need to make informed decisions.",
    features: [
      "Business plan development",
      "Growth strategy consulting",
      "Financial forecasting",
      "Investment analysis",
    ],
    price: "Starting at KES 25,000",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Reporting",
    description: "Ensure regulatory compliance with accurate and timely financial reporting. Stay ahead of requirements and avoid penalties.",
    features: [
      "Regulatory filings",
      "Annual returns",
      "Statutory compliance",
      "Audit preparation",
    ],
    price: "Starting at KES 12,000",
  },
  {
    icon: PieChart,
    title: "Financial Reporting",
    description: "In-depth analysis and insights to drive informed business decisions. Understand your numbers and unlock growth opportunities.",
    features: [
      "Custom dashboards",
      "Performance analysis",
      "Trend reporting",
      "KPI tracking",
    ],
    price: "Starting at KES 18,000",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Financial Solutions for Your Business
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From day-to-day bookkeeping to strategic financial advisory, we offer a full spectrum of accounting services designed to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="premium-card p-8 md:p-10"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Icon & Title */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-accent font-semibold text-sm">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-4">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm" className="mt-6">
                      <Link to="/contact" className="gap-2">
                        Request Quote
                        <ArrowRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              How We Work With You
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your needs and understand your business" },
              { step: "02", title: "Proposal", desc: "We prepare a tailored service proposal" },
              { step: "03", title: "Onboarding", desc: "Smooth transition and setup of systems" },
              { step: "04", title: "Delivery", desc: "Ongoing service with regular reporting" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-accent/20 mb-4">{item.step}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Every business is unique. Contact us to discuss a tailored package that fits your specific needs and budget.
          </p>
          <Button asChild variant="accent" size="xl" className="group">
            <Link to="/contact" className="gap-2">
              Request a Quote
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;