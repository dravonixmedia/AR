"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import MagneticButton from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/ui/Reveal";
import { company } from "@/data/content";

export default function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const phoneDigits = company.phone.replace(/\s/g, "");
  const whatsappNumber = phoneDigits.replace(/^\+/, "");

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-bg"
    >
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#eef1f5_0%,#e2e7ee_60%,#d7dee8_100%)]"
      >
        <div className="blueprint-grid absolute inset-0 opacity-30" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(247,248,250,0.85)_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center sm:px-8">
        <span className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Ready When You Are
        </span>
        <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-7xl">
          <RevealText text="Precision engineering, one call away." />
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          From emergency hydraulic breakdowns to full fabrication projects — reach our
          engineering team directly.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={`https://wa.me/${whatsappNumber}`}>
            <FaWhatsapp className="text-lg" />
            WhatsApp Us
          </MagneticButton>
          <MagneticButton href={`tel:${phoneDigits}`} variant="ghost">
            <HiOutlinePhone />
            Call Now
          </MagneticButton>
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-text-secondary">
          <HiOutlineMapPin className="text-primary" />
          {company.address}
        </div>
      </div>
    </section>
  );
}
