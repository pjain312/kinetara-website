const SERVICE_AREA_SLUGS = [
  "kalkaji",
  "gk1",
  "gk2",
  "cr-park",
  "alaknanda",
  "govindpuri",
  "nehru-place",
  "okhla",
  "panchsheel-park",
  "chirag-delhi",
  "nehru-enclave",
  "tughlakabad-extension",
  "masjid-moth",
  "east-of-kailash",
];

const PHYSIOTHERAPIST_PATHS = [
  "/physiotherapist-palak-jain-pelvic-floor-spine",
  "/physiotherapist-iqra-siddiqui-dry-needling",
];

module.exports = {
  siteUrl: "https://kinetaraphysiotherapy.com",
  generateRobotsTxt: true,
  exclude: ["/physiotherapist/*", "/physiotherapy/*"],
  additionalPaths: async () => {
    const serviceAreaPaths = SERVICE_AREA_SLUGS.map((slug) => ({
      loc: `/physiotherapy-clinic-${slug}`,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
    const physiotherapistPaths = PHYSIOTHERAPIST_PATHS.map((loc) => ({
      loc,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
    return [...serviceAreaPaths, ...physiotherapistPaths];
  },
};
  