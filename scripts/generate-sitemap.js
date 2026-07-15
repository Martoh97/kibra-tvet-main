import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const hostname = "https://www.kibratvc.ac.ke";

const links = [
  { url: "/", priority: 1.0, changefreq: "weekly" },

  { url: "/about/history" },
  { url: "/about/mission-vision" },
  { url: "/about/service-charter" },

  { url: "/courses" },
  { url: "/our-programmes" },

  { url: "/departments/ict" },
  { url: "/departments/building" },
  { url: "/departments/cosmetology" },
  { url: "/departments/fashion" },
  { url: "/departments/electrical" },
  { url: "/departments/hospitality" },
  { url: "/departments/mechanical" },
  { url: "/departments/business-liberal-studies" },

  { url: "/admissions/registration" },
  { url: "/admissions/entry-requirements" },
  { url: "/admissions/payment-details" },
  { url: "/admissions/rpl" },

  { url: "/apply" },
  { url: "/contact" },

  { url: "/downloads/application-forms" },
  { url: "/downloads/prospectus" },
  { url: "/downloads/course-catalogs" },
  { url: "/downloads/fee-structures" },
  { url: "/downloads/academic-calendar" },
  { url: "/downloads/student-handbook" },

  { url: "/management/principal" },
  { url: "/management/deputy-principals" },
  { url: "/management/registrar" },
  { url: "/management/dean-of-students" },
  { url: "/management/board-of-governors" },

  { url: "/stories/jitume-training" },
  { url: "/stories/practical-sessions" },
  { url: "/stories/environmental-stewardship" }
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  const data = await streamToPromise(sitemap);

  fs.writeFileSync("./public/sitemap.xml", data.toString());

  console.log("✅ Sitemap generated successfully!");
}

generateSitemap().catch(console.error);