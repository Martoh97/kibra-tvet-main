import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const History = () => {
  useEffect(() => {
    document.title = "Kibra TVC History - Technical and Vocational College";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Kibra Technical and Vocational College history, established in 2024 to provide quality TVET training in Nairobi County with eight academic departments."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              KIBRA TVC HISTORY
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button variant="outline" asChild className="mb-8">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Kibra Technical and Vocational College (Kibra TVC) is a public Technical and Vocational Education and Training (TVET) institution located in Kibra Sub-County, Nairobi County. The college was established under the Ministry of Education to provide accessible and high-quality technical and vocational training in line with the provisions of the TVET Act, 2013 Section 20(1).
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    The institution was constructed through the support of the Kibra National Government Constituencies Development Fund (NGCDF) and was officially handed over to the Ministry of Education in March 2024. Subsequently, the State Department for Technical Vocational Education and Training (SDTVET) equipped the college with modern classrooms and well-furnished workshops, paving the way for the commencement of training activities in May 2024.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Since its inception, Kibra TVC has positioned itself as a dynamic centre for skill development and innovation, dedicated to producing competent graduates who contribute to Kenya's socio-economic growth. Guided by its vision "to be a Centre of Excellence in Technical and Vocational Education and Training for sustainable economic growth" and its mission "to provide quality technical, vocational education and training for sustainable economic growth," the college continues to nurture technical skills relevant to the job market.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Kibra TVC currently comprises eight academic departments: Business & Liberal Studies, Building and Civil Engineering, Computing & Informatics, Cosmetology, Electrical & Electronics Engineering, Hospitality & Tourism, Fashion & Garment Making, and Mechanical & Automotive Engineering. These departments collectively embody the institution's commitment to providing diverse and industry-relevant training opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default History;
