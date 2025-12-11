"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function FinalScore({ score }: { score: number }) {
  const [digits, setDigits] = useState<string[]>([]);
  useEffect(() => {
    setDigits(score.toString().split("")); // split digits e.g. "62" → ["6","2"]
  }, [score]);
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        h-screen w-screen fixed inset-0
        bg-white
        flex flex-col items-center justify-center
        z-9999
      "
    >
      {/* Top Tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mb-6 px-6 py-2 bg-white text-[#15313D] text-[20px] rounded-xl"
      >
        Keep Learning!
      </motion.div>
      {/* Title */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="
    [font-family:var(--font-dm-serif)]
    text-[60px]
    bg-[linear-gradient(90deg,#15313D_0%,#3CABDA_100%)]
    bg-clip-text
    text-transparent
  "
>
  Your Final score is
</motion.p>
      {/* DIGIT ROLLING ANIMATION (Odometer Speedometer Style) */}
    <div className="flex items-center gap-2 mt-2">
  {digits.map((digit, index) => (
    <div
      key={index}
      className="overflow-hidden h-[160px] w-[80px] flex justify-center"
    >
      <motion.div
        initial={{ y: "-150%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay: 0.3 + index * 0.15,
        }}
        className="text-[160px] leading-none [font-family:var(--font-dm-serif)] text-[#266580]"
      >
        {digit}
      </motion.div>
    </div>
  ))}
  {/* PERFECTLY CENTERED % SYMBOL */}
  <span className="text-[120px] leading-none [font-family:var(--font-dm-serif)] text-[#266580] flex items-center">
    %
  </span>
</div>
      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="
          mt-10 px-6 py-3 text-lg cursor-pointer
          [font-family:var(--font-inter)]
          font-semibold text-[22px] leading-6
          bg-[linear-gradient(89deg,#C6E9F7_0%,#E5F8FF_100%)]
          rounded-xl text-[#15313D] shadow 
        "
        onClick={() => window.location.reload()}
      >
        Start Again
      </motion.button>
    </motion.div>
  );
}
