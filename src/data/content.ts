export const company = {
  name: "AR Hydraulics and Sealing Solutions",
  shortName: "AR Hydraulics",
  tagline: "Precision Engineered. Built to Endure.",
  description:
    "AR Hydraulics and Sealing Solutions is a Kerala-based industrial engineering company located in East Kallada, specializing in hydraulic cylinder repair, hydraulic and pneumatic seals, hydraulic components, fabrication, machining jobs, and roofing works.",
  phone: "+91 98765 43210",
  email: "info@arhydraulics.com",
  address: "East Kallada, Kollam, Kerala",
};

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: "hydraulic-repair",
    index: "01",
    title: "Hydraulic Repair Services",
    description:
      "Professional repair, maintenance, and restoration of hydraulic systems for industrial and commercial applications. We service hydraulic cylinders, pumps, motors, valves, power packs, and complete hydraulic equipment to restore maximum performance and minimize operational downtime.",
  },
  {
    id: "hydraulic-seals",
    index: "02",
    title: "Hydraulic Seals",
    description:
      "Supply and replacement of premium-quality hydraulic seals for all types of hydraulic systems. Our range includes piston seals, rod seals, wiper seals, O-rings, wear rings, backup rings, and complete seal kits designed for long-lasting performance.",
  },
  {
    id: "pneumatic-seals",
    index: "03",
    title: "Pneumatic Seals",
    description:
      "High-performance pneumatic sealing solutions for cylinders, valves, compressors, and automation equipment. We provide reliable sealing products that improve efficiency, reduce leakage, and extend equipment life.",
  },
  {
    id: "fabrication",
    index: "04",
    title: "Fabrication Works",
    description:
      "Custom fabrication solutions for industrial, commercial, and engineering applications. We manufacture structural steel components, machine frames, platforms, brackets, heavy-duty assemblies, and customized metal fabrication projects with precision and durability.",
  },
  {
    id: "machining",
    index: "05",
    title: "Precision Machining Jobs",
    description:
      "High-precision machining services for manufacturing and repairing industrial components. Our expertise includes turning, milling, drilling, threading, shaft machining, bush manufacturing, sleeve machining, and custom-engineered parts to meet exact specifications.",
  },
  {
    id: "roofing",
    index: "06",
    title: "Industrial Roofing Works",
    description:
      "Complete roofing solutions for factories, warehouses, workshops, and commercial buildings. We specialize in PEB roofing, GI sheet roofing, color-coated roofing sheets, structural roofing, roof maintenance, and industrial roofing installations built for long-term durability.",
  },
  {
    id: "component-supply",
    index: "07",
    title: "Hydraulic Component Supply",
    description:
      "Supply of high-quality hydraulic components and industrial accessories, including hydraulic hoses, hose fittings, adaptors, cylinders, pumps, valves, pressure gauges, couplings, filters, hydraulic oil, and other essential spare parts.",
  },
  {
    id: "installation-commissioning",
    index: "08",
    title: "Installation & Commissioning",
    description:
      "Professional installation and commissioning of hydraulic systems, industrial machinery, hydraulic power packs, pipelines, and engineering equipment. Every installation is completed with strict quality standards to ensure reliable and efficient operation.",
  },
  {
    id: "preventive-maintenance",
    index: "09",
    title: "Preventive Maintenance",
    description:
      "Scheduled maintenance services designed to improve equipment reliability, reduce unexpected breakdowns, and extend machinery life. Our maintenance includes inspections, hydraulic oil analysis, seal replacement, leak detection, testing, and system optimization.",
  },
  {
    id: "breakdown-support",
    index: "10",
    title: "On-Site Breakdown Support",
    description:
      "Fast and reliable on-site inspection, fault diagnosis, emergency repairs, and technical support across Kerala. Our experienced technicians respond quickly to minimize downtime and restore your equipment to full working condition.",
  },
];

export const industries: string[] = [
  "Manufacturing Industries",
  "Construction & Infrastructure",
  "Heavy Equipment & Earthmoving Machinery",
  "Marine & Fishing Industry",
  "Rubber & Plastic Industries",
  "Food Processing Industries",
  "Engineering Workshops",
  "Warehouses & Logistics",
  "Agricultural Equipment",
  "General Industrial Applications",
];

export const whyChooseUs: string[] = [
  "Experienced Hydraulic & Mechanical Technicians",
  "Complete Hydraulic Repair & Maintenance Solutions",
  "Premium Hydraulic & Pneumatic Sealing Products",
  "Precision Machining & Custom Fabrication",
  "Professional Industrial Roofing Services",
  "High-Quality Components & Spare Parts",
  "Fast On-Site Technical Support Across Kerala",
  "Reliable Workmanship with Competitive Pricing",
  "Timely Project Delivery",
  "Customer-Focused Engineering Solutions",
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years of Engineering Excellence" },
  { value: 5000, suffix: "+", label: "Hydraulic Systems Restored" },
  { value: 98, suffix: "%", label: "On-Time Project Delivery" },
  { value: 24, suffix: "/7", label: "Emergency Repair Support" },
];

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    index: "01",
    title: "Diagnosis",
    description:
      "Comprehensive inspection and failure analysis to identify root causes with precision instrumentation.",
  },
  {
    index: "02",
    title: "Engineering",
    description:
      "Custom repair and fabrication plans engineered to OEM tolerances and site-specific requirements.",
  },
  {
    index: "03",
    title: "Precision Build",
    description:
      "Machining, sealing, and assembly executed in a controlled workshop environment with rigorous QA.",
  },
  {
    index: "04",
    title: "Testing",
    description:
      "Full pressure, flow, and load testing to verify performance before deployment.",
  },
  {
    index: "05",
    title: "Deployment",
    description:
      "On-site installation and commissioning with ongoing support and maintenance planning.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "AR Hydraulics rebuilt our entire press line hydraulics in record time. The precision and attention to detail was on another level.",
    name: "Rajesh Menon",
    role: "Plant Manager",
    company: "Precision Forge Industries",
  },
  {
    quote:
      "Their sealing solutions eliminated leaks we had been fighting for years. True engineering craftsmanship.",
    name: "Ananya Iyer",
    role: "Maintenance Head",
    company: "Coastal Manufacturing Co.",
  },
  {
    quote:
      "From machining to fabrication, AR Hydraulics delivers industrial work with a level of finish you rarely see.",
    name: "Vikram Shetty",
    role: "Operations Director",
    company: "Shetty Steel Works",
  },
];
