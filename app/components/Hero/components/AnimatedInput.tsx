"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedInputProps {
  placeholder: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
}

export function AnimatedInput({
  placeholder,
  type,
  value,
  setValue,
}: AnimatedInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="
          w-full bg-transparent 
          outline-none 
          pb-2 
          text-base
          font-light
          text-foreground
          placeholder:font-light
          placeholder:text-zinc-600
          text-center
        "
        placeholder={placeholder}
      />

      {/* Linha inferior estática */}
      <div className="absolute left-0 right-0 bottom-0 h-[0.5px] bg-zinc-500/30" />

      {/* Linha animada */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: focused ? 1 : 0,
          opacity: focused ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          absolute left-0 right-0 bottom-0 
          h-[0.5px] 
          bg-zinc-700 
          origin-center
        "
      />
    </div>
  );
}
