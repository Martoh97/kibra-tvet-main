import React from "react";
import KATTI from "@/assets/KATTI.png";
import KNEC from "@/assets/knec_new.png";
import HELB from "@/assets/HELB-logo.png";
import NITA from "@/assets/NITA-Logo.png";
import KUCCPS from "@/assets/KUCCPS-logo.png";
import MOE from "@/assets/MOE-LOGO.jpg";
import TVET from "@/assets/TVET-LOGO.png";

const partners = [
  { logo: KATTI, alt: "KATTI" },
  { logo: KNEC, alt: "KNEC" },
  { logo: HELB, alt: "HELB" },
  { logo: NITA, alt: "NITA" },
  { logo: KUCCPS, alt: "KUCCPS" },
  { logo: MOE, alt: "MOE" },
  { logo: TVET, alt: "TVET" },
];

export const OurPartners = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Our Partners</h1>
      <p className="text-center text-gray-600 mb-12">
        Through collaboration with esteemed educational institutions and
        industry leaders, we enhance the quality of our programs and equip our
        students with the skills and experience needed to thrive in today’s
        workforce.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 items-center justify-items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <img
              src={partner.logo}
              alt={partner.alt}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
