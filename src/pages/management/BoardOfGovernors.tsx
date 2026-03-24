import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import InlineEditButton from "@/components/admin/InlineEditButton";

const CONTENT_KEY = "mgmt_board";

const BoardOfGovernors = () => {
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

  const description = content?.description || `The Board of Governors provides strategic direction and oversight for Kibra Technical and Vocational College. Comprised of distinguished professionals from education, industry, and public service, the board ensures the institution maintains the highest standards of academic excellence and operational integrity.

The board meets regularly to review institutional performance, approve policies, and guide the college's development in line with national education standards and industry needs.`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[75px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-2xl md:text-3xl font-bold mb-1">Board of Governors</h1>
            <p className="text-xl md:text-xl">Leadership and Governance</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8 relative group">
                <InlineEditButton
                  contentKey={CONTENT_KEY}
                  contentType="management"
                  currentDescription={description}
                  onUpdate={fetchContent}
                />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6" />
                    About the Board
                  </CardTitle>
                  <CardDescription>Our Governing Body</CardDescription>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  {description.split("\n\n").map((p: string, i: number) => (
                    <p key={i} className={i > 0 ? "mt-4" : ""}>{p}</p>
                  ))}
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

export default BoardOfGovernors;
