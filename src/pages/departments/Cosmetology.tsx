import DepartmentPage from "@/components/DepartmentPage";
import cosmetologyImage from "@/assets/dept-cosmetology.jpg";

const Cosmetology = () => (
  <DepartmentPage
    contentKey="dept_cosmetology"
    defaultTitle="Cosmetology"
    defaultSubtitle="Master the Art of Beauty"
    defaultAbout={[
      "Master the art and science of Beauty Therapy and Hairdressing with our amazing programs. Our cosmetology department offers comprehensive training in all aspects of beauty and personal care.",
      "Students learn from experienced professionals using modern equipment and techniques in our fully-equipped salons and training facilities.",
    ]}
    defaultCareerText="Graduates can work in beauty salons, spas, hotels, or start their own beauty businesses. Career paths include beauty therapist, hairstylist, makeup artist, salon manager, and beauty consultant."
    defaultImage={cosmetologyImage}
    imageAlt="Cosmetology"
    programs={[
      { name: "Beauty Therapy & Hairdressing - Level 6" },
      { name: "Beauty Therapy & Hairdressing - Level 5" },
      { name: "Beauty Therapy & Hairdressing - Level 4" },
      { name: "Beauty Therapy & Hairdressing - Level 3" },
    ]}
  />
);

export default Cosmetology;
