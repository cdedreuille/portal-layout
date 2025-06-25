"use client";

import { useState } from "react";
import { PanelLeft, PanelRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "../../components/logo";
import { Links } from "../../components/links";

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
            <div className="flex justify-between h-[52px] items-center px-4 mt-2">
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
        className="fixed top-2 left-[266px] right-[266px] h-[52px] rounded bg-[#191919] px-4 flex items-center justify-between border border-white/10"
        initial={{ left: "258px", right: "258px" }}
        animate={{
          left: isSidebarOpen ? "258px" : "8px",
          right: isAikaOpen ? "258px" : "8px",
        }}
        transition={{ duration, ease: "easeInOut" }}
      >
        <div>
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
        className={"pt-[80px] w-full"}
      >
        <Links />
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
            <div className="flex justify-start h-[52px] items-center px-4 mt-2">
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
