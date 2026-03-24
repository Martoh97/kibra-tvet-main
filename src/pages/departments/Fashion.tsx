import DepartmentPage from "@/components/DepartmentPage";
import fashionImage from "@/assets/dept-fashion.jpg";

const Fashion = () => (
  <DepartmentPage
    contentKey="dept_fashion"
    defaultTitle="Fashion and Garment Making"
    defaultSubtitle="Unleash Your Creative Style"
    defaultAbout={[
      "Unleash your creativity and style with our courses in fashion design and clothing technology. Our fashion department nurtures creative talent and technical expertise.",
      "Students learn pattern making, garment construction, fashion illustration, and textile technology in our modern workshops equipped with industrial sewing machines and design tools.",
    ]}
    defaultCareerText="Graduates can work as fashion designers, tailors, pattern makers, fashion illustrators, textile technologists, or establish their own fashion boutiques and clothing lines."
    defaultImage={fashionImage}
    imageAlt="Fashion & Textile"
    programs={[
      { name: "Fashion Design Management - Level 6" },
      { name: "Fashion Designer - Level 5" },
      { name: "Fashion Designer - Level 4" },
    ]}
  />
);

export default Fashion;
