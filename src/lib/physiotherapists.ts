export type PhysiotherapistFAQ = {
  question: string;
  answer: string;
};

export type PhysiotherapistReview = {
  name: string;
  title: string;
  review: string;
  rating: number;
};

export type Physiotherapist = {
  slug: string;
  seoPath: string;
  name: string;
  title: string;
  role: string;
  experience: string;
  image: string;
  qualifications: string[];
  specializations: string[];
  conditionsTreated: string[];
  techniques: string[];
  bio: string;
  intro: string;
  metaDescription: string;
  seoKeywords: string[];
  reviews: PhysiotherapistReview[];
};

export const PHYSIOTHERAPISTS: Physiotherapist[] = [
  {
    slug: "palak-jain",
    seoPath: "/physiotherapist-palak-jain-spine-ortho",
    name: "Dr. Palak Jain PT", 
    title: "MPT (Orthopedics) | Orthopedic Manual Therapist | Certified Spine Specialist | Pelvic Floor Rehabilitation Specialist",
    role: "Founder | HOD",
    experience: "8+ years",
    image: "/assets/dr-palak.webp",
    qualifications: [
      "BPT",
      "MPT — Orthopaedics",
      "MIAP (Member, Indian Association of Physiotherapists)",
      "Certified Orthopaedic Manual Therapist (COMT)",
      "Certified Pregnancy & Pelvic Floor Specialist",
      "Certified Therapeutic Taping Practitioner (CKTP)",
      "IASTM Practitioner",
      "Certified Cupping Therapist (CCT)",
    ],
    specializations: [
      "Orthopedic Physiotherapy",
      "Manual Therapy",
      "Spine Rehabilitation",
      "Pelvic Floor Rehabilitation",
      "Sports Injury Rehabilitation",
      "Musculoskeletal Rehabilitation",
      "Chronic Pain Management",
      "Post-Surgical Rehabilitation",
      "Women's Health Physiotherapy",
      "Geriatric Rehabilitation",
    ],
    conditionsTreated: [
      "Neck Pain",
      "Back Pain",
      "Sciatica",
      "Slip Disc",
      "Cervical Spondylosis",
      "Frozen Shoulder",
      "Shoulder Pain",
      "Tennis Elbow",
      "Knee Pain",
      "Osteoarthritis",
      "Hip Pain",
      "Sports Injuries",
      "Post-Fracture Rehabilitation",
      "Post-Surgical Rehabilitation",
      "Pregnancy & Postpartum Rehabilitation",
      "Pelvic Pain",
      "Urinary Incontinence",
    ],
    techniques: [
      "Orthopedic Manual Therapy",
      "Joint Mobilization & Manipulation",
      "Soft Tissue Mobilization",
      "Myofascial Release",
      "Trigger Point Therapy",
      "Dry Needling (only if certified and legally permitted in your region)",
      "Instrument-Assisted Soft Tissue Mobilization (IASTM)",
      "Therapeutic Exercise Prescription",
      "Corrective Exercise Therapy",
      "Movement Assessment & Functional Rehabilitation",
      "Spine Rehabilitation",
      "McKenzie Method for Back & Neck Pain (if trained)",
      "Postural Correction & Ergonomic Training",
      "Sports Injury Rehabilitation",
      "Neuromuscular Re-education",
      "Balance & Gait Training",
      "Post-Surgical Rehabilitation",
      "Pelvic Floor Rehabilitation",
      "Women's Health Physiotherapy",
      "Pregnancy & Postpartum Rehabilitation",
      "Kinesiology Taping / Athletic Taping",
      "Pain Management & Chronic Pain Rehabilitation",
    ],
    bio: `Dr. Palak Jain is a trusted Orthopedic Physiotherapist and Orthopedic Manual Therapist in South Delhi with over 8 years of experience in treating musculoskeletal and orthopedic conditions. She specializes in spine rehabilitation, manual therapy, pelvic floor rehabilitation, sports injury recovery, and post-surgical rehabilitation.

Dr. Palak has helped hundreds of patients recover from neck pain, back pain, sciatica, slip disc, frozen shoulder, knee pain, sports injuries, and chronic pain conditions through evidence-based physiotherapy and personalized treatment plans.

Her treatment approach combines orthopedic manual therapy, joint mobilization, soft tissue techniques, corrective exercises, movement rehabilitation, and pelvic floor physiotherapy to help patients achieve lasting pain relief and improved function.

Patients from Greater Kailash, CR Park, Kalkaji, Nehru Place, and other areas of South Delhi trust Dr. Palak for expert physiotherapy and rehabilitation care.`,
    intro:
      "Looking for an expert pelvic floor or spine physiotherapist in CR Park, South Delhi? Dr. Palak Jain combines 8+ years of clinical experience with evidence-based orthopaedic and pelvic floor rehabilitation — helping patients recover with personalised, compassionate care.",
    metaDescription:
      "Dr. Palak Jain PT — pelvic floor & spine physiotherapist in CR Park, South Delhi. Expert in cervical pain, neck pain, back pain, pregnancy rehab, and orthopaedic manual therapy at Kinetara.",
    seoKeywords: [
      "pelvic floor physiotherapist CR Park",
      "pelvic floor physiotherapist Govindpuri",
      "pelvic floor physiotherapist Alaknanda",
      "pelvic floor physiotherapist Kalkaji",
      "pelvic floor physiotherapist Kailash Colony",
      "pelvic floor physiotherapist Nehru Enclave",
      "pelvic floor physiotherapist Okhla",
      "pelvic floor physiotherapist Panchsheel Park",
      "pelvic floor physiotherapist Chirag Delhi",
      "spine physiotherapist South Delhi",
      "spine physiotherapist near GK1 GK2",
      "spine physiotherapist near CR Park",
      "best physiotherapist near CR Park",
      "best physiotherapist near me",
      "best orthopaedic physiotherapist near me",
      "best orthopaedic physiotherapist in CR Park",
      "best physiotherapist in GK1 GK2",
      "best physiotherapist in Kalkaji",
      "pregnancy physiotherapy Delhi",
      "cervical pain physiotherapist",
      "Dr Palak Jain physiotherapist",
      "orthopaedic physiotherapist CR Park",
      "best physiotherapist near GK",
      "chiropractic in me",
      "chiropractic near GK1 GK2",
      "chiropractic near CR Park",
      "best chiropractic in GK1 GK2",
      "best chiropractic in CR Park",
    ],
    reviews: [
      {
        name: "Samriti Gupta",
        title: "Best physiotherapy clinic for Knee Pain!",
        review:
          "I first consulted Dr. Palak Jain (PT) due to knee pain. However, she expertly assessed the issue being related to overall muscle weakness throughout my body, likely due to hormonal changes and menopause, rather than just a localized knee problem. Her advice and treatment plan was very effective and genuine.",
        rating: 5,
      },
      {
        name: "Shristy Lama",
        title: "Best Physiotherapy Clinic for Cervical Pain",
        review:
          "I had a wonderful experience at Kinetara with Dr. Palak. I went in with a serious cervical issue and severe headaches. After just one session, my headache was significantly relieved, and after completing five days of sessions, my cervical pain is completely gone. Dr. Palak is not only highly skilled but also extremely kind, patient, and supportive.",
        rating: 5,
      },
      {
        name: "Ayushi Gupta",
        title: "Neck and Shoulder Pain Treatment",
        review:
          "I couldn't be happier with the treatment I received from Dr. Palak Jain. What truly stands out is her attention to detail, patient care, and genuine concern for her patients. She explains everything clearly, is extremely patient, and truly cares about her patients' progress.",
        rating: 5,
      },

    ],
  },
  {
    slug: "iqra-siddiqui",
    seoPath: "/physiotherapist-iqra-siddiqui-dry-needling",
    name: "Dr. Iqra Siddiqui PT",
    title: "Physiotherapist (BPT) | Orthopedic & Sports Rehabilitation | Certified Dry Needling, Cupping & Hijama Practitioner",
    role: "Sr. Physiotherapist",
    experience: "4+ years",
    image: "/assets/dr-iqra.webp",
    qualifications: [
      "BPT (Bachelor of Physiotherapy)",
      "DCPTOT (Delhi Council for Physiotherapy and Occupational Therapy)",
      "Certified Dry Needling Therapist (CDNT)",
      "Certified Cupping Therapist (CCT)",
      "Certified Therapeutic Taping Practitioner (CKTP)",
      "Skilled in Manual therapy & Corrective Exercise Programs "
    ],
    specializations: [
      "Orthopedic Physiotherapy",
      "Sports Injury Rehabilitation",
      "Musculoskeletal Rehabilitation",
      "Manual Therapy",
      "Athletic Injury Management",
      "Exercise Rehabilitation",
      "Chronic Pain Management",
      "Post-Injury Recovery",
      "Strength & Conditioning Guidance",
      "Functional Movement Rehabilitation",
      
    ],
    conditionsTreated: [
      "Sports Injuries",
      "Neck Pain",
      "Back Pain",
      "Sciatica",
      "Shoulder Pain",
      "Rotator Cuff Injuries",
      "Tennis Elbow",
      "Knee Pain",
      "Runner's Knee",
      "Ankle Sprains",
      "Ligament Injuries",
      "Muscle Strains",
      "Postural Disorders",
      "Gym-Related Injuries",
    ],
    techniques: [
    "Manual Therapy",
    "Dry Needling",
    "Cupping Therapy",
    "Hijama Therapy",
    "Myofascial Release",
    "Trigger Point Therapy",
    "Soft Tissue Mobilization",
    "Joint Mobilization",
    "Therapeutic Exercise Prescription",
    "Sports Rehabilitation",
    "Kinesiology Taping",
    "Corrective Exercise Therapy",
    ],
    bio: `Dr. Iqra Siddiqui PT is a dedicated Physiotherapist with over 4+ years of clinical experience in orthopedic and sports rehabilitation. She specializes in the assessment and treatment of musculoskeletal pain, sports injuries, movement dysfunctions, and post-injury rehabilitation.

Her areas of interest include sports physiotherapy, orthopedic rehabilitation, manual therapy, dry needling, cupping therapy, and functional exercise prescription. She has helped patients recover from neck pain, back pain, shoulder injuries, knee pain, ankle sprains, muscle strains, sports-related injuries, and chronic pain conditions.


Using a combination of evidence-based physiotherapy, manual therapy, dry needling, cupping therapy, and individualized rehabilitation programs, she focuses on reducing pain, restoring movement, improving performance, and helping patients return to their daily activities and sports safely.


Patients from Greater Kailash, CR Park, Alaknanda, Govindpuri, and other areas of South Delhi trust her hands-on approach, personalized care, and commitment to achieving long-term recovery and optimal physical function.`,
    intro:
      "Need expert dry needling or pain relief physiotherapy in CR Park, South Delhi? Dr. Iqra Siddiqui is a certified dry needling therapist with 4+ years of experience — delivering targeted treatment for muscle pain, sports injuries, and chronic stiffness at Kinetara.",
    metaDescription:
      "Dr. Iqra Siddiqui PT — certified dry needling physiotherapist in CR Park, South Delhi. Expert in muscle pain, sports injuries, cupping & therapeutic taping at Kinetara.",
    seoKeywords: [
      "dry needling physiotherapist CR Park",
      "dry needling South Delhi",
      "dry needling physiotherapist near GK1 GK2",
      "dry needling physiotherapist near CR Park",
      "best dry needling near GK1 GK2",
      "best dry needling near me",
      "best dry needling in GK1 GK2",
      "cupping therapy near me",
      "hijama therapy in CR Park",
      "sports injury physiotherapist Delhi",
      "muscle pain physiotherapy near me",
      "Dr Iqra Siddiqui physiotherapist",
      "cupping therapy physiotherapist near me",
      "best dry needling near GK1 GK2",
      "best dry needling in CR Park",
      "best dry needling in GK1 GK2",
      "best cupping therapy near me",
      "best cupping therapy in CR Park",
      "best cupping therapy in GK1 GK2",
      "best hijama therapy near me",
      "best hijama therapy in CR Park",
      "best hijama therapy in GK1 GK2",
    ],
    reviews: [
      {
        name: "Ramya Madhavan",
        title: "Best Physiotherapy near me",
        review:
          "I have been seeing the doctor for approx. six weeks for multiple issues, including an injury. Dr Palak Jain is committed to your immediate relief as well as in time recovery. Her consultants are clear and comprehensive. Her sessions last as long as is required for her to be satisfied that you have had immediate improvement, and following the sessions, she suggests a curated set of exercises for you to continue on your own [a refreshing change from physios who insist on medications, repeated scans, regular sessions, etc]. She is one of those rare doctors who is rigorous and responsive throughout - and also so warm that you soon feel she's family. My sessions with Dr Ammar and Dr Iqra have been of a similar standard. Kinetara has led to lasting improvements in my quality of life. Both my parents and husband have since had comprehensive consultations with Dr Palak Jain, and my mother and husband have had a series of sessions that, in both cases, have led to immense improvement in their condition. I'm so grateful, and will be recommending this clinic to everyone I know!",
        rating: 5,
      },

      {
        name: "Sidhartha Maity",
        title: "Best Physiotherapy in CR Park",
        review:
          `I went with a wrist pain which was diagnosed so well and in a week, I can start playing again. I now know more about the root cause of the pain and the next steps of the treatment.

The treatment has been extremely helpful and helped me recover from such an injury so quickly because both Dr. Iqra and Dr. Palak have put in their best effort in giving the accurate treatment.
One of the best treatment centres with modern equipments and correct guidance. Not a money making centre for sure. They don't push you to shell out money when it is not required.`,
        rating: 5,
      },
    ],
  },
];

export const PHYSIOTHERAPIST_BY_SLUG = Object.fromEntries(
  PHYSIOTHERAPISTS.map((pt) => [pt.slug, pt])
) as Record<string, Physiotherapist>;

export function getPhysiotherapist(slug: string): Physiotherapist | undefined {
  return PHYSIOTHERAPIST_BY_SLUG[slug];
}

export function getPhysiotherapistPath(slug: string): string {
  const pt = getPhysiotherapist(slug);
  return pt?.seoPath ?? `/physiotherapist/${slug}`;
}
