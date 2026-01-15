import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import hospitalityImage from "@/assets/dept-hospitality.jpg";

const Hospitality = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative h-[400px] overflow-hidden">
          <img 
            src={hospitalityImage} 
            alt="Hospitality"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Hospitality and Tourism</h1>
              <p className="text-xl md:text-2xl">Excellence in Service</p>
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
                  Excel in the Hospitality industry with our tailored courses in culinary arts, hotel management, and more. Our department prepares students for successful careers in the dynamic hospitality sector.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Students receive hands-on training in our modern kitchen facilities and service areas, learning from experienced hospitality professionals.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Programs Offered</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Food and Beverage Management - Level 6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Food and Beverage Operator - Level 5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Food & Beverage Cookery - Level 4 & 3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Food & Beverage Waiter - Level 4 & 3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Baking Technology - Level 5 & 4</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Tour & Travel Management - Level 6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Tour & Travel Operations - Level 5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Tour Guiding - Level 4</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Catering & Accommodation Management - Level 6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Catering & Accommodation Operations - Level 5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Accommodation Operations - Level 4</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary/20 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Graduates can work in hotels, restaurants, resorts, catering companies, cruise ships, or start their own hospitality businesses as chefs, hotel managers, restaurant supervisors, or catering entrepreneurs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hospitality;
