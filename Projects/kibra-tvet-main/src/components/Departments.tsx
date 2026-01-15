import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ictImage from "@/assets/dept-ict.jpg";
import buildingImage from "@/assets/dept-building.jpg";
import cosmetologyImage from "@/assets/dept-cosmetology.jpg";
import fashionImage from "@/assets/dept-fashion.jpg";
import electricalImage from "@/assets/dept-electrical.jpg";
import hospitalityImage from "@/assets/dept-hospitality.jpg";
import mechanicalImage from "@/assets/dept-mechanical.jpg";
import businessLiberalImage from "@/assets/dept-business-liberal.jpg";

const departments = [
  {
    id: 1,
    name: "Computing and Informatics",
    description: "We empower students with essential digital skills, from foundational computer literacy to advanced programming.",
    image: ictImage,
    link: "/departments/ict",
  },
  {
    id: 2,
    name: "Building and Civil Engineering",
    description: "Build a solid foundation for your future with our courses in construction and civil engineering.",
    image: buildingImage,
    link: "/departments/building",
  },
  {
    id: 3,
    name: "Cosmetology",
    description: "Master the art and science of Beauty Therapy and Hairdressing with our amazing programs.",
    image: cosmetologyImage,
    link: "/departments/cosmetology",
  },
  {
    id: 4,
    name: "Fashion and Garment Making",
    description: "Unleash your creativity and style with our courses in fashion design and clothing technology.",
    image: fashionImage,
    link: "/departments/fashion",
  },
  {
    id: 5,
    name: "Electrical & Electronics",
    description: "Light up your career with our specialized courses in electrical engineering and technology.",
    image: electricalImage,
    link: "/departments/electrical",
  },
  {
    id: 6,
    name: "Hospitality and Tourism",
    description: "Excel in the Hospitality industry with our tailored courses in culinary arts, hotel management, and more.",
    image: hospitalityImage,
    link: "/departments/hospitality",
  },
  {
    id: 7,
    name: "Mechanical and Automotive Engineering",
    description: "Get equipped with hands-on skills and technical knowledge in design, manufacturing, maintenance, and operation of mechanical systems.",
    image: mechanicalImage,
    link: "/departments/mechanical",
  },
  {
    id: 8,
    name: "Business and Liberal Studies",
    description: "Build your business acumen and develop critical thinking skills with our comprehensive business and liberal studies programs.",
    image: businessLiberalImage,
    link: "/departments/business-liberal-studies",
  },
];

export const Departments = () => {
  return (
    <section id="departments" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Academic Departments
          </h2>
          <p className="text-muted-foreground text-lg">all featured departments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <Card 
              key={dept.id} 
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={dept.image} 
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {dept.description}
                </p>
                <Link to={dept.link} onClick={() => window.scrollTo(0, 0)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
