"use client";

import { PanelLeft, PanelRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import { LogoConfidence } from "./logo-confidence";

interface Tab {
  name: string;
  href: string;
}

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  isAikaOpen: boolean;
  setIsAikaOpen: (isAikaOpen: boolean) => void;
  tabs?: Tab[];
}

export const Header = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isAikaOpen,
  setIsAikaOpen,
  tabs,
}: HeaderProps) => {
  const hasTabs = tabs && tabs.length > 0;

  return (
    <>
      <div
        className={clsx(
          "sticky top-2 h-[52px] rounded bg-[#191919] px-4 flex items-center justify-between border border-white/10 z-10",
          hasTabs && "mb-2"
        )}
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
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <LogoConfidence />
            <div>Confidence</div>
          </div>
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
      </div>
      <div className="rounded bg-[#191919] px-2 flex items-center border border-white/10 gap-2 py-1">
        {tabs?.map((tab) => (
          <a
            href={tab.href}
            key={tab.name}
            className="hover:bg-neutral-800 px-2 py-1 rounded text-neutral-400 text-sm"
          >
            {tab.name}
          </a>
        ))}
      </div>
    </>
  );
};
