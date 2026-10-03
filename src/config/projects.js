/**
 * projects.js
 * Source of truth for featured projects.
 */
export const PROJECTS = [
  {
    id: "unisolv",
    title: "UniSolV",
    context: "Smart India Hackathon 2026, team 404 Decoders",
    description: "Civic problem-solving platform connecting citizens, government, universities and companies. Built around real Indian problems (potholes, flooding, infrastructure, civic complaints). Citizens submit issues; an AI layer classifies them and routes them to a suitable university or company; officials review and pass them to student groups or specialists, who propose solutions.",
    features: ["Reputation/trust score", "Escalation/SLA mechanism", "Geo-clustering of issues", "IP/credit governance", "Voice-based submissions"],
    role: "Technical implementation plus product/UI direction. AI layer can switch between a live LLM API and a cached/demo dataset.",
    tags: ["Responsive Web App", "AI Classification", "UI/UX"],
    repo: null,
    accent: "#C8FF00", // Acid Lime
  },
  {
    id: "antidrop",
    title: "AntiDROP",
    context: "Student-dropout intervention",
    description: "Causal ML platform for early student-dropout intervention: it estimates which intervention would change a student's outcome, not just who is at risk.",
    features: ["Dropout prediction (Random Forest)", "SHAP explainability", "Causal effect estimation of scholarships (DoWhy + EconML)", "Cohort overview & student risk views", "Causal policy simulator"],
    role: "Rebuilding originally Streamlit app with a React frontend.",
    tags: ["Machine Learning", "Causal Inference", "React", "Python"],
    repo: null,
    accent: "#FF3300", // Signal Red
  },
  {
    id: "unipect",
    title: "UNIPECT",
    context: "School expo project",
    description: "Real-time two-stage computer vision system that checks school uniform compliance, then ID card presence, from a live webcam feed.",
    features: ["Averages confidence across 5 frames", "GUI mode and headless CLI mode"],
    role: null,
    tags: ["Python", "TensorFlow/Keras", "OpenCV", "Tkinter", "MobileNet"],
    repo: "https://github.com/Sangeeth-Roshan/UNIPECT",
    accent: "#003CFF", // Pure Cobalt
  },
  {
    id: "libsync",
    title: "LibSYNC",
    context: "Library Management",
    description: "Python library management system backed by MySQL: book issuing, returning and bill generation.",
    features: [],
    role: null,
    tags: ["Python", "MySQL", "Database"],
    repo: "https://github.com/Sangeeth-Roshan/LibSync",
    accent: "#C8FF00", // Acid Lime
  }
];
