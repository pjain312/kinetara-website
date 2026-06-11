export type ServiceAreaFAQ = {
  question: string;
  answer: string;
};

export type ServiceArea = {
  slug: string;
  name: string;
  displayName: string;
  distance: string;
  travelTime: string;
  howToReach: string[];
  parking: string;
  metaDescription: string;
  intro: string;
  faqs: ServiceAreaFAQ[];
};

export const COMMON_CONDITIONS = [
  "Frozen shoulder",
  "Back pain",
  "Slip disc",
  "Sciatica",
  "Sports injuries",
  "Neck pain",
  "Knee pain",
  "Post-surgery rehabilitation",
] as const;

const CLINIC_ADDRESS = "D-584, CR Park, New Delhi";
const CLINIC_PHONE = "+91 88009 74721";

function baseFaqs(areaName: string, distance: string, travelTime: string): ServiceAreaFAQ[] {
  return [
    {
      question: `How far is Kinetara from ${areaName}?`,
      answer: `Our clinic in CR Park is approximately ${distance} from ${areaName}, typically a ${travelTime} drive depending on traffic.`,
    },
    {
      question: `Do you offer home physiotherapy visits near ${areaName}?`,
      answer: `Yes. We provide physiotherapy at home across ${areaName} and nearby South Delhi neighbourhoods for patients who cannot visit the clinic.`,
    },
    {
      question: `What should I bring to my first appointment?`,
      answer:
        "Bring any medical reports, prescriptions, or scans related to your condition, along with comfortable clothing for movement-based assessment.",
    },
    {
      question: `Do I need a doctor's referral to start physiotherapy?`,
      answer:
        "No referral is required. You can book directly. If needed, we coordinate with your doctor for comprehensive care.",
    },
    {
      question: `What are your clinic timings?`,
      answer: "We are open Monday to Sunday, 9 AM to 7 PM at our CR Park clinic.",
    },
  ];
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "kalkaji",
    name: "Kalkaji",
    displayName: "Kalkaji",
    distance: "2.5 km",
    travelTime: "8–12 minute",
    howToReach: [
      "Take the Outer Ring Road towards Nehru Place and continue to CR Park via Pamposh Enclave.",
      "From Kalkaji Mandir Metro (Violet Line), take a short auto or cab ride (~10 minutes) to CR Park.",
      "Via Greater Kailash Road through M Block Market towards Chittaranjan Park.",
    ],
    parking:
      "Street parking is available near the clinic on CR Park internal roads. We recommend arriving 5 minutes early during peak hours.",
    metaDescription:
      "Looking for the best physiotherapy clinic near Kalkaji? Kinetara in CR Park offers expert treatment for back pain, sciatica, sports injuries and more — just minutes away.",
    intro:
      "Residents of Kalkaji choose Kinetara for advanced physiotherapy, dry needling, and pain management without travelling across the city. Our CR Park clinic is a short ride from Kalkaji Mandir and Nehru Place.",
    faqs: baseFaqs("Kalkaji", "2.5 km", "8–12 minute"),
  },
  {
    slug: "gk1",
    name: "GK1",
    displayName: "Greater Kailash 1 (GK1)",
    distance: "1.5 km",
    travelTime: "5–8 minute",
    howToReach: [
      "Head south on Greater Kailash Road towards Chittaranjan Park.",
      "From Kailash Colony Metro (Violet Line), CR Park is a quick cab or auto ride away.",
      "Via Pamposh Enclave connecting GK1 markets directly to CR Park.",
    ],
    parking:
      "Ample street parking is available around CR Park. The clinic is on the lower ground floor with easy access from the main road.",
    metaDescription:
      "Best physiotherapy clinic near GK1 (Greater Kailash 1). Kinetara in CR Park provides expert rehab for back pain, frozen shoulder, sciatica and sports injuries.",
    intro:
      "If you live or work in Greater Kailash 1, Kinetara is one of the closest advanced physiotherapy clinics — offering in-clinic and home visit options for GK1 patients.",
    faqs: baseFaqs("GK1", "1.5 km", "5–8 minute"),
  },
  {
    slug: "gk2",
    name: "GK2",
    displayName: "Greater Kailash 2 (GK2)",
    distance: "2 km",
    travelTime: "6–10 minute",
    howToReach: [
      "Take the Outer Ring Road towards Nehru Enclave and enter CR Park via Bipin Chandra Pal Marg.",
      "From M Block GK2, drive through Greater Kailash towards Chittaranjan Park.",
      "Kailash Colony Metro is the nearest station — a short ride to our clinic.",
    ],
    parking:
      "Parking is available on adjacent CR Park streets. Peak evening hours may require a short walk from parking to the clinic entrance.",
    metaDescription:
      "Expert physiotherapy near GK2 (Greater Kailash 2). Visit Kinetara in CR Park for back pain, slip disc, sciatica, sports injury rehab and dry needling.",
    intro:
      "GK2 residents benefit from quick access to Kinetara's next-gen physiotherapy centre in CR Park — with treatments ranging from manual therapy and dry needling to post-surgery rehabilitation.",
    faqs: baseFaqs("GK2", "2 km", "6–10 minute"),
  },
  {
    slug: "cr-park",
    name: "CR Park",
    displayName: "Chittaranjan Park (CR Park)",
    distance: "In-clinic location",
    travelTime: "Walkable from most blocks",
    howToReach: [
      "We are located at D-584, LGF, CR Park — easily accessible from all CR Park blocks.",
      "Nearest metro: Nehru Enclave (Magenta Line), followed by a short auto ride.",
      "Well connected via Bipin Chandra Pal Marg and the Outer Ring Road.",
    ],
    parking:
      "Street parking is available directly outside and on nearby CR Park roads. The clinic has ground-level access for easy entry.",
    metaDescription:
      "Kinetara Physiotherapy Clinic in CR Park, South Delhi. Expert physiotherapists for back pain, frozen shoulder, sciatica, sports injuries and post-surgery rehab.",
    intro:
      "Kinetara is proudly based in the heart of Chittaranjan Park — your neighbourhood physiotherapy clinic with advanced equipment, certified therapists, and personalised treatment plans.",
    faqs: baseFaqs("CR Park", "within the neighbourhood", "5–10 minute walk"),
  },
  {
    slug: "alaknanda",
    name: "Alaknanda",
    displayName: "Alaknanda",
    distance: "2 km",
    travelTime: "7–10 minute",
    howToReach: [
      "Take the Outer Ring Road from Alaknanda towards Nehru Place and turn into CR Park.",
      "From Govindpuri Metro, a short cab ride reaches our clinic in under 10 minutes.",
      "Via Kalkaji/GK route through Pamposh Enclave to CR Park.",
    ],
    parking:
      "Street parking available near the clinic. We suggest calling ahead if you need assistance with directions from Alaknanda.",
    metaDescription:
      "Physiotherapy clinic near Alaknanda, South Delhi. Kinetara in CR Park treats back pain, neck pain, sciatica, frozen shoulder and sports injuries.",
    intro:
      "Alaknanda patients visit Kinetara for reliable, evidence-based physiotherapy just minutes away in CR Park — with options for in-clinic sessions and home visits.",
    faqs: baseFaqs("Alaknanda", "2 km", "7–10 minute"),
  },
  {
    slug: "govindpuri",
    name: "Govindpuri",
    displayName: "Govindpuri",
    distance: "3 km",
    travelTime: "10–15 minute",
    howToReach: [
      "From Govindpuri Metro (Violet Line), take an auto or cab towards CR Park via Kalkaji.",
      "Drive along the Outer Ring Road towards Nehru Enclave and enter CR Park.",
      "Via Okhla/Govindpuri Road connecting to Chittaranjan Park.",
    ],
    parking:
      "Parking available on CR Park streets near D-584. The clinic is on the lower ground floor with step-free access from the street.",
    metaDescription:
      "Best physiotherapy near Govindpuri. Kinetara CR Park offers expert treatment for back pain, slip disc, sciatica, knee pain and sports injury rehabilitation.",
    intro:
      "Govindpuri residents trust Kinetara for accessible physiotherapy in nearby CR Park — combining modern techniques like dry needling and IASTM with compassionate, patient-first care.",
    faqs: baseFaqs("Govindpuri", "3 km", "10–15 minute"),
  },
  {
    slug: "nehru-place",
    name: "Nehru Place",
    displayName: "Nehru Place",
    distance: "2 km",
    travelTime: "7–10 minute",
    howToReach: [
      "From Nehru Place Metro or market area, head towards Pamposh Enclave and CR Park.",
      "A short auto ride from Nehru Place bus terminal reaches the clinic quickly.",
      "Via Outer Ring Road towards Nehru Enclave metro station.",
    ],
    parking:
      "Street parking available in CR Park. Avoid Nehru Place commercial parking — drive directly to our CR Park address for convenience.",
    metaDescription:
      "Physiotherapy clinic near Nehru Place. Kinetara in CR Park provides pain management, sports rehab, dry needling and spine therapy for Nehru Place professionals and residents.",
    intro:
      "Working in Nehru Place? Kinetara is minutes away in CR Park — ideal for lunch-break appointments, post-work sessions, and weekend recovery programmes.",
    faqs: baseFaqs("Nehru Place", "2 km", "7–10 minute"),
  },
  {
    slug: "okhla",
    name: "Okhla",
    displayName: "Okhla",
    distance: "4 km",
    travelTime: "12–18 minute",
    howToReach: [
      "Take the Mathura Road or Okhla Flyover towards Kalkaji, then continue to CR Park.",
      "From Okhla Metro stations, connect via auto/cab through Govindpuri to CR Park.",
      "Via Outer Ring Road from Okhla Phase 3 towards Nehru Place and CR Park.",
    ],
    parking:
      "Free street parking available near the clinic in CR Park. Plan extra travel time during peak Okhla–Kalkaji traffic hours.",
    metaDescription:
      "Physiotherapy near Okhla, Delhi. Visit Kinetara CR Park for expert back pain, sciatica, sports injury and post-surgery rehabilitation — a short drive from Okhla.",
    intro:
      "Okhla patients choose Kinetara for comprehensive physiotherapy in CR Park — advanced therapies, experienced physiotherapists, and flexible appointment slots.",
    faqs: baseFaqs("Okhla", "4 km", "12–18 minute"),
  },
  {
    slug: "panchsheel-park",
    name: "Panchsheel Park",
    displayName: "Panchsheel Park",
    distance: "5 km",
    travelTime: "15–20 minute",
    howToReach: [
      "Take the Outer Ring Road towards Nehru Place and continue to CR Park via Kalkaji.",
      "From Panchsheel Park, drive via Chirag Delhi flyover towards Nehru Place and turn into CR Park.",
      "Hauz Khas Metro (Yellow/Magenta Line) connects to Nehru Enclave — a short ride from our clinic.",
    ],
    parking:
      "Street parking is available near the clinic on CR Park internal roads. Allow extra travel time during peak Outer Ring Road traffic.",
    metaDescription:
      "Best physiotherapy clinic near Panchsheel Park, South Delhi. Kinetara in CR Park offers expert treatment for back pain, sciatica, frozen shoulder and sports injuries.",
    intro:
      "Panchsheel Park residents choose Kinetara for advanced, evidence-based physiotherapy a short drive away in CR Park — with in-clinic sessions and home visit options.",
    faqs: baseFaqs("Panchsheel Park", "5 km", "15–20 minute"),
  },
  {
    slug: "chirag-delhi",
    name: "Chirag Delhi",
    displayName: "Chirag Delhi",
    distance: "4 km",
    travelTime: "12–15 minute",
    howToReach: [
      "Take the Outer Ring Road from Chirag Delhi towards Nehru Place and continue to CR Park.",
      "From Chirag Delhi Metro (Magenta Line), travel two stops to Nehru Enclave and take a short auto ride.",
      "Via Soami Nagar and Kalkaji towards Chittaranjan Park.",
    ],
    parking:
      "Street parking is available on CR Park internal roads near the clinic. We recommend arriving 5 minutes early during evening hours.",
    metaDescription:
      "Physiotherapy clinic near Chirag Delhi. Kinetara in CR Park provides expert rehab for back pain, slip disc, sciatica, sports injuries and dry needling.",
    intro:
      "Living near Chirag Delhi? Kinetara's CR Park clinic is minutes away on the Outer Ring Road — offering advanced physiotherapy, manual therapy, and personalised recovery plans.",
    faqs: baseFaqs("Chirag Delhi", "4 km", "12–15 minute"),
  },
  {
    slug: "nehru-enclave",
    name: "Nehru Enclave",
    displayName: "Nehru Enclave",
    distance: "1.5 km",
    travelTime: "5–8 minute",
    howToReach: [
      "Nehru Enclave Metro (Magenta Line) is our nearest station — the clinic is a short auto ride away.",
      "Drive via Bipin Chandra Pal Marg directly into CR Park.",
      "A quick rickshaw or even a brisk walk reaches the clinic from most parts of Nehru Enclave.",
    ],
    parking:
      "Street parking is available directly near the clinic in CR Park. Ground-level access makes entry easy for patients with limited mobility.",
    metaDescription:
      "Best physiotherapy clinic near Nehru Enclave. Kinetara in CR Park treats back pain, frozen shoulder, sciatica, knee pain and sports injuries — just minutes away.",
    intro:
      "Kinetara is one of the closest advanced physiotherapy clinics to Nehru Enclave — barely minutes from the metro station, with certified therapists and modern equipment.",
    faqs: baseFaqs("Nehru Enclave", "1.5 km", "5–8 minute"),
  },
  {
    slug: "tughlakabad-extension",
    name: "Tughlakabad Extension",
    displayName: "Tughlakabad Extension",
    distance: "3 km",
    travelTime: "10–15 minute",
    howToReach: [
      "Drive via Kalkaji towards CR Park through the Ma Anandmayee Marg route.",
      "From Govindpuri Metro (Violet Line), take a short auto ride to CR Park.",
      "Via Okhla Road connecting Tughlakabad Extension to Chittaranjan Park.",
    ],
    parking:
      "Parking is available on CR Park streets near D-584. The clinic is on the lower ground floor with step-free street access.",
    metaDescription:
      "Physiotherapy clinic near Tughlakabad Extension. Kinetara in CR Park offers expert treatment for back pain, sciatica, knee pain and post-surgery rehabilitation.",
    intro:
      "Tughlakabad Extension residents trust Kinetara for accessible, high-quality physiotherapy in nearby CR Park — from pain management to post-surgery rehab.",
    faqs: baseFaqs("Tughlakabad Extension", "3 km", "10–15 minute"),
  },
  {
    slug: "masjid-moth",
    name: "Masjid Moth",
    displayName: "Masjid Moth",
    distance: "4 km",
    travelTime: "12–15 minute",
    howToReach: [
      "Drive via Greater Kailash towards Chittaranjan Park through Pamposh Enclave.",
      "From Kailash Colony Metro (Violet Line), CR Park is a short cab or auto ride away.",
      "Via the Outer Ring Road towards Nehru Place and into CR Park.",
    ],
    parking:
      "Ample street parking is available around the clinic in CR Park. We suggest calling ahead for directions on your first visit.",
    metaDescription:
      "Best physiotherapy clinic near Masjid Moth, South Delhi. Kinetara in CR Park provides expert rehab for back pain, frozen shoulder, sciatica and sports injuries.",
    intro:
      "Patients from Masjid Moth visit Kinetara for advanced physiotherapy, dry needling, and rehabilitation — a quick drive through GK to our CR Park clinic.",
    faqs: baseFaqs("Masjid Moth", "4 km", "12–15 minute"),
  },
  {
    slug: "east-of-kailash",
    name: "East of Kailash",
    displayName: "East of Kailash",
    distance: "3 km",
    travelTime: "10–12 minute",
    howToReach: [
      "Drive via Captain Gaur Marg towards Nehru Place and continue into CR Park.",
      "From Kailash Colony Metro (Violet Line), take a short cab ride through GK to CR Park.",
      "Via the Outer Ring Road connecting East of Kailash to Chittaranjan Park.",
    ],
    parking:
      "Street parking is available near the clinic on CR Park internal roads. Evening slots may require a short walk from parking.",
    metaDescription:
      "Physiotherapy clinic near East of Kailash. Kinetara in CR Park treats back pain, slip disc, sciatica, sports injuries and offers post-surgery rehabilitation.",
    intro:
      "East of Kailash residents choose Kinetara for next-gen physiotherapy just minutes away in CR Park — combining manual therapy, dry needling, and personalised exercise programmes.",
    faqs: baseFaqs("East of Kailash", "3 km", "10–12 minute"),
  },
];

