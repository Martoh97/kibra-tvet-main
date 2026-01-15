import { GraduationCap, Briefcase, Building2, Award } from "lucide-react";
import { useEffect, useState } from "react";

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]); // animated values

  useEffect(() => {
    setIsVisible(true);

    const targets = [92, 85, 78, 37]; // numbers ONLY
    const duration = 2000; // 2 seconds
    const frames = 60;
    const interval = duration / frames;

    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      setCounts(() =>
        targets.map((target) => Math.round((currentFrame / frames) * target))
      );
      if (currentFrame === frames) clearInterval(counter);
    }, interval);
  }, []);

  const stats = [
    {
      value: "92%",
      label: "Graduation Rate",
      icon: GraduationCap,
      color: "text-blue-600",
    },
    {
      value: "85%",
      label: "Job Placement",
      icon: Briefcase,
      color: "text-green-600",
    },
    {
      value: "78%",
      label: "Industry Partners",
      icon: Building2,
      color: "text-purple-600",
    },
    {
      value: "37+",
      label: "Industry Certifications",
      icon: Award,
      color: "text-orange-600",
    },
  ];

  // formatting function (adds % or + back)
  const formatValue = (index: number) => {
    const original = stats[index].value;

    if (original.includes("%")) return `${counts[index]}%`;
    if (original.includes("+")) return `${counts[index]}+`;
    return counts[index];
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-0">
                  <div className={`${stat.color} md:mb-4 flex-shrink-0`}>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 md:flex-none">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {formatValue(index)}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
