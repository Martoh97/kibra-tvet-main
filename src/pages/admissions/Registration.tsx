import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Calendar, CheckCircle, ArrowLeft } from "lucide-react";

const Registration = () => {
  const steps = [
    {
      title: "Step 1: Download Application Form",
      description: "Download and fill out the official application form with accurate information.",
      icon: FileText,
    },
    {
      title: "Step 2: Submit Required Documents",
      description: "Attach copies of your academic certificates, national ID, and passport photos.",
      icon: CheckCircle,
    },
    {
      title: "Step 3: Pay Application Fee",
      description: "Pay the non-refundable application fee through the provided payment channels.",
      icon: Calendar,
    },
    {
      title: "Step 4: Submit Application",
      description: "Submit your completed application form and documents to the Registrar's office or via email.",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Application & Registration</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Start your journey to excellence at Kibra Technical & Vocational College
            </p>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Button variant="outline" asChild className="mb-8">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {steps.map((step, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Important Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Application Period</h3>
                    <p className="text-muted-foreground">
                      Applications are accepted throughout the year. However, intake periods are in January, May, and September.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Required Documents</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Completed application form</li>
                      <li>Copy of National ID or Birth Certificate</li>
                      <li>Original and copies of academic certificates (KCSE, KCPE, or equivalent)</li>
                      <li>2 recent passport-size photographs</li>
                      <li>Application fee payment receipt</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Contact Information</h3>
                    <p className="text-muted-foreground">
                      For inquiries: <a href="mailto:info@kibratvc.ac.ke" className="text-primary hover:underline">info@kibratvc.ac.ke</a><br />
                      Phone: <a href="tel:+254716066759" className="text-primary hover:underline">+254 716066759</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download the application form and take the first step toward your future
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg">
                <Link to="/downloads/application-forms">Download Application Form</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/admissions/entry-requirements">View Entry Requirements</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
