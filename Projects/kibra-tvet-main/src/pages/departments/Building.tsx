import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import buildingImage from "@/assets/dept-building.jpg";

const Building = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative h-[400px] overflow-hidden">
          <img 
            src={buildingImage} 
            alt="Building and Civil Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Building and Civil Engineering</h1>
              <p className="text-xl md:text-2xl">Building Tomorrow's Infrastructure</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="outline" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">About the Department</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Build a solid foundation for your future with our courses in construction and civil engineering. Our department combines theoretical knowledge with practical skills.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Students gain hands-on experience in construction techniques, building design, and project management through our well-equipped workshops and real-world projects.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Programs Offered</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Civil Engineering - Level 6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Building Technology - Level 6 & 5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Construction Management - Level 6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Plumbing - Level 5, 4 & 3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Masonry - Level 4 & 3</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary/20 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Graduates can pursue careers as construction supervisors, building technicians, quantity surveyors, site managers, and independent contractors in the thriving construction industry.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Building;
