/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QRCodeCanvas } from "qrcode.react";
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Instagram, 
  Mail, 
  MapPin,
  ShieldCheck,
  Clock,
  HelpCircle,
  Utensils,
  ChevronRight,
  ChevronLeft,
  Activity,
  HeartPulse,
  Zap,
  Dumbbell
} from "lucide-react";

const Logo = ({ className = "h-10" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="bg-brand-accent text-white p-1.5 rounded-full flex items-center justify-center">
      <Dumbbell size={20} />
    </div>
    <span className="text-2xl font-black tracking-tighter text-brand-black">FITHLETES</span>
  </div>
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-12 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const HelloBar = () => (
  <div className="bg-brand-accent text-white py-2 px-4 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] relative z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
      <span>Limited Time: Get a 3-Day Personal Training Trial for Free.</span>
      <a href="https://wa.me/919987883536?text=Hi%20Sohrab,%20I'd%20like%20to%20book%20the%20Free%203-Day%20Trial!" className="underline decoration-2 underline-offset-4 hover:text-black transition-colors">Chat to Book</a>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const testimonials = [
    { 
      quote: "Lost 8kg in 3 months without feeling weak. The strength gains are incredible.", 
      author: "Rahul M.", 
      result: "8kg Fat Loss",
      metrics: "Waist: 36\" → 32\"",
      image: "https://picsum.photos/seed/t1/600/600"
    },
    { 
      quote: "My sugar levels are finally under control. Sohrab's medical knowledge is top-notch.", 
      author: "Sanjay K.", 
      result: "Diabetes Managed",
      metrics: "HbA1c: 8.5 → 6.2",
      image: "https://picsum.photos/seed/t2/600/600"
    },
    { 
      quote: "Energy levels improved drastically. I no longer feel tired by mid-day.", 
      author: "Priya S.", 
      result: "High Energy",
      metrics: "Stamina: 10m → 45m Run",
      image: "https://picsum.photos/seed/t3/600/600"
    },
    { 
      quote: "Best decision I made for my PCOS. The plan was so easy to follow.", 
      author: "Anjali R.", 
      result: "PCOS Support",
      metrics: "Weight: 78kg → 69kg",
      image: "https://picsum.photos/seed/t4/600/600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative group">
      <div className="overflow-hidden bg-white border border-black/5 p-8 md:p-12 shadow-2xl min-h-[450px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden shrink-0 border-4 border-brand-grey shadow-inner">
              <img 
                src={testimonials[currentIndex].image} 
                alt="Transformation" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-grow">
              <div className="flex gap-1 mb-6 text-brand-accent">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-2xl md:text-3xl font-medium mb-8 italic text-zinc-800 leading-[1.3]">
                "{testimonials[currentIndex].quote}"
              </p>
              
              {/* Success metrics */}
              <div className="bg-brand-grey px-4 py-2 inline-block border-l-2 border-brand-accent mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Success Metric</span>
                <span className="text-lg font-black text-brand-black">{testimonials[currentIndex].metrics}</span>
              </div>

              <div className="flex justify-between items-end border-t border-black/5 pt-6">
                <div>
                  <p className="font-black text-lg uppercase tracking-widest text-brand-black">{testimonials[currentIndex].author}</p>
                  <p className="text-[12px] font-bold text-brand-accent uppercase tracking-widest">{testimonials[currentIndex].result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <button 
          onClick={prev}
          className="p-4 bg-white border border-black/5 hover:bg-brand-accent hover:text-white transition-all active:scale-90 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="p-4 bg-white border border-black/5 hover:bg-brand-accent hover:text-white transition-all active:scale-90 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex gap-2 mt-8 justify-center">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 transition-all duration-500 ${i === currentIndex ? "w-12 bg-brand-accent" : "w-4 bg-zinc-200"}`}
          />
        ))}
      </div>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="text-lg font-bold text-brand-black group-hover:text-brand-accent transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-brand-accent"
        >
          <ChevronRight size={20} className={isOpen ? "rotate-90 transition-transform" : ""} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-zinc-600 leading-loose max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProcessStep: React.FC<{ number: string; title: string; desc: string; icon: React.ReactNode }> = ({ number, title, desc, icon }) => (
  <div className="relative p-8 bg-brand-grey border border-black/5 group hover:border-brand-accent transition-all">
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-accent text-white flex items-center justify-center font-black text-xl shadow-lg">
      {number}
    </div>
    <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-black mb-3 text-brand-black">{title}</h3>
    <p className="text-sm text-zinc-600 leading-loose">{desc}</p>
  </div>
);

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919987883536"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 hover:opacity-100 opacity-90 transition-all flex items-center justify-center"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 0.9 }}
    whileHover={{ rotate: 10, opacity: 1 }}
  >
    <svg 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </motion.a>
);

