import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import jitumeImage from "@/assets/computing-informatics.jpg";

const JitumeTraining = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-16 bg-background">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src={jitumeImage} 
              alt="Jitume Digital Lab at Kibra TVC"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary mb-4">
              <span>June 02 2025</span>
              <span>/</span>
              <span>Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kibra TVC Jitume Training in Progress
            </h1>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Kibra Technical and Vocational College (TVC) has continued to make significant strides in empowering youth through digital skills training under the Jitume Program. The ongoing training marks a major milestone in the college's commitment to equipping students with the competencies needed to thrive in today's technology-driven economy.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The Jitume Program, a Government of Kenya initiative spearheaded by the Ministry of Education through the State Department for Technical, Vocational Education and Training (TVET) in partnership with the Ministry of ICT and the ICT Authority, seeks to enhance digital literacy, promote innovation, and create opportunities for online work among young people.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              At Kibra TVC, trainees have embraced the program enthusiastically, taking part in various modules that include digital marketing, data entry, transcription, online freelancing, and virtual assistance. The training is conducted within the well-equipped Jitume Digital Lab, established to provide a conducive learning environment with access to high-speed internet and modern computing facilities.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Speaking during the ongoing sessions, the Principal of Kibra TVC lauded the initiative, noting that the Jitume Program is transforming the way young people approach employment and entrepreneurship. "Our trainees are gaining practical digital skills that will enable them to earn a living online, create jobs, and contribute to the country's digital economy," she said.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The program not only bridges the digital divide but also complements the college's broader mission of providing quality, inclusive, and industry-relevant training. Through the Jitume initiative, Kibra TVC continues to align with Kenya's Vision 2030 and the Digital Superhighway agenda by preparing youth for decent work in the 21st-century economy.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              As the training progresses, Kibra TVC remains committed to supporting learners to complete the modules successfully and to connect them with real online work opportunities. The college envisions expanding the program further to reach more youth within Kibra and beyond.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              With initiatives like Jitume, Kibra TVC stands out as a beacon of innovation and empowerment — nurturing a generation of tech-savvy, self-reliant, and globally competitive graduates.
            </p>
          </div>

          {/* Key Highlights Box */}
          <div className="mt-10 p-6 bg-secondary/30 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Training Modules Include:</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Digital Marketing
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Data Entry
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Transcription
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Online Freelancing
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Virtual Assistance
              </li>
            </ul>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default JitumeTraining;
