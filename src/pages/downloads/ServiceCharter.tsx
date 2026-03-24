import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ServiceCharter = () => {
  useEffect(() => {
    document.title = "Service Charter - Kibra Technical and Vocational College";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Download Kibra TVC Customer Service Delivery Charter outlining our commitment to quality service delivery and stakeholder satisfaction."
      );
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/downloads/service-charter.pdf';
    link.download = 'Kibra_TVC_Service_Charter.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Charter</h1>
            <p className="text-xl opacity-90">Our commitment to excellence in service delivery</p>
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
            
            <div className="max-w-2xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Customer Service Delivery Charter</CardTitle>
                      <CardDescription className="text-base">
                        This charter outlines Kibra Technical and Vocational College's commitment to providing quality service to all our stakeholders including students, staff, parents, and the community.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">What's Inside:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Our service delivery standards</li>
                        <li>• Stakeholder rights and responsibilities</li>
                        <li>• Complaint handling procedures</li>
                        <li>• Contact information and support channels</li>
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-muted-foreground">PDF Document</span>
                      <Button onClick={handleDownload} className="gap-2">
                        <Download className="h-4 w-4" />
                        Download Charter
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceCharter;
