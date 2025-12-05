export function ImageBentoGrid() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
        <div className="relative max-w-xl space-y-6">
          <h2 className="text-4xl font-medium lg:text-5xl text-zinc-100">
            The Gemini ecosystem brings together our models.
          </h2>
          <p className="text-zinc-300">
            Gemini is evolving to be more than just the models.{" "}
            <span className="font-medium">It supports an entire ecosystem</span>{" "}
            — from products innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-4 md:gap-2">
          <div className="h-56 md:h-auto md:col-span-1 md:row-span-4 md:col-start-1 md:row-start-1 bg-red-500 rounded-sm flex items-center justify-center text-2xl font-bold text-white">
            01
          </div>
          <div className="h-56 md:col-span-1 md:row-span-2 md:col-start-2 md:row-start-1 bg-green-500 rounded-sm flex items-center justify-center text-2xl font-bold text-white">
            02
          </div>
          <div className="h-56 md:h-auto md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-1 bg-blue-300 rounded-sm flex items-center justify-center text-2xl font-bold text-zinc-800">
            02
          </div>
          <div className="h-56 md:col-span-2 md:row-span-2 md:col-start-2 md:row-start-3 bg-yellow-500 rounded-sm flex items-center justify-center text-2xl font-bold text-white">
            03
          </div>
          <div className="h-56 md:h-auto md:col-span-1 md:row-span-4 md:col-start-4 md:row-start-1 bg-yellow-500 rounded-sm flex items-center justify-center text-2xl font-bold text-white">
            04
          </div>
        </div>
      </div>
    </section>
  );
}
