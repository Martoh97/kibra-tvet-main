import KATTI from "@/assets/KATTI.png";
import HELB from "@/assets/HELB-logo.png";
import NITA from "@/assets/NITA-Logo.png";
import KUCCPS from "@/assets/KUCCPS-logo.png";
import MOE from "@/assets/MOE-LOGO.jpg";
import TVET from "@/assets/TVET-LOGO.png";

const partners = [
  { logo: KATTI, alt: "KATTI" },
  { logo: HELB, alt: "HELB" },
  { logo: NITA, alt: "NITA" },
  { logo: KUCCPS, alt: "KUCCPS" },
  { logo: MOE, alt: "Ministry of Education" },
  { logo: TVET, alt: "TVET Authority" },
];

export const OurPartners = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-4">
        Our Partners
      </h2>

      <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
        Through collaboration with esteemed educational institutions and
        industry leaders, we enhance the quality of our programs and equip our
        students with the skills and experience needed to thrive in today's
        workforce.
      </p>

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="mx-6 flex-shrink-0 rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-24 w-24 object-contain"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};