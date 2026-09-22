import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      "You can apply online through the Kibra TVC application page. The application process collects your personal information, academic background, preferred course and other required details.",
  },
  {
    question: "What information do I need when applying?",
    answer:
      "Applicants should have their personal details, contact information, identification or birth certificate information, academic background and preferred course ready when completing the application.",
  },
  {
    question: "How long do the courses take?",
    answer:
      "Course duration depends on the programme. The courses currently listed range from 6 months for some Artisan programmes to 3 years for some Diploma programmes.",
  },
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground text-base md:text-lg">
            Find quick answers to common questions about Kibra Technical
            and Vocational College.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="bg-background border rounded-xl overflow-hidden transition-shadow hover:shadow-sm"
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All FAQs */}
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/faqs" className="inline-flex items-center gap-2">
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}