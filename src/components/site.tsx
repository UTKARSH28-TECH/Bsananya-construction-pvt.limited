"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Filter,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Star,
  Sun,
  X
} from "lucide-react";
import {
  blogs,
  faqs,
  heroStats,
  navItems,
  pillars,
  process,
  projects,
  reasons,
  services,
  stats,
  testimonials
} from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

function SectionIntro({
  eyebrow,
  title,
  text,
  light = false
}: {
  eyebrow: string;
  title: string;
  text: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-amber-500">{eyebrow}</p>
      <h2
        className={`font-[var(--font-display)] text-4xl font-bold leading-tight md:text-5xl ${
          light ? "text-white" : "text-slate-950 dark:text-white"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 md:text-lg ${light ? "text-slate-200" : "text-slate-600 dark:text-slate-300"}`}>
        {text}
      </p>
    </motion.div>
  );
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useMemo(() => ({ current: null as HTMLSpanElement | null }), []);
  const visible = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (visible) motionValue.set(value);
  }, [motionValue, value, visible]);

  useEffect(() => {
    return spring.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [spring]);

  return (
    <div className="rounded-lg border border-white/15 bg-white/10 p-5 text-center backdrop-blur">
      <span ref={ref} className="text-4xl font-black text-white">
        {display}
        {suffix}
      </span>
      <p className="mt-2 text-sm font-semibold text-slate-200">{label}</p>
    </div>
  );
}

function BeforeAfterCard({ image, title }: { image: string; title: string }) {
  const [split, setSplit] = useState(58);

  return (
    <div className="relative h-full overflow-hidden rounded-lg">
      <Image src={image} alt={title} fill className="object-cover grayscale" sizes="(max-width: 768px) 100vw, 33vw" />
      <div className="before-after absolute inset-0" style={{ "--split": `${split}%` } as React.CSSProperties}>
        <Image src={image} alt={`${title} completed view`} fill className="object-cover contrast-110 saturate-125" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="absolute inset-y-0 w-0.5 bg-white" style={{ left: `${split}%` }} />
      <input
        aria-label={`${title} before after slider`}
        type="range"
        min="20"
        max="82"
        value={split}
        onChange={(event) => setSplit(Number(event.target.value))}
        className="absolute inset-x-6 bottom-6 accent-amber-500"
      />
      <span className="absolute left-4 top-4 rounded bg-slate-950/70 px-3 py-1 text-xs font-bold text-white">Before</span>
      <span className="absolute right-4 top-4 rounded bg-amber-500 px-3 py-1 text-xs font-bold text-slate-950">After</span>
    </div>
  );
}

