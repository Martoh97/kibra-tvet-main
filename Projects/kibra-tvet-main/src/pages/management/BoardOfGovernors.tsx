import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
const BoardOfGovernors = () => {
  const boardMembers = [{
    name: "Dr. Jane Mwangi",
    position: "Chairperson",
    description: "Education Policy Expert"
  }, {
    name: "Prof. David Ochieng",
    position: "Vice Chairperson",
    description: "Technical Education Specialist"
  }, {
    name: "Ms. Grace Njeri",
    position: "Member",
    description: "Industry Representative"
  }, {
    name: "Mr. Peter Kamau",
    position: "Member",
    description: "Finance & Audit Expert"
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[75px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-2xl md:text-3xl font-bold mb-1">Board of Governors</h1>
            <p className="text-xl md:text-xl">Leadership and Governance</p>
          </div>
          <div className="absolute bottom-4 left-4">
            <Button variant="outline" asChild className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
              
            </Button>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6" />
                    About the Board
                  </CardTitle>
                  <CardDescription>Our Governing Body</CardDescription>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    The Board of Governors provides strategic direction and oversight for Kibra Technical and Vocational College. 
                    Comprised of distinguished professionals from education, industry, and public service, the board ensures the 
                    institution maintains the highest standards of academic excellence and operational integrity.
                  </p>
                  <p className="mt-4">
                    The board meets regularly to review institutional performance, approve policies, and guide the college's 
                    development in line with national education standards and industry needs.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                {boardMembers.map((member, index) => <Card key={index}>
                    
                    
                  </Card>)}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default BoardOfGovernors;