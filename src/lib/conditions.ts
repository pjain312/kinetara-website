export type ConditionFAQ = {
  question: string;
  answer: string;
};

export type RecoveryStage = {
  title: string;
  points: string[];
};

export type TreatmentApproach = {
  title: string;
  description?: string;
};

export type Condition = {
  slug: string;
  name: string;
  alternateName?: string;
  heroImage?: string;
  metaDescription: string;
  seoKeywords: string[];
  intro: string;
  whatIs: string;
  symptoms: string[];
  recoveryStages: RecoveryStage[];
  exercises: string[];
  treatmentIntro?: string;
  treatmentApproach?: TreatmentApproach[];
  treatmentClosing?: string;
  faqs: ConditionFAQ[];
  areasServed: string[];
};

export const CONDITIONS: Condition[] = [
  {
    slug: "frozen-shoulder",
    name: "Frozen Shoulder",
    alternateName: "Adhesive capsulitis",
    heroImage: "/assets/frozen-shoulder.PNG",
    metaDescription:
      "Expert frozen shoulder (adhesive capsulitis) physiotherapy near me in CR Park, South Delhi. Reduce pain, restore mobility, and avoid surgery with Kinetara's evidence-based treatment.",
    seoKeywords: [
      "frozen shoulder physiotherapy CR Park",
      "adhesive capsulitis treatment South Delhi",
      "frozen shoulder treatment near GK",
      "shoulder stiffness physiotherapist Delhi",
      "frozen shoulder pain relief",
      "best physiotherapy for frozen shoulder",
      "best physiotherapy for frozen shoulder near me",
      "specialized physiotherapy for frozen shoulder near me",
    ],
    intro:
      "Struggling with shoulder pain and stiffness? Kinetara offers expert frozen shoulder physiotherapy in CR Park — personalised treatment to reduce pain, restore mobility, and help you return to daily activities without surgery.",
    whatIs:
      "Frozen shoulder (adhesive capsulitis) is a condition characterized by pain, stiffness, and reduced movement of the shoulder joint. It develops gradually and can make everyday activities such as reaching overhead, dressing, or sleeping difficult.",
    symptoms: [
      "Pain in the shoulder, especially at night",
      "Gradual loss of shoulder movement",
      "Difficulty reaching overhead",
      "Difficulty fastening clothes or reaching behind the back",
      "Shoulder stiffness",
      "Pain while lifting objects",
      "Reduced functional ability in daily activities",
    ],
    recoveryStages: [
      {
        title: "Stage 1: Pain Relief",
        points: [
          "Reduce inflammation",
          "Manage pain",
          "Gentle mobility exercises",
        ],
      },
      {
        title: "Stage 2: Mobility Restoration",
        points: [
          "Joint mobilization",
          "Stretching exercises",
          "Range-of-motion training",
        ],
      },
      {
        title: "Stage 3: Strength Recovery",
        points: [
          "Rotator cuff strengthening",
          "Scapular stabilization",
          "Functional rehabilitation",
        ],
      },
      {
        title: "Stage 4: Return to Normal Activities",
        points: [
          "Daily activity training",
          "Overhead movement restoration",
          "Preventive exercise program",
        ],
      },
    ],
    exercises: [
      "Pendulum exercise",
      "Wall climbing exercise",
      "Towel stretch",
      "Cross-body stretch",
      "Finger walk exercise",
      "Shoulder external rotation stretch",
      "Scapular retraction exercise",
      "Resistance band strengthening",
    ],
    treatmentIntro:
      "Every patient undergoes a comprehensive assessment to evaluate shoulder mobility, identify the stage of frozen shoulder, and determine the factors contributing to pain and stiffness. Based on the findings, our physiotherapists design a personalised treatment plan focused on pain relief, restoring mobility, improving function, and preventing long-term movement restrictions.",
    treatmentApproach: [
      {
        title: "Manual Therapy & Joint Mobilization",
        description: "Improve shoulder movement and reduce capsular stiffness.",
      },
      {
        title: "Mulligan Mobilization with Movement (MWM)",
        description:
          "Restores pain-free shoulder movement and improves range of motion.",
      },
      {
        title: "Gentle Stretching Exercises",
        description: "Reduce stiffness and restore range of motion.",
      },
      {
        title: "Therapeutic Ultrasound",
        description: "Helps reduce pain and promotes tissue healing.",
      },
      {
        title: "TENS & IFT",
        description:
          "Transcutaneous Electrical Nerve Stimulation and Interferential Therapy for pain management.",
      },
      {
        title: "Heat Therapy",
        description:
          "Improves tissue flexibility and prepares the joint for movement.",
      },
      {
        title: "Dry Needling",
        description: "For associated muscle tightness and trigger points.",
      },
      {
        title: "Progressive Mobility & Flexibility Exercises",
        description: "Gradually restore full, comfortable shoulder motion.",
      },
      {
        title: "Rotator Cuff & Scapular Strengthening",
        description: "Rebuild strength and stability around the shoulder.",
      },
      {
        title: "Postural Correction",
        description: "Reduces strain on the shoulder complex.",
      },
      {
        title: "Functional Movement Training",
        description: "Retrain the shoulder for daily activities.",
      },
      {
        title: "Customized Home Exercise Programs",
        description: "Support recovery and maintain mobility.",
      },
    ],
    treatmentClosing:
      "At Kinetara, our focus is not only on relieving pain but also on restoring shoulder mobility and function, helping patients regain confidence in movement and return to their daily activities with greater ease, comfort, and independence.",
    faqs: [
      {
        question: "What causes frozen shoulder?",
        answer:
          "Frozen shoulder may occur after injury, surgery, prolonged immobilization, diabetes, or thyroid disorders.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Recovery may take 3–18 months depending on severity and treatment consistency.",
      },
      {
        question: "Can physiotherapy cure frozen shoulder?",
        answer:
          "Physiotherapy is considered one of the most effective treatments for frozen shoulder.",
      },
      {
        question: "Is frozen shoulder painful at night?",
        answer: "Yes, night pain is one of the most common symptoms.",
      },
      {
        question: "Can surgery be avoided?",
        answer:
          "Many patients improve significantly with physiotherapy and do not require surgery.",
      },
      {
        question: "Which exercises help frozen shoulder?",
        answer:
          "Stretching, mobility, and strengthening exercises prescribed by a physiotherapist.",
      },
    ],
    areasServed: [
      "Kalkaji",
      "Greater Kailash 1 (GK1)",
      "Greater Kailash 2 (GK2)",
      "Chittaranjan Park (CR Park)",
      "Alaknanda",
      "Govindpuri",
      "Nehru Place",
      "Okhla",
      "Panchsheel Park",
      "Chirag Delhi",
      "Nehru Enclave",
      "Tughlakabad Extension",
      "Masjid Moth",
      "East of Kailash",
    ],
  },
  {
    slug: "sciatica",
    name: "Sciatica",
    heroImage: "/assets/sciatica.PNG",
    metaDescription:
      "Expert sciatica physiotherapy in CR Park, South Delhi. Relieve nerve pain, numbness, and leg weakness with Kinetara's evidence-based treatment — without surgery.",
    seoKeywords: [
      "sciatica physiotherapy CR Park",
      "sciatica treatment South Delhi",
      "sciatic nerve pain relief Delhi",
      "hip pain physiotherapy in kalkaji",
      "leg pain physiotherapy near GK",
      "sciatica treatment without surgery",
      "best physiotherapy for sciatica",
      "best physiotherapy for sciatica near me",
      "specialized physiotherapy for sciatica near me",
      "sciatica treatment near me",
      "best physiotherapy for sciatica"
    ],
    intro:
      "Suffering from radiating leg pain, numbness, or tingling? Kinetara offers expert sciatica physiotherapy in CR Park — relieving nerve compression, restoring mobility, and helping you return to pain-free daily life without surgery.",
    whatIs:
      "Sciatica is a condition where the sciatic nerve, which runs from the lower back through the hips and down each leg, becomes irritated or compressed. This can cause pain, numbness, tingling, or weakness that radiates from the lower back into the leg.",
    symptoms: [
      "Pain radiating from the lower back to the buttock and leg",
      "Burning or sharp shooting pain down the leg",
      "Numbness or tingling in the leg or foot",
      "Weakness in the affected leg",
      "Increased pain while sitting for long periods",
      "Difficulty standing or walking comfortably",
      "Pain aggravated by bending, coughing, or sneezing",
    ],
    recoveryStages: [
      {
        title: "Stage 1: Pain Management",
        points: [
          "Pain relief techniques",
          "Nerve mobilization",
          "Postural correction",
        ],
      },
      {
        title: "Stage 2: Mobility Restoration",
        points: [
          "Gentle stretching",
          "Spinal mobility exercises",
          "Walking program",
        ],
      },
      {
        title: "Stage 3: Strengthening Phase",
        points: [
          "Core strengthening",
          "Glute strengthening",
          "Lumbar stabilization exercises",
        ],
      },
      {
        title: "Stage 4: Functional Recovery",
        points: [
          "Return to daily activities",
          "Ergonomic education",
          "Long-term prevention strategies",
        ],
      },
    ],
    exercises: [
      "Sciatic nerve glides",
      "Knee-to-chest stretch",
      "Piriformis stretch",
      "Cat-camel stretch",
      "Pelvic tilts",
      "McKenzie extension exercises",
      "Bridging exercises",
      "Core strengthening exercises",
    ],
    treatmentApproach: [
      {
        title: "Manual Therapy",
        description: "Reduces stiffness and improves spinal mobility.",
      },
      {
        title: "Spinal Traction & Tilt-Table Traction Therapy",
        description: "Helps reduce nerve root compression.",
      },
      {
        title: "Targeted Stretching & Mobility Exercises",
        description: "Restore flexibility and pain-free movement.",
      },
      {
        title: "Core Strengthening & Lumbar Stabilization Programs",
        description: "Build support for the lower back and prevent recurrence.",
      },
      {
        title: "Neural Mobilization Techniques (Nerve Glides)",
        description: "Free the sciatic nerve and reduce radiating symptoms.",
      },
      {
        title: "Dry Needling",
        description: "Releases muscle tightness and trigger points.",
      },
      {
        title: "Cryotherapy (Cold Therapy)",
        description: "Helps reduce pain and inflammation.",
      },
      {
        title: "Therapeutic Ultrasound",
        description: "Supports tissue healing and pain management.",
      },
      {
        title: "TENS & IFT",
        description:
          "Transcutaneous Electrical Nerve Stimulation and Interferential Therapy for effective pain relief.",
      },
      {
        title: "Postural Correction & Ergonomic Education",
        description: "Correct movement habits that aggravate sciatica.",
      },
      {
        title: "Customized Home Exercise Programs",
        description: "Support recovery and prevent recurrence.",
      },
    ],
    faqs: [
      {
        question: "What causes sciatica?",
        answer:
          "Sciatica commonly occurs due to a disc bulge, spinal stenosis, muscle tightness, or nerve compression in the lower back.",
      },
      {
        question: "Can physiotherapy help sciatica?",
        answer:
          "Yes. Physiotherapy is often one of the most effective conservative treatments for sciatica.",
      },
      {
        question: "How long does sciatica take to recover?",
        answer:
          "Mild cases may improve within a few weeks, while chronic cases may take several months.",
      },
      {
        question: "Is walking good for sciatica?",
        answer:
          "Yes, gentle walking is often beneficial when performed within pain limits.",
      },
      {
        question: "Can sciatica go away without surgery?",
        answer:
          "Most cases improve with physiotherapy, exercise, and lifestyle modifications without surgery.",
      },
      {
        question: "What should I avoid with sciatica?",
        answer:
          "Prolonged sitting, poor posture, heavy lifting, and activities that aggravate symptoms.",
      },
    ],
    areasServed: [
      "Kalkaji",
      "Greater Kailash 1 (GK1)",
      "Greater Kailash 2 (GK2)",
      "Chittaranjan Park (CR Park)",
      "Alaknanda",
      "Govindpuri",
      "Nehru Place",
      "Okhla",
      "Panchsheel Park",
      "Chirag Delhi",
      "Nehru Enclave",
      "Tughlakabad Extension",
      "Masjid Moth",
      "East of Kailash",
    ],
  },
  {
    slug: "tennis-elbow",
    name: "Tennis Elbow",
    heroImage: "/assets/tennis_elbow.PNG",
    alternateName: "Lateral Epicondylitis",
    metaDescription:
      "Expert tennis elbow (lateral epicondylitis) physiotherapy in CR Park, South Delhi. Relieve elbow pain, restore grip strength, and prevent recurrence with Kinetara's evidence-based treatment.",
    seoKeywords: [
      "tennis elbow physiotherapy CR Park",
      "lateral epicondylitis treatment South Delhi",
      "tennis elbow treatment South Delhi",
      "tennis elbow treatment near GK1 GK2",
      "elbow pain physiotherapist CR Park",
      "grip weakness treatment",
      "best physiotherapy for tennis elbow",
      "best physiotherapy for tennis elbow near me",
      "specialized physiotherapy for tennis elbow near me",
      "tennis elbow treatment near me",
      "best physiotherapy for tennis elbow"
    ],
    intro:
      "Struggling with outer elbow pain or a weak grip? Kinetara offers expert tennis elbow physiotherapy in CR Park — personalised treatment to relieve pain, heal the tendon, restore strength, and get you back to work, sports, and daily activities.",
    whatIs:
      "Tennis Elbow (Lateral Epicondylitis) is a painful condition caused by overuse of the forearm muscles and tendons that attach to the outside of the elbow. Despite its name, it can affect anyone who performs repetitive gripping, lifting, typing, or wrist movements.",
    symptoms: [
      "Pain on the outer side of the elbow",
      "Tenderness around the elbow joint",
      "Weak grip strength",
      "Pain while lifting objects",
      "Discomfort during twisting movements",
      "Pain while typing or using tools",
      "Stiffness in the forearm and wrist",
    ],
    recoveryStages: [
      {
        title: "Stage 1: Pain Relief",
        points: [
          "Pain management techniques",
          "Activity modification",
          "Gentle stretching",
        ],
      },
      {
        title: "Stage 2: Mobility Restoration",
        points: [
          "Soft tissue release",
          "Joint mobilization",
          "Flexibility exercises",
        ],
      },
      {
        title: "Stage 3: Strength Recovery",
        points: [
          "Eccentric strengthening",
          "Grip strengthening",
          "Forearm conditioning",
        ],
      },
      {
        title: "Stage 4: Return to Activity",
        points: [
          "Functional retraining",
          "Sport-specific or work-specific exercises",
          "Prevention strategies",
        ],
      },
    ],
    exercises: [
      "Wrist extensor stretches",
      "Wrist flexor stretches",
      "Eccentric wrist extension exercises",
      "Grip strengthening exercises",
      "Resistance band exercises",
      "Forearm pronation and supination exercises",
      "Finger extension exercises",
    ],
    treatmentIntro:
      "Every patient undergoes a comprehensive assessment to identify the exact source of pain, tendon irritation, and the factors contributing to their symptoms. Based on the findings, our physiotherapists design a personalised treatment plan focused on pain relief, tissue healing, restoring strength, and preventing recurrence.",
    treatmentApproach: [
      {
        title: "Manual Therapy",
        description: "Improves joint mobility and reduces muscle tension.",
      },
      {
        title: "Soft Tissue Release",
        description: "Targeted techniques for the forearm muscles and tendons.",
      },
      {
        title: "Dry Needling",
        description: "For trigger points and chronic muscle tightness.",
      },
      {
        title: "Therapeutic Ultrasound",
        description: "Supports tissue healing and pain reduction.",
      },
      {
        title: "TENS & IFT",
        description:
          "Transcutaneous Electrical Nerve Stimulation and Interferential Therapy for effective pain management.",
      },
      {
        title: "Cryotherapy (Cold Therapy)",
        description: "Reduces pain and inflammation.",
      },
      {
        title: "Progressive Stretching Exercises",
        description: "Improve flexibility of the forearm and wrist.",
      },
      {
        title: "Eccentric Strengthening Programs",
        description: "Evidence-based tendon rehabilitation.",
      },
      {
        title: "Grip Strengthening & Functional Retraining",
        description: "Rebuild grip strength for daily tasks and sport.",
      },
      {
        title: "Taping Techniques",
        description: "Reduce strain on the affected tendon.",
      },
      {
        title: "Ergonomic & Activity Modification Advice",
        description: "Correct the habits that overload the tendon.",
      },
      {
        title: "Customized Home Exercise Programs",
        description: "Support recovery and prevent recurrence.",
      },
    ],
    treatmentClosing:
      "At Kinetara, our focus is not only on relieving symptoms but also on addressing the underlying causes of tennis elbow, helping patients regain strength, improve function, and return to work, sports, and daily activities with confidence.",
    faqs: [
      {
        question: "What causes tennis elbow?",
        answer:
          "Repeated gripping, lifting, typing, racket sports, and repetitive wrist movements can contribute to tennis elbow.",
      },
      {
        question: "Can physiotherapy cure tennis elbow?",
        answer:
          "Physiotherapy is considered one of the most effective conservative treatments for tennis elbow.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Most patients improve within 6–12 weeks, although chronic cases may take longer.",
      },
      {
        question: "Is surgery necessary?",
        answer:
          "Most cases respond well to physiotherapy and do not require surgery.",
      },
      {
        question: "Can tennis elbow come back?",
        answer:
          "Yes, recurrence is possible if the underlying cause is not addressed.",
      },
      {
        question: "What activities should I avoid?",
        answer:
          "Activities that aggravate pain, such as repetitive gripping, lifting, and forceful wrist movements.",
      },
    ],
    areasServed: [
      "Kalkaji",
      "Greater Kailash 1 (GK1)",
      "Greater Kailash 2 (GK2)",
      "Chittaranjan Park (CR Park)",
      "Alaknanda",
      "Govindpuri",
      "Nehru Place",
      "Okhla",
      "Panchsheel Park",
      "Chirag Delhi",
      "Nehru Enclave",
      "Tughlakabad Extension",
      "Masjid Moth",
      "East of Kailash",
    ],
  },
  {
    slug: "cervical-spondylosis",
    name: "Cervical Spondylosis",
    heroImage: "/assets/cervical_spondylosis.PNG",
    metaDescription:
      "Expert cervical spondylosis physiotherapy in CR Park, South Delhi. Relieve neck pain, stiffness, and radiating symptoms with Kinetara's evidence-based treatment.",
    seoKeywords: [
      "cervical spondylosis physiotherapy CR Park",
      "cervical spondylosis treatment South Delhi",
      "neck pain physiotherapy near Nehru Place",
      "neck pain physiotherapy near Okhla",
      "neck stiffness treatment near GK1 GK2",
      "neck pain physiotherapy near CR Park",
      "cervical pain relief physiotherapy",
      "best physiotherapy for cervical spondylosis",
    ],
    intro:
      "Struggling with neck pain, stiffness, or radiating arm symptoms? Kinetara offers expert cervical spondylosis physiotherapy in CR Park — personalised treatment to relieve pain, restore neck mobility, and help you return to daily activities with comfort.",
    whatIs:
      "Cervical spondylosis is age-related wear and tear affecting the neck's spinal discs, joints, and vertebrae, often leading to neck pain, stiffness, and reduced mobility.",
    symptoms: [
      "Neck pain and stiffness",
      "Headaches",
      "Shoulder pain",
      "Arm pain or numbness",
      "Tingling sensations",
      "Reduced neck mobility",
      "Muscle weakness",
    ],
    recoveryStages: [
      {
        title: "Stage 1: Pain Relief",
        points: ["Reduce pain and muscle tension",
          "Manage inflammation",
          ],
      },
      {
        title: "Stage 2: Mobility Restoration",
        points: ["Improve neck movement",
          "Reduce stiffness",
          ],
      },
      {
        title: "Stage 3: Strengthening",
        points: ["Strengthen neck and shoulder muscles",
          "Improve spinal support",
          ],
      },
      {
        title: "Stage 4: Postural Correction & Prevention",
        points: ["⁠Correct posture",
          "Prevent recurrence",
          "Improve daily movement habits",
          ],
      },
    ],
    exercises: [
      "Chin tucks",
      "Neck stretches",
      "Scapular retractions",
      "Isometric neck exercises",
      "Postural strengthening exercises",
    ],
    treatmentIntro:
      "Every patient undergoes a comprehensive assessment to identify the exact source of neck pain, stiffness, nerve irritation, and the factors contributing to their symptoms. Based on the findings, our physiotherapists design a personalised treatment plan focused on pain relief, improving mobility, restoring function, and preventing recurrence.",
    treatmentApproach: [
      {
        title: "Manual Therapy",
        description: "Improves joint mobility and reduces muscle tension.",
      },
      {
        title: "Mulligan Mobilization with Movement (MWM)",
        description:
          "Restores pain-free neck movement and improves mobility.",
      },
      {
        title: "Cupping & IASTM",
        description:
          "Soft tissue release techniques for tight neck, shoulder, and upper back muscles.",
      },
      {
        title: "Dry Needling",
        description: "For trigger points and chronic muscle tightness.",
      },
      {
        title: "Craniosacral Therapy (CST)",
        description:
          "Helps reduce tension, promote relaxation, and support overall nervous system regulation.",
      },
      {
        title: "Therapeutic Ultrasound",
        description: "Supports tissue healing and pain reduction.",
      },
      {
        title: "TENS & IFT",
        description:
          "Transcutaneous Electrical Nerve Stimulation and Interferential Therapy for effective pain management.",
      },
      {
        title: "Heat Therapy",
        description: "Reduces stiffness and improves tissue flexibility.",
      },
      {
        title: "Cervical Traction",
        description:
          "Helps reduce nerve root compression and relieve radiating symptoms.",
      },
      {
        title: "Stretching Exercises",
        description: "Improve flexibility and restore range of motion.",
      },
      {
        title: "Deep Neck Flexor & Postural Strengthening",
        description: "Build endurance in the muscles that support the neck.",
      },
      {
        title: "Ergonomic & Workstation Modification Advice",
        description: "Correct the setup and habits that strain your neck.",
      },
      {
        title: "Postural Correction & Movement Retraining",
        description: "Address the root postural causes of neck pain.",
      },
      {
        title: "Customized Home Exercise Programs",
        description: "Support recovery and prevent recurrence.",
      },
    ],
    treatmentClosing:
      "At Kinetara, our focus is not only on relieving symptoms but also on addressing the underlying causes of cervical spondylosis, helping patients improve neck mobility, reduce pain, restore confidence in movement, and return to their daily activities with greater comfort and function.",
    faqs: [
      {
        question: "What causes cervical spondylosis?",
        answer:
          "Age-related degeneration, poor posture, prolonged screen use, and repetitive strain.",
      },
      {
        question: "Can physiotherapy help cervical spondylosis?",
        answer: "Yes, physiotherapy is one of the primary treatment options.",
      },
      {
        question: "Is cervical spondylosis permanent?",
        answer:
          "Degenerative changes cannot be reversed, but symptoms can be effectively managed.",
      },
      {
        question: "Can it cause headaches?",
        answer: "Yes, neck dysfunction can contribute to headaches.",
      },
    ],
    areasServed: [
      "Kalkaji",
      "Greater Kailash 1 (GK1)",
      "Greater Kailash 2 (GK2)",
      "Chittaranjan Park (CR Park)",
      "Alaknanda",
      "Govindpuri",
      "Nehru Place",
      "Okhla",
      "Panchsheel Park",
      "Chirag Delhi",
      "Nehru Enclave",
      "Tughlakabad Extension",
      "Masjid Moth",
      "East of Kailash",
    ],
  },
  {
    slug: "acl-tear",
    name: "ACL Tear",
    alternateName: "Anterior Cruciate Ligament Tear",
    heroImage: "/assets/acl_reconstruction.PNG",
    metaDescription:
      "Expert ACL tear & post-surgery rehabilitation physiotherapy in CR Park, South Delhi. Restore knee strength, stability, and return to sports safely with Kinetara's evidence-based rehab.",
    seoKeywords: [
      "ACL tear physiotherapy in CR Park",
      "ACL reconstruction rehab South Delhi",
      "knee ligament injury treatment Delhi",
      "knee pain physiotherapy near me",
      "ACL rehab physiotherapist near GK",
      "post ACL surgery physiotherapy",
      "best physiotherapy for ACL tear",
    ],
    intro:
      "Recovering from an ACL injury or reconstruction surgery? Kinetara offers expert ACL rehabilitation in CR Park — a structured, personalised program to reduce pain and swelling, rebuild strength and stability, and return you safely to sports and daily life.",
    whatIs:
      "An Anterior Cruciate Ligament (ACL) tear is a common knee injury that occurs when the ligament responsible for stabilizing the knee joint is stretched or torn, often during sports, sudden direction changes, or traumatic injuries.",
    symptoms: [
      "Sudden popping sensation in the knee",
      "Immediate pain and swelling",
      "Knee instability or \u201cgiving way\u201d",
      "Difficulty walking",
      "Reduced range of motion",
      "Pain during weight-bearing activities",
    ],
    recoveryStages: [
      {
        title: "Stage 1: Pain & Swelling Control",
        points: [
          "Pain management",
          "Swelling reduction",
          "Protected movement",
        ],
      },
      {
        title: "Stage 2: Mobility Restoration",
        points: ["Range of motion exercises", "Joint mobilization"],
      },
      {
        title: "Stage 3: Strength Building",
        points: [
          "Quadriceps strengthening",
          "Hamstring strengthening",
          "Balance training",
        ],
      },
      {
        title: "Stage 4: Return to Activity",
        points: [
          "Agility drills",
          "Sport-specific rehabilitation",
          "Injury prevention training",
        ],
      },
    ],
    exercises: [
      "Heel slides",
      "Straight leg raises",
      "Quadriceps sets",
      "Mini squats",
      "Step-ups",
      "Single-leg balance exercises",
      "Resistance band strengthening",
    ],
    treatmentIntro:
      "Every patient undergoes a comprehensive assessment to evaluate knee mobility, strength, stability, and post-surgical recovery status. Based on the findings, our physiotherapists design a personalised rehabilitation program focused on reducing pain and swelling, restoring movement, rebuilding strength, and facilitating a safe return to sports and daily activities.",
    treatmentApproach: [
      {
        title: "Manual Therapy",
        description: "Improves knee mobility and reduces joint stiffness.",
      },
      {
        title: "Cupping & IASTM",
        description:
          "Soft tissue release techniques for tight muscles around the knee, thigh, and calf.",
      },
      {
        title: "Cryotherapy (Cold Therapy)",
        description: "Helps reduce pain and post-operative swelling.",
      },
      {
        title: "Therapeutic Ultrasound",
        description: "Supports tissue healing and recovery.",
      },
      {
        title: "TENS & IFT",
        description:
          "Transcutaneous Electrical Nerve Stimulation and Interferential Therapy for effective pain management.",
      },
      {
        title: "Range of Motion Exercises",
        description: "Restore knee flexibility.",
      },
      {
        title: "Progressive Strengthening Programs",
        description:
          "Targeted quadriceps, hamstring, and glute strengthening.",
      },
      {
        title: "Balance, Proprioception & Neuromuscular Retraining",
        description: "Rebuild the knee's stability and movement control.",
      },
      {
        title: "Gait Retraining",
        description: "Restore normal walking patterns.",
      },
      {
        title: "Functional Strengthening & Movement Retraining",
        description: "Prepare the knee for real-world demands.",
      },
      {
        title: "Sport-Specific Rehabilitation",
        description: "Return-to-play training tailored to your sport.",
      },
      {
        title: "Injury Prevention & Performance Programs",
        description: "Reduce re-injury risk and enhance performance.",
      },
      {
        title: "Customized Home Exercise Programs",
        description: "Support recovery and optimize long-term outcomes.",
      },
    ],
    treatmentClosing:
      "At Kinetara, our focus is not only on restoring knee strength and mobility but also on rebuilding confidence, improving performance, and helping patients safely return to work, sports, and the activities they enjoy with greater stability and function.",
    faqs: [
      {
        question: "Can an ACL tear heal without surgery?",
        answer:
          "Partial tears may respond to conservative treatment, while complete tears often require surgery depending on activity level.",
      },
      {
        question: "How long does ACL rehabilitation take?",
        answer: "Typically 6–9 months, depending on severity and goals.",
      },
      {
        question: "Can physiotherapy help after ACL surgery?",
        answer:
          "Yes, physiotherapy is essential for optimal recovery after ACL reconstruction.",
      },
      {
        question: "When can I return to sports?",
        answer:
          "Return-to-sport timelines vary but are generally between 6–12 months.",
      },
    ],
    areasServed: [
      "Kalkaji",
      "Greater Kailash 1 (GK1)",
      "Greater Kailash 2 (GK2)",
      "Chittaranjan Park (CR Park)",
      "Alaknanda",
      "Govindpuri",
      "Nehru Place",
      "Okhla",
      "Panchsheel Park",
      "Chirag Delhi",
      "Nehru Enclave",
      "Tughlakabad Extension",
      "Masjid Moth",
      "East of Kailash",
    ],
  },
];

