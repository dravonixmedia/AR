"use client";

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
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
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

export default function ServicesGrid() {
  return (
    <section id="services" className="relative bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          kicker="What We Do"
          title="Our Services"
          description="From hydraulic repair to industrial roofing, every service is executed with engineering-grade rigor and a finish that speaks for itself."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={service.id} delay={(i % 3) * 0.08}>
                <GlassCard className="h-full">
                  <div className="flex h-full flex-col justify-between gap-8">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-xl text-primary">
                        <Icon />
                      </span>
                      <span className="font-mono text-xs text-text-secondary">
                        {service.index}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-xl font-medium tracking-tight text-text">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Learn more
                      <HiOutlineArrowUpRight />
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
