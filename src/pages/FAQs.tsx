import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What courses does Kibra TVC offer?",
    answer:
      "Kibra Technical and Vocational College offers programmes in Computing & Informatics, Building & Construction, Electrical Engineering, Mechanical Engineering, Business Studies, Hospitality, Fashion & Beauty, and Agriculture.",
  },
  {
    question: "What levels of training are offered?",
    answer:
      "Kibra TVC currently offers programmes at Level 4, Level 5 and Level 6, including Artisan, Certificate and Diploma programmes.",
  },
  {
    question: "How do I apply to Kibra TVC?",
    answer:
      "You can apply online through the Kibra TVC application page. You can also access the college's admission and registration information through the Admissions section of the website.",
  },
  {
    question: "What information do I need when applying?",
    answer:
      "The online application requires personal information, contact details, identification or birth certificate information, academic background, course selection and additional personal information.",
  },
  {
    question: "How long do the courses take?",
    answer:
      "Course duration depends on the programme. The courses currently listed on the website range from 6 months for some Artisan programmes to 3 years for some Diploma programmes.",
  },
  {
    question: "Which examination or accreditation bodies are available?",
    answer:
      "The programmes currently listed on the website include courses associated with KNEC and NITA.",
  },
  {
    question: "Can I apply for a course online?",
    answer:
      "Yes. Kibra TVC provides an online application form that allows prospective students to submit their personal, academic and course information.",
  },
  {
    question: "Where can I find the entry requirements?",
    answer:
      "You can find the college's admission requirements on the Entry Requirements page.",
    link: {
      text: "View Entry Requirements",
      to: "/admissions/entry-requirements",
    },
  },
  {
    question: "Where can I find information about fees?",
    answer:
      "The college provides fee information through its Fee Structures section.",
    link: {
      text: "View Fee Structures",
      to: "/downloads/fee-structures",
    },
  },
  {
    question: "How can I register as a student?",
    answer:
      "Students can find registration information through the college's Admissions section.",
    link: {
      text: "View Registration Information",
      to: "/admissions/registration",
    },
  },
  {
    question: "Where can I find the college prospectus?",
    answer:
      "The college prospectus is available through the website's downloads section.",
    link: {
      text: "View Prospectus",
      to: "/downloads/prospectus",
    },
  },
  {
    question: "How can I contact Kibra TVC?",
    answer:
      "For enquiries about admissions, courses and other college services, please visit the Contact page for the college's contact information.",
    link: {
      text: "Contact Kibra TVC",
      to: "/contact",
    },
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-5">
            <HelpCircle className="w-7 h-7" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Find answers to common questions about Kibra Technical and
            Vocational College.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border rounded-xl overflow-hidden bg-background hover:shadow-sm transition-shadow"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-5 md:px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  >
                    <span className="font-semibold text-base md:text-lg">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 md:px-6 md:pb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>

                        {faq.link && (
                          <Button
                            asChild
                            variant="link"
                            className="px-0 mt-3 h-auto"
                          >
                            <Link to={faq.link.to}>
                              {faq.link.text}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Back to Home */}
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQs;