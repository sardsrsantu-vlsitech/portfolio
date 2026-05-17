import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Github, CheckCircle2, History, Activity, Layers, Cpu as Chip } from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconTerminal2,
  IconCpu,
  IconPhone
} from "@tabler/icons-react";

export function Init() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <div className="space-y-24 mb-8" id="init">
      {/* Decorative PCB Traces */}
      <div className="pcb-trace h-[1px] w-64 top-[20%] left-0 opacity-20 bg-silicon-cyan" />
      <div className="pcb-trace w-[1px] h-64 top-[10%] right-[15%] opacity-20 bg-silicon-cyan" />
      <div className="absolute top-[40%] left-[10%] w-[200px] h-[200px] bg-silicon-cyan/5 rounded-full blur-[100px]" />

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-8 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-silicon-cyan animate-pulse-glow shadow-[0_0_10px_#00dbe7]" />
            <span className="font-mono text-sm text-silicon-cyan uppercase tracking-wider">Status: Live Researching</span>
          </div>
          <h1 className="font-display text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Santu <span className="text-secondary">Sardar</span>
          </h1>
          <h2 className="font-mono text-xl text-silicon-cyan mt-4 tracking-widest uppercase">RTL Design Engineer</h2>
          <p className="font-sans text-lg text-white/60 max-w-xl leading-relaxed mt-4">
            RTL Design Engineer with experience in FPGA-based system design and SoC integration, specializing in AXI-based interconnects, DMA-driven memory subsystems, and high-speed data paths. M.Tech in VLSI Design from NIT Surathkal.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="/SantuSardar_Resume (1).pdf"
              download
              className="flex items-center gap-2 px-8 py-3 border border-silicon-cyan text-silicon-cyan font-mono text-xs font-bold tracking-widest hover:bg-silicon-cyan hover:text-silicon-black transition-all duration-300 shadow-[0_0_20px_rgba(0,219,231,0.1)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD FULL PDF RESUME
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-3 glass-card text-white font-mono text-xs font-bold tracking-widest hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <Github className="w-4 h-4" />
              VIEW_GITHUB_REPOSITORY
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-4 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-silicon-cyan to-secondary rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000" />
          <div className="relative aspect-square glass-substrate flex items-center justify-center p-8 overflow-hidden group">
            <img 
              alt="Hardware Microchip" 
              className="w-full h-full object-contain opacity-80 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9c3nFfmG5FWQ3DwKjljknaQru66bdCFfEnVEHIQ2UhZrS8kofkLZyFZgJ1nkSsSZYbGA53zMS0sXq09v3w8NqDY4Yqt3ZRaGSpWzh583HJWliUYcoNQCtQBfPSyOylXMlU5lrDKm_1FDv0VHRC2fVjH_49SVbRwufgrXEVB0cMTU9b__8ickAHMrg4Abr6Zf787qYO8GnMQ9ERULo_3TOBthXOIw4Y1kV-FCus_92XGqzNVbK-3eJrqpcqmPalsLY9jaTbU8ZSmA"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 font-mono text-[10px] text-silicon-cyan/40 uppercase tracking-widest">COORDINATE: 40.7128° N</div>
            <div className="scanline absolute inset-0 pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* Skills Matrix */}
      <section id="skills-matrix" className="space-y-12 scroll-mt-24">
        <div className="flex items-end gap-4 border-b border-white/5 pb-4">
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">SKILLS_MATRIX</h2>
          <span className="font-mono text-xs text-white/30 mb-1 tracking-widest">[v2.0_STABLE]</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            icon={<Chip className="w-5 h-5" />} 
            level="LVL_09" 
            title="Hardware Languages" 
            progress={90} 
            tags={["VERILOG HDL", "SPINALHDL", "C/C++"]}
            accent="silicon-cyan"
          />
          <SkillCard 
            icon={<Layers className="w-5 h-5" />} 
            level="LVL_08" 
            title="EDA Tools" 
            progress={85} 
            tags={["VIVADO", "VITIS", "QUARTUS", "VERILATOR"]}
            accent="secondary"
          />
          <SkillCard 
            icon={<Activity className="w-5 h-5" />} 
            level="LVL_08" 
            title="Protocols" 
            progress={88} 
            tags={["AXI4", "APB", "SPI", "MEMORY-MAPPED"]}
            accent="primary"
          />
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="space-y-12 scroll-mt-24">
        <h2 className="font-display text-2xl font-bold text-white flex items-center gap-4">
          <History className="w-6 h-6 text-silicon-cyan" /> EXPERIENCE_TIMELINE
        </h2>
        
        <div className="relative border-l border-white/5 ml-4 pl-12 space-y-16">
          <TimelineItem 
            period="JULY 2025 - PRESENT"
            title="Digital IC / SoC Design Engineer"
            org="DeepGrid Semi Pvt. Ltd."
            desc="Implemented a ternary-weight systolic matrix multiplier for AI inference. Validated on FPGA (Arty A7-100T) using Microblaze, executing Bitnet MCU inference over AXI GPIO. Integrated DMA and AXI-based data paths."
            accent="silicon-cyan"
          />
          <TimelineItem 
            period="JAN 2025 - JUNE 2025"
            title="Digital IC Design Intern"
            org="DeepGrid Semi Pvt. Ltd."
            desc="Developed Verilog RTL for Softmax, ReLU and GeLU modules for AI accelerator. Performed functional verification using Xilinx Vivado."
            accent="secondary"
          />
          <TimelineItem 
            period="AUG 2023 - JUNE 2025"
            title="M.Tech in VLSI Design"
            org="NIT Karnataka Surathkal"
            desc="Focused on Digital VLSI, SoC architecture, and FPGA system design."
            accent="silicon-cyan"
          />
        </div>
      </section>

      {/* Achievements */}
      <section className="space-y-12">
        <h2 className="font-display text-2xl font-bold text-white">KEY_ACHIEVEMENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CertCard org="VLSI Design Conf 2026" title="Presented DgridSoC AI Accelerator" />
          <CertCard org="NITTTR Chennai" title="MATLAB EV Systems Training" />
          <CertCard org="Embedded Workshop" title="Hand Gesture Robot Control" />
        </div>
      </section>

      {/* Secure Transmission Form - Replaced with Floating Dock */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="font-display text-2xl font-bold text-white">SECURE_COMMUNICATION</h2>
          <p className="font-mono text-sm text-white/40 tracking-widest uppercase">Initialize encrypted handshake for collaboration</p>
        </div>
        
        <div className="glass-substrate p-8 border border-silicon-cyan/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-silicon-cyan/20 uppercase tracking-widest group-hover:text-silicon-cyan/40 transition-colors">Encryption: AES-256 Enabled</div>
          <div className="scanline absolute inset-0 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Left Column: Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="font-mono text-[10px] font-bold text-white/40 tracking-widest uppercase border-b border-white/5 pb-2">SYSTEM_IDENTITY</div>
                <div className="font-mono text-sm text-silicon-cyan pt-2">SANTU_SARDAR / RTL_ENG</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-[10px] font-bold text-white/40 tracking-widest uppercase border-b border-white/5 pb-2">PUBLIC_KEY_FINGERPRINT</div>
                <div className="font-mono text-xs text-white/60 break-all pt-2 opacity-70">
                  4F9A 8B2C 1E7D 5634<br/>
                  90F1 C2A3 B4E5 D6F7
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-[10px] font-bold text-white/40 tracking-widest uppercase border-b border-white/5 pb-2">CONNECTION_STATUS</div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                  <span className="font-mono text-xs text-green-400">SECURE_LINK_ESTABLISHED</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Dock */}
            <div className="flex flex-col items-center justify-center space-y-6 bg-white/5 border border-white/10 p-6 relative">
              <div className="font-mono text-[10px] font-bold text-white/40 tracking-widest uppercase text-center">
                SELECT_COMM_CHANNEL
              </div>
              <FloatingDock
                desktopClassName="bg-silicon-black border border-white/10"
                mobileClassName=""
                items={[
                  {
                    title: "GitHub",
                    icon: <IconBrandGithub className="h-full w-full text-silicon-cyan" />,
                    href: "https://github.com",
                  },
                  {
                    title: "LinkedIn",
                    icon: <IconBrandLinkedin className="h-full w-full text-silicon-cyan" />,
                    href: "https://www.linkedin.com/in/santu-sardar-054317268/",
                  },
                  {
                    title: "Email",
                    icon: <IconMail className="h-full w-full text-silicon-cyan" />,
                    href: "mailto:sardsrsantu@gmail.com",
                  },
                  {
                    title: "Phone",
                    icon: <IconPhone className="h-full w-full text-silicon-cyan" />,
                    href: "tel:8274039680",
                  },
                  {
                    title: "Terminal Logs",
                    icon: <IconTerminal2 className="h-full w-full text-silicon-cyan" />,
                    href: "#",
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ icon, level, title, progress, tags, accent }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`glass-substrate p-6 space-y-4 border-l-4 group transition-all duration-300 ${
        accent === "silicon-cyan" ? "border-l-silicon-cyan hover:bg-silicon-cyan/5" : 
        accent === "secondary" ? "border-l-secondary hover:bg-secondary/5" : 
        "border-l-primary hover:bg-primary/5"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className={`transition-colors duration-300 ${accent === "silicon-cyan" ? "text-silicon-cyan" : accent === "secondary" ? "text-secondary" : "text-primary"}`}>
          {icon}
        </div>
        <span className="font-mono text-xs text-white/30 tracking-widest">{level}</span>
      </div>
      <h3 className="font-display text-xl font-bold text-white tracking-tight">{title}</h3>
      <div className="space-y-3">
        <div className="h-0.5 w-full bg-white/5">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full shadow-[0_0_8px_currentColor] ${
              accent === "silicon-cyan" ? "bg-silicon-cyan text-silicon-cyan" : 
              accent === "secondary" ? "bg-secondary text-secondary" : 
              "bg-primary text-primary"
            }`} 
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-white/5 text-white/50 font-mono text-[9px] font-bold tracking-widest border border-white/5 uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TimelineItem({ period, title, org, desc, accent }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative group pr-4"
    >
      <span className="absolute -left-[54px] top-0 w-11 h-11 glass-substrate flex items-center justify-center transition-all duration-500 group-hover:bg-white/10">
        <span className={`w-2 h-2 shadow-[0_0_10px_currentColor] transition-transform duration-500 group-hover:scale-150 ${
          accent === "silicon-cyan" ? "bg-silicon-cyan text-silicon-cyan" : 
          accent === "secondary" ? "bg-secondary text-secondary" : 
          "bg-primary text-primary"
        }`} />
      </span>
      <div className="space-y-1">
        <span className="font-mono text-[10px] font-bold text-silicon-cyan tracking-[0.2em]">{period}</span>
        <h4 className="font-display text-2xl font-bold text-white group-hover:text-silicon-cyan transition-colors duration-300">{title}</h4>
        <p className="font-mono text-[10px] font-medium text-white/40 tracking-wider uppercase mb-3">{org}</p>
        <p className="font-sans text-sm text-white/50 max-w-2xl leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function CertCard({ org, title }) {
  return (
    <div className="glass-substrate p-5 text-center space-y-4 border border-white/5 hover:border-silicon-cyan/30 transition-all duration-500 group">
      <div className="w-12 h-12 mx-auto glass-substrate flex items-center justify-center group-hover:bg-silicon-cyan/10 transition-colors">
        <CheckCircle2 className="w-5 h-5 text-silicon-cyan transition-transform duration-500 group-hover:rotate-[360deg]" />
      </div>
      <div className="space-y-1">
        <p className="font-mono text-[9px] font-bold text-white/30 tracking-[0.2em]">{org}</p>
        <p className="font-mono text-xs font-semibold text-white/80 transition-colors group-hover:text-silicon-cyan">{title}</p>
      </div>
    </div>
  );
}
