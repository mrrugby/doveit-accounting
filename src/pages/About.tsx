import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Shield,
  MessageSquare,
  Settings,
  Award
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our client relationships.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every service we deliver.",
  },
  {
    icon: MessageSquare,
    title: "Transparency",
    description: "Clear, honest communication is at the heart of everything we do.",
  },
  {
    icon: Settings,
    title: "Innovation",
    description: "We leverage modern technology to deliver efficient solutions.",
  },
];

const whyChooseUs = [
    "Over 15 years of industry experience",
  "Fast turnaround on all deliverables",
  "Transparent communication at every step",
  "Tailored solutions for every client",
  "Dedicated support and guidance",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Building Financial Success, One Client at a Time
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sovreign Payroll Services is a premier accounting and financial consulting firm dedicated to helping businesses and individuals achieve their financial goals through expert guidance and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="premium-card p-10">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses and individuals with exceptional financial services that drive growth, ensure compliance, and create lasting value. We are committed to being a trusted partner in our clients' financial journey, providing clarity and confidence in every decision.
              </p>
            </div>

            {/* Vision */}
            <div className="premium-card p-10">
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted accounting and financial consulting firm in the region, recognized for our unwavering commitment to excellence, integrity, and client success. We envision a future where every business has access to world-class financial expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-8">
                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">
                Experience the Sovreign Payroll Services Difference
              </h2>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="default" size="lg" className="mt-10 group">
                <Link to="/contact" className="gap-2">
                  Get Started Today
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="premium-card p-8 text-center">
                <p className="text-4xl font-bold text-foreground mb-2">15+</p>
                <p className="text-muted-foreground text-sm">Years of Experience</p>
              </div>
              <div className="premium-card p-8 text-center">
                <p className="text-4xl font-bold text-foreground mb-2">500+</p>
                <p className="text-muted-foreground text-sm">Clients Served</p>
              </div>
              <div className="premium-card p-8 text-center">
                <p className="text-4xl font-bold text-foreground mb-2">99%</p>
                <p className="text-muted-foreground text-sm">Client Retention</p>
              </div>
              <div className="premium-card p-8 text-center">
                <p className="text-4xl font-bold text-foreground mb-2">24/7</p>
                <p className="text-muted-foreground text-sm">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Member */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Meet Our Leadership
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className="premium-card bg-background p-8 text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">SS</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Shaka Senaji
              </h3>
              <p className="text-accent font-medium mb-4">Lead Web Developer</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                With over a decade of experience in technology and financial systems, Shaka leads our digital initiatives, ensuring our clients benefit from cutting-edge solutions that streamline their financial operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how DoveIT Accounting can help you achieve your financial goals.
          </p>
          <Button asChild variant="accent" size="xl" className="group">
            <Link to="/contact" className="gap-2">
              Contact Us Today
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;