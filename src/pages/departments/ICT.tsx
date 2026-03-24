import DepartmentPage from "@/components/DepartmentPage";
import ictImage from "@/assets/dept-ict.jpg";

const ICT = () => (
  <DepartmentPage
    contentKey="dept_ict"
    defaultTitle="Computing and Informatics"
    defaultSubtitle="Empowering Digital Excellence"
    defaultAbout={[
      "We empower students with essential digital skills, from foundational computer literacy to advanced programming. Our department is committed to preparing students for the digital economy.",
      "With state-of-the-art computer labs and experienced instructors, students gain hands-on experience with the latest technologies and industry-standard software.",
    ]}
    defaultCareerText="Graduates from our ICT department are well-prepared for careers in software development, network administration, web design, IT support, database management, and many other technology-driven fields."
    defaultImage={ictImage}
    imageAlt="Computing and Informatics"
    programs={[
      { name: "Network System Administration - Level 6" },
      { name: "ICT Technician - Level 6 & 5" },
      { name: "ICT Operator - Level 4" },
      { name: "Network System Technician - Level 5" },
    ]}
  />
);

export default ICT;
