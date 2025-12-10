"use client";

import { useState, useEffect, cloneElement, isValidElement } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface MorphingButtonProps {
  title: string;
  children: React.ReactNode;
}

export function MorphingButton({ title, children }: MorphingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Placeholder to hold space when the motion button is gone (morphed into modal) */}
      {isOpen && (
        <button className="bg-amber-400 text-black px-6 py-3 rounded-full mt-10 font-medium invisible">
          {title}
        </button>
      )}

      {!isOpen && (
        <motion.button
          layoutId="expandable-button"
          onClick={() => setIsOpen(true)}
          className="bg-amber-400 text-black px-6 py-3 rounded-full mt-10 hover:cursor-pointer hover:bg-amber-500 transition-colors duration-300 font-medium"
          style={{ borderRadius: "9999px" }}
        >
          {title}
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId="expandable-button"
            className="fixed inset-0 z-999 h-dvh bg-amber-400 flex items-center justify-center overflow-hidden"
            style={{ borderRadius: 0 }}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-6 right-6 p-2 text-black hover:bg-black/10 rounded-full transition-colors cursor-pointer z-10000"
            >
              <X size={32} className="text-zinc-600" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="text-black text-4xl font-bold"
            >
              {isValidElement(children)
                ? cloneElement(
                    children as React.ReactElement<{ onClose?: () => void }>,
                    {
                      onClose: () => setIsOpen(false),
                    }
                  )
                : children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