export default function ConstructionSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);
  const categories = ["All", "Residential", "Commercial", "Renovation", "Interior Design"];
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString() || "Website visitor";
    const service = data.get("service")?.toString() || "construction consultation";
    const message = encodeURIComponent(`Hello Bsananya Construction, I am ${name}. I would like a free consultation for ${service}.`);
    window.open(`https://wa.me/919234387128?text=${message}`, "_blank", "noopener,noreferrer");
    form.reset();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--mist)] text-[var(--ink)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="container flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="Bsananya Construction home">
            <Image src="/logo.jpg" alt="Bsananya Construction logo" width={48} height={48} className="h-12 w-12 rounded object-cover ring-2 ring-amber-500/40" />
            <div>
              <p className="text-base font-black text-white">Bsananya Construction</p>
              <p className="text-xs font-semibold text-amber-400">Building Dreams. Creating Trust.</p>
            </div>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-sm font-bold text-slate-200 hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="focus-ring grid h-11 w-11 place-items-center rounded border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Toggle dark and light mode"
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <a href="#contact" className="focus-ring hidden rounded bg-amber-500 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-400 md:inline-flex">
              Get Consultation
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="focus-ring grid h-11 w-11 place-items-center rounded border border-white/15 bg-white/10 text-white lg:hidden"
              aria-label="Open navigation menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-5 lg:hidden">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded border border-white/10 px-4 py-3 text-sm font-bold text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950 pt-20">
        <Image src="/cover-photo.jpg" alt="Bsananya Construction project site" fill priority className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.96),rgba(15,23,42,0.7),rgba(15,23,42,0.38))]" />
        <div className="container relative z-10 flex min-h-[calc(100vh-80px)] items-center py-16">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }}>
              <p className="mb-5 inline-flex rounded bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-amber-300 backdrop-blur">
                Ranchi, Jharkhand, India
              </p>
              <h1 className="max-w-3xl font-[var(--font-display)] text-5xl font-black leading-[1.02] text-white md:text-7xl">
                Building Excellence From Concept To Completion
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                Trusted residential, commercial, renovation, and structural construction solutions with quality, transparency, and on-time delivery.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded bg-amber-500 px-6 py-4 font-black text-slate-950 transition hover:bg-amber-400">
                  Get Free Consultation <ArrowRight size={19} />
                </a>
                <a href="#projects" className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-white/25 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/20">
                  View Our Projects
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="glass rounded-lg p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {heroStats.map((item) => (
                  <div key={item} className="rounded border border-white/15 bg-white/10 p-5">
                    <Check className="mb-4 text-amber-400" />
                    <p className="text-xl font-black text-white">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="section bg-white dark:bg-slate-950">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="relative min-h-[520px] overflow-hidden rounded-lg">
              <Image src="/project-residential.jpg" alt="Completed construction work" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-slate-950/80 p-6 text-white backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-400">Bsananya Promise</p>
                <p className="mt-3 text-2xl font-black">Quality-first execution for every square foot.</p>
              </div>
            </motion.div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-amber-500">Who We Are</p>
              <h2 className="font-[var(--font-display)] text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-5xl">
                Trusted Construction Partner In Ranchi
              </h2>
              <p className="mt-5 text-lg leading-9 text-slate-600 dark:text-slate-300">
                Bsananya Construction Pvt. Ltd. is a trusted construction company based in Ranchi, Jharkhand, specializing in residential construction, commercial projects, renovation, remodeling, architectural planning, and civil engineering solutions. We transform ideas into durable, beautiful, and functional spaces.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {pillars.map(({ title, text, icon: Icon }) => (
                  <motion.div key={title} whileHover={{ y: -6 }} className="rounded-lg border border-[var(--line)] bg-slate-50 p-5 dark:bg-white/5">
                    <Icon className="mb-4 text-amber-500" />
                    <h3 className="text-lg font-black">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <SectionIntro eyebrow="Services" title="End-To-End Construction Solutions" text="Premium planning, engineering, execution, finishing, and renovation services shaped around your project goals." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="show"
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.04 }}
                className="group rounded-lg border border-[var(--line)] bg-white p-7 shadow-sm transition hover:shadow-2xl dark:bg-white/5"
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded bg-amber-500/12 text-amber-500 transition group-hover:bg-amber-500 group-hover:text-slate-950">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-950">
        <div className="container">
          <SectionIntro light eyebrow="Why Choose Us" title="Built On Trust, Managed With Precision" text="The right construction partner should bring clarity before work begins and confidence at every stage after." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ title, icon: Icon }) => (
              <motion.div key={title} whileHover={{ y: -6 }} className="glass rounded-lg p-6">
                <Icon className="mb-5 text-amber-400" size={30} />
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Clear coordination, careful supervision, and premium workmanship from start to finish.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionIntro eyebrow="Featured Projects" title="Portfolio Gallery" text="Explore residential, commercial, renovation, and interior work with a polished masonry layout and interactive before-after views." />
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <Filter size={18} className="text-amber-500" />
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`focus-ring rounded px-5 py-3 text-sm font-black transition ${
                  activeCategory === category ? "bg-amber-500 text-slate-950" : "border border-[var(--line)] bg-white text-slate-700 hover:border-amber-500 dark:bg-white/5 dark:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="project-masonry">
            {filteredProjects.map((project) => (
              <motion.article key={project.title} layout className={`group relative overflow-hidden rounded-lg bg-slate-900 ${project.height}`}>
                {project.beforeAfter ? (
                  <BeforeAfterCard image={project.image} title={project.title} />
                ) : (
                  <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <SectionIntro eyebrow="Construction Process" title="A Clear Path From First Call To Handover" text="Every project moves through a structured workflow designed for quality control, budget visibility, and predictable delivery." />
          <div className="relative grid gap-5 lg:grid-cols-6">
            <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-amber-500/35 lg:block" />
            {process.map((step, index) => (
              <motion.div key={step} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.06 }} className="relative rounded-lg border border-[var(--line)] bg-white p-5 text-center dark:bg-white/5">
                <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-slate-950 text-lg font-black text-amber-400 ring-8 ring-slate-50 dark:ring-slate-900">
                  {index + 1}
                </div>
                <h3 className="font-black">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionIntro eyebrow="Google Reviews" title="Clients Remember The Experience" text="Premium construction is about the finished space and the confidence created throughout the journey." />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.article key={item.quote} whileHover={{ y: -6 }} className="rounded-lg border border-[var(--line)] bg-slate-50 p-7 dark:bg-white/5">
                <div className="mb-5 flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={19} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">&quot;{item.quote}&quot;</p>
                <div className="mt-6 border-t border-[var(--line)] pt-5">
                  <p className="font-black">{item.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="container grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <Counter key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="section relative overflow-hidden bg-slate-950">
        <Image src="/project-commercial.jpg" alt="Construction call to action background" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="container relative z-10 text-center">
          <h2 className="font-[var(--font-display)] text-4xl font-black text-white md:text-6xl">Ready To Build Your Dream Project?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">Speak with Bsananya Construction Pvt. Ltd. for a clear, practical path from idea to execution.</p>
          <a href="#contact" className="focus-ring mt-8 inline-flex items-center gap-2 rounded bg-amber-500 px-7 py-4 font-black text-slate-950 transition hover:bg-amber-400">
            Get Free Consultation <ArrowRight size={19} />
          </a>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-amber-500">FAQ</p>
            <h2 className="font-[var(--font-display)] text-4xl font-bold text-slate-950 dark:text-white">Questions Before You Begin</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-lg border border-[var(--line)] bg-white dark:bg-white/5">
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="focus-ring flex w-full items-center justify-between gap-4 p-5 text-left font-black">
                  {faq.question}
                  <ChevronDown className={`shrink-0 transition ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && <p className="px-5 pb-5 leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionIntro eyebrow="Blog Preview" title="Construction Insights" text="Helpful notes for homeowners, business owners, and project planners preparing to build or renovate." />
          <div className="grid gap-5 md:grid-cols-3">
            {blogs.map((blog) => (
              <article key={blog.title} className="rounded-lg border border-[var(--line)] bg-slate-50 p-7 dark:bg-white/5">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-amber-500">Guide</p>
                <h3 className="text-xl font-black">{blog.title}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{blog.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-slate-950">
        <div className="container">
          <SectionIntro light eyebrow="Contact" title="Start With A Free Consultation" text="Share your project details and the team will help you plan the next practical step." />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-5">
              {[
                { icon: Phone, label: "Phone", text: "+91 9234387128 | +91 6204805884 | +91 9234535002" },
                { icon: Mail, label: "Email", text: "gaurav1avinash@yahoo.com" },
                { icon: MapPin, label: "Address", text: "403, Shree Matushree Apartment, Harihar Singh Road, Ranchi, Jharkhand, India" }
              ].map(({ icon: Icon, label, text }) => (
                <div key={label} className="glass rounded-lg p-6">
                  <Icon className="mb-4 text-amber-400" />
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">{label}</p>
                  <p className="mt-2 text-lg font-black text-white">{text}</p>
                </div>
              ))}
              <iframe
                title="Bsananya Construction location map"
                src="https://www.google.com/maps?q=Harihar%20Singh%20Road%20Ranchi%20Jharkhand%20India&output=embed"
                className="h-72 w-full rounded-lg border-0"
                loading="lazy"
              />
            </div>
            <form onSubmit={handleLeadSubmit} className="rounded-lg bg-white p-6 shadow-2xl dark:bg-slate-900 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  Name
                  <input name="name" required className="focus-ring rounded border border-slate-200 bg-white px-4 py-3 text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  Phone
                  <input name="phone" required className="focus-ring rounded border border-slate-200 bg-white px-4 py-3 text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white" placeholder="+91" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2">
                  Service
                  <select name="service" className="focus-ring rounded border border-slate-200 bg-white px-4 py-3 text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white">
                    {services.map((service) => (
                      <option key={service.title}>{service.title}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2">
                  Project Details
                  <textarea name="message" rows={5} className="focus-ring rounded border border-slate-200 bg-white px-4 py-3 text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white" placeholder="Tell us about your project" />
                </label>
              </div>
              <button type="submit" className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-amber-500 px-6 py-4 font-black text-slate-950 transition hover:bg-amber-400">
                Send Enquiry <Send size={19} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-12 text-white">
        <div className="container grid gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
          <div>
            <p className="text-xl font-black">Bsananya Construction Pvt. Ltd.</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">Building Dreams. Creating Trust.</p>
          </div>
          <div>
            <p className="font-black text-amber-400">Services</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              {services.slice(0, 4).map((service) => <span key={service.title}>{service.title}</span>)}
            </div>
          </div>
          <div>
            <p className="font-black text-amber-400">Quick Links</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
            </div>
          </div>
          <div>
            <p className="font-black text-amber-400">Contact Information</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">+91 9234387128<br />gaurav1avinash@yahoo.com<br />Ranchi, Jharkhand</p>
            <div className="mt-5 flex gap-3">
              {["in", "f", "x"].map((item) => (
                <span key={item} className="grid h-10 w-10 place-items-center rounded bg-white/10 text-sm font-black">{item}</span>
              ))}
            </div>
          </div>
        </div>
        <p className="container mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">© 2025 Bsananya Construction Pvt. Ltd. All Rights Reserved.</p>
      </footer>

      <a
        href="https://wa.me/919234387128"
        target="_blank"
        rel="noreferrer"
        className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <Phone size={25} />
      </a>
    </main>
  );
}
