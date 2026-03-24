import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Prospectus = () => {
  const documents = [
    {
      title: "College Prospectus 2024/2025",
      description: "Complete guide to programs, facilities, and student life",
      fileSize: "8.5 MB",
      year: "2024/2025",
    },
    {
      title: "Quick Reference Guide",
      description: "Brief overview of all available courses",
      fileSize: "2.1 MB",
      year: "2024",
    },
    {
      title: "Facilities & Campus Life Brochure",
      description: "Information about campus facilities and student activities",
      fileSize: "4.3 MB",
      year: "2024",
    },
    {
      title: "International Student Guide",
      description: "Special information for international students",
      fileSize: "3.2 MB",
      year: "2024",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prospectus & Brochures</h1>
            <p className="text-xl opacity-90">Explore our programs and discover what makes Kibra TVC unique</p>
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
              {documents.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{doc.title}</CardTitle>
                        <CardDescription>{doc.description}</CardDescription>
                        <span className="text-xs text-muted-foreground mt-2 inline-block">{doc.year}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">PDF • {doc.fileSize}</span>
                      <Button size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Prospectus;
