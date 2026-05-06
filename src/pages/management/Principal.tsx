import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import InlineEditButton from "@/components/admin/InlineEditButton";
import principalImage from "@/assets/principal-new.jpg";

const CONTENT_KEY = "mgmt_principal";

const Principal = () => {
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

  const title = content?.title || "Tabitha M. Maina";
  const subtitle = content?.subtitle || "Principal, Kibra Technical and Vocational College";
  const description = content?.description || `I am delighted to extend a warm welcome to you on behalf of Kibra Technical and Vocational Training College, a premier institution dedicated to providing high-quality technical and vocational education. As the Principal, I take pride in our commitment to nurturing talent, fostering innovation, and preparing our students for successful careers in a rapidly evolving global landscape.

At Kibra TVC, we recognize the importance of practical skills and hands-on training in today's competitive world. State-of-the-art facilities, cutting-edge laboratories, and industry-relevant curriculum ensure that our students receive a comprehensive education that aligns with the demands of the modern workforce.`;
  const image = content?.image_url || principalImage;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Office of the Principal</h1>
            <p className="text-xl md:text-2xl">Academic Leadership</p>
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
              <Card className="relative group">
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
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <img src={image} alt={title} className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-2xl font-semibold">Welcome Message</h3>
                      {description.split("\n\n").map((p: string, i: number) => (
                        <p key={i} className="text-muted-foreground">{p}</p>
                      ))}
                    </div>
                  </div>
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

export default Principal;