export default function App() {
  const whatsappUrl = "https://wa.me/919987883536";
  const bookingUrl = "https://app.wellnessz.in/public/book-appointment/69e1c9f0ba0f331f8729747d";

  return (
    <div className="min-h-screen bg-brand-bg relative selection:bg-brand-accent selection:text-white">
      <WhatsAppButton />

      {/* Navigation */}
      <nav className="w-full bg-white/90 backdrop-blur-md border-b border-black/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest text-zinc-500">
            <a href="#programs" className="hover:text-brand-accent transition-colors">Programs</a>
            <a href="#about" className="hover:text-brand-accent transition-colors">Coach</a>
            <a href="#testimonials" className="hover:text-brand-accent transition-colors">Results</a>
          </div>
          <a href="tel:9987883536" className="font-bold text-sm border-b-2 border-brand-accent pb-1 text-brand-black">
            9987883536
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-12 pb-8 bg-brand-bg overflow-hidden">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-brand-black">
              Tired of Managing <span className="text-brand-accent">Symptoms</span> Instead of Fixing Them?
            </h1>
            
            {/* Trust Badges / Specializations */}
            <div className="flex flex-wrap gap-4 mb-12">
              {[
                { icon: <HeartPulse size={14} />, label: "Diabetes/BP Management" },
                { icon: <Activity size={14} />, label: "PCOS/Thyroid Care" },
                { icon: <ShieldCheck size={14} />, label: "Medical Grade Fitness" }
              ].map((spec, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-brand-grey border border-black/5 rounded-full text-[11px] font-black uppercase tracking-widest text-zinc-600">
                  <span className="text-brand-accent">{spec.icon}</span>
                  {spec.label}
                </div>
              ))}
            </div>

            <p className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl leading-relaxed">
              Get a structured fitness & nutrition plan designed specifically for sustainable fat loss and chronic medical condition management.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-16 max-w-2xl">
              {[
                "Fat Loss & Muscle Strengthening",
                "Diabetes & High BP Management",
                "Thyroid & PCOS Support",
                "Kids & Senior Fitness"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-accent rounded-full p-1 shrink-0">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="text-base font-bold text-zinc-800">{item}</span>
                </div>
              ))}
            </div>

            {/* In-Hero Offer Bar */}
            <div className="mb-8 flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-accent bg-brand-accent/5 w-fit px-4 py-2 border-l-4 border-brand-accent">
              <span>Limited Time: Free 3-Day Trial</span>
              <span className="text-zinc-400">•</span>
              <a href="https://wa.me/919987883536?text=Hi%20Sohrab,%20I'd%20like%20to%20book%20the%20Free%203-Day%20Trial!" className="underline decoration-1 underline-offset-4 hover:text-black">Book Now</a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#pricing" className="bg-brand-accent text-white px-8 py-4 rounded-none font-black uppercase tracking-widest text-sm hover:bg-zinc-900 transition-all active:scale-95 flex items-center justify-center gap-3 group shadow-xl">
                Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+919987883536" className="border-2 border-brand-black text-brand-black px-8 py-4 rounded-none font-black uppercase tracking-widest text-sm hover:bg-brand-black hover:text-white transition-all active:scale-95 flex items-center justify-center gap-3">
                <Phone size={20} /> Speak with Coach
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Problem -> Solution */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* The Struggle Card */}
          <div className="bg-brand-grey p-8 lg:p-12 border border-black/5 flex flex-col">
            <div className="inline-block px-3 py-1 bg-zinc-200 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 w-fit">
              The Reality
            </div>
            <h2 className="text-3xl font-black mb-8 tracking-tight text-brand-black">The Struggle</h2>
            <div className="space-y-8 flex-grow">
              {[
                { q: "Tried diets but no results?", a: "Generic plans ignore your unique biology, leading to frustration and rebound weight." },
                { q: "Health issues increasing?", a: "Pills only hide the symptoms. Your underlying nutrition is the key to recovery." },
                { q: "No time to manage fitness?", a: "Complexity is the enemy of consistency. You need a system that fits your schedule." }
              ].map((item, i) => (
                <div key={i} className="relative pl-10 group">
                  <div className="absolute left-0 top-0.5 w-6 h-6 bg-zinc-200 group-hover:bg-red-100 transition-colors rounded-full flex items-center justify-center text-[10px] font-black text-zinc-500 group-hover:text-red-500">
                    <Zap size={10} />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-zinc-800">
                    {item.q}
                  </h4>
                  <p className="text-zinc-500 leading-loose text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-brand-accent p-8 lg:p-12 flex flex-col justify-center text-white relative shadow-2xl overflow-hidden">
            <div className="inline-block px-3 py-1 bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 w-fit">
              The Edge
            </div>
            <h2 className="text-3xl font-black mb-8 tracking-tight">The <span className="text-black">Fithletes</span> Way</h2>
            <ul className="space-y-6 mb-10">
              {[
                "Personalized 1-on-1 Coaching",
                "Simple, Realistic Nutrition Plans",
                "Daily Accountability & Support",
                "Root-Cause Health Optimization"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-8 h-8 rounded-full bg-white text-brand-accent flex items-center justify-center shrink-0 shadow-lg">
                    <CheckCircle2 size={18} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a 
              href={`https://wa.me/919987883536?text=${encodeURIComponent("Hi Sohrab, I'm tired of managing symptoms and want to start fixing them. Can you help me transform my health?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-black text-white px-10 py-5 font-black uppercase tracking-widest text-sm hover:translate-y-[-4px] transition-all active:scale-95 text-center shadow-xl block"
            >
              Start Your Transformation
            </a>
            {/* Background decoration */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-black/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </Section>

      {/* How it Works / The Process */}
      <Section className="bg-brand-grey border-y border-black/5">
        <div className="text-center mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-4">Efficiency Protocol</p>
          <h2 className="text-3xl font-black tracking-tight text-brand-black">The 3-Step <span className="text-brand-accent">Method</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <ProcessStep 
            number="01" 
            title="Medical Deep-Dive" 
            desc="We don't start with squats. We start with your blood reports and medical history to build a safe foundation." 
            icon={<HeartPulse size={40} />}
          />
          <ProcessStep 
            number="02" 
            title="The Synergy Plan" 
            desc="You get a hybrid plan where nutrition balances your hormones and training fixes your metabolic health." 
            icon={<Zap size={40} />}
          />
          <ProcessStep 
            number="03" 
            title="1-on-1 Calibration" 
            desc="Weekly updates and constant tracking. We pivot your plan as your body heals and strength improves." 
            icon={<ShieldCheck size={40} />}
          />
        </div>
      </Section>

      {/* Programs */}
      <Section id="programs" className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight mb-4 text-brand-black">Specialized Programs</h2>
          <p className="text-brand-accent uppercase tracking-[0.2em] font-bold text-xs underline underline-offset-8">No generic plans. Only results.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fat Loss & Strength",
              desc: "Build a lean, powerful physique without starving yourself.",
              benefits: ["Custom Macro Plan", "Strength Training", "Metabolic Reset"],
              icon: <Zap className="text-brand-accent mb-6" size={40} />
            },
            {
              title: "Medical Fitness",
              desc: "Reversing lifestyle diseases through evidence-based nutrition.",
              benefits: ["Diabetes Management", "PCOS/Thyroid Support", "BP Control"],
              icon: <HeartPulse className="text-brand-accent mb-6" size={40} />
            },
            {
              title: "Lifestyle Coaching",
              desc: "Sustainable habits for long-term health and high energy.",
              benefits: ["Stress Management", "Sleep Optimization", "Travel-Friendly Plans"],
              icon: <Activity className="text-brand-accent mb-6" size={40} />
            }
          ].map((program, i) => (
            <motion.div 
              key={i}
              className="bg-brand-grey p-10 border border-black/5 hover:border-brand-accent/30 transition-all group"
              whileHover={{ y: -10 }}
            >
              {program.icon}
              <h3 className="text-2xl font-black mb-4 text-brand-black">{program.title}</h3>
              <p className="text-zinc-600 mb-8 leading-loose">{program.desc}</p>
              <ul className="space-y-4 mb-10">
                {program.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm font-bold text-zinc-700">
                    <ChevronRight size={14} className="text-brand-accent" /> {b}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/919987883536?text=${encodeURIComponent(`Hi Sohrab, I saw the ${program.title} program and want to know how it can help me achieve my goals.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent font-black uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Get Plan <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Social Proof */}
      <Section id="testimonials" className="bg-brand-grey overflow-hidden">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black tracking-tight mb-4 text-brand-black">Real People.<br/><span className="text-brand-accent">Real Results.</span></h2>
            <p className="text-zinc-500 mb-6 max-w-sm">Don't take our word for it. See the transformations of people who reclaimed their health and vitality.</p>
            <div className="flex gap-1 mb-6 text-brand-accent">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
          </div>
          
          <div className="lg:col-span-2 relative">
            <TestimonialCarousel />
          </div>
        </div>
      </Section>

      {/* Coach Intro */}
      <Section id="about" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[4/5] bg-zinc-900 relative overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/fitness-coach/800/1000" 
                alt="Sohrab Sheikh" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white border border-black/5 p-6 shadow-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-1">Head Coach</p>
                    <h3 className="text-xl font-black text-brand-black">Sohrab Sheikh</h3>
                  </div>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-brand-grey p-2 border border-black/5 flex flex-col items-center gap-1 hover:border-brand-accent transition-colors group/qr cursor-pointer"
                  >
                    <div className="relative p-1 bg-white">
                      <QRCodeCanvas 
                        value={whatsappUrl} 
                        size={64}
                        level={"H"}
                        includeMargin={false}
                        fgColor="#000000"
                        imageSettings={{
                          src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                          height: 12,
                          width: 12,
                          excavate: true,
                        }}
                      />
                    </div>
                    <span className="text-[8px] font-bold text-center leading-tight uppercase tracking-tighter text-zinc-500 group-hover/qr:text-brand-accent">
                      SCAN OR CLICK<br/>TO CHAT
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-[20px] border-brand-accent/10 -z-10" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-black tracking-tight mb-8 text-brand-black">Meet Your Coach</h2>
            <h3 className="text-xl font-bold mb-6 text-brand-accent">Sohrab Sheikh</h3>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              "My mission is simple: Helping people fix root health issues through fitness & nutrition. I don't believe in quick fixes; I believe in sustainable transformations."
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Certified Fitness & Nutrition Expert",
                "Specialist in Medical Condition Management",
                "100+ Successful Transformations",
                "Based in Panvel City"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest text-zinc-700">
                  <div className="w-2 h-2 bg-brand-accent rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Combined Pricing & Final CTA */}
      <Section id="pricing" className="bg-white text-center pb-16 border-t border-black/5">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-brand-black">Invest in <span className="text-brand-accent">Yourself</span></h2>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-black mb-8 leading-[1.2]">
            Stop Managing Symptoms. <br className="hidden md:block" /> <span className="text-brand-accent">Start Fixing Them.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-6 mt-12 bg-brand-grey p-8 max-w-xl mx-auto border border-black/5 rounded-2xl shadow-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden shadow-sm">
                  <img 
                    src={`https://picsum.photos/seed/proven${i}/100/100`} 
                    alt="Success Story" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="flex gap-1 text-brand-accent justify-center mb-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-800">100+ Lives Transformed</p>
              <p className="text-xs text-zinc-500 mt-1 italic">Verified transformations from real clients across Panvel City.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {/* Starter Plan */}
          <div className="bg-brand-grey p-8 border border-black/5 flex flex-col items-center">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Starter</h3>
            <div className="text-4xl font-black mb-1 text-brand-black">₹99</div>
            <p className="text-xs font-bold text-brand-accent mb-6">7 DAYS ACCESS</p>
            <p className="text-xs text-zinc-500 mb-10 leading-relaxed italic">(OR FREE 3 DAYS TRIAL)</p>
            <a 
              href={`https://wa.me/919987883536?text=${encodeURIComponent("Hi Sohrab, I'm ready to kickstart my transformation! I'd like to begin with the Starter Plan.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-4 border-2 border-brand-accent text-brand-accent font-black uppercase tracking-widest text-xs hover:bg-brand-accent hover:text-white transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Popular Plan */}
          <div className="bg-white p-8 border-4 border-brand-accent flex flex-col items-center relative shadow-xl transform lg:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest leading-none">
              Most Popular ⭐
            </div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Popular</h3>
            <div className="text-4xl font-black mb-1 text-brand-black">₹499<span className="text-lg text-zinc-400">/mo</span></div>
            <div className="text-2xl font-black text-brand-accent mt-2 mb-6">₹999 <span className="text-sm">/ 3 MO</span></div>
            <p className="text-sm font-bold text-zinc-600 mb-8 leading-relaxed">Complete nutritional and movement roadmap.</p>
            <a 
              href={`https://wa.me/919987883536?text=${encodeURIComponent("Hi Sohrab, I want to take control of my health! I'm interested in the Popular Plan.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-4 bg-brand-accent text-white font-black uppercase tracking-widest text-xs hover:bg-brand-accent/90 transition-all shadow-lg"
            >
              Choose Popular
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-brand-grey p-8 border border-black/5 flex flex-col items-center">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Pro</h3>
            <div className="text-4xl font-black mb-6 text-brand-black">₹1999<span className="text-lg text-zinc-400">/mo</span></div>
            <p className="text-sm font-bold text-zinc-600 mb-10 leading-relaxed">High-performance coaching for ambitious goals.</p>
            <a 
              href={`https://wa.me/919987883536?text=${encodeURIComponent("Hi Sohrab, I'm ready to level up my fitness. Please sign me up for the Pro Plan!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-4 border-2 border-brand-accent text-brand-accent font-black uppercase tracking-widest text-xs hover:bg-brand-accent hover:text-white transition-all"
            >
              Choose Pro
            </a>
          </div>

          {/* Elite Plan */}
          <div className="bg-brand-grey p-8 border border-black/5 flex flex-col items-center">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Elite</h3>
            <div className="text-4xl font-black mb-2 text-brand-black">₹9999<span className="text-lg text-zinc-400">/mo</span></div>
            <p className="text-[10px] font-black tracking-widest text-brand-accent mb-6">CUSTOM + 24/7 SUPPORT</p>
            <p className="text-sm font-bold text-zinc-600 mb-10 leading-relaxed">The ultimate transformation experience with direct daily access.</p>
            <a 
              href={`https://wa.me/919987883536?text=${encodeURIComponent("Hi Sohrab, I'm looking for the ultimate transformation experience. I want to join the Elite Plan!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-4 border-2 border-brand-accent text-brand-accent font-black uppercase tracking-widest text-xs hover:bg-brand-accent hover:text-white transition-all"
            >
              Join Elite
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-brand-grey border-t border-black/5">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="inline-block px-3 py-1 bg-brand-accent text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              FAQ
            </div>
            <h2 className="text-3xl font-black mb-4 text-brand-black leading-tight">Your Questions,<br/><span className="text-brand-accent">Answered.</span></h2>
            <p className="text-zinc-500 leading-loose text-sm">
              Everything you need to know about starting your fitness journey with Coach Sohrab. 
            </p>
          </div>
          <div className="lg:col-span-2 space-y-2">
            {[
              { q: "I have a medical condition (Diabetes/PCOS/Thyroid). Is this safe?", a: "Absolutely. In fact, our specialized programs are designed specifically to use nutrition and targeted movement to help manage and even reverse the symptoms of these conditions safely." },
              { q: "I'm a busy professional. How much time do I need daily?", a: "We focus on 'Minimum Effective Dose'. Most of our clients see massive results with just 30-40 minutes of structured movement 3-4 times a week." },
              { q: "Do I have to stop eating my favorite foods?", a: "No 'rabbit diets' here. We teach you how to balance your favorite foods with your nutritional goals using sustainable systems, not restriction." },
              { q: "Do I need to go to a gym?", a: "Not necessarily. We have programs designed for home workouts with minimal equipment as well as full gym protocols. We fix the plan to your life, not the other way around." },
              { q: "How soon can I see results?", a: "Energy and sleep often improve within the first 10 days. Physical transformations (fat loss/strength) are typically noticeable within the first 4 weeks of consistent work." }
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-brand-black">
          <div className="md:col-span-2">
            <Logo className="mb-6" />
            <p className="text-zinc-500 max-w-xs leading-relaxed">
              Premium fitness and nutrition coaching by Sohrab Sheikh. Specializing in sustainable fat loss and medical fitness.
            </p>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-brand-accent">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3 underline-offset-4 hover:underline text-zinc-700">
                <Phone size={14} className="text-brand-accent" /> 
                <a href="tel:+919987883536">9987883536</a>
              </li>
              <li className="flex items-center gap-3 underline-offset-4 hover:underline text-zinc-700">
                <Mail size={14} className="text-brand-accent" /> 
                <a href="mailto:sohrabsheikh0786@gmail.com">sohrabsheikh0786@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-zinc-700"><MapPin size={14} className="text-brand-accent" /> Panvel City</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-brand-accent">Follow</h4>
            <a href="https://instagram.com/fithletes.officials" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-zinc-700 hover:text-brand-accent transition-colors">
              <Instagram size={14} className="text-brand-accent" /> fithletes.officials
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          <p>© {new Date().getFullYear()} FITHLETES. ALL RIGHTS RESERVED.</p>
          <p className="text-brand-accent/50">DESIGNED FOR PERFORMANCE</p>
        </div>
      </footer>
    </div>
  );
}
