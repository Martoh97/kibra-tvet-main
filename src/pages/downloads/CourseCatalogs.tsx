import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCatalogs = () => {
  const catalogs = [
    {
      title: "Computing & Informatics Catalog",
      description: "Complete course listings for IT programs",
      fileSize: "1.8 MB",
    },
    {
      title: "Engineering Programs Catalog",
      description: "Building, Electrical, and Mechanical courses",
      fileSize: "2.4 MB",
    },
    {
      title: "Business & Hospitality Catalog",
      description: "Business management and hospitality courses",
      fileSize: "1.5 MB",
    },
    {
      title: "Fashion & Cosmetology Catalog",
      description: "Creative arts and beauty therapy programs",
      fileSize: "1.9 MB",
    },
    {
      title: "Agriculture & Sports Catalog",
      description: "Agriculture and sports science courses",
      fileSize: "1.6 MB",
    },
    {
      title: "Full Course Catalog 2024",
      description: "Comprehensive listing of all available courses",
      fileSize: "5.2 MB",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Course Catalogs</h1>
            <p className="text-xl opacity-90">Detailed information about all our courses and programs</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Button variant="outline" asChild className="mb-8">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {catalogs.map((catalog, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{catalog.title}</CardTitle>
                        <CardDescription>{catalog.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">PDF • {catalog.fileSize}</span>
                      <Button size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-muted p-8 rounded-lg max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Course Information Includes</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Course descriptions and objectives</li>
                <li>• Entry requirements and prerequisites</li>
                <li>• Duration and credit hours</li>
                <li>• Career pathways and opportunities</li>
                <li>• Assessment methods and grading criteria</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseCatalogs;
