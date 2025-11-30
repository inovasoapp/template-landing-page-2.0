import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export function LogoCloud() {
  return (
    <section className="bg-purple-500 overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row md:pr-20">
          <div className="md:max-w-44 md:border-r md:border-purple-400 md:pr-6">
            <p className="text-end text-sm text-purple-100">
              Usamos as melhores marcas
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)] opacity-50 ">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <Image
                  className="mx-auto h-5 w-auto brightness-0 invert"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto" }}
                />
              </div>

              <div className="flex">
                <Image
                  className="mx-auto h-4 w-auto brightness-0 invert"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  alt="Column Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto" }}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-4 w-auto brightness-0 invert"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  alt="GitHub Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto" }}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-5 w-auto brightness-0 invert"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  alt="Nike Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto" }}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-5 w-auto brightness-0 invert"
                  src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                  alt="Lemon Squeezy Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto" }}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-4 w-auto brightness-0 invert"
                  src="https://html.tailus.io/blocks/customers/laravel.svg"
                  alt="Laravel Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto" }}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-7 w-auto brightness-0 invert"
                  src="https://html.tailus.io/blocks/customers/lilly.svg"
                  alt="Lilly Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto" }}
                />
              </div>

              <div className="flex">
                <Image
                  className="mx-auto h-6 w-auto brightness-0 invert"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  alt="OpenAI Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto" }}
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-purple-500 absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-purple-500 absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
