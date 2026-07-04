"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  TbUsers,
  TbTool,
  TbDroplet,
  TbSettings,
  TbBuildingWarehouse,
  TbBox,
  TbBolt,
  TbCoin,
  TbClock,
  TbHeartHandshake,
} from "react-icons/tb";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/content";

const icons = [
  TbUsers,
  TbTool,
  TbDroplet,
  TbSettings,
  TbBuildingWarehouse,
  TbBox,
  TbBolt,
  TbCoin,
  TbClock,
  TbHeartHandshake,
];

function TimelineItem({
  index,
  total,
  item,
  progress,
}: {
  index: number;
  total: number;
  item: string;
  progress: MotionValue<number>;
}) {
  const Icon = icons[index];
  const start = index / total;
  const end = start + 1 / total;

  const opacity = useTransform(progress, [start - 0.05, start + 0.03, end - 0.08, end], [0.2, 1, 1, 0.2]);
  const x = useTransform(progress, [start - 0.05, start + 0.05], [-24, 0]);
  const dotScale = useTransform(progress, [start - 0.02, start + 0.05], [0.6, 1]);

  return (
    <div className="relative flex gap-6 py-8 sm:gap-10">
      <div className="relative flex w-10 shrink-0 flex-col items-center sm:w-14">
        <motion.span
          style={{ scale: dotScale }}
          className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg text-white shadow-lg shadow-primary/25 sm:h-14 sm:w-14 sm:text-xl"
        >
          <Icon />
        </motion.span>
        {index < total - 1 && <span className="mt-2 w-px flex-1 bg-border" />}
      </div>

      <motion.div style={{ opacity, x }} className="pb-2">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="mt-2 max-w-xl text-lg font-medium leading-snug text-text sm:text-xl">
          {item}
        </p>
      </motion.div>
    </div>
  );
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section id="why-us" className="relative bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading
          kicker="Why Choose Us"
          title="Why Choose AR Hydraulics & Sealing Solutions?"
          align="center"
          className="mb-16 items-center text-center"
        />

        <div ref={containerRef} className="relative mx-auto max-w-2xl">
          {whyChooseUs.map((item, i) => (
            <TimelineItem
              key={item}
              index={i}
              total={whyChooseUs.length}
              item={item}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
