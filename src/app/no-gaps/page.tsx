"use client";

import { useState } from "react";
import { PanelLeft, PanelRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "../../components/logo";
import { Links } from "../../components/links";
import { Cards } from "../../components/cards";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAikaOpen, setIsAikaOpen] = useState(true);
  const duration = 0.3;

  return (
    <div className="flex">
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.div
            key="sidebar"
            className="fixed top-0 bottom-0 left-0 bg-[#191919] w-[250px] border-r border-white/10"
            initial={{ opacity: 0, x: -266 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -266 }}
            transition={{ duration, ease: "easeInOut" }}
          >
            <div className="flex justify-between h-[52px] items-center px-4">
              <Logo />
              <div
                className="flex items-center justify-center w-4 h-4 cursor-pointer"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <PanelRight size={16} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        key="toolbar-no-gaps"
        className="fixed top-0 h-[52px] bg-[#191919] px-6 flex items-center justify-between border-b border-white/10"
        initial={{ left: "250px", right: "250px" }}
        animate={{
          left: isSidebarOpen ? "250px" : "0px",
          right: isAikaOpen ? "250px" : "0px",
        }}
        transition={{ duration, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3">
          <AnimatePresence>
            {!isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center w-4 h-4 cursor-pointer"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <PanelRight size={16} />
              </motion.div>
            )}
          </AnimatePresence>
          Home
        </div>
        <div>
          <AnimatePresence>
            {!isAikaOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center w-4 h-4 cursor-pointer"
                onClick={() => setIsAikaOpen(!isAikaOpen)}
              >
                <PanelLeft size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <motion.div
        initial={{ paddingLeft: "274px", paddingRight: "274px" }}
        animate={{
          paddingLeft: isSidebarOpen ? "274px" : "24px",
          paddingRight: isAikaOpen ? "274px" : "24px",
        }}
        transition={{ duration, ease: "easeInOut" }}
        className={"pt-[72px] w-full"}
      >
        <Links />
        <Cards />
      </motion.div>
      <AnimatePresence initial={false}>
        {isAikaOpen && (
          <motion.div
            key="aika"
            className="fixed top-0 bottom-0 right-0 bg-[#191919] w-[250px] border-l border-white/10"
            initial={{ opacity: 0, x: 266 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 266 }}
            transition={{ duration, ease: "easeInOut" }}
          >
            <div className="flex justify-start h-[52px] items-center px-4">
              <div
                className="flex items-center justify-center w-4 h-4 cursor-pointer"
                onClick={() => setIsAikaOpen(!isAikaOpen)}
              >
                <PanelRight size={16} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
