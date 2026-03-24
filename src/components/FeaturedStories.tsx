import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import jitumeImage from "@/assets/computing-informatics.jpg";
import hospitalityImage from "@/assets/hospitality-department.jpg";
import treePlantingImage from "@/assets/tree-planting.jpg";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import InlineEditButton from "@/components/admin/InlineEditButton";

interface Story {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  link: string;
  contentKey: string;
}

const defaultStories: Story[] = [
  {
    id: 1,
    title: "Kibra TVC Jitume Training in Progress",
    date: "June 02 2025",
    category: "Story",
    image: jitumeImage,
    excerpt: "Kibra Technical and Vocational College has continued to make significant strides in empowering youth through digital skills training under the Jitume Program.",
    link: "/stories/jitume-training",
    contentKey: "featured_story_1",
  },
  {
    id: 2,
    title: "Kibra TVC Practical Sessions",
    date: "Oct 02 2024",
    category: "Story",
    image: hospitalityImage,
    excerpt: "Kibra Technical and Vocational College emphasizes hands-on training as a vital part of its approach to Technical and Vocational Education and Training (TVET).",
    link: "/stories/practical-sessions",
    contentKey: "featured_story_2",
  },
  {
    id: 3,
    title: "Kibra TVC Environmental Stewardship",
    date: "Feb 07 2025",
    category: "Story",
    image: treePlantingImage,
    excerpt: "Kibra Technical and Vocational College continues to champion environmental stewardship through ongoing tree-planting initiatives and sustainable campus practices.",
    link: "/stories/environmental-stewardship",
    contentKey: "featured_story_3",
  },
];

export const FeaturedStories = () => {
  const [stories, setStories] = useState<Story[]>(defaultStories);

  const fetchStories = async () => {
    const { data } = await supabase
      .from("site_content")
      .select("*")
      .like("content_key", "featured_story_%")
      .eq("is_published", true);

    if (data && data.length > 0) {
      const updatedStories = defaultStories.map((story) => {
        const dbStory = data.find((d) => d.content_key === story.contentKey);
        if (dbStory) {
          return {
            ...story,
            title: dbStory.title || story.title,
            excerpt: dbStory.description || story.excerpt,
            link: dbStory.link || story.link,
          };
        }
        return story;
      });
      setStories(updatedStories);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Stories</h2>
            <p className="text-muted-foreground">read more upcoming stories</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => {
            const cardContent = (
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full relative">
                <InlineEditButton
                  contentKey={story.contentKey}
                  contentType="featured_story"
                  currentTitle={story.title}
                  currentDescription={story.excerpt}
                  currentLink={story.link}
                  onUpdate={fetchStories}
                />
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-primary mb-3">
                    <span>{story.date}</span>
                    <span>/</span>
                    <span>{story.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {story.title}
                  </h3>
                  {story.excerpt && (
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {story.excerpt}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
            
            return story.link ? (
              <Link key={story.id} to={story.link}>
                {cardContent}
              </Link>
            ) : (
              <div key={story.id}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
