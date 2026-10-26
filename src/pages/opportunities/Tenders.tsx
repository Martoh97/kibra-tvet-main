
const tenders = [
  {
    title: "Supplier Registration Document FY 2026–2028",
    description:
      "Full supplier registration document, including evaluation criteria and application forms.",
    file: "/tenders/KIBRA_TVC_PREQUALIFICATION_DOCUMENT.pdf",
  },
  {
    title: "Prequalification of Suppliers FY 2026–2028",
    description:
      "Supplier categories, eligibility requirements, and application procedure.",
    file: "/tenders/PrequalificationofSuppliers_Kibra%20TVC.pdf",
  },
];

export default function Tenders() {
  const openAndDownloadPDF = (file: string) => {
    // Open the PDF in a new browser tab.
    window.open(file, "_blank", "noopener,noreferrer");

    // Trigger a download of the same PDF.
    const downloadLink = document.createElement("a");
    downloadLink.href = file;
    downloadLink.download =
      file.split("/").pop() || "tender.pdf";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-2">
            Opportunities
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Tenders & Supplier Registration
          </h1>

          <p className="text-muted-foreground text-lg mb-8">
            Access supplier registration documents, tender
            notices, and prequalification information from
            Kibra Technical and Vocational College.
          </p>

          <div className="space-y-4">
            {tenders.map((tender) => (
              <div
                key={tender.file}
                className="border rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">
                    {tender.title}
                  </h2>

                  <p className="text-sm text-muted-foreground mt-2">
                    {tender.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    openAndDownloadPDF(tender.file)
                  }
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 whitespace-nowrap"
                >
                  Open & Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
