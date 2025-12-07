"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import {
  Users,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Cpu,
  Briefcase,
  Share2,
  PenTool,
  Terminal,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  icon: React.ReactNode;
  featured?: boolean;
  description?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Alvarez",
    role: "Growth Lead",
    image:
      "https://images.unsplash.com/photo-1587614382231-d1590f0039e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <TrendingUp className="h-3 w-3 text-lime-300" />,
  },
  {
    name: "Jackson Mitchel",
    role: "AI Lead",
    image:
      "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Cpu className="h-3 w-3 text-lime-300" />,
  },
  {
    name: "Jenny Doe",
    role: "Product Head",
    image:
      "https://images.unsplash.com/photo-1672863601285-253fc82db868?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Briefcase className="h-3 w-3 text-lime-300" />,
    featured: true,
    description: "Leading product vision & strategy",
  },
  {
    name: "Armenia Sean",
    role: "Social Media Head",
    image:
      "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Share2 className="h-3 w-3 text-lime-300" />,
  },
  {
    name: "Maya Patel",
    role: "Design Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689607810255-ff7cb8730382?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <PenTool className="h-3 w-3 text-lime-300" />,
  },
  {
    name: "Liam Becker",
    role: "Platform Engineer",
    image:
      "https://plus.unsplash.com/premium_photo-1661659508577-8ee062293b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Terminal className="h-3 w-3 text-lime-300" />,
  },
];

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  }, []);

  const getCardStyle = (index: number) => {
    let diff = index - currentIndex;

    // Adjust for wrapping
    if (diff > teamMembers.length / 2) diff -= teamMembers.length;
    if (diff < -teamMembers.length / 2) diff += teamMembers.length;

    let transform = "";
    let opacity = 1;
    let filter = "brightness(1)";
    let zIndex = 1;
    let shadow = "";
    let pointerEvents = "none"; // Disable interaction on non-active cards

    if (diff === 0) {
      transform = "translateX(0) scale(1) rotateY(0deg)";
      opacity = 1;
      zIndex = 10;
      shadow = "0 20px 60px rgba(163,230,53,0.3)";
      pointerEvents = "auto";
    } else if (diff === -1) {
      transform = "translateX(-180px) scale(0.9) rotateY(10deg)";
      opacity = 0.6;
      filter = "brightness(0.75)";
      zIndex = 5;
    } else if (diff === 1) {
      transform = "translateX(180px) scale(0.9) rotateY(-10deg)";
      opacity = 0.6;
      filter = "brightness(0.75)";
      zIndex = 5;
    } else if (diff === -2) {
      transform = "translateX(-360px) scale(0.85) rotateY(20deg)";
      opacity = 0.4;
      filter = "brightness(0.6)";
      zIndex = 2;
    } else if (diff === 2) {
      transform = "translateX(360px) scale(0.85) rotateY(-20deg)";
      opacity = 0.4;
      filter = "brightness(0.6)";
      zIndex = 2;
    } else {
      // Hide others or push them far back
      transform = `translateX(${diff * 180}px) scale(0.75) rotateY(${
        -diff * 15
      }deg)`;
      opacity = 0;
      filter = "brightness(0.5)";
      zIndex = 1;
    }

    return {
      transform,
      opacity,
      filter,
      zIndex,
      boxShadow: shadow,
      pointerEvents,
    };
  };

  return (
    <section
      className="sm:py-24 grid-corners pt-16 pb-16 relative overflow-hidden"
      id="why"
    >
      {/* Background Grid Effect - Simplified */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative z-10">
        <div className="animate-in mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-lime-400/10 px-2 py-1 text-[11px] text-lime-300 ring-1 ring-lime-300/20 uppercase tracking-tight">
            <Users className="h-3.5 w-3.5" />
            Team
          </span>
          <h2 className="sm:text-5xl text-4xl md:text-5xl tracking-tight mt-4 text-white">
            Meet the team that talks to AI like it&apos;s a pet
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-300 text-sm sm:text-base">
            The humans behind the models builders, dreamers, and delightful
            nerds.
          </p>
        </div>

        <div
          className="flex mt-16 relative items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          <button
            onClick={prevSlide}
            className="absolute left-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          <div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
            <div
              className="flex transition-transform duration-500 ease-out absolute top-0 right-0 bottom-0 left-0 items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {teamMembers.map((member, index) => {
                const style = getCardStyle(index);
                const isCenter = index === currentIndex;

                return (
                  <div
                    key={index}
                    className={`absolute w-80 h-[460px] rounded-2xl overflow-hidden transition-all duration-500 ${
                      isCenter
                        ? "ring-2 ring-lime-300/40 bg-lime-400/10"
                        : "ring-1 ring-white/10"
                    }`}
                    style={{
                      transform: style.transform,
                      opacity: style.opacity,
                      filter: style.filter,
                      zIndex: style.zIndex,
                      boxShadow: style.boxShadow,
                      //   pointerEvents: style.pointerEvents as any,
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent"></div>

                    {/* Featured Badge for Center Card if applicable */}
                    {member.featured && isCenter && (
                      <div className="absolute top-6 right-6">
                        <div className="inline-flex items-center gap-1 rounded-full bg-lime-400 px-3 py-1.5 text-xs font-medium text-neutral-950">
                          <TrendingUp className="h-3 w-3" />{" "}
                          {/* Using TrendingUp as generic featured icon */}
                          Featured
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3 backdrop-blur-md">
                        {member.icon}
                        <span className="text-white">{member.role}</span>
                      </div>
                      <p
                        className={`text-xl font-semibold tracking-tight text-white ${
                          isCenter ? "text-3xl font-bold mb-1" : ""
                        }`}
                      >
                        {member.name}
                      </p>
                      {isCenter && member.description && (
                        <p className="text-sm text-neutral-300">
                          {member.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
