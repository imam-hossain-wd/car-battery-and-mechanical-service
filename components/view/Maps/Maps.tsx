"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  RiMapPinFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiUserFill,
  RiMailFill,
  RiPhoneFill,
  RiMessageFill,
  RiArrowRightLine,
  RiCheckboxCircleFill,
  RiSendPlaneFill,
  RiLoader4Line,
  RiNavigationFill,
  RiRadarFill,
  RiNodeTree,
  RiRoadMapFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

const SERVICE_OPTIONS = [
  "Battery Replacement",
  "Jump Start",
  "Computer Diagnostic",
  "Alternator Repair",
  "Fuel Pump Repair",
  "Starter Motor Repair",
  "AC Repair",
  "Brake Pad Repair",
  "Other Emergency",
];

export default function Maps() {
  const { GMB, serviceAreas, brandName, city, responseTime, location } =
    SiteConfig;

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const etaRange = useMemo(
    () => responseTime.replace(" to ", "–"),
    [responseTime]
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1100));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    }, 3800);
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-background py-10">
      {/* ============================================================
          BACKGROUND — restrained atmosphere
      ============================================================ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 85%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ============================================================
            HEADER — editorial with integrated stats
        ============================================================ */}
        <div className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-12 lg:items-end lg:gap-10">
          {/* Left: label + headline */}
          <div className="lg:col-span-7">
    

            <h2 className="text-[2.4rem] font-bold leading-[0.98] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.75rem]">
              We come to{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-primary">you</span>
                <svg
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-primary/30"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C60 3 140 2 297 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ,
              <br />
              anywhere in Dubai.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our mobile mechanics reach your coordinates in{" "}
              <span className="font-semibold text-foreground">
                {responseTime}
              </span>{" "}
              — day or night, across{" "}
              <span className="font-semibold text-foreground">
                {serviceAreas.length}+ districts
              </span>
              .
            </p>
          </div>

          {/* Right: compact stat strip */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-3 border-t-2 border-primary/15 pt-5 sm:border-t sm:border-border/60">
              <Stat numeral={`${serviceAreas.length}+`} label="Districts" />
              <Stat numeral={etaRange} label="Avg ETA" accent />
              <Stat numeral="24/7" label="Uptime" />
            </div>
          </div>
        </div>

        {/* ============================================================
            MAIN CONSOLE — Map (7 cols) + Form (5 cols)
        ============================================================ */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* =====================================================
              MAP PANEL — Live dispatch display
          ===================================================== */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-xl shadow-primary/[0.05]">

              <div className="relative aspect-4/3 w-full overflow-hidden bg-muted lg:aspect-16/11">
                {!isMapLoaded && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted">
                    <div className="flex flex-col items-center gap-2.5">
                      <RiRoadMapFill className="size-8 animate-pulse text-primary/60" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Loading map
                      </span>
                    </div>
                  </div>
                )}
                <iframe
                  title={`${brandName} Location Map`}
                  src={GMB.embedMap}
                  width="100%"
                  height="100%"
                  className={cn(
                    "size-full transition-opacity duration-700",
                    isMapLoaded ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    border: 0,
                    filter: "saturate(0.9) contrast(1.02)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoaded(true)}
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              FORM PANEL — Integrated dispatch terminal
          ===================================================== */}
          <div className="lg:col-span-5">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-xl shadow-primary/[0.05]">
              {/* ---- HEADER ---- */}
              <div className="relative border-b border-border/60 px-5 pb-5 pt-5 sm:px-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <RiNavigationFill className="size-4" />
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    New Request
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                  Request a mechanic
                </h3>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-1 flex-col p-5 sm:p-6"
              >
                {isSubmitted ? (
                  <SuccessState />
                ) : (
                  <div className="flex flex-1 flex-col gap-3.5">
                    <Field
                      icon={RiUserFill}
                      label="Full name"
                      htmlFor="name"
                      required
                    >
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ahmed Al Maktoum"
                        className="h-9 w-full border-0 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                      />
                    </Field>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <Field
                        icon={RiPhoneFill}
                        label="Phone"
                        htmlFor="phone"
                        required
                      >
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+971 50 000 0000"
                          className="h-9 w-full border-0 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                        />
                      </Field>
                      <Field icon={RiMailFill} label="Email" htmlFor="email">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@mail.com"
                          className="h-9 w-full border-0 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                        />
                      </Field>
                    </div>

                    <Field
                      icon={RiNodeTree}
                      label="Service needed"
                      htmlFor="service"
                      required
                    >
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="h-9 w-full cursor-pointer border-0 bg-transparent text-sm font-medium text-foreground outline-none"
                      >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      icon={RiMessageFill}
                      label="Notes (optional)"
                      htmlFor="message"
                    >
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={2}
                        placeholder="Issue, location, plate…"
                        className="w-full resize-none border-0 bg-transparent pt-1.5 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                      />
                    </Field>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "group relative mt-1 inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary text-[11px] font-bold uppercase tracking-[0.15em] text-primary-foreground",
                        "shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40",
                        "disabled:cursor-not-allowed disabled:opacity-60"
                      )}
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      {isSubmitting ? (
                        <>
                          <RiLoader4Line className="relative size-4 animate-spin" />
                          <span className="relative">Sending…</span>
                        </>
                      ) : (
                        <>
                          <RiSendPlaneFill className="relative size-3.5" />
                          <span className="relative">Send Request</span>
                          <RiArrowRightLine className="relative size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM TRUST STRIP — compact & refined
        ============================================================ */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-muted/30 px-5 py-3 backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { icon: RiFlashlightFill, text: "Priority dispatch" },
              { icon: RiShieldCheckFill, text: "Certified mechanics" },
              { icon: RiCustomerServiceFill, text: "24/7 support" },
              { icon: RiTimeFill, text: `${responseTime} response` },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                >
                  <Icon className="size-3 text-primary" />
                  {item.text}
                </span>
              );
            })}
          </div>

          <Link
            href={SiteConfig.numberCallLink}
            className="group inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
          >
            Prefer a call? {SiteConfig.displayNumber}
            <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
    SUB-COMPONENTS
============================================================ */

function Stat({
  numeral,
  label,
  accent,
}: {
  numeral: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span
        className={cn(
          "text-2xl font-black leading-none tracking-tight sm:text-3xl",
          accent ? "text-primary" : "text-foreground"
        )}
      >
        {numeral}
      </span>
      <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  htmlFor,
  required,
  children,
}: {
  icon: React.ElementType;
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-xl border border-border/70 bg-muted/30 px-3 pb-1.5 pt-2 transition-all duration-200 focus-within:border-primary/50 focus-within:bg-background focus-within:shadow-[0_0_0_4px_hsl(var(--primary)/0.08)]">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors group-focus-within:text-primary"
      >
        <Icon className="size-2.5" />
        {label}
        {required && <span className="text-primary">*</span>}
      </label>
      <div>{children}</div>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
      <div className="relative flex size-16 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
        <span className="absolute inset-2 rounded-full bg-primary/10" />
        <RiCheckboxCircleFill className="relative size-8 text-primary" />
      </div>
      <h4 className="mt-5 text-lg font-bold tracking-tight text-foreground">
        Request received
      </h4>
      <p className="mt-2 max-w-[17rem] text-xs leading-relaxed text-muted-foreground sm:text-sm">
        Our dispatch team will call you back within 60 seconds to confirm your
        booking.
      </p>
      <div className="mt-5 flex items-center gap-1.5">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="size-1.5 animate-pulse rounded-full bg-primary"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}