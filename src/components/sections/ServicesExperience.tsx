"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import {
  TbTool,
  TbDroplet,
  TbWind,
  TbSettings,
  TbCircleDot,
  TbBuildingWarehouse,
  TbTruckDelivery,
  TbPlugConnected,
  TbCalendarTime,
  TbPhoneCall,
} from "react-icons/tb";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { services } from "@/data/content";
import { cn } from "@/lib/utils";

const icons = [
  TbTool,
  TbDroplet,
  TbWind,
  TbSettings,
  TbCircleDot,
  TbBuildingWarehouse,
  TbTruckDelivery,
  TbPlugConnected,
  TbCalendarTime,
  TbPhoneCall,
];

const tints = [
  "from-[#e7ecf3] to-[#dbe4f0]",
  "from-[#eaf1f5] to-[#dce8ee]",
  "from-[#eef1f5] to-[#e0e6ed]",
  "from-[#e9edf4] to-[#dbe1ec]",
  "from-[#ecf0f4] to-[#dee5ed]",
  "from-[#e8edf3] to-[#dae2ed]",
  "from-[#eef0f4] to-[#e1e5ec]",
  "from-[#e9eef4] to-[#dbe3ed]",
  "from-[#ebeff4] to-[#dde4ec]",
  "from-[#e7ecf2] to-[#d9e1ec]",
];

const N = services.length;

function ServicePanel({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const service = services[index];
  const Icon = icons[index];
  const start = index / N;
  const end = (index + 1) / N;

  const imageScale = useTransform(scrollYProgress, [start, end], [1.02, 1.14]);
  const imagePan = useTransform(scrollYProgress, [start, end], ["0%", "-4%"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 flex items-center"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          style={{ scale: imageScale, x: imagePan }}
          className={cn(
            "relative order-1 h-[280px] overflow-hidden rounded-[2rem] bg-gradient-to-br shadow-2xl shadow-black/5 sm:h-[380px] lg:order-none lg:h-[520px]",
            tints[index % tints.length]
          )}
        >
          <div className="blueprint-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="text-[9rem] text-primary/15 sm:text-[12rem]" />
          </div>
          <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 font-mono text-xs text-text shadow-sm backdrop-blur">
            {service.index}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-none"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Service {service.index} / {String(N).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
            {service.title}
          </h3>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
            {service.description}
          </p>
          <div className="mt-8">
            <MagneticButton href="#contact">
              Request This Service
              <HiOutlineArrowUpRight />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    return scrollYProgress.on("change", (p) => {
      const idx = Math.min(N - 1, Math.max(0, Math.floor(p * N)));
      setActiveIndex((prev) => (prev !== idx ? idx : prev));
    });
  }, [scrollYProgress]);

  return (
    <section id="services" className="relative bg-bg">
      <div className="mx-auto max-w-7xl px-6 pt-28 sm:px-8 sm:pt-36">
        <SectionHeading
          kicker="What We Do"
          title="Our Services"
          description="From hydraulic repair to industrial roofing — ten disciplines, each engineered with the same standard of precision."
          align="center"
          className="mb-16 items-center text-center"
        />
      </div>

      <div ref={containerRef} style={{ height: `${N * 100}vh` }} className="relative">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <AnimatePresence initial={false} mode="sync">
            <ServicePanel key={activeIndex} index={activeIndex} scrollYProgress={scrollYProgress} />
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-10 z-20 mx-auto flex w-full max-w-7xl justify-center px-6 sm:px-8">
            <div className="h-1 w-full max-w-xs overflow-hidden rounded-full bg-border">
              <motion.div style={{ width: progressWidth }} className="h-full rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
