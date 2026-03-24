import DepartmentPage from "@/components/DepartmentPage";
import buildingImage from "@/assets/dept-building.jpg";

const Building = () => (
  <DepartmentPage
    contentKey="dept_building"
    defaultTitle="Building and Civil Engineering"
    defaultSubtitle="Building Tomorrow's Infrastructure"
    defaultAbout={[
      "Build a solid foundation for your future with our courses in construction and civil engineering. Our department combines theoretical knowledge with practical skills.",
      "Students gain hands-on experience in construction techniques, building design, and project management through our well-equipped workshops and real-world projects.",
    ]}
    defaultCareerText="Graduates can pursue careers as construction supervisors, building technicians, quantity surveyors, site managers, and independent contractors in the thriving construction industry."
    defaultImage={buildingImage}
    imageAlt="Building and Civil Engineering"
    programs={[
      { name: "Civil Engineering - Level 6" },
      { name: "Building Technology - Level 6 & 5" },
      { name: "Construction Management - Level 6" },
      { name: "Plumbing - Level 5, 4 & 3" },
      { name: "Masonry - Level 4 & 3" },
    ]}
  />
);

export default Building;
