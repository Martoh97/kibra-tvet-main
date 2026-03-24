import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Award, FileCheck, Users, Clock, CheckCircle } from "lucide-react";

const RPL = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Recognition of Prior Learning (RPL)</h1>
            <p className="text-xl opacity-90">Get certified for the skills you already have</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          {/* What is RPL */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Award className="h-6 w-6 text-primary" />
                What is RPL?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Recognition of Prior Learning (RPL) is a process that allows individuals to gain formal recognition 
                for skills and knowledge they have acquired through work experience, informal training, or life experiences. 
                At Kibra TVC, we believe that learning happens everywhere – not just in the classroom.
              </p>
              <p className="text-muted-foreground">
                Through our RPL program, you can convert your existing competencies into nationally recognized 
                qualifications without having to repeat training in areas where you already have expertise.
              </p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <h2 className="text-2xl font-bold mb-6">Benefits of RPL</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Save Time</h3>
                <p className="text-muted-foreground text-sm">
                  Reduce the time needed to complete your qualification by recognizing what you already know.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Formal Recognition</h3>
                <p className="text-muted-foreground text-sm">
                  Get official certification for skills gained through work experience or self-learning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Career Advancement</h3>
                <p className="text-muted-foreground text-sm">
                  Enhance your employability and open doors to new career opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Eligibility */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Who is Eligible?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Individuals with work experience in a relevant field",
                  "Those who have completed informal or non-formal training",
                  "Artisans and craftspeople with practical skills",
                  "Professionals seeking formal certification of their competencies",
                  "Anyone with demonstrable skills acquired through life experiences"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* RPL Process */}
          <h2 className="text-2xl font-bold mb-6">The RPL Process</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { step: "1", title: "Application", desc: "Submit your RPL application with supporting documents" },
              { step: "2", title: "Assessment", desc: "Undergo skills assessment by qualified assessors" },
              { step: "3", title: "Evidence Review", desc: "Portfolio of evidence reviewed against unit standards" },
              { step: "4", title: "Certification", desc: "Receive your nationally recognized qualification" }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Available Programs */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Programs Available for RPL</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Electrical Installation",
                  "Motor Vehicle Mechanics",
                  "Welding and Fabrication",
                  "Plumbing",
                  "Masonry",
                  "Carpentry and Joinery",
                  "Fashion Design and Garment Making",
                  "Food and Beverage Service",
                  "Hairdressing and Beauty Therapy",
                  "ICT and Computer Applications"
                ].map((program, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{program}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Contact our RPL coordinator to learn more about the assessment process and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/apply">
                  <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RPL;
