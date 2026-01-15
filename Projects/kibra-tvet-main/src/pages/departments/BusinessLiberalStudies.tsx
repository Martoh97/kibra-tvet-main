import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp, Award } from "lucide-react";
import businessImage from "@/assets/dept-business-liberal.jpg";

const BusinessLiberalStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src={businessImage}
              alt="Business and Liberal Studies Department"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Business and Liberal Studies
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Build your business acumen and develop critical thinking skills
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Department Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Business and Liberal Studies Department at Kibra Technical and Vocational College 
                prepares students for success in the dynamic world of business and management. Our 
                comprehensive programs combine practical business skills with critical thinking and 
                communication abilities essential for modern business professionals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We focus on developing well-rounded graduates who can navigate complex business 
                environments, lead teams effectively, and contribute meaningfully to organizational 
                success across various industries.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
                  <p className="text-muted-foreground">
                    Well-rounded programs covering business fundamentals and liberal arts
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Experienced Faculty</h3>
                  <p className="text-muted-foreground">
                    Learn from industry professionals with real-world business experience
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Career Development</h3>
                  <p className="text-muted-foreground">
                    Strong focus on employability and entrepreneurship skills
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
                  <p className="text-muted-foreground">
                    Nationally recognized qualifications and certifications
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Offered */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Programs Offered</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Supply Chain Management</h3>
                  <p className="text-muted-foreground">
                    Available at Level 6 (Diploma) and Level 5 (Craft Certificate)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Business Management</h3>
                  <p className="text-muted-foreground">
                    Available at Level 6 (Diploma) and Level 5 (Craft Certificate)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cooperative Management</h3>
                  <p className="text-muted-foreground">
                    Available at Level 6 (Diploma) and Level 5 (Craft Certificate)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Human Resource Management</h3>
                  <p className="text-muted-foreground">
                    Available at Level 6 (Diploma) and Level 5 (Craft Certificate)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Counselling Psychology</h3>
                  <p className="text-muted-foreground">
                    Available at Level 6 (Diploma) and Level 5 (Craft Certificate)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Caregiving</h3>
                  <p className="text-muted-foreground">
                    Available at Level 6 (Diploma) and Level 5 (Craft Certificate)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Social Work and Community Development</h3>
                  <p className="text-muted-foreground">
                    Available at Level 6 (Diploma)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Career Opportunities</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our graduates are equipped to pursue diverse career paths in various sectors:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Business Administrator
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Office Manager
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Entrepreneur/Business Owner
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Human Resources Assistant
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Accounts Clerk
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Sales and Marketing Executive
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Administrative Assistant
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Customer Service Manager
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessLiberalStudies;
