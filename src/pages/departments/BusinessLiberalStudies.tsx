import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import InlineEditButton from "@/components/admin/InlineEditButton";
import businessImage from "@/assets/dept-business-liberal.jpg";

const defaultContent = {
  title: "Business and Liberal Studies",
  subtitle: "Build your business acumen and develop critical thinking skills",
  about: "The Business and Liberal Studies Department at Kibra Technical and Vocational College prepares students for success in the dynamic world of business and management. Our comprehensive programs combine practical business skills with critical thinking and communication abilities essential for modern business professionals.\n\nWe focus on developing well-rounded graduates who can navigate complex business environments, lead teams effectively, and contribute meaningfully to organizational success across various industries.",
  careerText: "Our graduates are equipped to pursue diverse career paths in various sectors:",
};

const BusinessLiberalStudies = () => {
  const { isAdmin } = useAuth();
  const [refreshKey, setRefreshKey] = useState(0);
  const [content, setContent] = useState(defaultContent);
  const [heroImage, setHeroImage] = useState("");

  const fetchContent = useCallback(async () => {
    const { data } = await supabase
      .from("site_content")
      .select("*")
      .eq("content_key", "dept_business_liberal")
      .eq("is_published", true)
      .maybeSingle();

    if (data) {
      setContent({
        title: data.title || defaultContent.title,
        subtitle: data.subtitle || defaultContent.subtitle,
        about: data.description || defaultContent.about,
        careerText: data.link || defaultContent.careerText,
      });
      setHeroImage(data.image_url || "");
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent, refreshKey]);

  const handleUpdate = () => setRefreshKey((p) => p + 1);
  const aboutParagraphs = content.about.split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center group">
          {isAdmin && (
            <InlineEditButton
              contentKey="dept_business_liberal"
              contentType="department"
              currentTitle={content.title}
              currentSubtitle={content.subtitle}
              currentDescription={content.about}
              currentImageUrl={heroImage}
              currentLink={content.careerText}
              onUpdate={handleUpdate}
            />
          )}
          <div className="absolute inset-0">
            <img 
              src={heroImage || businessImage}
              alt="Business and Liberal Studies Department"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{content.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">{content.subtitle}</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Department Overview</h2>
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-6">{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card><CardContent className="pt-6 text-center"><BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" /><h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3><p className="text-muted-foreground">Well-rounded programs covering business fundamentals and liberal arts</p></CardContent></Card>
              <Card><CardContent className="pt-6 text-center"><Users className="w-12 h-12 mx-auto mb-4 text-primary" /><h3 className="text-xl font-semibold mb-2">Experienced Faculty</h3><p className="text-muted-foreground">Learn from industry professionals with real-world business experience</p></CardContent></Card>
              <Card><CardContent className="pt-6 text-center"><TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" /><h3 className="text-xl font-semibold mb-2">Career Development</h3><p className="text-muted-foreground">Strong focus on employability and entrepreneurship skills</p></CardContent></Card>
              <Card><CardContent className="pt-6 text-center"><Award className="w-12 h-12 mx-auto mb-4 text-primary" /><h3 className="text-xl font-semibold mb-2">Industry Recognition</h3><p className="text-muted-foreground">Nationally recognized qualifications and certifications</p></CardContent></Card>
            </div>
          </div>
        </section>

        {/* Programs Offered */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Programs Offered</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {["Supply Chain Management", "Business Management", "Cooperative Management", "Human Resource Management", "Counselling Psychology", "Caregiving"].map((prog) => (
                <Card key={prog}><CardContent className="p-6"><h3 className="text-xl font-semibold mb-3">{prog}</h3><p className="text-muted-foreground">Available at Level 6 (Diploma) and Level 5 (Craft Certificate)</p></CardContent></Card>
              ))}
              <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-3">Social Work and Community Development</h3><p className="text-muted-foreground">Available at Level 6 (Diploma)</p></CardContent></Card>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Career Opportunities</h2>
              <p className="text-muted-foreground text-lg mb-6">{content.careerText}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  {["Business Administrator", "Office Manager", "Entrepreneur/Business Owner", "Human Resources Assistant"].map((c) => (
                    <li key={c} className="flex items-start"><span className="text-primary mr-2">•</span>{c}</li>
                  ))}
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  {["Accounts Clerk", "Sales and Marketing Executive", "Administrative Assistant", "Customer Service Manager"].map((c) => (
                    <li key={c} className="flex items-start"><span className="text-primary mr-2">•</span>{c}</li>
                  ))}
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
