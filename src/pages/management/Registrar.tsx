import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, ClipboardList, GraduationCap, Archive, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import InlineEditButton from "@/components/admin/InlineEditButton";
import registrarImage from "@/assets/registrar.jpg";

const CONTENT_KEY = "mgmt_registrar";

const Registrar = () => {
  const [content, setContent] = useState<any>(null);

  const fetchContent = useCallback(async () => {
    const { data } = await supabase
      .from("site_content")
      .select("*")
      .eq("content_key", CONTENT_KEY)
      .maybeSingle();
    if (data) setContent(data);
  }, []);

  useEffect(() => { fetchContent(); }, [fetchContent]);

  const title = content?.title || "Rodah Sitati";
  const subtitle = content?.subtitle || "College Registrar";
  const description = content?.description || `The Office of the Registrar is the custodian of all academic records and manages student registration, examinations, and certification processes. We are committed to maintaining the integrity and accuracy of all academic documentation.

Our office ensures compliance with regulatory requirements and institutional policies while providing efficient and courteous service to students, staff, and external stakeholders.`;
  const image = content?.image_url || registrarImage;

  const services = [
    { icon: FileText, title: "Student Registration", description: "New student enrollment, course registration, and student ID issuance" },
    { icon: ClipboardList, title: "Academic Records", description: "Maintenance of student transcripts, certificates, and academic documents" },
    { icon: GraduationCap, title: "Examinations", description: "Coordination of examinations, results processing, and certification" },
    { icon: Archive, title: "Records Management", description: "Secure storage and retrieval of all academic and administrative records" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Office of the Registrar</h1>
            <p className="text-xl md:text-2xl">Academic Registry Services</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Button variant="outline" asChild className="mb-8">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="max-w-4xl mx-auto">
              <Card className="mb-12 relative group">
                <InlineEditButton
                  contentKey={CONTENT_KEY}
                  contentType="management"
                  currentTitle={title}
                  currentSubtitle={subtitle}
                  currentDescription={description}
                  currentImageUrl={content?.image_url || ""}
                  onUpdate={fetchContent}
                />
                <CardHeader>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <img src={image} alt={title} className="w-48 h-48 object-cover rounded-lg shadow-lg" />
                    <div className="flex-1">
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {description.split("\n\n").map((p: string, i: number) => (
                    <p key={i} className="text-muted-foreground">{p}</p>
                  ))}
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Contact Information</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><strong>Email:</strong> registrar@kibratvc.ac.ke</p>
                      <p><strong>Phone:</strong> +254 716 066 759</p>
                      <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services, Fees table, and Document request sections remain static */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Card key={index}>
                        <CardHeader>
                          <div className="mb-2"><Icon className="h-8 w-8 text-primary" /></div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Course Requirements & Fees</CardTitle>
                  <CardDescription>Entry requirements and fee structure for all programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">S.No</TableHead>
                          <TableHead>Level</TableHead>
                          <TableHead>Minimum Entry</TableHead>
                          <TableHead className="text-right">Fee/Module</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow><TableCell className="font-medium">1</TableCell><TableCell>Level 6 (Diploma courses)</TableCell><TableCell>KCSE Mean Grade: C- & Above</TableCell><TableCell className="text-right">KES. 35,000</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">2</TableCell><TableCell>Level 5 (Craft Certificate courses)</TableCell><TableCell>KCSE Mean Grade: D & Above</TableCell><TableCell className="text-right">KES. 35,000</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">3</TableCell><TableCell>Level 4 (Artisan Courses)</TableCell><TableCell>KCSE Mean Grade: D- & Above</TableCell><TableCell className="text-right">KES. 35,000</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">4</TableCell><TableCell>Level 3 (Vocational Artisan certificate)</TableCell><TableCell>KCPE Certificate</TableCell><TableCell className="text-right">KES. 35,000</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">5</TableCell><TableCell>Short Courses</TableCell><TableCell>All are eligible</TableCell><TableCell className="text-right">KES. 15,000</TableCell></TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong>Note:</strong> Fees are subject to change. Please contact the Registrar's office for the most current information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>How to Request Documents</CardTitle></CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Submit a written request at the Registrar's office</li>
                    <li>Present valid identification (ID card or passport)</li>
                    <li>Pay applicable processing fees at the Finance Office</li>
                    <li>Collect documents after the specified processing period</li>
                  </ol>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong>Processing Time:</strong> Official transcripts and certificates typically take 5-7 working days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Registrar;
