import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import fashionImage from "@/assets/dept-fashion.jpg";

const Fashion = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative h-[400px] overflow-hidden">
          <img 
            src={fashionImage} 
            alt="Fashion & Textile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Fashion and Garment Making</h1>
              <p className="text-xl md:text-2xl">Unleash Your Creative Style</p>
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
                  Unleash your creativity and style with our courses in fashion design and clothing technology. Our fashion department nurtures creative talent and technical expertise.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Students learn pattern making, garment construction, fashion illustration, and textile technology in our modern workshops equipped with industrial sewing machines and design tools.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Programs Offered</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Fashion Design Management - Level 6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Fashion Designer - Level 5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Fashion Designer - Level 4</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary/20 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Graduates can work as fashion designers, tailors, pattern makers, fashion illustrators, textile technologists, or establish their own fashion boutiques and clothing lines.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Fashion;
