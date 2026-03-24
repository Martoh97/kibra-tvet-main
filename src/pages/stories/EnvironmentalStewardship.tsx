import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import treePlantingImage from "@/assets/tree-planting.jpg";
import environmentalDocument from "@/assets/environmental-document.jpg";

const EnvironmentalStewardship = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-16 bg-background">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src={treePlantingImage} 
              alt="Tree planting exercise at Kibra TVC" 
              className="w-full h-[400px] object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary mb-4">
              <span>Feb 07 2025</span>
              <span>/</span>
              <span>Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kibra TVC Environmental Stewardship
            </h1>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              A Commitment to Greening the Future
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Kibra Technical and Vocational College (TVC) continues to champion environmental stewardship through its ongoing tree-planting initiatives and sustainable campus practices. The college recognizes that environmental conservation is not just a responsibility but a vital part of national development and climate action.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              In line with the Government of Kenya's commitment to increase forest cover and promote sustainability, Kibra TVC has embraced tree planting as a key activity in its environmental agenda. Staff, trainees, and community members have come together to plant trees within the college compound and its surrounding areas, symbolizing a shared commitment to creating a greener, cleaner, and healthier environment.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Speaking during a recent tree-planting exercise, the Principal of Kibra TVC emphasized that environmental stewardship is integral to the college's values. "We are not only training skilled professionals but also responsible citizens who care for the planet. Every tree planted today is an investment in the future of our community and generations to come," she noted.
            </p>

            <div className="my-8">
              <img 
                src={environmentalDocument} 
                alt="Environmental stewardship document" 
                className="w-full rounded-lg shadow-md" 
              />
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Through these initiatives, the college aims to instill in trainees a sense of environmental responsibility and practical understanding of sustainable practices. The exercise also serves as an opportunity for learners to participate in community service while contributing to national climate resilience efforts.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              In addition to tree planting, Kibra TVC is exploring other green initiatives such as waste management, renewable energy and water conservation. These efforts align with Kenya's Vision 2030, the Sustainable Development Goals (SDGs), and the Presidential directive on achieving 15 billion trees by 2032.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              By promoting environmental stewardship, Kibra TVC reaffirms its role as an institution committed not only to education and skills development but also to safeguarding the planet. The college envisions a future where every student becomes an ambassador for sustainability — nurturing both the environment and the nation's prosperity.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default EnvironmentalStewardship;
