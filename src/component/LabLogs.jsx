import { motion } from "motion/react";
import { 
  Zap, 
  MemoryStick, 
  Link2, 
  ExternalLink,
} from "lucide-react";

export function LabLogs() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="scanline glass-substrate p-10 border-electric-cyan/20 relative mb-8">
        <div className="pcb-trace top-0 left-0 w-full" />
        <div className="absolute top-4 right-8 font-mono text-[10px] text-electric-cyan/30">
          NODE_ID: SANTU_SARDAR // M.TECH VLSI
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <motion.div 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 rounded-full bg-electric-cyan shadow-[0_0_8px_#00dbe7]"
          />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-electric-cyan">
            Development & Research Logs
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          LAB_LOGS.EXE
        </h1>
        <p className="max-w-2xl text-on-surface-variant leading-relaxed text-lg">
          Archived documentation of FPGA-based system design, RISC-V architectures, 
          and hardware-accelerated AI inference developed during M.Tech and professional tenure.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Status Card */}
          <div className="glass-substrate p-6">
            <h3 className="font-mono text-[10px] font-bold text-on-surface-variant mb-4 tracking-widest uppercase">
              Current Focus
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-white/5 border-l border-electric-cyan/30">
                <Zap className="w-4 h-4 text-electric-cyan mt-0.5 shrink-0" />
                <div>
                  <div className="font-mono text-[12px] font-bold text-white">AI Matrix Multiplier</div>
                  <div className="text-[10px] text-on-surface-variant mt-1">Bitnet MCU on FPGA [Active]</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border-l border-white/10 opacity-70">
                <MemoryStick className="w-4 h-4 text-white mt-0.5 shrink-0" />
                <div>
                  <div className="font-mono text-[12px] font-bold text-white">RISC-V 5-Stage Core</div>
                  <div className="text-[10px] text-on-surface-variant mt-1">F-extension RTL Validation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative group overflow-hidden border border-white/10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnFbpO3JC-54S1ht_9ZDIytXR-a9liMgaNpGKnIvl-7HaoaQYXTBLEw6Pqs9J4v7XeQKs0kcS_IiVkf52nQ0Ulj1YGSqpWX4pGNU_K0T3x5HWmI1YuJP7FmKF3uDCXfTi0ZB8sFnXHqQKkBYboM4RrMaGZbOLbmwdJMC1t5Jy-eKpJcZRVpxhOoyC9JJDACgwH1wt-86Y7rdq3niu8A_hD0Dl8_B0mawBmC9bCGTOmF9cO12GzP1Utu-vjw3OWNkp8cPWR9fiB7RgB" 
              alt="Microchip Visual"
              className="w-full aspect-square object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 mix-blend-screen"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-silicon-black to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-silicon-black/80 backdrop-blur-md p-3 border border-electric-cyan/30 text-center">
               <span className="font-mono text-[10px] font-bold text-electric-cyan uppercase tracking-widest">
                AI_ACCEL_FPGA_V1.RAW
               </span>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Section 01 */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="font-display text-2xl font-bold flex items-center gap-4 text-white">
                <span className="text-white/20 font-mono text-xl">01</span> Hardware Engineering Projects
              </h2>
            </div>

            {[
              {
                id: "RISCV.CORE.5",
                journal: "Processor Architecture",
                title: "RISC-V 5-Stage Pipelined Processor with F-Extension",
                desc: "Designed and implemented a 5-stage pipelined RISC-V (RV32IM) processor with hazard detection, forwarding, and stalling mechanisms. Extended architecture to support floating-point operations.",
                tags: ["VERILOG", "VIVADO", "RV32IM+F"]
              },
              {
                id: "IEEE.754.ALU",
                journal: "Digital Design",
                title: "Half-Precision Floating Point ALU",
                desc: "Designed IEEE 754 compliant 16-bit floating-point ALU supporting addition, subtraction, multiplication, and division. Verified RTL modules with functional validation.",
                tags: ["ALU", "QUARTUS", "FPGA"]
              }
            ].map((paper) => (
              <div key={paper.id} className="glass-substrate p-8 group hover:border-electric-cyan/40 transition-all relative">
                <div className="absolute top-4 right-6 font-mono text-[10px] text-white/20">{paper.id}</div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <span className="font-mono text-[10px] text-ion-purple font-bold uppercase tracking-wider mb-2 block">
                      {paper.journal}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-cyan transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-on-surface-variant mb-6 text-sm line-clamp-2 leading-relaxed">
                      {paper.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-ion-purple/10 border border-ion-purple/20 text-ion-purple font-mono text-[8px] font-bold uppercase tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2 shrink-0 justify-end md:justify-center">
                    <button className="flex-1 px-4 py-2 bg-electric-cyan/5 border border-electric-cyan text-electric-cyan font-mono text-[10px] font-bold hover:bg-electric-cyan hover:text-silicon-black transition-all">
                      VIEW REPO
                    </button>
                    <button className="flex-1 px-4 py-2 border border-white/10 text-on-surface-variant font-mono text-[10px] font-bold hover:border-electric-cyan hover:text-white transition-all flex items-center justify-center gap-2">
                      <Link2 className="w-3 h-3" /> DOCS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 02 */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="font-display text-2xl font-bold flex items-center gap-4 text-white">
                <span className="text-white/20 font-mono text-xl">02</span> Publications & Conferences
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  conf: "VLSI Design Conf 2026 | Pune",
                  title: "DgridSoC AI Accelerator: System-level memory and interconnect architecture for AI inference workloads",
                  link: "PRESENTATION"
                }
              ].map((item, i) => (
                <div key={i} className="glass-substrate p-5 group hover:border-electric-cyan/20 transition-all">
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase mb-1 block">
                    {item.conf}
                  </span>
                  <h4 className="font-bold text-white text-sm mb-4 leading-tight">
                    {item.title}
                  </h4>
                  <a href="#" className="font-mono text-[10px] text-electric-cyan hover:underline flex items-center gap-1.5 font-bold">
                    [{item.link}] <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
