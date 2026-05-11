"use client";

import React from "react";
import { DIcons } from "dicons";
import ThemeToggle from "./ui/footer";

const navigation = {
  categories: [
    {
      id: "services",
      name: "Services",
      sections: [
        {
          id: "hr-services",
          name: "HR Services",
          items: [
            { name: "Talent Acquisition", href: "#services" },
            { name: "HR Compliance", href: "#services" },
            { name: "Employee Training", href: "#services" },
            { name: "Payroll Management", href: "#services" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "About Us", href: "#about" },
            { name: "Our Clients", href: "#clients" },
            { name: "Contact", href: "#contact" },
            { name: "Privacy Policy", href: "/privacy" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted border-white/20 rounded-xl p-2.5 transition-transform text-white/70 hover:text-white hover:border-ali`;

export default function Footer() {
  return (
    <footer className="mx-auto w-full border-t border-black/10 bg-white px-4 pt-16">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 pb-10 md:flex">
        <div className="flex items-center justify-center rounded-xl bg-black/5 p-4">
          <img 
            src="https://ik.imagekit.io/yrpp2zi5o/Screenshot_2026-05-10_at_11.28.10_PM-removebg-preview.png" 
            alt="RDS Group Logo" 
            className="h-24 w-auto object-contain" // Increased size to 96px (h-24)
          />
        </div>
        <p className="max-w-2xl text-center text-sm leading-6 text-black/60 md:text-left">
          RDS Group is India's trusted HR partner, dedicated to transforming businesses through expert talent acquisition, compliance consulting, and strategic HR advisory. We believe in the power of people to drive meaningful connections and business success.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted border-black/10"></div>
        <div className="py-10">
          <div className="grid grid-cols-2 gap-8 md:flex md:justify-between">
            {navigation.categories[0].sections.map((section) => (
              <div key={section.name}>
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">{section.name}</h4>
                <ul role="list" className="flex flex-col space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-black/50 transition-colors hover:text-ali"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">Contact Us</h4>
              <ul className="flex flex-col space-y-3 text-sm text-black/50">
                <li>Email: info@rdsgroupp.in</li>
                <li>Phone: +91 63899 00496</li>
                <li>Location: Uttar Pradesh, India</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-b border-dotted border-black/10"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 py-8 md:flex-row md:justify-between md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a aria-label="Email" href="mailto:info@rdsgroupp.in" className={Underline}>
            <DIcons.Mail strokeWidth={1.5} className="h-5 w-5 text-black" />
          </a>
          <a aria-label="WhatsApp" href="https://wa.me/917897299378" className={Underline}>
            <DIcons.WhatsApp className="h-5 w-5 text-black" />
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-black/40">
          <p>© {new Date().getFullYear()} RDS Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
