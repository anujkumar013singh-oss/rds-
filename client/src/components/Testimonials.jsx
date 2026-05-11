"use client";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "RDS Group transformed our recruitment process. Their talent acquisition team found us the perfect candidates for our technical roles within weeks.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Priya Sharma",
    role: "HR Director, TechCorp",
  },
  {
    text: "The compliance audit conducted by RDS Group was thorough and professional. They helped us navigate complex labor laws with ease.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Vikram Mehta",
    role: "Operations Head, Logistics India",
  },
  {
    text: "Their employee training programs have significantly boosted our team's productivity and morale. Highly recommend their services.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Sneha Kapoor",
    role: "L&D Manager, Global Solutions",
  },
  {
    text: "Payroll management used to be a headache for us. Since outsourcing to RDS Group, everything runs smoothly and on time.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Rajesh Iyer",
    role: "CEO, StartUp Hub",
  },
  {
    text: "Exceptional service and support. The team at RDS Group is always available to help with our HR queries.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Ananya Das",
    role: "Business Owner, Creative Agency",
  },
  {
    text: "RDS Group's HR policy development helped us establish a professional work environment. Their expertise is unmatched.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Karan Malhotra",
    role: "Founder, Retail Masters",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 relative overflow-hidden">
      <div className="container-main z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-16"
        >
          <div className="flex justify-center">
            <span className="tag-pill">Institutional Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight mt-5 text-black text-center">
            Voices of <span className="text-ali italic">Institutional Trust</span>
          </h2>
          <p className="text-center mt-5 text-black/60 font-body">
            Discover how RDS Group has helped businesses across India streamline their HR functions and achieve growth.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
