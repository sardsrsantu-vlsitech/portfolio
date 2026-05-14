/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Cpu, 
  Terminal, 
  Cpu as Chip, 
  Layers, 
  Activity, 
  History, 
  CheckCircle2, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Mail,
  Download,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <div className="min-h-screen selection:bg-primary-dim/30">
      {/* TopNavBar */}
      <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-surface/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,219,231,0.1)] flex justify-between items-center px-6 md:px-20 py-4 max-w-full mx-auto">
        <div className="font-display font-extrabold text-2xl text-primary tracking-tighter uppercase">
          SILICON_CORE v1.0
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["INIT", "CORE_PROJECTS", "LAB_LOGS", "SKILLS_MATRIX"].map((link, i) => (
            <a
              key={link}
              href={link === "SKILLS_MATRIX" ? "#skills-matrix" : "#"}
              className={`font-mono text-xs font-bold tracking-widest transition-all duration-300 hover:text-primary-dim ${
                i === 0 ? "text-primary border-b-2 border-primary pb-1" : "text-white/40"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 transition-colors">
            <Cpu className="w-5 h-5 text-primary-dim" />
          </button>
          <button className="p-2 hover:bg-white/5 transition-colors">
            <Terminal className="w-5 h-5 text-primary-dim" />
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 md:px-20 space-y-24 relative overflow-hidden">
        {/* Decorative PCB Traces */}
        <div className="pcb-trace h-[1px] w-64 top-[20%] left-0 opacity-20" />
        <div className="pcb-trace w-[1px] h-64 top-[10%] right-[15%] opacity-20" />
        <div className="absolute top-[40%] left-[10%] w-[200px] h-[200px] bg-primary-dim/5 rounded-full blur-[100px]" />

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-dim animate-pulse-glow shadow-[0_0_10px_#00dbe7]" />
              <span className="font-mono text-sm text-primary-dim uppercase tracking-wider">Status: Live Researching</span>
            </div>
            <h1 className="font-display text-4xl md:text-7xl font-black text-primary leading-[1.1] tracking-tight">
              Architecting the Future of <span className="text-secondary">Digital Logic</span>
            </h1>
            <p className="font-sans text-lg text-white/60 max-w-xl leading-relaxed">
              M.Tech in Electronics & Communication Engineering. Specializing in high-throughput VLSI architectures and real-time embedded systems for next-gen semiconductor applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 px-8 py-3 border border-primary-dim text-primary font-mono text-xs font-bold tracking-widest hover:bg-primary-dim hover:text-surface transition-all duration-300 shadow-[0_0_20px_rgba(0,219,231,0.1)]">
                <Download className="w-4 h-4" />
                DOWNLOAD FULL PDF RESUME
              </button>
              <button className="flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 text-white font-mono text-xs font-bold tracking-widest hover:bg-white/10 transition-all duration-300">
                <Github className="w-4 h-4" />
                VIEW_GITHUB_REPOSITORY
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-dim to-secondary rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000" />
            <div className="relative aspect-square glass-substrate flex items-center justify-center p-8 overflow-hidden group">
              <img 
                alt="Hardware Microchip" 
                className="w-full h-full object-contain opacity-80 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9c3nFfmG5FWQ3DwKjljknaQru66bdCFfEnVEHIQ2UhZrS8kofkLZyFZgJ1nkSsSZYbGA53zMS0sXq09v3w8NqDY4Yqt3ZRaGSpWzh583HJWliUYcoNQCtQBfPSyOylXMlU5lrDKm_1FDv0VHRC2fVjH_49SVbRwufgrXEVB0cMTU9b__8ickAHMrg4Abr6Zf787qYO8GnMQ9ERULo_3TOBthXOIw4Y1kV-FCus_92XGqzNVbK-3eJrqpcqmPalsLY9jaTbU8ZSmA"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 font-mono text-[10px] text-primary/40 uppercase tracking-widest">COORDINATE: 40.7128° N</div>
              <div className="scanline absolute inset-0 pointer-events-none" />
            </div>
          </motion.div>
        </section>

        {/* Skills Matrix */}
        <section id="skills-matrix" className="space-y-12 scroll-mt-24">
          <div className="flex items-end gap-4 border-b border-white/5 pb-4">
            <h2 className="font-display text-2xl font-bold text-primary tracking-tight">SKILLS_MATRIX</h2>
            <span className="font-mono text-xs text-white/30 mb-1 tracking-widest">[v2.0_STABLE]</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={<Chip className="w-5 h-5" />} 
              level="LVL_09" 
              title="Embedded Systems" 
              progress={92} 
              tags={["ARM CORTEX-M", "RTOS", "CAN/SPI"]}
              accent="primary-dim"
            />
            <SkillCard 
              icon={<Layers className="w-5 h-5" />} 
              level="LVL_08" 
              title="VLSI Design" 
              progress={85} 
              tags={["VERILOG", "CMOS", "ASIC"]}
              accent="secondary"
            />
            <SkillCard 
              icon={<Activity className="w-5 h-5" />} 
              level="LVL_08" 
              title="Signal Processing" 
              progress={88} 
              tags={["MATLAB", "DSP", "FFT"]}
              accent="primary"
            />
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-12">
          <h2 className="font-display text-2xl font-bold text-primary flex items-center gap-4">
            <History className="w-6 h-6" /> EXPERIENCE_TIMELINE
          </h2>
          
          <div className="relative border-l border-white/5 ml-4 pl-12 space-y-16">
            <TimelineItem 
              period="2022 - PRESENT"
              title="M.Tech Research Fellow"
              org="Advanced Institute of Semiconductor Research"
              desc="Developing low-power FPGA architectures for edge AI applications. Focused on optimizing Mac-unit efficiency for neural network inference on Spartan-7 series."
              accent="primary"
            />
            <TimelineItem 
              period="SUMMER 2021"
              title="Hardware Engineering Intern"
              org="Intel - System Architecture Group"
              desc="Verified SoC interconnect protocols using SystemVerilog. Reduced simulation latency by 15% through optimized testbench structuring."
              accent="secondary"
            />
            <TimelineItem 
              period="2018 - 2022"
              title="B.Tech ECE Graduate"
              org="National Institute of Technology"
              desc="CGPA: 9.2/10.0. Capstone Project: Automated Industrial Safety Monitoring System using ESP32 and MQTT protocols."
              accent="primary-dim"
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-12">
          <h2 className="font-display text-2xl font-bold text-primary">CERTIFIED_HARDWARE_MODULES</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CertCard org="NVIDIA" title="Deep Learning" />
            <CertCard org="ARM" title="Architecture Spec" />
            <CertCard org="MATHWORKS" title="DSP Mastery" />
            <CertCard org="XILINX" title="Vivado Expert" />
          </div>
        </section>

        {/* Secure Transmission Form */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-display text-2xl font-bold text-primary">SECURE_TRANSMISSION</h2>
            <p className="font-mono text-sm text-white/40 tracking-widest uppercase">Initialize encrypted handshake for collaboration</p>
          </div>
          
          <div className="glass-substrate p-8 border border-primary-dim/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/20 uppercase tracking-widest group-hover:text-primary-dim/40 transition-colors">Encryption: AES-256 Enabled</div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold text-white/40 tracking-widest uppercase">RECIPIENT_ID</label>
                <input 
                  className="w-full bg-white/5 border border-white/10 text-primary-dim p-4 focus:ring-1 focus:ring-primary-dim focus:outline-none placeholder:text-white/10 font-mono text-sm transition-all"
                  placeholder="Your Name" 
                  type="text" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold text-white/40 tracking-widest uppercase">COMM_CHANNEL</label>
                <input 
                  className="w-full bg-white/5 border border-white/10 text-primary-dim p-4 focus:ring-1 focus:ring-primary-dim focus:outline-none placeholder:text-white/10 font-mono text-sm transition-all"
                  placeholder="Your_Email@domain.com" 
                  type="email" 
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-mono text-[10px] font-bold text-white/40 tracking-widest uppercase">DATA_PAYLOAD</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 text-primary-dim p-4 focus:ring-1 focus:ring-primary-dim focus:outline-none placeholder:text-white/10 font-mono text-sm min-h-[120px] transition-all resize-none"
                  placeholder="Enter message text... █" 
                  required
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  disabled={formStatus !== "idle"}
                  className={`w-full py-4 font-mono font-bold text-xs tracking-[0.2em] transition-all duration-500 uppercase ${
                    formStatus === "sent" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/40" 
                      : "bg-primary-dim text-surface hover:bg-primary-dim/90 hover:shadow-[0_0_30px_rgba(0,219,231,0.3)] disabled:opacity-50"
                  }`}
                >
                  {formStatus === "idle" && "EXECUTE SEND_SIGNAL"}
                  {formStatus === "sending" && "TRANSMITTING..."}
                  {formStatus === "sent" && "SIGNAL RECEIVED"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-surface-container-lowest/80 backdrop-blur-md w-full py-12 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-8 w-full max-w-7xl mx-auto">
          <div className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] text-center md:text-left leading-relaxed">
            © 2024 CORE_ARCH_SYS. ALL RIGHTS RESERVED. <br />
            [SYSTEM_STATUS: <span className="text-primary-dim">STABLE</span>]
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <FooterLink href="#" icon={<Linkedin className="w-4 h-4" />} label="LINKEDIN" />
            <FooterLink href="#" icon={<Github className="w-4 h-4" />} label="GITHUB" />
            <FooterLink href="#" icon={<GraduationCap className="w-4 h-4" />} label="SCHOLAR" />
            <FooterLink href="#" icon={<Mail className="w-4 h-4" />} label="MAIL" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, level, title, progress, tags, accent }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`glass-substrate p-6 space-y-4 border-l-4 group transition-all duration-300 ${
        accent === "primary-dim" ? "border-l-primary-dim hover:bg-primary-dim/5" : 
        accent === "secondary" ? "border-l-secondary hover:bg-secondary/5" : 
        "border-l-primary hover:bg-primary/5"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className={`transition-colors duration-300 ${accent === "primary-dim" ? "text-primary-dim" : accent === "secondary" ? "text-secondary" : "text-primary"}`}>
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
              accent === "primary-dim" ? "bg-primary-dim text-primary-dim" : 
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
          accent === "primary-dim" ? "bg-primary-dim text-primary-dim" : 
          accent === "secondary" ? "bg-secondary text-secondary" : 
          "bg-primary text-primary"
        }`} />
      </span>
      <div className="space-y-1">
        <span className="font-mono text-[10px] font-bold text-primary-dim tracking-[0.2em]">{period}</span>
        <h4 className="font-display text-2xl font-bold text-white group-hover:text-primary-dim transition-colors duration-300">{title}</h4>
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
    <div className="glass-substrate p-5 text-center space-y-4 border border-white/5 hover:border-primary-dim/30 transition-all duration-500 group">
      <div className="w-12 h-12 mx-auto glass-substrate flex items-center justify-center group-hover:bg-primary-dim/10 transition-colors">
        <CheckCircle2 className="w-5 h-5 text-primary-dim transition-transform duration-500 group-hover:rotate-[360deg]" />
      </div>
      <div className="space-y-1">
        <p className="font-mono text-[9px] font-bold text-white/30 tracking-[0.2em]">{org}</p>
        <p className="font-mono text-xs font-semibold text-white/80 transition-colors group-hover:text-primary-dim">{title}</p>
      </div>
    </div>
  );
}

function FooterLink({ href, icon, label }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-2 font-mono text-[10px] font-bold text-white/40 hover:text-primary-dim transition-all duration-300 tracking-[0.15em]"
    >
      <span className="opacity-50">{icon}</span>
      {label}
    </a>
  );
}
