import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import InlineEditButton from "@/components/admin/InlineEditButton";

interface GalleryContent {
  title: string;
  subtitle: string;
  videoUrl: string;
  videoTitle: string;
  videoSubtitle: string;
}

const defaultContent: GalleryContent = {
  title: "Gallery",
  subtitle: "Watch our documentaries",
  videoUrl: "https://www.youtube.com/embed/lMeZT7PAObQ",
  videoTitle: "President Visit at Kibra",
  videoSubtitle: "State House Kenya • 76.6K subscribers",
};

export const Gallery = () => {
  const { isAdmin } = useAuth();
  const [content, setContent] = useState<GalleryContent>(defaultContent);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchContent = async () => {
      const { data } = await supabase
        .from("site_content")
        .select("*")
        .eq("content_key", "gallery_video")
        .eq("is_published", true)
        .maybeSingle();

      if (data) {
        setContent({
          title: data.title || defaultContent.title,
          subtitle: data.subtitle || defaultContent.subtitle,
          videoUrl: data.link || defaultContent.videoUrl,
          videoTitle: data.description || defaultContent.videoTitle,
          videoSubtitle: (data.content as { videoSubtitle?: string })?.videoSubtitle || defaultContent.videoSubtitle,
        });
      }
    };

    fetchContent();
  }, [refreshKey]);

  const handleUpdate = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-muted-foreground text-lg">{content.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto group relative">
          {isAdmin && (
            <InlineEditButton
              contentKey="gallery_video"
              contentType="gallery"
              currentTitle={content.title}
              currentSubtitle={content.subtitle}
              currentDescription={content.videoTitle}
              currentLink={content.videoUrl}
              onUpdate={handleUpdate}
            />
          )}
          <div className="aspect-video bg-secondary rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src={content.videoUrl}
              title={content.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold text-foreground">
              {content.videoTitle}
            </h3>
            <p className="text-muted-foreground mt-2">
              {content.videoSubtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
