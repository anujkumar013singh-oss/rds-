"use client";

import { Gallery6 } from "@/components/ui/gallery6";

const serviceItems = [
  {
    id: "service-1",
    title: "Enterprise Talent Acquisition",
    summary:
      "Precision-led recruitment strategies to identify and secure executive-level and specialised talent for industry leaders.",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "service-2",
    title: "Statutory Compliance & Governance",
    summary:
      "Ensuring institutional integrity through rigorous labor law audits and comprehensive statutory compliance frameworks.",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "service-3",
    title: "Institutional Training & Development",
    summary:
      "Structured professional development programs designed to elevate workforce productivity and leadership excellence.",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "service-4",
    title: "Managed Payroll Solutions",
    summary:
      "High-precision payroll processing and tax administration services for large-scale enterprise workforces.",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "service-5",
    title: "Corporate Policy Architecture",
    summary:
      "Developing sophisticated HR policy frameworks and organisational handbooks that define institutional culture.",
    url: "#contact",
    image: "https://a-us.storyblok.com/f/1019507/243bb0d7de/microsoftteams-image-20-289-29-1.png",
  },
  {
    id: "service-6",
    title: "Strategic HR Audit & Advisory",
    summary:
      "Deep-dive institutional audits and strategic advisory services to optimize human capital and operational efficiency.",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <div id="services">
      <Gallery6 
        heading="Our HR Services" 
        demoUrl="#contact" 
        items={serviceItems} 
      />
    </div>
  );
};

export default Services;
