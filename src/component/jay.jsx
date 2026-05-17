import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Brain, ChevronRight } from 'lucide-react';

export function Header() {
    return (
        <header className="mb-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-4"
            >
                <span className="w-12 h-px bg-silicon-cyan" />
                <span className="font-mono text-xs text-silicon-cyan tracking-[0.3em] uppercase font-bold">
                    Deployment Portfolio
                </span>
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-4xl md:text-7xl text-white font-extrabold leading-tight max-w-5xl"
            >
                HARDWARE_ENGINEERING<br />
                <span className="text-silicon-cyan/40">SoC_ARCHITECTURE</span>
            </motion.h1>
        </header>
    );
}

export function ProjectGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <ProjectCard
                id="RV32IM_CORE"
                span="md:col-span-6"
                title="RISC-V 5-Stage Pipelined Processor"
                description="Designed and implemented a 5-stage pipelined RISC-V (RV32IM) processor with hazard detection, forwarding, and stalling mechanisms. Extended architecture to support floating-point operations (F-extension)."
                tags={['VERILOG', 'VIVADO', 'RISC-V']}
                status="active"
                icon={<Cpu size={32} className="text-silicon-cyan" />}
                stats={[
                    { label: 'Architecture', value: 'RV32IM+F' },
                    { label: 'Pipeline Stages', value: '5-Stage' }
                ]}
            />
            <ProjectCard
                id="ALU_F16_99"
                span="md:col-span-6"
                title="Half-Precision Floating Point ALU"
                description="Designed IEEE 754 compliant 16-bit floating-point ALU supporting addition, subtraction, multiplication, and division. Verified RTL modules with functional validation."
                tags={['VERILOG', 'QUARTUS PRIME', 'IEEE 754']}
                icon={<Cpu size={32} className="text-silicon-cyan" />}
                listing={[
                    'STANDARD: IEEE-754 16-BIT',
                    'OPERATIONS: ADD, SUB, MUL, DIV'
                ]}
                hasRawDataButton
            />
        </div>
    );
}

function ProjectCard({
    id, span, title, description, tags, status, image, icon, progress, stats, listing, quote, hasRawDataButton
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`group relative glass-card p-8 hover:border-silicon-cyan/50 transition-all duration-500 overflow-hidden ${span}`}
        >
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-silicon-cyan/30">ID: {id}</div>
            <div className="scanline absolute inset-0 opacity-10 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
                {status === 'active' && (
                    <div className="mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-silicon-cyan/10 border border-silicon-cyan/30 text-silicon-cyan text-[10px] font-mono font-bold">
                            <span className="w-2 h-2 rounded-full bg-silicon-cyan animate-pulse" />
                            ACTIVE_SYSTEM
                        </span>
                    </div>
                )}
                {icon && <div className="mb-6">{icon}</div>}
                <h3 className="font-display text-2xl md:text-3xl text-silicon-cyan mb-4 font-semibold">{title}</h3>
                {stats && (
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {stats.map((s, idx) => (
                            <div key={idx} className="p-3 bg-white/5 border border-white/5">
                                <div className="text-[10px] uppercase font-mono text-white/40 mb-1">{s.label}</div>
                                <div className="text-silicon-cyan font-mono text-sm">{s.value}</div>
                            </div>
                        ))}
                    </div>
                )}
                {description && <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xl">{description}</p>}
                {listing && (
                    <div className="flex-grow font-mono text-[11px] text-silicon-cyan/80 mb-8 space-y-2">
                        {listing.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <ChevronRight size={14} className="text-silicon-cyan" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                )}
                {quote && (
                    <div className="p-4 border border-silicon-cyan/20 bg-silicon-cyan/5 mb-8">
                        <p className="text-sm text-silicon-cyan/80 italic leading-relaxed">"{quote}"</p>
                    </div>
                )}
                {progress && (
                    <div className="space-y-2 mb-8">
                        <div className="h-1 w-full bg-white/10">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${progress.value}%` }}
                                className="h-full bg-silicon-cyan"
                            />
                        </div>
                        <div className="flex justify-between font-mono text-[10px] text-white/40">
                            <span>{progress.label}</span>
                            <span>{progress.value}%</span>
                        </div>
                    </div>
                )}
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {tags?.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-silicon-cyan/80">
                                {tag}
                            </span>
                        ))}
                    </div>
                    {hasRawDataButton && (
                        <button className="px-4 py-2 border border-silicon-cyan text-silicon-cyan font-mono text-[10px] font-bold hover:bg-silicon-cyan hover:text-silicon-black transition-all cursor-pointer uppercase">
                            View_Raw_Data
                        </button>
                    )}
                </div>
                {image && (
                    <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none translate-x-10 translate-y-10">
                        <img
                            referrerPolicy="no-referrer"
                            src={image}
                            alt={title}
                            className="w-full h-full object-contain filter grayscale invert brightness-200"
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export function TerminalSection() {
    const logs = [
        { type: 'INFO', msg: 'Initializing SoC interconnect parameters...', color: 'text-silicon-cyan' },
        { type: 'INFO', msg: 'Mapping AXI-based data paths between QSPI Flash and HyperRAM...', color: 'text-silicon-cyan' },
        { type: 'INFO', msg: "RISC-V 5-Stage Processor successfully synthesized in Vivado.", color: 'text-silicon-cyan' },
        { type: 'INFO', msg: "Bitnet MCU MNIST inference running over AXI GPIO.", color: 'text-silicon-cyan' },
        { type: 'WARN', msg: "Pipeline hazard detected - enabling forwarding unit.", color: 'text-orange-400' },
        { type: 'SYSTEM', msg: 'Ready for inspection.', color: 'text-silicon-cyan', hasCursor: true },
    ];

    return (
        <motion.section
            id="lab-logs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-24 glass-card p-6"
        >
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 font-mono text-xs text-white/40">terminal — core_arch_logs.sh</span>
            </div>
            <div className="font-mono text-sm space-y-2 opacity-80">
                {logs.map((log, i) => (
                    <p key={i}>
                        <span className={`font-bold mr-2 ${log.color}`}>[{log.type}]</span>
                        {log.msg}
                        {log.hasCursor && <span className="inline-block w-2 h-4 bg-silicon-cyan ml-2 animate-pulse align-middle" />}
                    </p>
                ))}
            </div>
        </motion.section>
    );
}
