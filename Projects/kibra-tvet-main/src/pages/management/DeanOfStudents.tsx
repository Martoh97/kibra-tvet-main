import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Users, Heart, Trophy, Megaphone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import deanImage from "@/assets/dean-of-students.jpg";
const DeanOfStudents = () => {
  const services = [
    {
      icon: Users,
      title: "Student Welfare",
      description:
        "Counseling services, health support, and general student wellbeing programs",
    },
    {
      icon: Heart,
      title: "Guidance & Counseling",
      description:
        "Academic counseling, career guidance, and personal development support",
    },
    {
      icon: Trophy,
      title: "Co-curricular Activities",
      description:
        "Sports, clubs, societies, and extracurricular programs coordination",
    },
    {
      icon: Megaphone,
      title: "Student Leadership",
      description:
        "Student council support, leadership training, and student representation",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[90px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-3xl font-bold mb-4">
              Dean of Students
            </h1>
            <p className="text-xl md:text-2xl">Student Affairs & Welfare</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src={deanImage}
                    alt="Edith Ojwang - Dean of Students"
                    className="w-48 h-48 object-cover rounded-lg shadow-lg"
                  />
                  <div className="flex-1">
                    <CardTitle>Edith Ojwang</CardTitle>
                    <CardDescription>Dean of Students</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The Office of the Dean of Students is dedicated to ensuring a
                  holistic educational experience for all students at Kibra TVC.
                  We focus on student welfare, personal development, and
                  creating a supportive campus environment where every student
                  can thrive academically and socially.
                </p>
                <p className="text-muted-foreground">
                  Our team works closely with students to address their
                  concerns, coordinate co-curricular activities, and foster a
                  vibrant campus community. We are committed to promoting
                  student success both inside and outside the classroom.
                </p>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:dean.students@kibratvc.ac.ke"
                        className="text-primary text-blue-700 hover:underline"
                      >
                        dean.students@kibratvc.ac.ke
                      </a>
                    </p>
                    <p>
                      <strong>Phone:</strong> +254 716 066 759
                    </p>
                    <p>
                      <strong>Office Hours:</strong> Monday - Friday, 8:00 AM -
                      5:00 PM
                    </p>
                    <p>
                      <strong>Emergency Line:</strong> +254 716 066 759 (24/7)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Student Support Services
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card key={index}>
                      <CardHeader>
                        <div className="mb-2">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Student Organizations & Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Active Student Clubs</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li>• Music & Performing Arts</li>
                    <li>• Debate & Public Speaking</li>
                    <li>• Environmental Conservation Club</li>
                    <li>• Entrepreneurship Society</li>
                    <li>• Sports Teams & Athletics</li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">How to Join a Club</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit the Dean of Students office during registration week
                    or contact club leaders through the Student Council. All
                    students are encouraged to participate in at least one
                    co-curricular activity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default DeanOfStudents;
