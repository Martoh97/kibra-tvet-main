import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ApplicationForms = () => {
  const forms = [
    {
      title: "General Application Form",
      description: "Main application form for all courses",
      fileSize: "245 KB",
    },
    {
      title: "Transfer Application Form",
      description: "For students transferring from other institutions",
      fileSize: "198 KB",
    },
    {
      title: "International Student Application",
      description: "Application form for international students",
      fileSize: "312 KB",
    },
    {
      title: "Accommodation Request Form",
      description: "Apply for on-campus accommodation",
      fileSize: "156 KB",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Application Forms</h1>
            <p className="text-xl opacity-90">Download the forms you need to apply to Kibra TVC</p>
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
              {forms.map((form, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{form.title}</CardTitle>
                        <CardDescription>{form.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">PDF • {form.fileSize}</span>
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
              <h2 className="text-2xl font-bold mb-4">Application Instructions</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Fill out all forms completely and accurately</li>
                <li>• Attach all required supporting documents</li>
                <li>• Submit forms to the Admissions Office or via email</li>
                <li>• Keep copies of all submitted documents for your records</li>
                <li>• Contact admissions if you have any questions</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationForms;
