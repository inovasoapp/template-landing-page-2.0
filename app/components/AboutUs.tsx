import { QRCodeInovaso } from "./QRCodeInovaso";
import { UserCard } from "./UserCard";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
        <div className="flex gap-8 px-4 ">
          <UserCard
            name="Ana Clara"
            image="https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <div className="flex flex-1 flex-col py-4 ">
            <div className="relative space-y-6 max-w-xl">
              <h2 className="text-4xl font-medium lg:text-5xl text-zinc-100">
                The Gemini ecosystem brings together our models.
              </h2>
              <p className="text-zinc-300">
                Gemini is evolving to be more than just the models.{" "}
                <span className="font-medium">
                  It supports an entire ecosystem
                </span>{" "}
                — from products innovate.
              </p>
            </div>

            <div className="flex gap-4 mt-14">
              <QRCodeInovaso />

              <div className="flex flex-1 flex-col">
                <ul>
                  <li className="text-zinc-300 text-xl">1</li>
                  <li className="text-zinc-300 text-xl">2</li>
                  <li className="text-zinc-300 text-xl">3</li>
                </ul>

                <div className="w-full h-px bg-zinc-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
