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
    seoPath: "/physiotherapist-palak-jain-pelvic-floor-spine",
    name: "Dr. Palak Jain PT",
    role: "Founder | HOD",
    experience: "8+ years",
    image: "/assets/dr-palak.webp",
    qualifications: [
      "BPT, MPT — Orthopaedics",
      "MIAP (Member, Indian Association of Physiotherapists)",
      "Certified Orthopaedic Manual Therapist (COMT)",
      "Certified Pregnancy & Pelvic Floor Specialist",
      "Certified Therapeutic Taping Practitioner (CKTP)",
      "IASTM Practitioner",
      "Certified Cupping Therapist (CCT)",
    ],
    specializations: [
      "Pelvic floor physiotherapy",
      "Spine & cervical rehabilitation",
      "Orthopaedic manual therapy",
      "Pregnancy & postpartum care",
      "Sports injury rehabilitation",
    ],
    conditionsTreated: [
      "Pelvic floor dysfunction",
      "Pregnancy-related pain",
      "Cervical & neck pain",
      "Lower back pain & sciatica",
      "Frozen shoulder",
      "Knee & hip pain",
      "Post-surgery rehabilitation",
      "Neck torticollis",
    ],
    techniques: [
      "Orthopaedic manual therapy (COMT)",
      "Pelvic floor rehabilitation",
      "IASTM (instrument-assisted soft tissue mobilisation)",
      "Therapeutic taping (CKTP)",
      "Cupping therapy",
      "Exercise-based rehabilitation",
    ],
    bio: "Dr. Palak Jain is the founder and Head of Department at Kinetara Physiotherapy, CR Park. With a Master's in Orthopaedic Physiotherapy and advanced certifications in pelvic floor therapy and manual techniques, she is trusted by patients across South Delhi for spine, pelvic, and orthopaedic conditions.",
    intro:
      "Looking for an expert pelvic floor or spine physiotherapist in CR Park, South Delhi? Dr. Palak Jain combines 8+ years of clinical experience with evidence-based orthopaedic and pelvic floor rehabilitation — helping patients recover with personalised, compassionate care.",
    metaDescription:
      "Dr. Palak Jain PT — pelvic floor & spine physiotherapist in CR Park, South Delhi. Expert in cervical pain, back pain, pregnancy rehab, and orthopaedic manual therapy at Kinetara.",
    seoKeywords: [
      "pelvic floor physiotherapist CR Park",
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
      {
        name: "Ekta Sachdeva",
        title: "Neck and Shoulder Pain Treatment",
        review:
          "I am extremely satisfied with the physiotherapy care I received at Kinetara under the guidance of Dr. Palak. I approached her for degenerative knee-related issues that were significantly affecting my daily activities. Dr. Palak conducted a thorough assessment of my condition and designed a personalized treatment plan with a strong focus on functional manual therapy and leg-strengthening exercises. Her systematic approach addressed not only pain relief but also the underlying factors contributing to my discomfort. Over the course of the therapy, I have experienced nearly 70% relief from pain and discomfort. The muscle-strengthening program has helped reduce the load on my knee, leading to noticeable improvements in walking, climbing stairs, balance, and overall mobility. I sincerely appreciate Dr. Palak’s expertise, dedication, and encouragement throughout my recovery journey. Her guidance has made a significant difference in my quality of life. Thank you, Dr. Palak, for your excellent care and support.",
        rating: 5,
      },
    ],
  },
  {
    slug: "iqra-siddiqui",
    seoPath: "/physiotherapist-iqra-siddiqui-dry-needling",
    name: "Dr. Iqra Siddiqui PT",
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
      "Dry needling therapy",
      "Musculoskeletal pain management",
      "Sports injury rehabilitation",
      "Therapeutic taping & cupping",
      "Trigger point release",
      "Manual therapy"
      
    ],
    conditionsTreated: [
      "Chronic muscle pain",
      "Sports injuries",
      "Shoulder & neck stiffness",
      "Tennis elbow & tendinitis",
      "Myofascial trigger points",
      "Post-exercise soreness",
      "Back & hip muscle tension",
      "Post-injury rehabilitation",
    ],
    techniques: [
      "Dry needling (CDNT)",
      "Cupping therapy",
      "Therapeutic taping (CKTP)",
      "Manual soft tissue release",
      "Exercise prescription",
      "Pain management protocols",
    ],
    bio: "Dr. Iqra Siddiqui is a senior physiotherapist at Kinetara, CR Park, specialising in dry needling and musculoskeletal pain management. Her precise, patient-focused approach helps relieve chronic pain, sports injuries, and muscle tension effectively.",
    intro:
      "Need expert dry needling or pain relief physiotherapy in CR Park, South Delhi? Dr. Iqra Siddiqui is a certified dry needling therapist with 3+ years of experience — delivering targeted treatment for muscle pain, sports injuries, and chronic stiffness at Kinetara.",
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
