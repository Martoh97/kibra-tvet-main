import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Award, ArrowLeft } from "lucide-react";

const EntryRequirements = () => {
  const certificateRequirements = [
    {
      level: "Certificate Courses",
      icon: BookOpen,
      requirements: [
        "Minimum KCSE grade D (Plain) or equivalent",
        "KCPE Certificate",
        "Relevant trade test or artisan certificate (where applicable)",
      ],
    },
    {
      level: "Diploma Courses",
      icon: Award,
      requirements: [
        "Minimum KCSE grade C- (Minus) or equivalent",
        "Relevant certificate in the field of study",
        "At least one year of relevant work experience (recommended)",
      ],
    },
    {
      level: "Artisan Courses",
      icon: GraduationCap,
      requirements: [
        "KCPE Certificate",
        "Basic literacy and numeracy skills",
        "Interest in hands-on vocational training",
      ],
    },
  ];

  const departments = [
    {
      name: "Computing & Informatics",
      specific: "Mathematics and English grade C (Plain) or better recommended",
    },
    {
      name: "Building & Civil Engineering",
      specific: "Mathematics and Physics/Physical Sciences grade C (Plain) or better",
    },
    {
      name: "Electrical & Electronics",
      specific: "Mathematics and Physics grade C (Plain) or better",
    },
    {
      name: "Mechanical Engineering",
      specific: "Mathematics and Physics grade C (Plain) or better",
    },
    {
      name: "Business Studies",
      specific: "English and Mathematics grade C (Plain) or better",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Entry Requirements</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Discover what you need to join our programs and start your journey
            </p>
          </div>
        </section>

        {/* General Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Button variant="outline" asChild className="mb-8">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">General Entry Requirements</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {certificateRequirements.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-full">
                          <item.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-center">{item.level}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Department-Specific Requirements */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Department-Specific Requirements</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Some departments have additional specific requirements for optimal learning outcomes
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {departments.map((dept, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{dept.specific}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Important Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Mature Entry</h3>
                    <p className="text-muted-foreground">
                      Candidates aged 25 years and above with relevant work experience may be considered for admission even if they do not meet the standard academic requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Equivalency</h3>
                    <p className="text-muted-foreground">
                      Foreign qualifications must be verified by the Kenya National Examinations Council (KNEC) for equivalency.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Upgrading Programs</h3>
                    <p className="text-muted-foreground">
                      Certificate holders can upgrade to Diploma programs upon successful completion of their certificate course and meeting the diploma entry requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Need More Information?</h3>
                    <p className="text-muted-foreground">
                      Contact our admissions office at <a href="mailto:info@kibratvc.ac.ke" className="text-primary hover:underline">info@kibratvc.ac.ke</a> or call <a href="tel:+254716066759" className="text-primary hover:underline">+254 716066759</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Meet the Requirements?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Take the next step and apply to join Kibra TVC today
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" variant="secondary">
                <Link to="/admissions/registration">Start Your Application</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/courses">View Our Courses</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EntryRequirements;
