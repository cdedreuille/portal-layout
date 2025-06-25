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
            className="fixed top-2 bottom-2 left-2 rounded bg-[#191919] w-[250px] border border-white/10"
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
        className="fixed top-2 left-[266px] right-[266px] h-[52px] rounded bg-[#191919] px-4 flex items-center justify-between border border-white/10"
        animate={{
          left: isSidebarOpen ? "266px" : "8px",
          right: isAikaOpen ? "266px" : "8px",
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
        initial={{ paddingLeft: "282px", paddingRight: "282px" }}
        animate={{
          paddingLeft: isSidebarOpen ? "282px" : "24px",
          paddingRight: isAikaOpen ? "282px" : "24px",
        }}
        transition={{ duration, ease: "easeInOut" }}
        className={"pt-[80px] w-full"}
      >
        <Links />
        <Cards />
      </motion.div>
      <AnimatePresence initial={false}>
        {isAikaOpen && (
          <motion.div
            key="aika"
            className="fixed top-2 bottom-2 right-2 rounded bg-[#191919] w-[250px] border border-white/10"
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
