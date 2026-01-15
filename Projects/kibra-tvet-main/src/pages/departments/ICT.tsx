import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ictImage from "@/assets/dept-ict.jpg";

const ICT = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative h-[400px] overflow-hidden">
          <img 
            src={ictImage} 
            alt="Computing and Informatics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Computing and Informatics</h1>
              <p className="text-xl md:text-2xl">Empowering Digital Excellence</p>
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
                  We empower students with essential digital skills, from foundational computer literacy to advanced programming. Our department is committed to preparing students for the digital economy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With state-of-the-art computer labs and experienced instructors, students gain hands-on experience with the latest technologies and industry-standard software.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Programs Offered</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Network System Administration - Level 6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>ICT Technician - Level 6 & 5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>ICT Operator - Level 4</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Network System Technician - Level 5</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary/20 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Graduates from our ICT department are well-prepared for careers in software development, network administration, web design, IT support, database management, and many other technology-driven fields.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ICT;
