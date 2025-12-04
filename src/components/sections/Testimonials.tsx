import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "DoveIT has transformed our financial operations. Their attention to detail and proactive approach has saved us countless hours and significantly improved our bottom line.",
    author: "Sarah Mwangi",
    role: "CEO, TechStart Kenya",
  },
  {
    quote: "Working with DoveIT Accounting has been a game-changer for our business. Their expertise in tax planning has helped us optimize our finances effectively.",
    author: "James Ochieng",
    role: "Managing Director, Ochieng Enterprises",
  },
  {
    quote: "Professional, reliable, and always available when we need them. DoveIT truly understands the needs of growing businesses in today's market.",
    author: "Grace Wanjiku",
    role: "Founder, Wanjiku Imports",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Trusted by Leading Businesses
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with DoveIT Accounting.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 bg-secondary/50 rounded-xl"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              <p className="text-foreground leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}