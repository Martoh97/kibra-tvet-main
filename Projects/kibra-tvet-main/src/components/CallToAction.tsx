import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section id="admissions" className="py-24 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-purple-700"></div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Start Your Career in Kibra TVC?
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take the first step toward your future career. Apply now for our
            upcoming intake and join our community of successful graduates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-6 shadow-2xl"
            >
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-10 py-6"
              asChild
            >
              <Link to="/our-programmes">View Our Programmes</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
