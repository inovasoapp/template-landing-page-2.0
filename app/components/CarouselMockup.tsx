"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screens = [
  {
    id: 1,
    color: "bg-blue-100",
    content: (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 h-16 w-16 rounded-2xl bg-blue-500 shadow-lg" />
        <h3 className="mb-2 text-lg font-bold text-gray-800">Analytics</h3>
        <p className="text-sm text-gray-500">
          Track your progress with detailed charts.
        </p>
        <div className="mt-8 space-y-2 w-full">
          <div className="h-2 w-full rounded-full bg-blue-200" />
          <div className="h-2 w-3/4 rounded-full bg-blue-200" />
          <div className="h-2 w-1/2 rounded-full bg-blue-200" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    color: "bg-purple-100",
    content: (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 h-16 w-16 rounded-2xl bg-purple-500 shadow-lg" />
        <h3 className="mb-2 text-lg font-bold text-gray-800">Collaboration</h3>
        <p className="text-sm text-gray-500">
          Work together with your team in real-time.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-2 w-full">
          <div className="h-20 rounded-lg bg-white/50" />
          <div className="h-20 rounded-lg bg-white/50" />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    color: "bg-orange-100",
    content: (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 h-16 w-16 rounded-2xl bg-orange-500 shadow-lg" />
        <h3 className="mb-2 text-lg font-bold text-gray-800">Security</h3>
        <p className="text-sm text-gray-500">
          Your data is safe with enterprise-grade encryption.
        </p>
        <div className="mt-8 h-12 w-full rounded-xl bg-orange-200/50 flex items-center px-4">
          <div className="h-2 w-2 rounded-full bg-orange-400 mr-2" />
          <div className="h-2 w-1/2 rounded-full bg-orange-300" />
        </div>
      </div>
    ),
  },
];

export function CarouselMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % screens.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative mx-auto w-full max-w-sm py-12">
      {/* iPhone 15 Mockup Frame */}
      <div className="relative z-10 mx-auto aspect-[9/19.5] w-full max-w-[300px] select-none">
        {/* Frame Border */}
        <div className="absolute inset-0 z-50 rounded-[55px] border-8 border-gray-900 shadow-2xl pointer-events-none">
          {/* Inner Bezel */}
          <div className="absolute inset-0 rounded-[46px] border-2 border-gray-800/20"></div>
        </div>

        {/* Dynamic Island Area */}
        <div className="absolute left-1/2 top-4 z-50 h-[35px] w-[120px] -translate-x-1/2 rounded-full bg-black pointer-events-none flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-[#1a1a1a] absolute right-3 blur-[0.5px]"></div>
        </div>

        {/* Screen Content Area */}
        <div className="relative h-full w-full overflow-hidden rounded-[78px] bg-white">
          <div className="relative h-full w-full">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;

                  if (swipe < -10000) {
                    handleNext();
                  } else if (swipe > 10000) {
                    handlePrev();
                  }
                }}
                className={`absolute inset-0 flex items-center justify-center ${screens[activeIndex].color} cursor-grab active:cursor-grabbing`}
              >
                {screens[activeIndex].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Status Bar Mock */}
          <div className="absolute top-0 w-full px-6 pt-6 flex justify-between items-center z-40 text-xs font-medium text-black/60 pointer-events-none">
            <span>9:41</span>
            <div className="flex gap-1.5">
              <div className="w-4 h-4 rounded-full border border-current opacity-60"></div>
              <div className="w-4 h-4 rounded-full border border-current opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 hover:bg-gray-50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600 transition-colors group-hover:text-gray-900" />
        </button>
        <button
          onClick={handleNext}
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 hover:bg-gray-50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-600 transition-colors group-hover:text-gray-900" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {screens.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
