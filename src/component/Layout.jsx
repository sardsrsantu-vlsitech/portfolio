import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
    Terminal,
    Settings2,
    Linkedin,
    Github,
    GraduationCap,
    Mail,
    Phone,
    Menu,
    X
} from 'lucide-react';

export function Nav({ activeTab, setActiveTab }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null); // 'summary' | 'experience' | null

    const handleTabClick = (tab) => {
        setActiveTab?.(tab);
        setIsMenuOpen(false);
    };

    const handleScrollClick = () => {
        setActiveTab?.("INIT");
        setIsMenuOpen(false);
        setTimeout(() => {
            document.getElementById("skills-matrix")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <nav id="top-nav" className="fixed top-0 left-0 right-0 z-50 bg-silicon-black/30 backdrop-blur-xl border-b border-white/10 glow-cyan">
            <div className="flex justify-between items-center w-full px-6 md:px-20 py-4">
                <div className="font-display text-2xl md:text-3xl text-silicon-cyan tracking-tighter uppercase font-semibold">
                    Santu Sardar
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink onClick={(e) => { e.preventDefault(); handleTabClick("INIT"); }} label="INIT" active={activeTab === "INIT"} />
                    <NavLink onClick={(e) => { e.preventDefault(); handleTabClick("CORE_PROJECTS"); }} label="CORE_PROJECTS" active={activeTab === "CORE_PROJECTS"} />
                    <NavLink onClick={(e) => { e.preventDefault(); handleTabClick("LAB_LOGS"); }} label="LAB_LOGS" active={activeTab === "LAB_LOGS"} />
                    <NavLink onClick={(e) => { e.preventDefault(); handleScrollClick(); }} label="SKILLS_MATRIX" />
                </div>

                {/* Desktop Icons */}
                <div className="hidden md:flex items-center gap-4">
                    <button 
                        onClick={() => setActiveModal('summary')}
                        title="Professional Summary"
                        className="text-silicon-cyan p-2 hover:bg-white/5 transition-colors cursor-pointer" 
                        id="settings-btn"
                    >
                        <Settings2 size={20} />
                    </button>
                    <button 
                        onClick={() => setActiveModal('experience')}
                        title="Experience Timeline"
                        className="text-silicon-cyan p-2 hover:bg-white/5 transition-colors cursor-pointer" 
                        id="terminal-btn"
                    >
                        <Terminal size={20} />
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-silicon-cyan p-2 hover:bg-white/5 transition-colors cursor-pointer">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-silicon-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-6 gap-6 shadow-2xl">
                    <NavLink onClick={(e) => { e.preventDefault(); handleTabClick("INIT"); }} label="INIT" active={activeTab === "INIT"} />
                    <NavLink onClick={(e) => { e.preventDefault(); handleTabClick("CORE_PROJECTS"); }} label="CORE_PROJECTS" active={activeTab === "CORE_PROJECTS"} />
                    <NavLink onClick={(e) => { e.preventDefault(); handleTabClick("LAB_LOGS"); }} label="LAB_LOGS" active={activeTab === "LAB_LOGS"} />
                    <NavLink onClick={(e) => { e.preventDefault(); handleScrollClick(); }} label="SKILLS_MATRIX" />
                </div>
            )}

            {/* Modals */}
            {activeModal && createPortal(
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-silicon-black/90 backdrop-blur-md p-4" onClick={() => setActiveModal(null)}>
                    <div className="bg-silicon-black border border-silicon-cyan/30 glass-card p-10 max-w-2xl w-full relative shadow-[0_0_50px_rgba(0,219,231,0.15)] rounded-lg" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full">
                            <X size={24} />
                        </button>
                        
                        {activeModal === 'summary' && (
                            <div>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-silicon-cyan tracking-tight mb-4">PROFESSIONAL_SUMMARY</h2>
                                <p className="font-sans text-white/80 leading-relaxed text-lg">
                                    RTL Design Engineer with experience in FPGA-based system design and SoC integration, specializing in AXI-based interconnects, DMA-driven memory subsystems, and high-speed data paths. M.Tech in VLSI Design from NIT Surathkal.
                                </p>
                            </div>
                        )}

                        {activeModal === 'experience' && (
                            <div>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-silicon-cyan tracking-tight mb-6">EXPERIENCE_LOGS</h2>
                                <div className="space-y-6">
                                    <div className="border-l-2 border-silicon-cyan pl-4">
                                        <h3 className="font-bold text-white text-lg">Digital IC / SoC Design Engineer</h3>
                                        <p className="text-sm text-silicon-cyan font-mono mb-2">DeepGrid Semi Pvt. Ltd. | JULY 2025 - PRESENT</p>
                                        <p className="text-sm text-white/60 leading-relaxed">Implemented a ternary-weight systolic matrix multiplier for AI inference. Validated on FPGA (Arty A7-100T) using Microblaze, executing Bitnet MCU inference over AXI GPIO. Integrated DMA and AXI-based data paths.</p>
                                    </div>
                                    <div className="border-l-2 border-white/20 pl-4">
                                        <h3 className="font-bold text-white text-lg">Digital IC Design Intern</h3>
                                        <p className="text-sm text-white/40 font-mono mb-2">DeepGrid Semi Pvt. Ltd. | JAN 2025 - JUNE 2025</p>
                                        <p className="text-sm text-white/60 leading-relaxed">Developed Verilog RTL for Softmax, ReLU and GeLU modules for AI accelerator. Performed functional verification using Xilinx Vivado.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </nav>
    );
}

function NavLink({ href, label, active = false, onClick }) {
    return (
        <a
            href={href || "#"}
            onClick={onClick}
            className={`font-mono text-sm tracking-widest transition-all duration-300 px-3 py-1 border-b-2 cursor-pointer ${active ? 'text-silicon-cyan border-silicon-cyan' : 'text-white/60 border-transparent hover:text-white'
                }`}
        >
            {label}
        </a>
    );
}

export function Footer() {
    return (
        <footer className="w-full py-12 bg-silicon-black border-t border-white/10 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-8">
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest text-center md:text-left">
                    © 2024 SantuSardar. ALL RIGHTS RESERVED. [SYSTEM_STATUS: STABLE]
                </div>
                <div className="flex items-center gap-8">
                    <FooterLink href="https://www.linkedin.com/in/santu-sardar-054317268/" icon={<Linkedin size={18} />} label="LINKEDIN" />
                    <FooterLink href="https://github.com" icon={<Github size={18} />} label="GITHUB" />
                    <FooterLink href="tel:8274039680" icon={<Phone size={18} />} label="PHONE" />
                    <FooterLink href="mailto:sardsrsantu@gmail.com" icon={<Mail size={18} />} label="MAIL" />
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ icon, label, href }) {
    return (
        <a href={href || "#"} target={href && href.startsWith('http') ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-2 text-white/40 hover:text-silicon-cyan transition-colors text-[10px] font-mono font-bold tracking-widest uppercase">
            {icon}
            <span className="hidden sm:inline">{label}</span>
        </a>
    );
}
