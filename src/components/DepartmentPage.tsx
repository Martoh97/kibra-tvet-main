import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import InlineEditButton from "@/components/admin/InlineEditButton";

interface Program {
  name: string;
}

interface DepartmentPageProps {
  contentKey: string;
  defaultTitle: string;
  defaultSubtitle: string;
  defaultAbout: string[];
  defaultCareerText: string;
  defaultImage: string;
  imageAlt: string;
  programs: Program[];
}

const DepartmentPage = ({
  contentKey,
  defaultTitle,
  defaultSubtitle,
  defaultAbout,
  defaultCareerText,
  defaultImage,
  imageAlt,
  programs,
}: DepartmentPageProps) => {
  const { isAdmin } = useAuth();
  const [refreshKey, setRefreshKey] = useState(0);
  const [content, setContent] = useState({
    title: defaultTitle,
    subtitle: defaultSubtitle,
    about: defaultAbout.join("\n\n"),
    careerText: defaultCareerText,
    imageUrl: "",
  });

  const fetchContent = useCallback(async () => {
    const { data } = await supabase
      .from("site_content")
      .select("*")
      .eq("content_key", contentKey)
      .eq("is_published", true)
      .maybeSingle();

    if (data) {
      setContent({
        title: data.title || defaultTitle,
        subtitle: data.subtitle || defaultSubtitle,
        about: data.description || defaultAbout.join("\n\n"),
        careerText: data.link || defaultCareerText, // reuse link field for career text
        imageUrl: data.image_url || "",
      });
    }
  }, [contentKey, defaultTitle, defaultSubtitle, defaultAbout, defaultCareerText]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent, refreshKey]);

  const handleUpdate = () => setRefreshKey((p) => p + 1);
  const heroImage = content.imageUrl || defaultImage;
  const aboutParagraphs = content.about.split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[400px] overflow-hidden group">
          {isAdmin && (
            <InlineEditButton
              contentKey={contentKey}
              contentType="department"
              currentTitle={content.title}
              currentSubtitle={content.subtitle}
              currentDescription={content.about}
              currentImageUrl={content.imageUrl}
              currentLink={content.careerText}
              onUpdate={handleUpdate}
            />
          )}
          <img
            src={heroImage}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{content.title}</h1>
              <p className="text-xl md:text-2xl">{content.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="outline" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">About the Department</h2>
                {aboutParagraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
                ))}
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Programs Offered</h2>
                <ul className="space-y-3">
                  {programs.map((prog, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{prog.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary/20 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
              <p className="text-muted-foreground leading-relaxed">{content.careerText}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DepartmentPage;
