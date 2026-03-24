import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedStories } from "@/components/FeaturedStories";
import { Stats } from "@/components/Stats";
import { PrincipalMessage } from "@/components/PrincipalMessage";
import { Departments } from "@/components/Departments";
import { CallToAction } from "@/components/CallToAction";
import { Gallery } from "@/components/Gallery";
import { OurPartners } from "@/components/OurPartners";
import { Footer } from "@/components/Footer";
import AdminBar from "@/components/admin/AdminBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AdminBar />
      <Header />
      <Hero />
      <PrincipalMessage />
      <Departments />
      <CallToAction />
      <FeaturedStories />
      <Stats />
      <Gallery />
      <OurPartners />
      <Footer />
    </div>
  );
};

export default Index;
