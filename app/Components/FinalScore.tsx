"use client";
import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
export default function FinalScore({ score }: { score: number }) {
  const [displayScore, setDisplayScore] = useState(0);
  useEffect(() => {
    const controls = animate(0, score, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplayScore(Math.round(v)),
    });
    return () => controls.stop();
  }, [score]);
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
       className=" h-screen w-screen
    fixed inset-0
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
        className="  [font-family:var(--font-dm-serif)]   text-[60px] text-[#15313D]"
      >
        Your Final score is
      </motion.p>
      {/* Animated Score */}
      <motion.p
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-[162.63px] font-var(--font-dm-serif) text-[#15313D]"
      >
        {displayScore}%
      </motion.p>
      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="
          mt-10 px-6 py-3 text-lg 
cursor-pointer
            [font-family:var(--font-inter)]
  font-semibold
  text-[22px]
  leading-6
          bg-[linear-gradient(89deg,#C6E9F7_0%,#E5F8FF_100%)] 
          rounded-xl text-[#124E70] shadow
        "
        onClick={() => window.location.reload()}
      >
        Start Again
      </motion.button>
    </motion.div>
  );
}
