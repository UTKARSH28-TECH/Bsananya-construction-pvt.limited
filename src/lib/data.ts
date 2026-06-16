import {
  BadgeCheck,
  Banknote,
  Building2,
  CalendarCheck,
  DraftingCompass,
  Hammer,
  HardHat,
  Home,
  Layers3,
  Lightbulb,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench
} from "lucide-react";

export const navItems = ["About", "Services", "Projects", "Process", "Reviews", "Contact"];

export const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Expert Professionals" },
  { value: 100, suffix: "%", label: "Client Satisfaction" }
];

export const heroStats = [
  "50+ Projects",
  "100% Quality Commitment",
  "On-Time Delivery",
  "Expert Engineering Team"
];

export const pillars = [
  {
    title: "Mission",
    text: "Deliver durable, refined spaces through dependable engineering, honest communication, and disciplined execution.",
    icon: BadgeCheck
  },
  {
    title: "Vision",
    text: "Become Ranchi's most trusted construction partner for homes, workplaces, and infrastructure that last.",
    icon: Lightbulb
  },
  {
    title: "Core Values",
    text: "Quality, transparency, accountability, safety, innovation, and respect for every client's dream.",
    icon: ShieldCheck
  }
];

export const services = [
  {
    title: "Residential Construction",
    text: "Custom homes, villas, apartments, and high-quality family residences.",
    icon: Home
  },
  {
    title: "Commercial Construction",
    text: "Office spaces, retail buildings, and complete commercial complexes.",
    icon: Building2
  },
  {
    title: "Renovation & Remodeling",
    text: "Modern upgrades, repairs, extensions, and complete transformations.",
    icon: Wrench
  },
  {
    title: "Interior & Exterior Works",
    text: "Elegant interiors, premium finishes, and durable exterior detailing.",
    icon: Paintbrush
  },
  {
    title: "Architectural Design & Planning",
    text: "2D layouts, 3D concepts, approvals guidance, and project planning.",
    icon: DraftingCompass
  },
  {
    title: "Civil & Structural Engineering",
    text: "Engineering excellence focused on safety, strength, and longevity.",
    icon: HardHat
  }
];

export const reasons = [
  { title: "Quality Materials", icon: Layers3 },
  { title: "Transparent Pricing", icon: Banknote },
  { title: "Experienced Team", icon: Users },
  { title: "On-Time Delivery", icon: CalendarCheck },
  { title: "Client Satisfaction", icon: Sparkles },
  { title: "Modern Construction Technology", icon: Hammer }
];

export const projects = [
  {
    title: "Modern Villa",
    category: "Residential",
    image: "/project-residential.jpg",
    height: "h-[430px]"
  },
  {
    title: "Luxury Residence",
    category: "Residential",
    image: "/cover-photo.jpg",
    height: "h-[330px]"
  },
  {
    title: "Commercial Office",
    category: "Commercial",
    image: "/project-commercial.jpg",
    height: "h-[390px]"
  },
  {
    title: "Retail Complex",
    category: "Commercial",
    image: "/project-residential.jpg",
    height: "h-[300px]"
  },
  {
    title: "Apartment Building",
    category: "Residential",
    image: "/project-commercial.jpg",
    height: "h-[360px]"
  },
  {
    title: "Renovated Home",
    category: "Renovation",
    image: "/project-renovation.jpg",
    height: "h-[420px]",
    beforeAfter: true
  },
  {
    title: "Premium Living Room",
    category: "Interior Design",
    image: "/cover-photo.jpg",
    height: "h-[320px]",
    beforeAfter: true
  }
];

export const process = [
  "Consultation",
  "Planning & Design",
  "Budget Estimation",
  "Construction",
  "Quality Inspection",
  "Project Handover"
];

export const testimonials = [
  {
    quote:
      "Bsananya delivered our dream home exactly as promised. Excellent quality and professionalism.",
    name: "Residential Client",
    role: "Ranchi"
  },
  {
    quote: "Transparent process and timely completion. Highly recommended.",
    name: "Commercial Client",
    role: "Jharkhand"
  },
  {
    quote:
      "Their planning, material guidance, and finishing standards made the entire renovation feel effortless.",
    name: "Renovation Client",
    role: "Harihar Singh Road"
  }
];

export const faqs = [
  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes. We support architectural planning, budgeting, execution, quality checks, and handover for residential and commercial projects."
  },
  {
    question: "Can I request a site visit before estimation?",
    answer:
      "Yes. The team can schedule a consultation to understand the site, scope, timeline, and expected finish quality."
  },
  {
    question: "Do you work on renovation projects?",
    answer:
      "Yes. Renovation, remodeling, interior upgrades, exterior finishes, and structural improvement projects are part of our services."
  }
];

export const blogs = [
  {
    title: "How To Plan A New Home Build In Ranchi",
    text: "Key decisions around site study, drawings, budget, materials, and execution timelines."
  },
  {
    title: "What Transparent Construction Pricing Includes",
    text: "A practical look at estimates, material choices, labor, supervision, and contingencies."
  },
  {
    title: "Renovation Ideas For Stronger, Smarter Homes",
    text: "Modern finishes and civil improvements that can transform aging spaces with confidence."
  }
];
