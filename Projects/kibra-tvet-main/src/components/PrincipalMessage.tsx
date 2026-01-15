import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download, UserCircle, BookOpen } from "lucide-react";
import principalImage from "@/assets/principal-new.jpg";

export const PrincipalMessage = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Welcome Card - Left Column */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-black mb-8">
              Welcome to Kibra TVC
            </h2>

            {/* Principal Image */}
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-full border-4 border-purple-600 overflow-hidden flex items-center justify-center">
                <img
                  src={principalImage}
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Welcome Message */}
            <p className="text-gray-700 leading-relaxed mb-8">
              I am delighted to welcome you to Kibra Technical and Vocational
              College. Our commitment is to offer quality programs, activities,
              and services designed to support, enrich, and elevate your
              academic and professional growth.
            </p>

            {/* Principal Details */}
            <div className="mb-6">
              <p className="text-gray-900 font-semibold text-lg">
                Mrs. Tabitha M. Maina
              </p>
              <p className="text-black font-semibold">Principal</p>
            </div>

            {/* Meet Team Button */}
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-6"
            >
              <Link to="/management/staff" className="flex items-center gap-2">
                Meet Our Team <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Right Column - 2 rows */}
          <div className="lg:col-span-2 grid gap-6">
            {/* Top Row - Two Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Admissions Card */}
              <div className="bg-blue-500 rounded-2xl shadow-lg p-8 text-white flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mb-6">
                  <UserCircle className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">Admissions Ongoing!</h3>

                <p className="text-blue-100 mb-8">
                  Apply now for Artisan, Certificate, and Diploma programs in
                  various technical fields.
                </p>

                <Button
                  asChild
                  className="bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-full px-8"
                >
                  <Link to="/apply" className="flex items-center gap-2">
                    Apply Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Resources Card */}
              <div className="bg-lime-600 rounded-2xl shadow-lg p-8 text-white flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-lime-700 rounded-full flex items-center justify-center mb-6">
                  <Download className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">Resources</h3>

                <p className="text-green-100 mb-8">
                  Access important documents, course outlines, and student
                  handbooks in our downloads section.
                </p>

                <Button
                  asChild
                  className="bg-white hover:bg-gray-100 text-green-600 font-semibold rounded-full px-8"
                >
                  <Link
                    to="/download/prospectus"
                    className="flex items-center gap-2"
                  >
                    Download <Download className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Bottom Row - Programs Card */}
            <div className="bg-purple-500 rounded-2xl shadow-lg p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Our Programs</h3>

              <p className="text-orange-100 text-lg mb-8 max-w-3xl mx-auto">
                Discover our wide range of technical and vocational programs
                designed to equip you with industry-relevant skills for today's
                job market.
              </p>

              <Button
                asChild
                className="bg-white hover:bg-gray-100 text-purple-600 font-semibold rounded-full px-8 py-6"
              >
                <Link to="/our-programmes" className="flex items-center gap-2">
                  Explore Programs <BookOpen className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
