import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-graduation.jpg";
import heroImage2 from "@/assets/hero-solar-graduates.jpg";
import heroImage3 from "@/assets/hero-leadership-1.jpeg";
import heroImage4 from "@/assets/hero-leadership-2.jpg";
import heroImage5 from "@/assets/short-course.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import InlineEditButton from "@/components/admin/InlineEditButton";

interface HeroSlide {
  id: number;
  image: string;
  tag: string;
  title: string;
  highlight: string;
  titleEnd: string;
  description: string;
  contentKey: string;
}

const defaultSlides: HeroSlide[] = [
  {
    id: 1,
    image: heroImage1,
    tag: "#Kibra Tvc",
    title: "Apply for",
    highlight: "May 2026",
    titleEnd: "Intake",
    description: "Secure Your Spot At Kibra TVC Today. Join A Thriving Community Of Learners.",
    contentKey: "hero_slide_1",
  },
  {
    id: 2,
    image: heroImage2,
    tag: "#Solar Energy",
    title: "Empowering Through",
    highlight: "Skills Training",
    titleEnd: "",
    description: "Building careers in renewable energy and sustainable technologies.",
    contentKey: "hero_slide_2",
  },
  {
    id: 3,
    image: heroImage3,
    tag: "#Leadership Support",
    title: "Country Leadership",
    highlight: "Supporting Excellence",
    titleEnd: "",
    description: "Empowering youth through skills development and community support.",
    contentKey: "hero_slide_3",
  },
  {
    id: 4,
    image: heroImage4,
    tag: "#Community Impact",
    title: "Leaders",
    highlight: "Driving Change",
    titleEnd: "",
    description: "Building a stronger community through education and skills training.",
    contentKey: "hero_slide_4",
  },
  {
    id: 5,
    image: heroImage5,
    tag: "#Community Impact",
    title: "Leaders",
    highlight: "Driving Change through parnership",
    titleEnd: "",
    description: "Kibra short course by partners... ",
    contentKey: "hero_slide_5",
  },
];

export const Hero = () => {
  const [slides, setSlides] = useState<HeroSlide[]>(defaultSlides);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const fetchSlides = useCallback(async () => {
    const { data } = await supabase
      .from("site_content")
      .select("*")
      .like("content_key", "hero_slide_%")
      .eq("is_published", true);

    if (data && data.length > 0) {
      const updatedSlides = defaultSlides.map((slide) => {
        const dbSlide = data.find((d) => d.content_key === slide.contentKey);
        if (dbSlide) {
          return {
            ...slide,
            title: dbSlide.title || slide.title,
            highlight: dbSlide.subtitle || slide.highlight,
            description: dbSlide.description || slide.description,
            image: dbSlide.image_url || slide.image,
          };
        }
        return slide;
      });
      setSlides(updatedSlides);
    }
  }, []);

  useEffect(() => {
    fetchSlides();
  }, [fetchSlides]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="home" className="relative h-[500px] lg:h-[600px] overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] relative group">
              {/* Inline Edit Button */}
              <InlineEditButton
                contentKey={slide.contentKey}
                contentType="hero_slide"
                currentTitle={slide.title}
                currentSubtitle={slide.highlight}
                currentDescription={slide.description}
                currentImageUrl={slide.image}
                onUpdate={fetchSlides}
              />
              
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 h-[500px] lg:h-[600px] flex items-center">
                <div className="max-w-3xl space-y-6">
                  <div className="inline-block bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {slide.tag}
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    {slide.title} <span className="text-accent">{slide.highlight}</span> {slide.titleEnd}
                  </h1>

                  <p className="text-xl text-white/90 max-w-2xl">{slide.description}</p>

                  <div className="flex gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 shadow-lg" asChild>
                      <Link to="/our-programmes">Our Programmes →</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors p-3 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors p-3 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 66.7C1200 66.7 1320 53.3 1380 46.7L1440 40V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
