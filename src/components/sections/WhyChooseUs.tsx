"use client";

import { TbCheck } from "react-icons/tb";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { industries, whyChooseUs } from "@/data/content";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              kicker="Why Choose Us"
              title="Why Choose AR Hydraulics & Sealing Solutions?"
              className="mb-10"
            />
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {whyChooseUs.map((item, i) => (
                <Reveal key={item} delay={(i % 4) * 0.06}>
                  <li className="glass flex items-start gap-3 rounded-2xl border border-border px-4 py-3.5">
                    <TbCheck className="mt-0.5 shrink-0 text-lg text-primary" />
                    <span className="text-sm leading-relaxed text-text-secondary">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              kicker="Industries We Serve"
              title="Built for demanding industrial environments."
              className="mb-10"
            />
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, i) => (
                <Reveal key={industry} delay={(i % 5) * 0.05}>
                  <span className="inline-block rounded-full border border-border bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-wide text-text-secondary">
                    {industry}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
