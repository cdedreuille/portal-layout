"use client";

import { PanelLeft, PanelRight, ChevronRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import clsx from "clsx";
import { LogoConfidence } from "./logo-confidence";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState<string | null>(
    tabs?.[0]?.name || null
  );
  const { scrollY } = useScroll();

  const breadcrumbOpacity = useTransform(scrollY, [50, 80], [0, 1]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  useMotionValueEvent(breadcrumbOpacity, "change", (latest) => {
    console.log("Opacity: ", latest);
  });

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-4 bg-black z-10"></div>
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
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <LogoConfidence />
              <div>Confidence</div>
            </div>
            <motion.div
              className="flex items-center gap-2"
              style={{ opacity: breadcrumbOpacity }}
            >
              <ChevronRight size={16} className="text-neutral-400" />
              <div className="text-neutral-400 text-sm">A/B Tests</div>
              <ChevronRight size={16} className="text-neutral-400" />
              <div className="text-white text-sm">Name of the A/B Test</div>
            </motion.div>
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
      <div className="rounded bg-[#191919] px-1 flex items-center border border-white/10 gap-1 py-1">
        {tabs?.map((tab) => (
          <button
            key={tab.name}
            className={clsx(
              "hover:bg-neutral-800 px-3 py-1 rounded text-neutral-400 text-sm relative cursor-pointer",
              activeTab === tab.name &&
                "before:content-[''] before:absolute before:-bottom-[5px] before:left-2 before:right-2 before:h-[1px] before:bg-white"
            )}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </>
  );
};