// Conditions listed on the site without a dedicated page yet.
// Move an entry into CONDITIONS (with full content) to give it a page.
export const CONDITIONS_WITHOUT_PAGES: string[] = [
  "Rotator Cuff Injury",
  "Rotator Cuff Tear",
  "Shoulder Impingement Syndrome",
  "Shoulder Tendinitis",
  "Shoulder Bursitis",
  "Calcific Tendinitis",
  "SLAP Lesion",
  "Shoulder Instability",
  "Recurrent Shoulder Dislocation",
  "Post Shoulder Surgery Rehabilitation",
  "Golfer\u2019s Elbow (Medial Epicondylitis)",
  "Elbow Tendinitis",
  "Elbow Bursitis",
  "Cubital Tunnel Syndrome",
  "Carpal Tunnel Syndrome",
  "De Quervain\u2019s Tenosynovitis",
  "Trigger Finger",
  "Wrist Sprain",
  "Wrist Tendinitis",
  "Thumb Arthritis",
  "Hand Stiffness",
  "Post-Fracture Hand Rehabilitation",
  "Cervical Radiculopathy",
  "Cervicogenic Headache",
  "Text Neck Syndrome",
  "Neck Muscle Strain",
  "Whiplash Injury",
  "Disc Bulge",
  "Herniated Disc",
  "Slip Disc",
  "Lumbar Spondylosis",
  "Lumbar Radiculopathy",
  "Spinal Stenosis",
  "Facet Joint Dysfunction",
  "Mechanical Low Back Pain",
  "Chronic Back Pain",
  "Postural Back Pain",
  "Sacroiliac Joint Dysfunction",
  "Hip Osteoarthritis",
  "Hip Impingement",
  "Trochanteric Bursitis",
  "Piriformis Syndrome",
  "Hip Labral Injury",
  "Post THR (Total Hip Replacement) Rehabilitation",
  "ACL Reconstruction Rehabilitation",
  "PCL Injury",
  "MCL Injury",
  "Meniscus Tear",
  "Patellofemoral Pain Syndrome",
  "Runner\u2019s Knee",
  "Jumper\u2019s Knee",
  "Knee Osteoarthritis",
  "Chondromalacia Patella",
  "IT Band Syndrome",
  "Post TKR (Total Knee Replacement) Rehabilitation",
  "Plantar Fasciitis",
  "Heel Pain",
  "Achilles Tendinitis",
  "Ankle Sprain",
  "Ankle Instability",
  "Flat Feet",
  "High Arch Foot Pain",
  "Shin Splints",
  "Stress Fracture Rehabilitation",
  "Post-Ankle Surgery Rehabilitation",
  "Sports Injury Assessment",
  "Running Injuries",
  "Cricket Injuries",
  "Football Injuries",
  "Tennis Injuries",
  "Badminton Injuries",
  "Gym-Related Injuries",
  "CrossFit Injuries",
  "Overuse Injuries",
  "Muscle Strains",
  "Ligament Sprains",
  "Tendon Injuries",
  "Return-to-Sport Rehabilitation",
  "Injury Prevention Programs",
  "Athletic Performance Rehabilitation",
  "Stroke Rehabilitation",
  "Parkinson\u2019s Disease Rehabilitation",
  "Multiple Sclerosis",
  "Bell\u2019s Palsy",
  "Facial Palsy Rehabilitation",
  "Osteoarthritis",
  "Balance & Fall Prevention",
  "Age-Related Weakness",
  "Mobility Disorders",
  "Joint Stiffness",
  "Frailty Rehabilitation",
  "Post-Fracture Rehabilitation",
  "Total Knee Replacement (TKR) Rehabilitation",
  "Total Hip Replacement (THR) Rehabilitation",
  "Arthroscopy Rehabilitation",
  "Rotator Cuff Repair Rehabilitation",
  "Shoulder Replacement Rehabilitation",
  "Fracture Rehabilitation",
  "Spine Surgery Rehabilitation",
  "Ligament Reconstruction Rehabilitation",
  "Pregnancy-Related Back Pain",
  "Postpartum Rehabilitation",
  "Diastasis Recti",
  "Pelvic Floor Dysfunction",
  "Urinary Incontinence",
  "Post-Cesarean Rehabilitation",
  "Chronic Pain Syndrome",
  "Myofascial Pain Syndrome",
  "Fibromyalgia",
  "Trigger Points",
  "Chronic Neck Pain",
  "Chronic Shoulder Pain",
  "Chronic Knee Pain",
  "Chronic Low Back Pain",
  "Text Neck",
  "Work-From-Home Pain",
  "Desk Job Neck & Back Pain",
  "Repetitive Strain Injury (RSI)",
  "Postural Dysfunction",
  "Computer-Related Musculoskeletal Disorders",
];

export const CONDITION_BY_SLUG = Object.fromEntries(
  CONDITIONS.map((condition) => [condition.slug, condition])
) as Record<string, Condition>;

export function getCondition(slug: string): Condition | undefined {
  return CONDITION_BY_SLUG[slug];
}

export function getConditionPath(slug: string): string {
  return `/condition/${slug}`;
}

export function getConditionByName(name: string): Condition | undefined {
  return CONDITIONS.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
}
