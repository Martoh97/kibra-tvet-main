import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AcademicCalendar = () => {
  const documents = [
    {
      title: "Academic Calendar 2024/2025",
      description: "Complete calendar with all important dates and deadlines",
      fileSize: "890 KB",
    },
    {
      title: "Semester Schedule",
      description: "Term dates, exam periods, and holidays",
      fileSize: "456 KB",
    },
    {
      title: "Examination Timetable",
      description: "Mid-term and final examination schedules",
      fileSize: "623 KB",
    },
    {
      title: "Registration Deadlines",
      description: "Important dates for course registration",
      fileSize: "234 KB",
    },
    {
      title: "Holiday Calendar",
      description: "Public holidays and institutional closures",
      fileSize: "198 KB",
    },
    {
      title: "Events Calendar",
      description: "Scheduled events, workshops, and activities",
      fileSize: "512 KB",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Calendar</h1>
            <p className="text-xl opacity-90">Important dates and schedules for the academic year</p>
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
                        <Calendar className="h-6 w-6 text-primary" />
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
              <h2 className="text-2xl font-bold mb-4">Key Dates to Remember</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Registration period: First two weeks of semester</li>
                <li>• Mid-term exams: Week 8-9 of each semester</li>
                <li>• Final exams: Last two weeks of semester</li>
                <li>• Fee payment deadlines: Check fee structure documents</li>
                <li>• Subscribe to calendar updates via student portal</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicCalendar;
