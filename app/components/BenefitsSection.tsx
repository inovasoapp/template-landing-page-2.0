import { CircleCheckBig } from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-32 bg-amber-50/10">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
        {/* <h2 className="text-4xl font-medium lg:text-5xl text-zinc-100">
          Benefícios
        </h2> */}

        <div className="group flex flex-col md:flex-row h-full gap-8 py-8">
          <div className="relative flex-none w-full md:w-sm h-60 bg-zinc-50/10 rounded-sm transform -rotate-2 shadow-xl group-hover:rotate-0 transition-all duration-300">
            <div className="absolute left-16 -top-3 w-24 h-6 bg-amber-500/50 " />
          </div>

          <div className=" flex flex-col w-full">
            <div className="flex flex-col">
              <h2 className="text-4xl font-medium lg:text-5xl text-zinc-100">
                Título
              </h2>
              <p className="text-zinc-300 max-w-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident odio inventore repellendus, voluptatibus voluptate.
              </p>

              <div className="flex flex-col gap-2 mt-6 mb-6">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CircleCheckBig size={20} strokeWidth={2} />
                  <p className="text-zinc-200 font-light">Benefício 1</p>
                </div>

                <div className="flex items-center gap-2 text-zinc-300">
                  <CircleCheckBig size={20} strokeWidth={2} />
                  <p className="text-zinc-200 font-light">Benefício 2</p>
                </div>

                <div className="flex items-center gap-2 text-zinc-300">
                  <CircleCheckBig size={20} strokeWidth={2} />
                  <p className="text-zinc-200 font-light">Benefício 3</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-around w-full mt-auto py-4 border-t-[0.5px] border-zinc-50/10 gap-6 md:gap-0">
              <div className="flex flex-col">
                <h3 className="text-2xl font-medium text-zinc-100">
                  Benefício 1
                </h3>
                <p className="text-zinc-300">Benefício 1</p>
              </div>

              <div className="hidden md:block w-px h-6 bg-zinc-50/40" />

              <div className="flex flex-col">
                <h3 className="text-2xl font-medium text-zinc-100">
                  Benefício 2
                </h3>
                <p className="text-zinc-300">Benefício 2</p>
              </div>

              <div className="hidden md:block w-px h-6 bg-zinc-50/40" />

              <div className="flex flex-col ">
                <h3 className="text-2xl font-medium text-zinc-100">
                  Benefício 3
                </h3>
                <p className="text-zinc-300">Benefício 3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-center mt-20 md:mt-40">
          <h2 className="text-4xl font-medium lg:text-5xl text-zinc-100">
            Benefícios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full  gap-4 mt-12">
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="w-16 h-16 bg-zinc-100/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl text-zinc-100/50">1</span>
              </div>

              <span className="text-zinc-300 text-sm font-light">STEP 1</span>

              <h3 className="text-2xl font-medium text-zinc-100 mb-4">
                Conecte seu repositório
              </h3>
              <p className="text-zinc-300 w-3/4 text-center">
                Conecte seu repositório Git para iniciar a sincronização e
                começar a usar o Gemini.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center flex-1">
              <div className="w-16 h-16 bg-zinc-100/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl text-zinc-100/50">2</span>
              </div>

              <span className="text-zinc-300 text-sm font-light">STEP 2</span>

              <h3 className="text-2xl font-medium text-zinc-100 mb-4">
                Crie seu modelo
              </h3>
              <p className="text-zinc-300 w-3/4 text-center">
                Construa um modelo para iniciar seu projeto que gera conteúdo
                original.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center flex-1">
              <div className="w-16 h-16 bg-zinc-100/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl text-zinc-100/50">3</span>
              </div>

              <span className="text-zinc-300 text-sm font-light">STEP 3</span>

              <h3 className="text-2xl font-medium text-zinc-100 mb-4">
                Inicie seu projeto
              </h3>
              <p className="text-zinc-300 w-3/4 text-center">
                Porfim inicie um projeto de forma dinamica e se destaque no
                mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