export const SERVICE_AREA_BY_SLUG = Object.fromEntries(
  SERVICE_AREAS.map((area) => [area.slug, area])
) as Record<string, ServiceArea>;

export function getServiceArea(slug: string): ServiceArea | undefined {
  return SERVICE_AREA_BY_SLUG[slug];
}

export function getServiceAreaPath(slug: string): string {
  return `/physiotherapy-clinic-${slug}`;
}

const SERVICE_AREA_NAME_ALIASES: Record<string, string> = {
  "greater kailash": "gk1",
  "chittaranjan park": "cr-park",
};

export function getServiceAreaByName(name: string): ServiceArea | undefined {
  const normalized = name.trim().toLowerCase();
  const aliasSlug = SERVICE_AREA_NAME_ALIASES[normalized];
  if (aliasSlug) {
    return SERVICE_AREA_BY_SLUG[aliasSlug];
  }
  return SERVICE_AREAS.find(
    (area) =>
      area.name.toLowerCase() === normalized ||
      area.displayName.toLowerCase() === normalized
  );
}

export const CLINIC_DETAILS = {
  address: CLINIC_ADDRESS,
  phone: CLINIC_PHONE,
  phoneHref: "tel:+918800974721",
  mapsUrl: "https://maps.app.goo.gl/i3vgVT1KAvkmWSBy9",
  hours: "Mon–Sun 9 AM – 7 PM",
  nearestMetro: "Nehru Enclave (Magenta Line)",
} as const;
