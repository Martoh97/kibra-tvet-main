import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import cosmetologyImage from "@/assets/dept-cosmetology.jpg";

const Cosmetology = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative h-[400px] overflow-hidden">
          <img 
            src={cosmetologyImage} 
            alt="Cosmetology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Cosmetology</h1>
              <p className="text-xl md:text-2xl">Master the Art of Beauty</p>
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
                  Master the art and science of Beauty Therapy and Hairdressing with our amazing programs. Our cosmetology department offers comprehensive training in all aspects of beauty and personal care.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Students learn from experienced professionals using modern equipment and techniques in our fully-equipped salons and training facilities.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Programs Offered</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Beauty Therapy & Hairdressing - Level 6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Beauty Therapy & Hairdressing - Level 5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Beauty Therapy & Hairdressing - Level 4</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Beauty Therapy & Hairdressing - Level 3</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary/20 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Graduates can work in beauty salons, spas, hotels, or start their own beauty businesses. Career paths include beauty therapist, hairstylist, makeup artist, salon manager, and beauty consultant.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cosmetology;
