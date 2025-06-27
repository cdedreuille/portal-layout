"use client";

import { useState } from "react";
import { PanelLeft, PanelRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "../../components/logo";
import { Links } from "../../components/links";
import { Cards } from "../../components/cards";
import { Header } from "../../components/header";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAikaOpen, setIsAikaOpen] = useState(true);
  const duration = 0.3;

  return (
    <div>
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
        initial={{ paddingLeft: "266px", paddingRight: "266px" }}
        animate={{
          paddingLeft: isSidebarOpen ? "266px" : "24px",
          paddingRight: isAikaOpen ? "266px" : "24px",
        }}
        transition={{ duration, ease: "easeInOut" }}
        className={"pt-2 w-full"}
      >
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isAikaOpen={isAikaOpen}
          setIsAikaOpen={setIsAikaOpen}
          tabs={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ]}
        />
        <div className="px-4 pb-8">
          <div className="text-2xl mt-8 mb-1">Plugin title</div>
          <div className="text-md text-neutral-500 mb-8">
            Lorem ipsum dolor sit amet consectetur. Mauris lacus dapibus orci
            sit risus massa sed.
          </div>
          <Cards number={20} />
        </div>
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
