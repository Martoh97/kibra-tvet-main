import DepartmentPage from "@/components/DepartmentPage";
import electricalImage from "@/assets/dept-electrical.jpg";

const Electrical = () => (
  <DepartmentPage
    contentKey="dept_electrical"
    defaultTitle="Electrical & Electronics"
    defaultSubtitle="Powering the Future"
    defaultAbout={[
      "Light up your career with our specialized courses in electrical engineering and technology. Our department provides comprehensive training in electrical systems and electronics.",
      "Students gain practical experience in electrical installations, electronics repair, and power systems through our well-equipped laboratories and workshop facilities.",
    ]}
    defaultCareerText="Graduates can work as electricians, electrical technicians, electronics repair specialists, power systems operators, or renewable energy technicians in various industries."
    defaultImage={electricalImage}
    imageAlt="Electrical & Electronics"
    programs={[
      { name: "Electrical Engineering (Power Option) - Level 6 & 5" },
      { name: "Electrical Installation - Level 4 & 3" },
      { name: "Solar PV System Installation - Level 5, 4 & 3" },
    ]}
  />
);

export default Electrical;
