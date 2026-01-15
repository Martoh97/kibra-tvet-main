import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OurProgrammes = () => {
  const departments = [
    {
      name: "Electrical and Electronics Engineering",
      courses: [
        {
          name: "Electrical Engineering (Power Option)",
          level: "Level 6",
          duration: "8",
          examBody: "TVET/CDACC",
        },
        {
          name: "Electrical Engineering (Power Option)",
          level: "Level 5",
          duration: "5",
          examBody: "TVET/CDACC",
        },
        {
          name: "Electrical Installation",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Electrical Installation",
          level: "Level 3",
          duration: "1",
          examBody: "TVET/CDACC",
        },
        {
          name: "Solar PV System Installation",
          level: "Level 5",
          duration: "5",
          examBody: "TVET/CDACC",
        },
        {
          name: "Solar PV System Installation",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Solar PV System Installation",
          level: "Level 3",
          duration: "1",
          examBody: "TVET/CDACC",
        },
      ],
    },
    {
      name: "Business & Liberal Studies",
      courses: [
        {
          name: "Supply Chain Management",
          level: "Level 6",
          duration: "5",
          examBody: "TVET/CDACC",
        },
        {
          name: "Business Management",
          level: "Level 6",
          duration: "5",
          examBody: "TVET/CDACC",
        },
        {
          name: "Cooperative Management",
          level: "Level 6",
          duration: "5",
          examBody: "TVET/CDACC",
        },
        {
          name: "Human Resource Management",
          level: "Level 6",
          duration: "5",
          examBody: "TVET/CDACC",
        },
        {
          name: "Counselling Psychology",
          level: "Level 6",
          duration: "5",
          examBody: "TVET/CDACC",
        },
        {
          name: "Caregiving",
          level: "Level 6",
          duration: "5",
          examBody: "TVET/CDACC",
        },
        {
          name: "Social Work and Community Development",
          level: "Level 6",
          duration: "5",
          examBody: "TVET/CDACC",
        },
        {
          name: "Supply Chain Management",
          level: "Level 5",
          duration: "3",
          examBody: "TVET/CDACC",
        },
        {
          name: "Business Management",
          level: "Level 5",
          duration: "3",
          examBody: "TVET/CDACC",
        },
        {
          name: "Cooperative Management",
          level: "Level 5",
          duration: "3",
          examBody: "TVET/CDACC",
        },
        {
          name: "Human Resource Management",
          level: "Level 5",
          duration: "3",
          examBody: "TVET/CDACC",
        },
        {
          name: "Counselling Psychology",
          level: "Level 5",
          duration: "3",
          examBody: "TVET/CDACC",
        },
        {
          name: "Care giving",
          level: "Level 5",
          duration: "3",
          examBody: "TVET/CDACC",
        },
      ],
    },
    {
      name: "Building and Civil Engineering",
      courses: [
        {
          name: "Civil Engineering",
          level: "Level 6",
          duration: "7",
          examBody: "TVET/CDACC",
        },
        {
          name: "Building Technology",
          level: "Level 6",
          duration: "7",
          examBody: "TVET/CDACC",
        },
        {
          name: "Building Technology",
          level: "Level 5",
          duration: "3",
          examBody: "TVET/CDACC",
        },
        {
          name: "Construction Management",
          level: "Level 6",
          duration: "7",
          examBody: "TVET/CDACC",
        },
        {
          name: "Plumbing",
          level: "Level 5",
          duration: "3",
          examBody: "TVET/CDACC",
        },
        {
          name: "Plumbing",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Plumbing",
          level: "Level 3",
          duration: "1",
          examBody: "TVET/CDACC",
        },
        {
          name: "Masonry",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Masonry",
          level: "Level 3",
          duration: "1",
          examBody: "TVET/CDACC",
        },
      ],
    },
    {
      name: "Computing and Informatics",
      courses: [
        {
          name: "Network System Administration",
          level: "Level 6",
          duration: "6",
          examBody: "TVET/CDACC",
        },
        {
          name: "ICT Technician",
          level: "Level 6",
          duration: "6",
          examBody: "TVET/CDACC",
        },
        {
          name: "ICT Technician",
          level: "Level 5",
          duration: "4",
          examBody: "TVET/CDACC",
        },
        {
          name: "ICT Operator",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Network System Technician",
          level: "Level 5",
          duration: "4",
          examBody: "TVET/CDACC",
        },
      ],
    },
    {
      name: "Mechanical and Automotive Engineering",
      courses: [
        {
          name: "Mechanical and Automotive Engineering",
          level: "Level 6",
          duration: "6",
          examBody: "TVET/CDACC",
        },
        {
          name: "Mechanical and Automotive Engineering",
          level: "Level 5",
          duration: "4",
          examBody: "TVET/CDACC",
        },
        {
          name: "Mechanical and Automotive Engineering",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Mechanical and Automotive Engineering",
          level: "Level 3",
          duration: "1",
          examBody: "TVET/CDACC",
        },
        {
          name: "Welding and Fabrication",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
      ],
    },
    {
      name: "Hospitality and Tourism",
      courses: [
        {
          name: "Food and Beverage Management",
          level: "Level 6",
          duration: "6",
          examBody: "TVET/CDACC",
        },
        {
          name: "Food and Beverage Operator",
          level: "Level 5",
          duration: "4",
          examBody: "TVET/CDACC",
        },
        {
          name: "Food & Beverage Cookery",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Food & Beverage Cookery",
          level: "Level 3",
          duration: "1",
          examBody: "TVET/CDACC",
        },
        {
          name: "Food & Beverage Waiter",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Food & Beverage Waiter",
          level: "Level 3",
          duration: "1",
          examBody: "TVET/CDACC",
        },
        {
          name: "Baking Technology",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Baking Technology",
          level: "Level 5",
          duration: "4",
          examBody: "TVET/CDACC",
        },
        {
          name: "Tour & Travel Management",
          level: "Level 6",
          duration: "6",
          examBody: "TVET/CDACC",
        },
        {
          name: "Tour & Travel Operations",
          level: "Level 5",
          duration: "4",
          examBody: "TVET/CDACC",
        },
        {
          name: "Tour Guiding",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Catering & Accommodation Management",
          level: "Level 6",
          duration: "6",
          examBody: "TVET/CDACC",
        },
        {
          name: "Catering & Accommodation Operations",
          level: "Level 5",
          duration: "4",
          examBody: "TVET/CDACC",
        },
        {
          name: "Accommodation Operations",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
      ],
    },
    {
      name: "Cosmetology",
      courses: [
        {
          name: "Cosmetology",
          level: "Level 6",
          duration: "6",
          examBody: "TVET/CDACC",
        },
        {
          name: "Cosmetology",
          level: "Level 5",
          duration: "4",
          examBody: "TVET/CDACC",
        },
        {
          name: "Cosmetology",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
        {
          name: "Cosmetology",
          level: "Level 3",
          duration: "1",
          examBody: "TVET/CDACC",
        },
      ],
    },
    {
      name: "Fashion & Garment Making",
      courses: [
        {
          name: "Fashion Design Management",
          level: "Level 6",
          duration: "6",
          examBody: "TVET/CDACC",
        },
        {
          name: "Fashion Designer",
          level: "Level 5",
          duration: "4",
          examBody: "TVET/CDACC",
        },
        {
          name: "Fashion Designer",
          level: "Level 4",
          duration: "2",
          examBody: "TVET/CDACC",
        },
      ],
    },
  ];

  const shortCourses = [
    { name: "Hair Dressing", duration: "1 Term", examBody: "NITA" },
    { name: "Beauty Therapy", duration: "1 Term", examBody: "NITA" },
    { name: "Arc Welding", duration: "1 Term", examBody: "NITA" },
    { name: "ICT", duration: "1 Term", examBody: "NITA" },
    { name: "Food Production & Service", duration: "1 Term", examBody: "NITA" },
    { name: "Baking & Pastry", duration: "1 Term", examBody: "NITA" },
    { name: "Plumbing & Pipe Fitting", duration: "1 Term", examBody: "NITA" },
    { name: "Electrical Wireman", duration: "1 Term", examBody: "NITA" },
    { name: "Painting", duration: "1 Term", examBody: "NITA" },
    { name: "Masonry", duration: "1 Term", examBody: "NITA" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0tMTYgMGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMTYgMGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
            -OUR PROGRAMMES-
          </h1>
          <p className="text-lg md:text-xl opacity-90 text-center max-w-2xl mx-auto">
            Explore our comprehensive range of technical and vocational courses
            designed to empower you with practical skills
          </p>
        </div>
      </section>

      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-12">
          <Button variant="outline" asChild className="mb-8">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Department Sections */}
          <section className="mb-16">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Department Programmes
              </h2>
              <p className="text-muted-foreground mb-4">
                Click on each department to view the courses offered:
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {departments.map((department, index) => (
                <AccordionItem
                  key={index}
                  value={`department-${index}`}
                  className="border rounded-lg bg-card shadow-sm overflow-hidden"
                >
                  <AccordionTrigger
                    hideIcon
                    className="px-6 py-4 hover:bg-muted/30 text-left [&[data-state=open]>svg]:rotate-45"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {department.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {department.courses.length} course
                        {department.courses.length !== 1 ? "s" : ""} available
                      </p>
                    </div>
                    <Plus className="h-5 w-5 shrink-0 transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="overflow-x-auto rounded-lg border bg-background">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead className="font-semibold">
                              Course Name
                            </TableHead>
                            <TableHead className="font-semibold">
                              Level
                            </TableHead>
                            <TableHead className="font-semibold">
                              No. of Terms
                            </TableHead>
                            <TableHead className="font-semibold">
                              Examination Body
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {department.courses.map((course, courseIndex) => (
                            <TableRow
                              key={courseIndex}
                              className="hover:bg-muted/30 transition-colors"
                            >
                              <TableCell className="font-medium">
                                {course.name}
                              </TableCell>
                              <TableCell>{course.level}</TableCell>
                              <TableCell>{course.duration}</TableCell>
                              <TableCell>{course.examBody}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Short Courses Section */}
          <section className="mb-16">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Short Courses
              </h2>
              <p className="text-muted-foreground">
                Quick skill development programs designed for rapid employment:
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg border bg-card shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">COURSE NAME</TableHead>
                    <TableHead className="font-semibold">DURATION</TableHead>
                    <TableHead className="font-semibold">
                      Examination Body
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shortCourses.map((course, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="font-medium">
                        {course.name}
                      </TableCell>
                      <TableCell>{course.duration}</TableCell>
                      <TableCell>{course.examBody}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Entry Requirements Section */}
          <section className="mb-16 bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Course Requirements & Fees
            </h2>

            <div className="overflow-x-auto rounded-lg border bg-card shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">LEVEL</TableHead>
                    <TableHead className="font-semibold">
                      MINIMUM ENTRY
                    </TableHead>
                    <TableHead className="font-semibold">FEE/MODULE</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">
                      Level 6 (Diploma courses)
                    </TableCell>
                    <TableCell>KCSE Mean Grade: C- & Above</TableCell>
                    <TableCell className="font-semibold text-primary">
                      KES. 35,000
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">
                      Level 5 (Craft Certificate courses)
                    </TableCell>
                    <TableCell>KCSE Mean Grade: D & Above</TableCell>
                    <TableCell className="font-semibold text-primary">
                      KES. 35,000
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">
                      Level 4 (Artisan Courses)
                    </TableCell>
                    <TableCell>KCSE Mean Grade: D- & Above</TableCell>
                    <TableCell className="font-semibold text-primary">
                      KES. 35,000
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">
                      Level 3 (Vocational Artisan certificate)
                    </TableCell>
                    <TableCell>KCPE Certificate</TableCell>
                    <TableCell className="font-semibold text-primary">
                      KES. 35,000
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">Short Courses</TableCell>
                    <TableCell>All are eligible</TableCell>
                    <TableCell className="font-semibold text-primary">
                      KES. 15,000
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join Kibra Technical and Vocational College today and transform
              your future with practical skills and hands-on training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/admissions/entry-requirements">
                  View Entry Requirements
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurProgrammes;
