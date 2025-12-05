import Image from "next/image";

interface UserCardProps {
  name: string;
  image: string;
}

export function UserCard({ name, image }: UserCardProps) {
  return (
    <div className="border-purple-300/20 relative  my-6 flex h-[336px] max-w-[250px] flex-col items-start border p-4 md:h-122 md:max-w-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-plus text-[#fff200] absolute -left-4 -top-4 h-8 w-8"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-plus text-[#fff200] absolute -bottom-4 -left-4 h-8 w-8"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-plus text-[#fff200] absolute -right-4 -top-4 h-8 w-8"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-plus text-[#fff200] absolute -bottom-4 -right-4 h-8 w-8"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      <div aria-owns="rmiz-modal-e758a6d76938" data-rmiz="">
        <div data-rmiz-content="not-found" style={{ visibility: "visible" }}>
          <Image
            alt="Your Image"
            width="700"
            height="700"
            className="h-[300px] object-cover md:h-[404px]"
            src={image}
          />
          <div className="relative -mt-14 bg-linear-to-b from-black/0 to-purple-500 text-white md:-mt-24">
            <h1 className="z-20 items-center text-center text-[40px] font-black tracking-tighter md:text-[70px]">
              {name}
            </h1>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
