import Image from "next/image";
import heroImage from "./images/hero.png";
import { VoiceNote } from "./components/voice-note";
import { MorphingButton } from "./components/MorphingButton";
import { FormCarousel } from "./components/FormCarousel";

export default function Hero() {
  return (
    <section className="relative w-full h-auto md:min-h-[720px] pt-8">
      <div className=" h-full w-full relative z-10">
        <div className="relative max-w-7xl w-full h-full flex flex-col-reverse md:flex-row py-8 items-center justify-between gap-4 md:gap-14 px-4 md:px-6 mx-auto ">
          <div className="flex flex-col w-full md:max-w-1/2 z-40">
            <h1 className="text-6xl md:text-7xl font-heading text-zinc-100">
              Você no comando!
            </h1>
            <p className="text-lg md:text-xl text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              eligendi! Beatae assumenda alias incidunt odit fuga, eos non nemo
              corporis natus! Corrupti voluptatem ipsum dolores maxime
              exercitationem, sint corporis ex!
            </p>
            <MorphingButton title="Cadastrar">
              <FormCarousel />
            </MorphingButton>
          </div>

          <div className="relative w-full md:max-w-1/2 flex items-center justify-center z-20">
            <Image
              src={heroImage}
              alt="Hero"
              width={500}
              height={500}
              className="w-full h-auto max-w-[500px]"
            />

            <VoiceNote />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[30px] left-[30px] w-5 h-5 rounded-sm bg-purple-400/50" />
            <div className="absolute top-[30px] left-[57px] w-5 h-5 rounded-sm bg-purple-400/50" />
            <div className="absolute top-[30px] left-[84px] w-5 h-5 rounded-sm bg-purple-400/50" />
            <div className="absolute top-[30px] left-[111px] w-5 h-5 rounded-sm bg-purple-400/50" />

            <div className="absolute bottom-[30px] left-[30px] w-5 h-5 rounded-sm bg-purple-400/50" />

            <div className="absolute top-[30px] right-[30px] w-5 h-5 rounded-sm bg-purple-400/50" />
            <div className="absolute bottom-[30px] right-[30px] w-5 h-5 rounded-sm bg-purple-400/50" />

            <div className="absolute top-0 left-3 md:left-[23px] h-full w-px bg-[repeating-linear-gradient(to_bottom,var(--color-purple-400)_0_4px,transparent_4px_8px)]"></div>
            <div className="absolute top-0 right-3 md:right-[23px] h-full w-px bg-[repeating-linear-gradient(to_bottom,var(--color-purple-400)_0_4px,transparent_4px_8px)]"></div>
            <div className="absolute top-[23px] left-0 w-full h-px bg-[repeating-linear-gradient(to_right,var(--color-purple-400)_0_4px,transparent_4px_8px)]"></div>
            <div className="absolute bottom-[23px] left-0 w-full h-px bg-[repeating-linear-gradient(to_right,var(--color-purple-400)_0_4px,transparent_4px_8px)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
