import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import InlineEditButton from "@/components/admin/InlineEditButton";
import deputyAdminImage from "@/assets/deputy-admin-finance.jpg";
import deputyAcademicImage from "@/assets/deputy-academic-new.jpg";

const ADMIN_KEY = "mgmt_deputy_admin";
const ACADEMIC_KEY = "mgmt_deputy_academic";

const DeputyPrincipals = () => {
  const [adminContent, setAdminContent] = useState<any>(null);
  const [academicContent, setAcademicContent] = useState<any>(null);

  const fetchContent = useCallback(async () => {
    const { data } = await supabase
      .from("site_content")
      .select("*")
      .in("content_key", [ADMIN_KEY, ACADEMIC_KEY]);
    if (data) {
      setAdminContent(data.find((d) => d.content_key === ADMIN_KEY) || null);
      setAcademicContent(data.find((d) => d.content_key === ACADEMIC_KEY) || null);
    }
  }, []);

  useEffect(() => { fetchContent(); }, [fetchContent]);

  const admin = {
    name: adminContent?.title || "Edwin Waweru",
    subtitle: adminContent?.subtitle || "Deputy Principal - Administration and Finance",
    message: adminContent?.description || `Welcome to Kibra Technical and Vocational College. As the Deputy Principal for Administration and Finance, I am committed to ensuring that our institution maintains the highest standards of administrative excellence and financial stewardship.

Our administrative team works tirelessly to create an enabling environment where both students and staff can thrive. We believe that efficient administration is the backbone of quality education, and we continuously invest in modern systems and infrastructure to support our academic mission.

We are dedicated to transparent financial management, ensuring that every resource is optimally utilized to enhance the learning experience. From state-of-the-art facilities to well-maintained learning spaces, our goal is to provide an environment that inspires excellence.

I encourage all students to take advantage of the support services available and to approach our offices whenever you need assistance. Together, we are building a college that not only imparts technical skills but also instills values of integrity, accountability, and service.`,
    image: adminContent?.image_url || deputyAdminImage,
  };

  const academic = {
    name: academicContent?.title || "Julius Mukoya",
    subtitle: academicContent?.subtitle || "Deputy Principal - Academic Affairs",
    message: academicContent?.description || `As the Deputy Principal for Academic Affairs at Kibra Technical and Vocational College, I am delighted to welcome you to an institution that places academic excellence at the heart of everything we do.

Our commitment to quality education is reflected in our comprehensive curriculum, which has been carefully designed to meet both national standards and industry requirements. We continuously review and update our programs to ensure they remain relevant and responsive to the changing needs of the job market.

Our experienced and dedicated faculty members bring a wealth of knowledge and practical experience to the classroom. They are committed not only to imparting technical skills but also to nurturing critical thinking, creativity, and a lifelong love of learning among our students.

I encourage all students to take full advantage of the academic resources available, participate actively in your learning journey, and strive for excellence in all your endeavors. Remember, your success is our priority, and we are here to support you every step of the way.`,
    image: academicContent?.image_url || deputyAcademicImage,
  };

  const renderDeputy = (data: typeof admin, contentKey: string, bgClass: string, cardBg: string) => (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`${cardBg} rounded-lg shadow-lg p-8 md:p-12 relative group`}>
            <InlineEditButton
              contentKey={contentKey}
              contentType="management"
              currentTitle={data.name}
              currentSubtitle={data.subtitle}
              currentDescription={data.message}
              currentImageUrl={contentKey === ADMIN_KEY ? (adminContent?.image_url || "") : (academicContent?.image_url || "")}
              onUpdate={fetchContent}
            />
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-xl">{data.name}</h3>
                  <p className="text-sm text-muted-foreground">{data.subtitle}</p>
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-3xl font-bold text-primary mb-6">Message from {data.subtitle}</h2>
                {data.message.split("\n\n").map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
                <div className="mt-6 pt-6 border-t">
                  <p className="font-semibold">{data.name}</p>
                  <p className="text-sm text-muted-foreground">{data.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Deputy Principals</h1>
            <p className="text-xl md:text-2xl">Executive Leadership Team</p>
          </div>
        </section>
        {renderDeputy(admin, ADMIN_KEY, "bg-background", "bg-muted/30")}
        {renderDeputy(academic, ACADEMIC_KEY, "bg-muted/30", "bg-background")}
      </main>
      <Footer />
    </div>
  );
};

export default DeputyPrincipals;
