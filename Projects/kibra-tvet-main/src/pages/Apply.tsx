import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    alternativePhone: "",
    gender: "",
    idNumber: "",
    education: "",
    yearCompleted: "",
    grade: "",
    department: "",
    course: "",
    level: "",
    address: "",
    county: "",
    subcounty: "",
    guardianName: "",
    guardianPhone: "",
    additionalInfo: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        if (
          !formData.fullName ||
          !formData.phoneNumber ||
          !formData.gender ||
          !formData.idNumber
        ) {
          toast({
            title: "Required Fields Missing",
            description: "Please fill in all required fields marked with *",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 2:
        if (!formData.education || !formData.yearCompleted) {
          toast({
            title: "Required Fields Missing",
            description: "Please fill in all required fields marked with *",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 3:
        if (!formData.department || !formData.course || !formData.level) {
          toast({
            title: "Required Fields Missing",
            description: "Please fill in all required fields marked with *",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 4:
        if (
          !formData.address ||
          !formData.county ||
          !formData.guardianName ||
          !formData.guardianPhone
        ) {
          toast({
            title: "Required Fields Missing",
            description: "Please fill in all required fields marked with *",
            variant: "destructive",
          });
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key as keyof typeof formData]);
      }

      const response = await fetch("/api/submit_application.php", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description:
            "Thank you! We will review your application and contact you soon.",
        });

        setFormData({
          fullName: "",
          phoneNumber: "",
          alternativePhone: "",
          gender: "",
          idNumber: "",
          education: "",
          yearCompleted: "",
          grade: "",
          department: "",
          course: "",
          level: "",
          address: "",
          county: "",
          subcounty: "",
          guardianName: "",
          guardianPhone: "",
          additionalInfo: "",
        });

        setCurrentStep(1);
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "An error occurred while submitting the form.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0tMTYgMGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMTYgMGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Apply to Kibra Technical and Vocational College
          </h1>
          <p className="text-lg md:text-xl opacity-90 text-center max-w-2xl mx-auto">
            Take the first step towards your future career. Complete your
            application in just a few minutes.
          </p>
        </div>
      </section>

      <main className="flex-grow bg-background py-12">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="mb-8">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center w-full">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        currentStep >= step
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        step
                      )}
                    </div>
                    <span className="text-xs mt-2 text-center hidden sm:block">
                      {step === 1 && "Personal Info"}
                      {step === 2 && "Education"}
                      {step === 3 && "Course"}
                      {step === 4 && "Complete"}
                    </span>
                  </div>
                  {step < 4 && (
                    <div
                      className={`h-1 flex-1 transition-all ${
                        currentStep > step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Step {currentStep} of {totalSteps}:{" "}
                    {currentStep === 1 && "Personal Information"}
                    {currentStep === 2 && "Academic Background"}
                    {currentStep === 3 && "Course Selection"}
                    {currentStep === 4 && "Additional Information"}
                  </CardTitle>
                  <CardDescription>
                    {currentStep === 1 && "Tell us about yourself"}
                    {currentStep === 2 && "Your educational background"}
                    {currentStep === 3 && "Choose your course"}
                    {currentStep === 4 && "Final details"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Render steps dynamically */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phoneNumber">Phone Number *</Label>
                          <Input
                            id="phoneNumber"
                            placeholder="+254 700 000 000"
                            value={formData.phoneNumber}
                            onChange={(e) =>
                              handleInputChange("phoneNumber", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="alternativePhone">
                            Alternative Phone Number
                          </Label>
                          <Input
                            id="alternativePhone"
                            placeholder="+254 700 000 000"
                            value={formData.alternativePhone}
                            onChange={(e) =>
                              handleInputChange(
                                "alternativePhone",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <Select
                          value={formData.gender}
                          onValueChange={(value) =>
                            handleInputChange("gender", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="idNumber">
                          ID Number/Birth Certificate *
                        </Label>
                        <Input
                          id="idNumber"
                          placeholder="Enter your ID or Birth Certificate number"
                          value={formData.idNumber}
                          onChange={(e) =>
                            handleInputChange("idNumber", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="education">
                          Highest Level of Education *
                        </Label>
                        <Select
                          value={formData.education}
                          onValueChange={(value) =>
                            handleInputChange("education", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kcpe">KCPE</SelectItem>
                            <SelectItem value="kcse">KCSE</SelectItem>
                            <SelectItem value="certificate">
                              Certificate
                            </SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="yearCompleted">
                            Year Completed *
                          </Label>
                          <Input
                            id="yearCompleted"
                            type="number"
                            placeholder="2023"
                            value={formData.yearCompleted}
                            onChange={(e) =>
                              handleInputChange("yearCompleted", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="grade">
                            Grade/Score (if applicable)
                          </Label>
                          <Input
                            id="grade"
                            placeholder="e.g., C+, 350/500"
                            value={formData.grade}
                            onChange={(e) =>
                              handleInputChange("grade", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="department">Department *</Label>
                        <Select
                          value={formData.department}
                          onValueChange={(value) =>
                            handleInputChange("department", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="electrical">
                              Electrical and Electronics Engineering
                            </SelectItem>
                            <SelectItem value="business">
                              Business & Liberal Studies
                            </SelectItem>
                            <SelectItem value="building">
                              Building and Civil Engineering
                            </SelectItem>
                            <SelectItem value="ict">
                              Computing and Informatics
                            </SelectItem>
                            <SelectItem value="mechanical">
                              Motor Vehicle Technician
                            </SelectItem>
                            <SelectItem value="hospitality">
                              Hospitality and Tourism
                            </SelectItem>
                            <SelectItem value="cosmetology">
                              Cosmetology
                            </SelectItem>
                            <SelectItem value="fashion">
                              Fashion & Garment Making
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="course">Course *</Label>
                        <Input
                          id="course"
                          placeholder="Enter the specific course name"
                          value={formData.course}
                          onChange={(e) =>
                            handleInputChange("course", e.target.value)
                          }
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          <Link to="/our-programmes" className="underline">
                            View available courses
                          </Link>
                        </p>
                      </div>
                      <div>
                        <Label htmlFor="level">Course Level *</Label>
                        <Select
                          value={formData.level}
                          onValueChange={(value) =>
                            handleInputChange("level", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select course level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="level6">
                              Level 6 (Diploma)
                            </SelectItem>
                            <SelectItem value="level5">
                              Level 5 (Craft Certificate)
                            </SelectItem>
                            <SelectItem value="level4">
                              Level 4 (Artisan)
                            </SelectItem>
                            <SelectItem value="level3">
                              Level 3 (Vocational Artisan)
                            </SelectItem>
                            <SelectItem value="short">Short Course</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Physical Address *</Label>
                        <Input
                          id="address"
                          placeholder="Enter your physical address"
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="county">County *</Label>
                          <Input
                            id="county"
                            placeholder="e.g., Nairobi"
                            value={formData.county}
                            onChange={(e) =>
                              handleInputChange("county", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="subcounty">Sub-County</Label>
                          <Input
                            id="subcounty"
                            placeholder="e.g., Kibra"
                            value={formData.subcounty}
                            onChange={(e) =>
                              handleInputChange("subcounty", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="guardianName">
                            Parent/Guardian Name *
                          </Label>
                          <Input
                            id="guardianName"
                            placeholder="Enter guardian's name"
                            value={formData.guardianName}
                            onChange={(e) =>
                              handleInputChange("guardianName", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="guardianPhone">
                            Guardian Phone Number *
                          </Label>
                          <Input
                            id="guardianPhone"
                            placeholder="+254 700 000 000"
                            value={formData.guardianPhone}
                            onChange={(e) =>
                              handleInputChange("guardianPhone", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="additionalInfo">
                          Additional Information (Optional)
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Any additional information you'd like to share"
                          value={formData.additionalInfo}
                          onChange={(e) =>
                            handleInputChange("additionalInfo", e.target.value)
                          }
                          rows={4}
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t">
                    {currentStep > 1 && (
                      <Button onClick={handlePrevious} variant="outline">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                      </Button>
                    )}
                    {currentStep < totalSteps ? (
                      <Button onClick={handleNext} className="ml-auto">
                        Next <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Button onClick={handleSubmit} className="ml-auto">
                        Submit Application
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> +254 716 066 759
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> info@kibratvc.ac.ke
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Kibra, Nairobi
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;
