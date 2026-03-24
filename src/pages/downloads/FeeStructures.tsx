import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, DollarSign, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FeeStructures = () => {
  const documents = [
    {
      title: "Tuition Fee Schedule 2024/2025",
      description: "Complete breakdown of tuition fees for all programs",
      fileSize: "425 KB",
    },
    {
      title: "Payment Plans & Options",
      description: "Flexible payment arrangements and installment plans",
      fileSize: "312 KB",
    },
    {
      title: "Accommodation & Meal Plans",
      description: "Housing and food service costs",
      fileSize: "289 KB",
    },
    {
      title: "Additional Fees & Expenses",
      description: "Laboratory, materials, and other supplementary fees",
      fileSize: "198 KB",
    },
    {
      title: "Scholarship & Financial Aid Guide",
      description: "Available funding opportunities and how to apply",
      fileSize: "567 KB",
    },
    {
      title: "Refund Policy",
      description: "Terms and conditions for fee refunds",
      fileSize: "156 KB",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fee Structures</h1>
            <p className="text-xl opacity-90">Transparent information about tuition and costs</p>
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
                        <DollarSign className="h-6 w-6 text-primary" />
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
              <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Multiple payment methods accepted</li>
                <li>• Installment plans available for qualified students</li>
                <li>• Early payment discounts may apply</li>
                <li>• Financial aid counseling available</li>
                <li>• Contact the Bursar's Office for personalized assistance</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeeStructures;
