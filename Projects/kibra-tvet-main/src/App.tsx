import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MissionVision from "./pages/MissionVision";
import History from "./pages/History";
import NotFound from "./pages/NotFound";
import ServiceCharter from "./pages/downloads/ServiceCharter";
import Courses from "./pages/Courses";
import OurProgrammes from "./pages/OurProgrammes";
import ICT from "./pages/departments/ICT";
import Building from "./pages/departments/Building";
import Cosmetology from "./pages/departments/Cosmetology";
import Fashion from "./pages/departments/Fashion";
import Electrical from "./pages/departments/Electrical";
import Hospitality from "./pages/departments/Hospitality";
import Mechanical from "./pages/departments/Mechanical";
import BusinessLiberalStudies from "./pages/departments/BusinessLiberalStudies";
import ApplicationForms from "./pages/downloads/ApplicationForms";
import Prospectus from "./pages/downloads/Prospectus";
import CourseCatalogs from "./pages/downloads/CourseCatalogs";
import FeeStructures from "./pages/downloads/FeeStructures";
import AcademicCalendar from "./pages/downloads/AcademicCalendar";
import StudentHandbook from "./pages/downloads/StudentHandbook";
import BoardOfGovernors from "./pages/management/BoardOfGovernors";
import Principal from "./pages/management/Principal";
import DeputyPrincipals from "./pages/management/DeputyPrincipals";
import Registrar from "./pages/management/Registrar";
import Staff from "./pages/management/Staff";
import DeanOfStudents from "./pages/management/DeanOfStudents";
import Registration from "./pages/admissions/Registration";
import EntryRequirements from "./pages/admissions/EntryRequirements";
import PaymentDetails from "./pages/admissions/PaymentDetails";
import JitumeTraining from "./pages/stories/JitumeTraining";
import PracticalSessions from "./pages/stories/PracticalSessions";
import EnvironmentalStewardship from "./pages/stories/EnvironmentalStewardship";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import FloatingButtons from "./components/ui/FloatingButtons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/service-charter" element={<ServiceCharter />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/our-programmes" element={<OurProgrammes />} />
          <Route path="/departments/ict" element={<ICT />} />
          <Route path="/departments/building" element={<Building />} />
          <Route path="/departments/cosmetology" element={<Cosmetology />} />
          <Route path="/departments/fashion" element={<Fashion />} />
          <Route path="/departments/electrical" element={<Electrical />} />
          <Route path="/departments/hospitality" element={<Hospitality />} />
          <Route path="/departments/mechanical" element={<Mechanical />} />
          <Route
            path="/departments/business-liberal-studies"
            element={<BusinessLiberalStudies />}
          />
          <Route
            path="/downloads/application-forms"
            element={<ApplicationForms />}
          />
          <Route path="/downloads/prospectus" element={<Prospectus />} />
          <Route
            path="/downloads/course-catalogs"
            element={<CourseCatalogs />}
          />
          <Route path="/downloads/fee-structures" element={<FeeStructures />} />
          <Route
            path="/downloads/academic-calendar"
            element={<AcademicCalendar />}
          />
          <Route
            path="/downloads/student-handbook"
            element={<StudentHandbook />}
          />
          <Route
            path="/management/board-of-governors"
            element={<BoardOfGovernors />}
          />
          <Route path="/management/principal" element={<Principal />} />
          <Route
            path="/management/deputy-principals"
            element={<DeputyPrincipals />}
          />
          <Route path="/management/registrar" element={<Registrar />} />
          <Route path="/management/staff" element={<Staff />} />
          <Route
            path="/management/dean-of-students"
            element={<DeanOfStudents />}
          />
          <Route path="/admissions/registration" element={<Registration />} />
          <Route
            path="/admissions/entry-requirements"
            element={<EntryRequirements />}
          />
          <Route
            path="/admissions/payment-details"
            element={<PaymentDetails />}
          />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stories/jitume-training" element={<JitumeTraining />} />
          <Route
            path="/stories/practical-sessions"
            element={<PracticalSessions />}
          />
          <Route
            path="/stories/environmental-stewardship"
            element={<EnvironmentalStewardship />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* ✅ FloatingButtons lives here — outside Routes so it shows on every page */}
        <FloatingButtons />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
