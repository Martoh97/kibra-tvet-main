import DepartmentPage from "@/components/DepartmentPage";
import hospitalityImage from "@/assets/dept-hospitality.jpg";

const Hospitality = () => (
  <DepartmentPage
    contentKey="dept_hospitality"
    defaultTitle="Hospitality and Tourism"
    defaultSubtitle="Excellence in Service"
    defaultAbout={[
      "Excel in the Hospitality industry with our tailored courses in culinary arts, hotel management, and more. Our department prepares students for successful careers in the dynamic hospitality sector.",
      "Students receive hands-on training in our modern kitchen facilities and service areas, learning from experienced hospitality professionals.",
    ]}
    defaultCareerText="Graduates can work in hotels, restaurants, resorts, catering companies, cruise ships, or start their own hospitality businesses as chefs, hotel managers, restaurant supervisors, or catering entrepreneurs."
    defaultImage={hospitalityImage}
    imageAlt="Hospitality"
    programs={[
      { name: "Food and Beverage Management - Level 6" },
      { name: "Food and Beverage Operator - Level 5" },
      { name: "Food & Beverage Cookery - Level 4 & 3" },
      { name: "Food & Beverage Waiter - Level 4 & 3" },
      { name: "Baking Technology - Level 5 & 4" },
      { name: "Tour & Travel Management - Level 6" },
      { name: "Tour & Travel Operations - Level 5" },
      { name: "Tour Guiding - Level 4" },
      { name: "Catering & Accommodation Management - Level 6" },
      { name: "Catering & Accommodation Operations - Level 5" },
      { name: "Accommodation Operations - Level 4" },
    ]}
  />
);

export default Hospitality;
