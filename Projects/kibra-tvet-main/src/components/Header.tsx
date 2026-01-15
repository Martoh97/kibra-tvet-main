import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Menu, ChevronDown } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AccessibilityToolbar } from "./AccessibilityToolbar";
import kibraTvcLogo from "@/assets/kibra-tvc-logo.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile accordion states
  const [aboutOpen, setAboutOpen] = useState(false);
  const [managementOpen, setManagementOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [downloadsOpen, setDownloadsOpen] = useState(false);

  // Service Charter download + open (used by desktop and mobile)
  const handleServiceCharterClick = () => {
    const fileUrl = "/downloads/service-charter.pdf";
    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);

        // Create an <a> to trigger download
        const link = document.createElement("a");
        link.href = url;
        link.download = "service-charter.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();

        // Also open in a new tab for preview
        window.open(url, "_blank");
      })
      .catch((err) => console.error("Download error:", err));
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div
          className="
            container mx-auto px-4 
            flex flex-col items-center gap-3 text-sm 
            lg:flex-row lg:justify-between lg:items-center
          "
        >
          {/* Contact Info */}
          <div className="flex gap-6 flex-col items-center lg:flex-row">
            <a
              href="mailto:info@kibratvc.ac.ke"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              info@kibratvc.ac.ke
            </a>
            <a
              href="tel:+254716066759"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              +254 716 066 759
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center">
            <a
              href="https://www.facebook.com/share/1AwoUWzhCx/"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={kibraTvcLogo}
                alt="Kibra TVC Logo"
                className="h-14 w-14 object-contain"
              />
              <h1 className="text-lg font-bold text-foreground">KIBRA TVC</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 flex-1 justify-center text-base">
              <Link
                to="/"
                className="font-bold text-base hover:text-purple-600"
              >
                HOME
              </Link>

              {/* ABOUT */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-bold text-base hover:text-purple-600">
                      ABOUT
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid min-w-[300px] max-w-[400px] gap-3 p-4">
                        <Link to="/about/history">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            <div className="font-bold">Kibra TVC History</div>
                            <p className="text-muted-foreground line-clamp-2">
                              Our journey and milestones
                            </p>
                          </NavigationMenuLink>
                        </Link>

                        <button
                          onClick={handleServiceCharterClick}
                          className="w-full text-left"
                        >
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            <div className="font-bold">Service Charter</div>
                            <p className="text-muted-foreground line-clamp-2">
                              Our commitment to excellence
                            </p>
                          </NavigationMenuLink>
                        </button>

                        <Link to="/about/mission-vision">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            <div className="font-bold">
                              Mission/Vision Values
                            </div>
                            <p className="text-muted-foreground line-clamp-2">
                              Our purpose and principles
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* MANAGEMENT */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-bold text-base hover:text-purple-600">
                      MANAGEMENT
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid min-w-[300px] max-w-[400px] gap-3 p-4">
                        <Link to="/management/board-of-governors">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Board of Governors
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/management/principal">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Principal
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/management/deputy-principals">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Deputy Principals
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/management/registrar">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Registrar
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/management/dean-of-students">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Dean of Students
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/management/staff">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Our Staff
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* DEPARTMENTS */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-bold text-base hover:text-purple-600">
                      DEPARTMENTS
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid min-w-[300px] md:grid-cols-2 gap-3 p-4">
                        <Link to="/departments/ict">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Computing & Informatics
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/building">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Building & Civil Engineering
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/cosmetology">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Cosmetology
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/fashion">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Fashion and Garment Making
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/electrical">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Electrical & Electronics
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/hospitality">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Hospitality and Tourism
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/business">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Business
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/mechanical">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Mechanical and Automotive Engineering
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                to="/our-programmes"
                className="font-bold text-base hover:text-purple-600"
              >
                COURSES
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-bold text-base hover:text-purple-600">
                      DOWNLOADS
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid min-w-[300px] gap-3 p-4">
                        <Link to="/downloads/prospectus">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Prospectus/Brochures
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/downloads/course-catalogs">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Course Catalogs
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/downloads/student-handbook">
                          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                            Student Handbook
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                to="/contact"
                className="font-bold text-base hover:text-purple-600"
              >
                CONTACT
              </Link>
            </div>

            {/* APPLY Button (desktop) */}
            <div className="hidden lg:flex">
              <Link to="/apply">
                <Button className="bg-purple-600 text-white hover:bg-purple-700">
                  APPLY
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="flex lg:hidden items-center gap-2">
              <AccessibilityToolbar />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] overflow-y-auto p-4"
                >
                  <SheetHeader>
                    <SheetTitle>
                      <img
                        src={kibraTvcLogo}
                        alt="Kibra TVC Logo"
                        className="h-14 w-14 object-contain"
                      />
                    </SheetTitle>
                  </SheetHeader>

                  {/* Mobile accordion nav */}
                  <nav className="flex flex-col gap-3 font-bold">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                      HOME
                    </Link>

                    {/* ABOUT */}
                    <div>
                      <button
                        type="button"
                        aria-expanded={aboutOpen}
                        className="flex items-center justify-between w-full py-2"
                        onClick={() => setAboutOpen((v) => !v)}
                      >
                        <span>ABOUT</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            aboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {aboutOpen && (
                        <div className="flex flex-col ml-4 gap-2 text-sm">
                          <Link
                            to="/about/history"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Kibra TVC History
                          </Link>

                          {/* Service Charter - uses the same handler */}
                          <button
                            type="button"
                            onClick={() => {
                              // Close the sheet first for better UX
                              setMobileMenuOpen(false);
                              // Give the sheet a moment to close, then trigger download/open
                              // We keep it synchronous here; browsers handle fetch in background.
                              handleServiceCharterClick();
                            }}
                            className="text-left"
                          >
                            Service Charter
                          </button>

                          <Link
                            to="/about/mission-vision"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Mission/Vision Values
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* MANAGEMENT */}
                    <div>
                      <button
                        type="button"
                        aria-expanded={managementOpen}
                        className="flex items-center justify-between w-full py-2"
                        onClick={() => setManagementOpen((v) => !v)}
                      >
                        <span>MANAGEMENT</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            managementOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {managementOpen && (
                        <div className="flex flex-col ml-4 gap-2 text-sm">
                          <Link
                            to="/management/board-of-governors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Board of Governors
                          </Link>
                          <Link
                            to="/management/principal"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Principal
                          </Link>
                          <Link
                            to="/management/deputy-principals"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Deputy Principals
                          </Link>
                          <Link
                            to="/management/registrar"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Registrar
                          </Link>
                          <Link
                            to="/management/dean-of-students"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Dean of Students
                          </Link>
                          <Link
                            to="/management/staff"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Our Staff
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* DEPARTMENTS */}
                    <div>
                      <button
                        type="button"
                        aria-expanded={departmentsOpen}
                        className="flex items-center justify-between w-full py-2"
                        onClick={() => setDepartmentsOpen((v) => !v)}
                      >
                        <span>DEPARTMENTS</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            departmentsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {departmentsOpen && (
                        <div className="flex flex-col ml-4 gap-2 text-sm">
                          <Link
                            to="/departments/ict"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Computing &amp; Informatics
                          </Link>
                          <Link
                            to="/departments/building"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Building &amp; Civil Engineering
                          </Link>
                          <Link
                            to="/departments/cosmetology"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Cosmetology
                          </Link>
                          <Link
                            to="/departments/fashion"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Fashion and Garment Making
                          </Link>
                          <Link
                            to="/departments/electrical"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Electrical &amp; Electronics
                          </Link>
                          <Link
                            to="/departments/hospitality"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Hospitality and Tourism
                          </Link>
                          <Link
                            to="/departments/business"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Business
                          </Link>
                          <Link
                            to="/departments/mechanical"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Mechanical and Automotive Engineering
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      to="/our-programmes"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      COURSES
                    </Link>

                    {/* DOWNLOADS */}
                    <div>
                      <button
                        type="button"
                        aria-expanded={downloadsOpen}
                        className="flex items-center justify-between w-full py-2"
                        onClick={() => setDownloadsOpen((v) => !v)}
                      >
                        <span>DOWNLOADS</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            downloadsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {downloadsOpen && (
                        <div className="flex flex-col ml-4 gap-2 text-sm">
                          <Link
                            to="/downloads/prospectus"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Prospectus/Brochures
                          </Link>
                          <Link
                            to="/downloads/course-catalogs"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Course Catalogs
                          </Link>
                          <Link
                            to="/downloads/student-handbook"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Student Handbook
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      CONTACT
                    </Link>

                    <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="bg-purple-600 text-white w-full mt-4">
                        APPLY
                      </Button>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
