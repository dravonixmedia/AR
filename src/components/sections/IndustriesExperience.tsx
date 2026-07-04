"use client";

import {
  TbBuildingFactory2,
  TbBuildingBridge2,
  TbTractor,
  TbAnchor,
  TbFlask,
  TbMeat,
  TbRuler2,
  TbBox,
  TbPlant2,
  TbWorld,
} from "react-icons/tb";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/content";
import { cn } from "@/lib/utils";

const icons = [
  TbBuildingFactory2,
  TbBuildingBridge2,
  TbTractor,
  TbAnchor,
  TbFlask,
  TbMeat,
  TbRuler2,
  TbBox,
  TbPlant2,
  TbWorld,
];

const descriptions = [
  "Production lines and plant machinery kept running with responsive hydraulic support.",
  "Heavy-duty hydraulics for cranes, lifts, and structural project machinery.",
  "Excavators, loaders, and earthmovers restored to full working force.",
  "Winches, steering gear, and deck machinery serviced for harsh marine conditions.",
  "Precision seals engineered for chemical resistance and process reliability.",
  "Hygienic, reliable hydraulic and pneumatic systems for processing lines.",
  "Custom machining and fabrication support for engineering workshops.",
  "Material handling equipment maintained for continuous logistics uptime.",
  "Tractors, harvesters, and irrigation machinery repaired and maintained.",
  "General-purpose hydraulic and fabrication support across every sector.",
];

export default function IndustriesExperience() {
  return (
    <section id="industries" className="relative overflow-hidden bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          kicker="Industries We Serve"
          title="Built for demanding industrial environments."
          description="Wherever hydraulic power, sealing integrity, or structural fabrication matters, AR Hydraulics is engineered to keep operations moving."
          align="center"
          className="mb-16 items-center text-center"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={industry} delay={(i % 5) * 0.07} className={cn(i === 0 && "sm:col-span-2 lg:col-span-2")}>
                <div className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef1f5] to-[#e2e7ee] p-6 shadow-sm transition-transform duration-500 hover:-translate-y-1">
                  <div className="blueprint-grid absolute inset-0 opacity-20" />
                  <Icon className="absolute -right-4 -top-4 text-8xl text-primary/10 transition-transform duration-500 group-hover:scale-110" />
                  <div className="relative z-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-xl text-primary shadow-sm backdrop-blur">
                      <Icon />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-text">
                      {industry}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {descriptions[i]}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
