import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import hospitalityImage from "@/assets/hospitality-department.jpg";
const PracticalSessions = () => {
  return <div className="min-h-screen">
      <Header />
      
      <main className="py-16 bg-background">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Hero Image */}
          <div className="mb-8">
            <img src={hospitalityImage} alt="Hospitality Department practical session at Kibra TVC" className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary mb-4">
              <span>Oct 02 2024</span>
              <span>/</span>
              <span>Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kibra TVC Practical Sessions
            </h1>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Kibra Technical and Vocational College (TVC) emphasizes hands-on training as a vital part of its approach to Technical and Vocational Education and Training (TVET). The ongoing practical sessions across various departments reflect the college's commitment to producing skilled, competent, and job-ready graduates.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              During the current term, trainees pursuing different programs — including Electrical and Electronics Engineering, Building Technology, Plumbing, Fashion Design, and ICT — are actively engaged in practical sessions designed to translate theoretical knowledge into real-world application. These sessions are held in the college's workshops, which are equipped with the necessary tools and materials.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              According to the Principal of Kibra TVC, practical training is at the heart of the institution's mission. "We believe that real learning happens when students can apply what they have learned in a practical environment. Our goal is to ensure every trainee leaves Kibra TVC with both the knowledge and the hands-on skills required by industry," she said.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">Instructors guide students through step-by-step exercises, ensuring they not only master technical procedures but also cultivate problem-solving, teamwork, and safety awareness. The approach aligns with the Competency-Based Education and Training (CBET) framework, which focuses on developing measurable skills and competencies.</p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Through these practical sessions, trainees gain confidence and experience that prepare them for industrial attachments, self-employment, and career advancement. The college's workshops continue to be a hub of creativity, innovation, and productivity — where learning meets real-life experience.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Kibra TVC remains steadfast in its vision to nurture a generation of skilled professionals who can drive Kenya's socio-economic development and contribute to achieving Vision 2030 and the Bottom-Up Economic Transformation Agenda.
            </p>
          </div>

          {/* Key Highlights Box */}
          
        </article>
      </main>

      <Footer />
    </div>;
};
export default PracticalSessions;