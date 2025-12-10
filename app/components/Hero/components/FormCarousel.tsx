"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { AnimatedInput } from "./AnimatedInput";

export function FormCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => prev + 200);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 200);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNextSlide]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 h-dvh mx-auto py-8 px-6">
      <span className="hidden md:block absolute bottom-20 right-20 text-sm text-zinc-600 font-light">
        Pressione Enter para avançar
      </span>
      <form
        action=""
        className={`w-dvw h-8/9 flex transition-all duration-300`}
        style={{ marginRight: `${currentSlide}%` }}
      >
        <div className="w-dvw h-full flex flex-none flex-col items-center justify-center gap-2 px-4">
          <h2 className="text-4xl md:text-7xl text-zinc-800">
            Que bom que você chegou!
          </h2>
          <p className="text-zinc-700 text-xl text-center font-light">
            Preencha o formulário para se cadastrar e receber o seu cupom de
            desconto.
          </p>

          <button
            type="button"
            className="group flex items-center gap-2 bg-amber-500 text-zinc-800 text-base md:text-xl px-8 py-2 rounded-full mt-10 hover:cursor-pointer hover:bg-amber-600/50 transition-colors duration-300 font-medium"
            onClick={handleNextSlide}
          >
            <span>Começar</span>
            <ArrowRight
              size={24}
              className="group-hover:translate-x-2 transition-transform duration-300"
            />
          </button>
        </div>

        <div className="w-dvw h-full flex flex-none flex-col items-center justify-center gap-2 px-4">
          <h2 className="text-3xl md:text-3xl text-zinc-800">
            1 - Qual o seu nome?
          </h2>
          {/* <p className="text-zinc-700 text-xl text-center font-light">
            Preencha o formulário para se cadastrar e receber o seu cupom de
            desconto.
          </p> */}
          <div className="max-w-xl w-full">
            <AnimatedInput
              value={name}
              setValue={setName}
              placeholder="Digite aqui..."
              type="text"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="group flex items-center gap-2 border border-amber-500 text-zinc-800 text-base md:text-xl px-8 py-2 rounded-full mt-10 hover:cursor-pointer hover:bg-amber-600/10 transition-colors duration-300 font-medium"
              onClick={handlePrevSlide}
            >
              <ArrowLeft
                size={24}
                className="group-hover:-translate-x-2 transition-transform duration-300"
              />
              <span>Voltar</span>
            </button>

            <button
              type="button"
              className="group flex items-center gap-2 bg-amber-500 text-zinc-800 text-base md:text-xl px-8 py-2 rounded-full mt-10 hover:cursor-pointer hover:bg-amber-600/50 transition-colors duration-300 font-medium"
              onClick={handleNextSlide}
            >
              <span>Continuar</span>
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        <div className="w-dvw h-full flex flex-none flex-col items-center justify-center gap-2 px-4">
          <h2 className="text-3xl md:text-3xl text-zinc-800">
            2 - Que o seu melhor e-mail?
          </h2>

          <div className="max-w-xl w-full">
            <AnimatedInput
              value={email}
              setValue={setEmail}
              placeholder="Informe seu melhor e-mail..."
              type="email"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="group flex items-center gap-2 border border-amber-500 text-zinc-800 text-base md:text-xl px-8 py-2 rounded-full mt-10 hover:cursor-pointer hover:bg-amber-600/10 transition-colors duration-300 font-medium"
              onClick={handlePrevSlide}
            >
              <ArrowLeft
                size={24}
                className="group-hover:-translate-x-2 transition-transform duration-300"
              />
              <span>Voltar</span>
            </button>

            <button
              type="button"
              className="group flex items-center gap-2 bg-amber-500 text-zinc-800 text-base md:text-xl px-8 py-2 rounded-full mt-10 hover:cursor-pointer hover:bg-amber-600/50 transition-colors duration-300 font-medium"
              onClick={handleNextSlide}
            >
              <span>Finalizar</span>
            </button>
          </div>
        </div>

        <div className="w-dvw h-full flex flex-none flex-col items-center justify-center gap-2 px-4">
          <h2 className="text-4xl md:text-7xl text-zinc-800">Obrigado!</h2>
          <p className="text-zinc-700 text-xl text-center font-light">
            Agora você receberá o seu cupom de desconto.
          </p>

          <button
            type="button"
            className="group flex items-center gap-2 bg-amber-500 text-zinc-800 text-base md:text-xl px-8 py-2 rounded-full mt-10 hover:cursor-pointer hover:bg-amber-600/50 transition-colors duration-300 font-medium"
          >
            <span>Finalizar</span>
          </button>
        </div>
      </form>
    </div>
  );
}
