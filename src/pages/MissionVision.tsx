import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MissionVision = () => {
  const coreValues = [
    {
      title: "Integrity",
      description: "The BoG and Staff uphold the highest ethical standards, demonstrating honesty and fairness in all operations."
    },
    {
      title: "Efficiency and Effectiveness",
      description: "We are committed to efficient use of resources and always accountable for our actions."
    },
    {
      title: "Equity",
      description: "We are committed to impartiality in dealing with all our stakeholders."
    },
    {
      title: "Professionalism",
      description: "We uphold impeccable professional standards in our work while adhering to ethical principles in service delivery."
    },
    {
      title: "Teamwork",
      description: "The BoG and Staff will work together, as one team, towards the realization of the Kibra TVC's mandate."
    },
    {
      title: "Customer Focus",
      description: "Kibra TVC will not only meet but exceed customers' expectations."
    },
    {
      title: "Innovation",
      description: "Kibra TVC is an organization that embraces creativity and innovativeness in responding to changes in the operating environment."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            MISSION / VISION / CORE VALUES
          </h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 container mx-auto px-4">
        <Button variant="outline" asChild className="mb-8">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <h2 className="text-3xl font-bold text-foreground mb-8">MISSION STATEMENT</h2>
        <Card className="shadow-lg border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-primary text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg">
              To provide quality technical, vocational education and technical training for sustainable economic growth.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Vision Statement */}
      <section className="py-16 container mx-auto px-4 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">VISION STATEMENT</h2>
          <Card className="shadow-lg border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-primary text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-muted-foreground text-lg">
              A transformative center of excellence in TVET for sustainable development.
            </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8">CORE VALUES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-primary text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MissionVision;
