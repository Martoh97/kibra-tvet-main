import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, CreditCard, Smartphone, AlertCircle, ArrowLeft } from "lucide-react";

const PaymentDetails = () => {
  const paymentMethods = [
    {
      title: "Bank Transfer",
      icon: Building2,
      details: [
        "Bank: Equity Bank Kenya",
        "Account Name: Kibra Technical & Vocational College",
        "Account Number: 0123456789",
        "Branch: Nairobi West",
        "Swift Code: EQBLKENA",
      ],
    },
    {
      title: "M-Pesa (PayBill)",
      icon: Smartphone,
      details: [
        "Business Number: 123456",
        "Account Number: Your Admission Number",
        "Confirm recipient: Kibra TVC",
      ],
    },
    {
      title: "Bank Branch",
      icon: Building2,
      details: [
        "Visit any Equity Bank branch",
        "Deposit to account: 0123456789",
        "Quote: Kibra TVC + Your Name",
        "Get a deposit slip as receipt",
      ],
    },
  ];

  const feeCategories = [
    {
      category: "Application Fee",
      amount: "KES 1,000",
      description: "One-time non-refundable fee for processing your application",
    },
    {
      category: "Tuition Fees",
      amount: "Varies by Program",
      description: "Contact admissions office for specific program fees",
    },
    {
      category: "Registration Fee",
      amount: "KES 5,000",
      description: "Payable once upon admission confirmation",
    },
    {
      category: "Examination Fee",
      amount: "KES 3,000 per semester",
      description: "Covers examination and certification costs",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Payment Details</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Clear and transparent fee structures with flexible payment options
            </p>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Button variant="outline" asChild className="mb-8">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Fee Structure</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {feeCategories.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{item.category}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-primary">{item.amount}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Payment Methods</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {paymentMethods.map((method, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-full">
                          <method.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-center">{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {method.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-primary" />
                    <CardTitle>Important Payment Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Payment Confirmation</h3>
                    <p className="text-muted-foreground">
                      Always keep your payment receipts and submit copies to the finance office. Send payment confirmation via email to <a href="mailto:finance@kibratvc.ac.ke" className="text-primary hover:underline">finance@kibratvc.ac.ke</a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Payment Plans</h3>
                    <p className="text-muted-foreground">
                      Flexible payment plans are available. Contact the finance office to arrange installment payments. At least 50% of fees must be paid before the start of each semester.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Refund Policy</h3>
                    <p className="text-muted-foreground">
                      Application fees are non-refundable. Tuition fee refunds are subject to the college refund policy and must be requested within the first two weeks of the semester.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Financial Assistance</h3>
                    <p className="text-muted-foreground">
                      Information about government bursaries, HELB loans, and other financial aid options is available from the Dean of Students office.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Contact Finance Office</h3>
                    <p className="text-muted-foreground">
                      For payment inquiries: <a href="mailto:finance@kibratvc.ac.ke" className="text-primary hover:underline">finance@kibratvc.ac.ke</a> | Phone: <a href="tel:+254716066759" className="text-primary hover:underline">+254 716066759</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Download the complete fee structure and begin your application today
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" variant="secondary">
                <Link to="/downloads/fee-structures">Download Fee Structure</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentDetails;
