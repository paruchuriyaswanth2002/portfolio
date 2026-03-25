import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowUpRight,
  Globe,
  Database,
  Terminal,
  Cpu,
  Sparkles,
  Zap,
  Layout,
  Code,
  Smartphone,
  Server
} from "lucide-react";
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCES, EDUCATION, ACHIEVEMENTS } from "./constants";
import React, { useRef, useState, useEffect } from "react";

const Reveal = ({ children, delay = 0, width = "fit-content" }: { children: React.ReactNode; delay?: number; width?: "fit-content" | "100%" }) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const MagneticButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#050505] text-white selection:bg-blue-500 selection:text-white">
      <div className="noise"></div>
      
      {/* Custom Cursor Effect */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/20 pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[90] px-6 py-6 md:py-8 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display uppercase tracking-tighter"
        >
          YP
        </motion.div>
        <div className="flex gap-4 md:gap-8 text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em]">
          <a href="#work" className="hover:text-blue-400 transition-colors">Work</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-24 relative overflow-hidden">
        <div className="relative z-10">
          <Reveal delay={0.2}>
            <span className="text-blue-500 font-mono text-sm mb-4 block">/ Full-Stack Engineer</span>
          </Reveal>
          <h1 className="text-6xl sm:text-8xl md:text-[14vw] font-display leading-[0.8] tracking-tighter uppercase mb-8">
            <Reveal delay={0.3}>YASWANTH</Reveal>
            <Reveal delay={0.4}><span className="text-stroke">PARUCHURI</span></Reveal>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <Reveal delay={0.5}>
              <p className="max-w-md text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                Architecting high-performance digital ecosystems with a focus on <span className="text-white">scalability</span> and <span className="text-white">seamless integration</span>.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="flex gap-6">
                <MagneticButton>
                  <a href="#work" className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    Explore Work
                  </a>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Background Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-500/5 blur-[150px] rounded-full -z-10"
        />
      </section>

      {/* Work Section - Horizontal Feel */}
      <section id="work" className="py-24 md:py-48 px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-32 gap-8">
          <div>
            <Reveal><span className="text-zinc-500 font-mono text-xs mb-4 block">01 / PROJECTS</span></Reveal>
            <h2 className="text-5xl md:text-9xl font-display uppercase leading-none">Selected<br/><span className="italic font-serif text-zinc-400 lowercase tracking-tighter">Works</span></h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-zinc-500 text-sm leading-relaxed">
              A collection of production-grade applications where engineering meets aesthetics.
            </p>
          </Reveal>
        </div>

        <div className="space-y-24 md:space-y-48">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-3/5 aspect-[16/10] bg-zinc-900 rounded-3xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <ArrowUpRight size={64} className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <Code size={80} className="text-zinc-800 group-hover:scale-110 transition-transform duration-700" />
                </div>
                {/* Floating Tags */}
                <div className="absolute bottom-8 left-8 flex gap-2 z-20">
                  {["MERN", "Scalable"].map(t => (
                    <span key={t} className="px-3 py-1 glass rounded-full text-[8px] font-black uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-2/5">
                <span className="text-blue-500 font-mono text-[10px] mb-4 block">0{idx + 1}</span>
                <h3 className="text-3xl md:text-6xl font-display uppercase mb-6">{project.title}</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 font-light italic font-serif">
                  {project.description[0]}
                </p>
                <div className="flex flex-wrap gap-3 mb-12">
                  {SKILLS.frameworks.slice(0, 3).map(s => (
                    <span key={s} className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{s}</span>
                  ))}
                </div>
                <MagneticButton>
                  <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest group">
                    View Project <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"><ArrowUpRight size={16} /></div>
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section - Interactive Grid */}
      <section className="py-24 md:py-48 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <Reveal><span className="text-zinc-500 font-mono text-xs mb-4 block">02 / EXPERTISE</span></Reveal>
              <h2 className="text-5xl md:text-7xl font-display uppercase mb-12 leading-none">Technical<br/>Arsenal</h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Smartphone, label: "Frontend", desc: "React, Vite, Tailwind" },
                  { icon: Server, label: "Backend", desc: "Node.js, Express" },
                  { icon: Database, label: "Database", desc: "MongoDB, MySQL" },
                  { icon: Cpu, label: "Integration", desc: "Razorpay, PayU" }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <item.icon className="text-blue-500" size={32} />
                    <h4 className="font-bold uppercase text-xs tracking-widest">{item.label}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SKILLS.frameworks.concat(SKILLS.languages).map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    className="aspect-square glass rounded-2xl flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-center p-4 text-zinc-400 hover:text-white transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Experience */}
      <section id="about" className="py-24 md:py-48 px-6 md:px-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-7">
            <Reveal><span className="text-zinc-500 font-mono text-xs mb-4 block">03 / ABOUT</span></Reveal>
            <h2 className="text-5xl md:text-8xl font-display uppercase mb-12 leading-none">The<br/>Developer</h2>
            <p className="text-xl md:text-4xl font-serif italic text-zinc-400 leading-tight mb-12">
              "Successfully delivered <span className="text-white">12+ live projects</span>, specializing in MERN stack and complex <span className="text-white text-stroke">payment architectures</span>."
            </p>
            <div className="space-y-12">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="group border-t border-white/10 pt-12">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-blue-500 font-mono text-xs uppercase tracking-widest">{exp.company}</p>
                    </div>
                    <span className="text-zinc-500 font-mono text-xs">{exp.period}</span>
                  </div>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl">{exp.description[0]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 space-y-12 md:space-y-24">
            <div className="glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem]">
              <h3 className="text-xl font-display uppercase mb-8">Education</h3>
              <div className="space-y-12">
                {EDUCATION.map((edu, i) => (
                  <div key={i}>
                    <p className="text-blue-500 font-mono text-[10px] mb-2">{edu.period}</p>
                    <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-zinc-500 text-sm">{edu.college}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-xl font-display uppercase">Recognition</h3>
              {ACHIEVEMENTS.map((ach, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <Sparkles className="text-blue-500 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-sm mb-1">{ach.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="min-h-screen flex flex-col justify-between py-16 md:py-24 px-6 md:px-24 bg-white text-black rounded-t-[2rem] md:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
            <div className="max-w-2xl">
              <h2 className="text-6xl sm:text-8xl md:text-[12vw] font-display leading-[0.8] uppercase mb-12">
                Let's<br/>Work<br/><span className="text-stroke" style={{ WebkitTextStrokeColor: 'black' }}>Together</span>
              </h2>
              <div className="flex flex-wrap gap-6 md:gap-8">
                <MagneticButton>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="px-8 md:px-12 py-4 md:py-6 bg-black text-white rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 transition-transform">
                    Send an Email
                  </a>
                </MagneticButton>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold text-sm md:text-base">{PERSONAL_INFO.phone}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-12 md:text-right">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Socials</h4>
                <div className="flex flex-col gap-4">
                  <a href={PERSONAL_INFO.linkedin} className="text-xl md:text-2xl font-bold hover:underline">LinkedIn</a>
                  <a href={PERSONAL_INFO.github} className="text-xl md:text-2xl font-bold hover:underline">GitHub</a>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Location</h4>
                <p className="text-xl md:text-2xl font-bold">Chennai, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full pt-12 md:pt-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-black/5 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
          <p>© {new Date().getFullYear()} YASWANTH PARUCHURI</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-black transition-colors">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
