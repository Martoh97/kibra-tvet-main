import DepartmentPage from "@/components/DepartmentPage";
import mechanicalImage from "@/assets/dept-mechanical.jpg";

const Mechanical = () => (
  <DepartmentPage
    contentKey="dept_mechanical"
    defaultTitle="Mechanical and Automotive Engineering"
    defaultSubtitle="Engineering Innovation"
    defaultAbout={[
      "Get equipped with hands-on skills and technical knowledge in design, manufacturing, maintenance, and operation of mechanical systems. Our department offers comprehensive training in mechanical engineering.",
      "Students gain practical experience in our well-equipped workshops, learning welding, fabrication, automotive technology, and mechanical systems maintenance.",
    ]}
    defaultCareerText="Graduates can work as mechanical technicians, automotive mechanics, welding specialists, maintenance engineers, or HVAC technicians in various industrial and manufacturing sectors."
    defaultImage={mechanicalImage}
    imageAlt="Mechanical Engineering"
    programs={[
      { name: "Motor Vehicle Technician - Level 6 & 5" },
      { name: "Motor Vehicle Mechanics - Level 4 & 3" },
      { name: "Welding and Fabrication - Level 4" },
    ]}
  />
);

export default Mechanical;
