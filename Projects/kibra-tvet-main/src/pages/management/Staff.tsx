import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import principalImage from "@/assets/principal-new.jpg";
import deputyAdminImage from "@/assets/deputy-admin-finance.jpg";
import deputyAcademicImage from "@/assets/deputy-academic-new.jpg";
import rhodaImage from "@/assets/rhodaImage.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Staff = () => {
  // Array of HODs with their specific details
  const hods = [
    {
      name: "Mr. Enock Ochieng",
      department: "Business & Liberal Studies",
      description:
        "Empowering learners through practical business skills and liberal studies excellence.",
    },
    {
      name: "Mr. Eric Angwenyi",
      department: "Building and Civil Engineering",
      description:
        "Advancing skilled engineers through practical building and civil engineering training.",
    },
    {
      name: "Mrs. Rebecca Amayi",
      department: "Cosmetology",
      description:
        "Transforming creativity into skill through modern cosmetology training.",
    },
    {
      name: "Mrs. Rhoda Sitati",
      department: "Computing and Informatics",
      description:
        "Equipping learners with cutting-edge skills in computing and informatics.",
      image: rhodaImage,
    },
    {
      name: "Mr. Peter Andalo",
      department: "Electrical & Electronics",
      description:
        "Preparing competent professionals in electrical and electronics engineering.",
    },
    {
      name: "Mrs. Milkah Kang'au",
      department: "Fashion and Garment Making",
      description:
        "Nurturing creativity through hands-on fashion and garment making training.",
    },
    {
      name: "Mrs. Christa Akoth",
      department: "Hospitality",
      description:
        "Shaping career-ready experts with comprehensive hospitality training.",
    },
    {
      name: "Mr. Newton Bii",
      department: "Mechanical &Automotive",
      description:
        "Advancing innovation with comprehensive mechanical and automotive education.",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="relative h-[120px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-primary-foreground">
              <h1 className="text-4xl md:text-3xl font-bold mb-4">
                Our Staff Team
              </h1>
              <p className="text-xl md:text-2xl">
                Meet the dedicated professionals who guide our institution
                toward excellence
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 py-12">
            {/* Principal Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Principal</h2>
              <div className="max-w-md mx-auto">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <span className="text-gray-400 text-sm">
                        <img
                          src={principalImage}
                          alt="Principal"
                          className="w-full h-full object-cover"
                        />
                      </span>
                    </div>
                    <CardTitle>Tabitha M. Maina</CardTitle>
                    <CardDescription>Principal</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Dedicated to excellence and leadership in education,
                      inspiring students and staff alike.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Deputy Principals Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                Deputy Principals
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <span className="text-gray-400 text-sm">
                        <img
                          src={deputyAdminImage}
                          alt="Edwin Waweru - Deputy Principal Administration and Finance"
                          className="w-full h-full object-cover"
                        />
                      </span>
                    </div>
                    <CardTitle>Edwin Waweru</CardTitle>
                    <CardDescription>Deputy Principal</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Dedicated to excellence and leadership in education,
                      inspiring students and staff alike.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <span className="text-gray-400 text-sm">
                        <img
                          src={deputyAcademicImage}
                          alt="Julius Mukoya - Deputy Principal Academic Affairs"
                          className="w-full h-full object-cover"
                        />
                      </span>
                    </div>
                    <CardTitle>Julius Mukoya</CardTitle>
                    <CardDescription>Deputy Principal</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Dedicated to excellence and leadership in education,
                      inspiring students and staff alike.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Department & Section Leaders */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                Heads of Departments
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hods.map((hod, index) => (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                        {hod.image ? (
                          <img
                            src={hod.image}
                            alt={hod.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-400 text-xs">Photo</span>
                        )}
                      </div>
                      <CardTitle className="text-lg">{hod.name}</CardTitle>
                      <CardDescription>{hod.department}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center text-sm">
                      <p>{hod.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Staff;
