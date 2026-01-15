import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Book, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const StudentHandbook = () => {
  const documents = [
    {
      title: "Student Handbook 2024/2025",
      description: "Complete guide to policies, procedures, and student life",
      fileSize: "3.2 MB",
    },
    {
      title: "Code of Conduct",
      description: "Expected behavior and disciplinary procedures",
      fileSize: "678 KB",
    },
    {
      title: "Academic Policies",
      description: "Grading, attendance, and academic integrity policies",
      fileSize: "845 KB",
    },
    {
      title: "Student Rights & Responsibilities",
      description: "What you need to know as a Kibra TVC student",
      fileSize: "512 KB",
    },
    {
      title: "Campus Safety Guide",
      description: "Emergency procedures and campus security information",
      fileSize: "423 KB",
    },
    {
      title: "Student Services Directory",
      description: "Contact information for all student support services",
      fileSize: "289 KB",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Handbook</h1>
            <p className="text-xl opacity-90">Essential policies, guidelines, and resources for students</p>
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
                        <Book className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{doc.title}</CardTitle>
                        <CardDescription>{doc.description}</CardDescription>
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

            <div className="mt-12 bg-muted p-8 rounded-lg max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Important Handbook Highlights</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• All students must read and understand the handbook</li>
                <li>• Policies are subject to updates - check for latest version</li>
                <li>• Academic integrity is taken very seriously</li>
                <li>• Student support services are available to all enrolled students</li>
                <li>• Report any concerns to Student Affairs office</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudentHandbook;
