import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

const courseCategories = ["All Courses", "Level 6", "Level 5", "Level 4"];

const departments = [
  "All Departments",
  "Computing & Informatics",
  "Building & Construction",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Business Studies",
  "Hospitality",
  "Fashion & Beauty",
  "Agriculture",
];

const coursesData = [
  {
    id: 1,
    name: "Diploma in Information Communication Technology",
    level: "Level 6",
    department: "Computing & Informatics",
    duration: "3 Years",
    accreditation: "KNEC",
  },
  {
    id: 2,
    name: "Diploma in Building & Construction",
    level: "Level 6",
    department: "Building & Construction",
    duration: "3 Years",
    accreditation: "KNEC",
  },
  {
    id: 3,
    name: "Diploma in Electrical Engineering",
    level: "Level 6",
    department: "Electrical Engineering",
    duration: "3 Years",
    accreditation: "KNEC",
  },
  {
    id: 4,
    name: "Diploma in Mechanical Engineering",
    level: "Level 6",
    department: "Mechanical Engineering",
    duration: "3 Years",
    accreditation: "KNEC",
  },
  {
    id: 5,
    name: "Diploma in Business Management",
    level: "Level 6",
    department: "Business Studies",
    duration: "2 Years",
    accreditation: "KNEC",
  },
  {
    id: 6,
    name: "Diploma in Food & Beverage Management",
    level: "Level 6",
    department: "Hospitality",
    duration: "2 Years",
    accreditation: "KNEC",
  },
  {
    id: 7,
    name: "Certificate in Computer Applications",
    level: "Level 5",
    department: "Computing & Informatics",
    duration: "1 Year",
    accreditation: "KNEC",
  },
  {
    id: 8,
    name: "Certificate in Plumbing",
    level: "Level 5",
    department: "Building & Construction",
    duration: "1 Year",
    accreditation: "KNEC",
  },
  {
    id: 9,
    name: "Certificate in Electrical Installation",
    level: "Level 5",
    department: "Electrical Engineering",
    duration: "1 Year",
    accreditation: "KNEC",
  },
  {
    id: 10,
    name: "Certificate in Fashion Design",
    level: "Level 5",
    department: "Fashion & Beauty",
    duration: "1 Year",
    accreditation: "KNEC",
  },
  {
    id: 11,
    name: "Artisan in Welding & Fabrication",
    level: "Level 4",
    department: "Mechanical Engineering",
    duration: "6 Months",
    accreditation: "NITA",
  },
  {
    id: 12,
    name: "Artisan in Masonry",
    level: "Level 4",
    department: "Building & Construction",
    duration: "6 Months",
    accreditation: "NITA",
  },
  {
    id: 13,
    name: "Artisan in Carpentry & Joinery",
    level: "Level 4",
    department: "Building & Construction",
    duration: "6 Months",
    accreditation: "NITA",
  },
  {
    id: 14,
    name: "Certificate in Hairdressing & Beauty Therapy",
    level: "Level 5",
    department: "Fashion & Beauty",
    duration: "1 Year",
    accreditation: "KNEC",
  },
  {
    id: 15,
    name: "Certificate in Agriculture",
    level: "Level 5",
    department: "Agriculture",
    duration: "1 Year",
    accreditation: "KNEC",
  },
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory =
      selectedCategory === "All Courses" || course.level === selectedCategory;
    const matchesDepartment =
      selectedDepartment === "All Departments" ||
      course.department === selectedDepartment;
    return matchesCategory && matchesDepartment;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Programs
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Discover our wide range of courses designed to equip you with
            practical skills
          </p>
        </div>
      </section>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="mb-8">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Category Filters */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground mb-3">
              Filter by Level
            </h2>
            <div className="flex flex-wrap gap-2">
              {courseCategories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Department Filters */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground mb-3">
              Filter by Department
            </h2>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(dept)}
                  className="rounded-full"
                  size="sm"
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredCourses.length}
              </span>{" "}
              courses
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <Badge className="bg-accent text-accent-foreground">
                      {course.accreditation}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {course.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        Department:
                      </span>{" "}
                      {course.department}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Duration:
                      </span>{" "}
                      {course.duration}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Course Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No courses found matching your filters.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All Courses");
                  setSelectedDepartment("All Departments");
                }}
                className="mt-4"
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
