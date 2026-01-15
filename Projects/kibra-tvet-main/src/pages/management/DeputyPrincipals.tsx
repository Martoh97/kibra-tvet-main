import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import deputyAdminImage from "@/assets/deputy-admin-finance.jpg";
import deputyAcademicImage from "@/assets/deputy-academic-new.jpg";
const DeputyPrincipals = () => {
  const deputies = [
    {
      name: "Edwin Waweru",
      title: "Deputy Principal - Administration and Finance",
      icon: Briefcase,
      responsibilities: [
        "Financial management and budgeting",
        "Human resource administration",
        "Infrastructure development",
        "Procurement and supplies",
      ],
    },
    {
      name: "Julius Mukoya",
      title: "Deputy Principal - Academic Affairs",
      icon: BookOpen,
      responsibilities: [
        "Curriculum development and implementation",
        "Academic quality assurance",
        "Examination coordination",
        "Faculty development programs",
      ],
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[90px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-3xl font-bold mb-4">
              Deputy Principals
            </h1>
            <p className="text-xl md:text-2xl">Executive Leadership Team</p>
          </div>
        </section>

        {/* Deputy Principal - Administration Message */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-muted/30 rounded-lg shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={deputyAdminImage}
                        alt="Edwin Waweru - Deputy Principal Administration and Finance"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-xl">Edwin Waweru</h3>
                      <p className="text-sm text-muted-foreground">
                        Deputy Principal
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Administration and Finance
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-4">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                      Message from Deputy Principal - Administration and Finance
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                      Welcome to Kibra Technical and Vocational College. As the
                      Deputy Principal for Administration and Finance, I am
                      committed to upholding the highest standards of
                      administrative efficiency and financial accountability.
                      Our team works diligently to create an environment where
                      students and staff can thrive, supported by modern
                      systems, reliable structures, and continuous improvements
                      that empower teaching and learning.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      We prioritize transparent financial management to ensure
                      every resource contributes meaningfully to a quality
                      learning experience. We aim to inspire excellence and
                      nurture integrity, accountability, and service. I
                      encourage all students to make full use of the support
                      available and to seek assistance whenever needed as we
                      build a strong, value-driven institution together.
                    </p>

                    <div className="mt-6 pt-6 border-t">
                      <p className="font-semibold">Edwin Waweru</p>
                      <p className="text-sm text-muted-foreground">
                        Deputy Principal - Administration and Finance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deputy Principal - Academic Affairs Message */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-lg shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={deputyAcademicImage}
                        alt="Julius Mukoya - Deputy Principal Academic Affairs"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-xl">Julius Mukoya</h3>
                      <p className="text-sm text-muted-foreground">
                        Deputy Principal
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Academic Affairs
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-4">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                      Message from Deputy Principal - Academic Affairs
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                      As the Deputy Principal for Academic Affairs at Kibra
                      Technical and Vocational College, I welcome you to an
                      institution where academic excellence and quality training
                      guide our mission. Our curriculum is designed to meet
                      national and industry standards aligned with current job
                      market demands.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      With a dedicated and experienced trainers, we are
                      committed to equipping students with relevant technical
                      skills while nurturing critical thinking, creativity, and
                      a passion for learning. I encourage all students to make
                      full use of the academic resources provided and strive for
                      excellence, knowing that your success is our top priority.
                    </p>
                    <div className="mt-6 pt-6 border-t">
                      <p className="font-semibold">Julius Mukoya</p>
                      <p className="text-sm text-muted-foreground">
                        Deputy Principal - Academic Affairs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default DeputyPrincipals;
