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
  heroSubtitle: string;
  highlights: string[];
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

function locationFaqs(
  areaName: string,
  distance: string,
  travelTime: string,
  localFaq: ServiceAreaFAQ
): ServiceAreaFAQ[] {
  return [localFaq, ...baseFaqs(areaName, distance, travelTime)];
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "kalkaji",
    name: "Kalkaji",
    displayName: "Kalkaji",
    distance: "2.5 km",
    travelTime: "8–12 minute",
    heroSubtitle:
      "Just 2.5 km from Kalkaji Mandir — expert spine, sports injury & dry needling physiotherapy in CR Park.",
    highlights: [
      "Popular with patients from Kalkaji Mandir, Deshbandhu College, and Nehru Place corridor.",
      "Easy access via Kalkaji Mandir Metro (Violet Line) — a 10-minute auto ride to our clinic.",
      "Many Kalkaji patients book evening slots after work without crossing South Delhi traffic.",
    ],
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
    faqs: locationFaqs("Kalkaji", "2.5 km", "8–12 minute", {
      question: "Is Kinetara convenient for Kalkaji Mandir and Nehru Place commuters?",
      answer:
        "Yes. Our CR Park clinic sits between Kalkaji and Nehru Place on the Outer Ring Road corridor — most Kalkaji patients reach us in under 12 minutes by auto or cab, even during peak hours.",
    }),
  },
  {
    slug: "gk1",
    name: "GK1",
    displayName: "Greater Kailash 1 (GK1)",
    distance: "1.5 km",
    travelTime: "5–8 minute",
    heroSubtitle:
      "South Delhi's closest advanced physiotherapy clinic for GK1 — just 1.5 km away in CR Park.",
    highlights: [
      "One of the nearest specialist physiotherapy centres to GK1 M Block and N Block markets.",
      "Convenient for GK1 families who want in-clinic sessions or home visits without long commutes.",
      "Trusted by GK residents for frozen shoulder, back pain, and post-surgery rehabilitation.",
    ],
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
    faqs: locationFaqs("GK1", "1.5 km", "5–8 minute", {
      question: "Do you offer home physiotherapy visits in Greater Kailash 1?",
      answer:
        "Yes. We regularly visit GK1, including M Block, N Block, and W Block areas, for patients who prefer treatment at home — especially seniors and post-surgery cases.",
    }),
  },
  {
    slug: "gk2",
    name: "GK2",
    displayName: "Greater Kailash 2 (GK2)",
    distance: "2 km",
    travelTime: "6–10 minute",
    heroSubtitle:
      "GK2's go-to clinic for spine rehab, dry needling & sports injury recovery — minutes away in CR Park.",
    highlights: [
      "Quick drive from M Block GK2 and Kailash Colony via Greater Kailash Road.",
      "GK2 gym-goers and runners visit us for sports injury rehab and dry needling.",
      "Flexible slots for working professionals commuting through Kailash Colony Metro.",
    ],
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
    faqs: locationFaqs("GK2", "2 km", "6–10 minute", {
      question: "What conditions do GK2 patients most commonly visit Kinetara for?",
      answer:
        "GK2 patients frequently visit us for sports injuries, knee pain, frozen shoulder, cervical spondylosis, and post-gym muscle strains — our dry needling and manual therapy programmes are especially popular.",
    }),
  },
  {
    slug: "cr-park",
    name: "CR Park",
    displayName: "Chittaranjan Park (CR Park)",
    distance: "In-clinic location",
    travelTime: "Walkable from most blocks",
    heroSubtitle:
      "Your neighbourhood physiotherapy clinic in CR Park — advanced rehab, dry needling & spine care on your doorstep.",
    highlights: [
      "Walkable from most CR Park blocks — no long commute for daily rehab sessions.",
      "The only next-gen physiotherapy centre located inside Chittaranjan Park itself.",
      "Trusted by CR Park families for pelvic floor rehab, geriatric care, and post-surgery recovery.",
    ],
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
    faqs: locationFaqs("CR Park", "within the neighbourhood", "5–10 minute walk", {
      question: "Can CR Park residents walk to the clinic?",
      answer:
        "Yes. Most CR Park blocks are within a 5–10 minute walk or short cycle ride of our D-584 clinic. Many local patients schedule back-to-back weekly sessions because the clinic is right in the neighbourhood.",
    }),
  },
  {
    slug: "alaknanda",
    name: "Alaknanda",
    displayName: "Alaknanda",
    distance: "2 km",
    travelTime: "7–10 minute",
    heroSubtitle:
      "Trusted physiotherapy for Alaknanda — spine, sciatica & sports injury care just 2 km away in CR Park.",
    highlights: [
      "Straightforward ORR route from Alaknanda to our CR Park clinic in under 10 minutes.",
      "Popular with Alaknanda seniors who prefer a nearby clinic over travelling to central Delhi.",
      "Home visit physiotherapy available across Alaknanda for post-surgery and mobility cases.",
    ],
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
    faqs: locationFaqs("Alaknanda", "2 km", "7–10 minute", {
      question: "What is the fastest route from Alaknanda to Kinetara?",
      answer:
        "Most Alaknanda patients take the Outer Ring Road towards Nehru Place and turn into CR Park — a 7–10 minute drive. Alternatively, Govindpuri Metro connects via a short cab ride.",
    }),
  },
  {
    slug: "govindpuri",
    name: "Govindpuri",
    displayName: "Govindpuri",
    distance: "3 km",
    travelTime: "10–15 minute",
    heroSubtitle:
      "Advanced physiotherapy near Govindpuri Metro — dry needling, spine rehab & pain relief in CR Park.",
    highlights: [
      "Easy auto/cab connection from Govindpuri Metro (Violet Line) via Kalkaji.",
      "Affordable, high-quality care without travelling to central or north Delhi clinics.",
      "Regular home visits across Govindpuri for patients with limited mobility.",
    ],
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
    faqs: locationFaqs("Govindpuri", "3 km", "10–15 minute", {
      question: "How do I reach Kinetara from Govindpuri Metro?",
      answer:
        "Exit Govindpuri Metro and take an auto or cab towards Kalkaji/CR Park — the ride typically takes 10–15 minutes. We can share exact directions when you call to book.",
    }),
  },
  {
    slug: "nehru-place",
    name: "Nehru Place",
    displayName: "Nehru Place",
    distance: "2 km",
    travelTime: "7–10 minute",
    heroSubtitle:
      "Physiotherapy minutes from Nehru Place — book lunch-break or after-work sessions in CR Park.",
    highlights: [
      "Ideal for Nehru Place office workers — quick auto ride during lunch or after 6 PM.",
      "Skip Nehru Place parking hassles — drive straight to our CR Park clinic instead.",
      "Popular for desk-related neck pain, back pain, and RSI among IT and corporate professionals.",
    ],
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
    faqs: locationFaqs("Nehru Place", "2 km", "7–10 minute", {
      question: "Can I book a physiotherapy session during my Nehru Place lunch break?",
      answer:
        "Yes. Many Nehru Place professionals book 45–60 minute slots between 12–2 PM. Our CR Park clinic is a 7–10 minute auto ride from the Nehru Place hub.",
    }),
  },
  {
    slug: "okhla",
    name: "Okhla",
    displayName: "Okhla",
    distance: "4 km",
    travelTime: "12–18 minute",
    heroSubtitle:
      "Comprehensive physiotherapy for Okhla — back pain, sports injuries & post-surgery rehab in CR Park.",
    highlights: [
      "Worth the short drive from Okhla Phase 1, 2, and 3 for specialist spine and ortho rehab.",
      "Flexible morning and evening slots for Okhla factory and office workers.",
      "Home physiotherapy visits available across Okhla for patients who cannot travel.",
    ],
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
    faqs: locationFaqs("Okhla", "4 km", "12–18 minute", {
      question: "Is it worth travelling from Okhla to CR Park for physiotherapy?",
      answer:
        "Many Okhla patients prefer Kinetara over local options because we offer specialist treatments — dry needling, pelvic floor rehab, and post-surgical protocols — under one roof with certified therapists.",
    }),
  },
  {
    slug: "panchsheel-park",
    name: "Panchsheel Park",
    displayName: "Panchsheel Park",
    distance: "5 km",
    travelTime: "15–20 minute",
    heroSubtitle:
      "Premium physiotherapy care for Panchsheel Park — expert spine, frozen shoulder & sports rehab in CR Park.",
    highlights: [
      "Panchsheel Park families choose us for evidence-based care and personalised treatment plans.",
      "Connected via Hauz Khas Metro → Nehru Enclave, then a short ride to CR Park.",
      "In-clinic and home visit options for Panchsheel Park seniors and post-surgery patients.",
    ],
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
    faqs: locationFaqs("Panchsheel Park", "5 km", "15–20 minute", {
      question: "Do Panchsheel Park patients visit Kinetara for specialist treatments?",
      answer:
        "Yes. Panchsheel Park patients often come to us for frozen shoulder, cervical spondylosis, pelvic floor rehab, and sports injuries — treatments that require certified specialists and advanced equipment.",
    }),
  },
  {
    slug: "chirag-delhi",
    name: "Chirag Delhi",
    displayName: "Chirag Delhi",
    distance: "4 km",
    travelTime: "12–15 minute",
    heroSubtitle:
      "Physiotherapy near Chirag Delhi — manual therapy, dry needling & rehab via the ORR in CR Park.",
    highlights: [
      "Magenta Line connection: Chirag Delhi Metro → Nehru Enclave → short auto to clinic.",
      "Convenient for Soami Nagar and Sheikh Sarai residents along the ORR corridor.",
      "Trusted for back pain, sciatica, and sports injury recovery in South Delhi.",
    ],
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
    faqs: locationFaqs("Chirag Delhi", "4 km", "12–15 minute", {
      question: "How do Chirag Delhi Metro commuters reach Kinetara?",
      answer:
        "Take the Magenta Line from Chirag Delhi to Nehru Enclave (2 stops), then a 5-minute auto ride to our CR Park clinic at D-584.",
    }),
  },
  {
    slug: "nehru-enclave",
    name: "Nehru Enclave",
    displayName: "Nehru Enclave",
    distance: "1.5 km",
    travelTime: "5–8 minute",
    heroSubtitle:
      "Our nearest metro is Nehru Enclave — South Delhi's most accessible physiotherapy clinic in CR Park.",
    highlights: [
      "Closest physiotherapy clinic to Nehru Enclave Metro (Magenta Line) — often a 5-minute auto ride.",
      "Some Nehru Enclave residents walk or cycle to the clinic for regular sessions.",
      "Ground-level clinic access ideal for elderly patients from Nehru Enclave colonies.",
    ],
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
    faqs: locationFaqs("Nehru Enclave", "1.5 km", "5–8 minute", {
      question: "Which metro station is closest to Kinetara for Nehru Enclave residents?",
      answer:
        "Nehru Enclave on the Magenta Line is our nearest metro — just 1.5 km away. Most patients take a short auto or e-rickshaw directly to D-584, CR Park.",
    }),
  },
  {
    slug: "tughlakabad-extension",
    name: "Tughlakabad Extension",
    displayName: "Tughlakabad Extension",
    distance: "3 km",
    travelTime: "10–15 minute",
    heroSubtitle:
      "Quality physiotherapy for Tughlakabad Extension — pain relief & rehab via Kalkaji in CR Park.",
    highlights: [
      "Direct Kalkaji–CR Park route via Ma Anandmayee Marg — no need to travel to central Delhi.",
      "Popular for knee pain, back pain, and post-fracture rehab among Tughlakabad Extension families.",
      "Home visits available across Tughlakabad Extension for post-surgery recovery.",
    ],
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
    faqs: locationFaqs("Tughlakabad Extension", "3 km", "10–15 minute", {
      question: "Is Kinetara closer than central Delhi hospitals for Tughlakabad Extension patients?",
      answer:
        "For most Tughlakabad Extension residents, our CR Park clinic is significantly closer than central Delhi — typically a 10–15 minute drive via Kalkaji, with shorter wait times and personalised care.",
    }),
  },
  {
    slug: "masjid-moth",
    name: "Masjid Moth",
    displayName: "Masjid Moth",
    distance: "4 km",
    travelTime: "12–15 minute",
    heroSubtitle:
      "Expert physiotherapy for Masjid Moth — dry needling, spine care & rehab through GK to CR Park.",
    highlights: [
      "Quick access via Greater Kailash and Pamposh Enclave — no Outer Ring Road detours needed.",
      "Masjid Moth patients value our dry needling and manual therapy for chronic pain relief.",
      "Evening and weekend appointments suit Masjid Moth working professionals and homemakers.",
    ],
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
    faqs: locationFaqs("Masjid Moth", "4 km", "12–15 minute", {
      question: "What is the best route from Masjid Moth to Kinetara?",
      answer:
        "Drive via Greater Kailash through Pamposh Enclave towards CR Park — most Masjid Moth patients reach us in 12–15 minutes. Kailash Colony Metro is also a convenient starting point.",
    }),
  },
  {
    slug: "east-of-kailash",
    name: "East of Kailash",
    displayName: "East of Kailash",
    distance: "3 km",
    travelTime: "10–12 minute",
    heroSubtitle:
      "Physiotherapy for East of Kailash — spine, sports injury & dry needling just 3 km away in CR Park.",
    highlights: [
      "Captain Gaur Marg route to Nehru Place and CR Park — a familiar commute for East of Kailash residents.",
      "Kailash Colony Metro connects East of Kailash patients to our clinic in under 15 minutes.",
      "Popular for cervical pain, frozen shoulder, and gym-related injuries in the East of Kailash community.",
    ],
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
    faqs: locationFaqs("East of Kailash", "3 km", "10–12 minute", {
      question: "Do East of Kailash patients visit for sports and gym injuries?",
      answer:
        "Yes. East of Kailash has a large fitness-conscious community — we regularly treat gym-related strains, runner's knee, shoulder impingement, and tennis elbow with dry needling and corrective exercise programmes.",
    }),
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
