import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Nav, Footer } from "./component/Layout";
import { Header, ProjectGrid, TerminalSection } from "./component/jay";
import { Init } from "./component/Init";
import { LabLogs } from "./component/LabLogs";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("INIT");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-silicon-black selection:bg-silicon-cyan/30 text-white/90 font-sans">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-silicon-black"
          >
            <div className="relative w-48 h-48 mb-8">
              <div className="absolute inset-0 rounded-full border border-silicon-cyan/20 animate-ping" style={{ animationDuration: '3s' }} />
              <motion.img
                src="/loading.png"
                alt="Loading Core"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,219,231,0.5)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-silicon-cyan/10 rounded-full blur-[40px] animate-pulse-glow" />
            </div>

            <div className="font-mono text-silicon-cyan text-sm tracking-[0.3em] font-bold uppercase animate-pulse">
              Santu_Sardar
            </div>
            <div className="w-48 h-[2px] bg-white/10 mt-6 overflow-hidden">
              <motion.div
                className="h-full bg-silicon-cyan shadow-[0_0_10px_#00dbe7]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col min-h-screen"
          >
            <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-grow pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto w-full relative">
              {activeTab === "INIT" && <Init />}

              {activeTab === "CORE_PROJECTS" && (
                <div id="projects" className="pt-4">
                  <Header />
                  <ProjectGrid />
                  <TerminalSection />
                </div>
              )}
              {activeTab === "LAB_LOGS" && <LabLogs />}
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
