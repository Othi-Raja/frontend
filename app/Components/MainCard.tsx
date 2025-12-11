import Image from "next/image";
import cat from "../asserts/cat_Hand.gif";
export default function MainCard() {
  return (
    <div
      className="
      overflow-hidden
        relative
        bg-[#F4FDFF]
        rounded-[42px]
        border border-[#B3D9FF]/60
        shadow-[0_4px_20px_rgba(0,0,0,0.05)]
        flex flex-col
      "
    >
      {/* TITLE */}
   <h1
  className="
    font-(--font-dm-serif)
    italic
    text-[60px]
    tracking-[-4px]
    text-center
    inline-block
    bg-linear-to-r from-[#15313D] to-[#3CABDA]
    text-transparent bg-clip-text
  "
>
  Test Your Knowledge
</h1>
      {/* SUBTITLE */}
  <p
  className="
    font-(--font-manrope)
    text-[16px]
    text-center
    text-[#15313D]
    w-fit mx-auto
    rounded-md
    mb-10
  "
>
  Answer all questions to see your results
</p>
      {/* PROGRESS BAR */}
   <div className="grid w-2/4 mx-auto">
       <div className="w-full h-1.5 bg-[#E4F3FB] rounded-full mb-12">
        <div className="h-full bg-[#1A4F73] w-[20%] rounded-full" />
      </div>
      {/* QUESTION BOX */}
      <div className="w-full bg-[#C8ECF7] rounded-xl py-4 px-6 text-center font-medium text-[#124E70] mb-4">
        1. What sound does a cat make?
      </div>
      {/* OPTIONS */}
      <div className="space-y-3 mb-24">
        <button className="w-full bg-white hover:bg-[#E8F4FF] border border-[#CFE6F8] rounded-xl py-3">
          Bhau-Bhau
        </button>
        <button className="w-full bg-white hover:bg-[#E8F4FF] border border-[#CFE6F8] rounded-xl py-3">
          Meow-Meow
        </button>
        <button className="w-full bg-white hover:bg-[#E8F4FF] border border-[#CFE6F8] rounded-xl py-3">
          Oink-Oink
        </button>
          <div
        className="
        relative
        flex
        justify-end
       gap-3
        "
      >
        <button className="w-10 h-10 flex items-center justify-center bg-[#F0FBFF] border border-[#CFE6F8] rounded-full">
          ←
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-[#F0FBFF] border border-[#CFE6F8] rounded-full">
          →
        </button>
      </div>
      </div>
   </div>
      {/* 🐾 CAT IMAGE — BOTTOM LEFT */}
      <Image
        src={cat}
        alt="Cat Paw"
        className="
          absolute
          bottom-0 left-6
          w-[120px] 
          pointer-events-none
        "
      />
      {/* ARROWS — BOTTOM RIGHT */}
    </div>
  );
}
