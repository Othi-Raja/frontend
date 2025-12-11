"use client";
import { useState } from "react";
import Image from "next/image";
import cat from "../assets/cat_Hand.gif";
import ResultLoader from "./ResultLoader";
import FinalScore from "./FinalScore";
import forwardArrow from '../assets/arrow_forward.png'
import backArrow from '../assets/arrow_back.png'
import QuestionCard from "./QuestionCard";
import bestOfLuck from '../assets/Group.png'
import '../globals.css'
import { AnimatePresence,motion } from "framer-motion";
const questions = [
  {
    q: "1. What sound does a cat make?",
    opts: [
      { id: 1, text: "Bhau-Bhau" },
      { id: 2, text: "Meow-Meow" },
      { id: 3, text: "Oink-Oink" },
    ],
    correct: 2,
  },
  {
    q: "2. What would you probably find in your fridge?",
    opts: [
      { id: 1, text: "Shoes" },
      { id: 2, text: "Ice Cream" },
      { id: 3, text: "Books" },
    ],
    correct: 2,
  },
  {
    q: "3. What color are bananas?",
    opts: [
      { id: 1, text: "Blue" },
      { id: 2, text: "Yellow" },
      { id: 3, text: "Red" },
    ],
    correct: 2,
  },
  {
    q: "4. How many stars are in the sky?",
    opts: [
      { id: 1, text: "Two" },
      { id: 2, text: "Infinite" },
      { id: 3, text: "One Hundred" },
    ],
    correct: 2,
  },
];
export default function QuizCard() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Select Option
  const chooseOption = (id: number) => {
    const updated = [...selected];
    updated[index] = id;
    setSelected(updated);
  };
  // Next Question
  const next = () => {
    if (!selected[index]) return;  
    if (index < questions.length - 1) {
      setIndex(index + 1);
    }
  };
  // Previous Question
  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };
  // Submit
  const submitQuiz = () => {
    let sc = 0;
    selected.forEach((val, i) => {
      if (val === questions[i].correct) sc += 25;
    });
    setScore(sc);
      setIsLoading(false);
      setSubmitted(true);
  };
  return (
    <div
  className={`${submitted?'w-screen h-screen flex items-center justify-center':'w-[90%] max-w-[1600px] h-[90vh] m-4'}
         rounded-[50px]
         border-[0.72px] border-white
         bg-[linear-gradient(112.86deg,rgba(255,255,255,0.4)_-6.68%,rgba(255,255,255,0.12)_45.63%,rgba(255,255,255,0.4)_103.45%)]
         backdrop-blur-xl
         shadow-[0_20px_60px_rgba(0,0,0,0.08)]
         p-5
         `}
>
    <div className={`relative ${!submitted ?'bg-[#F4FDFF] shadow-lg':'bg-transparent'} rounded-[42px] p-5 border border-[#B3D9FF]/60 `}>
  {!submitted && <div>
        {/* TITLE */}
      <h1 className="
      font-[90px]
         [font-family:var(--font-dm-serif)]
        text-[60px] tracking-[-2px] text-center
        bg-linear-to-r from-[#15313D] to-[#3CABDA]
        text-transparent bg-clip-text
      ">
        Test Your Knowledge
      </h1>
      {/* SUBTITLE */}
      <p className="font-var(--font-manrope) text-[17px] text-center text-[#15313D] mb-12">
        Answer all questions to see your results
      </p>
      {/* STATUS BAR */}
   {/* STATUS BAR WITH SEGMENTS */}
<div className="w-2/4 mx-auto flex gap-3 mb-10">
  {questions.map((_, i) => {
    const isFilled = i < index;              // completely filled segments
    const isCurrent = i === index;           // the active segment user is on
    return (
    <div
  key={i}
  className="
    flex-1 
    h-0.5
    bg-[#E3E3E3] 
    rounded-full 
    flex items-center
  "
>
  <div
    className={`
      h-1.5 rounded-full transition-all duration-300 
      ${isFilled ? "bg-[#15313D] w-full" : ""}
      ${isCurrent ? "bg-[#15313D] w-[85%]" : ""}
    `}
  />
</div>
    );
  })}
</div>
  </div>}
      {/* SCREEN LOGIC */}
      {isLoading ? (
        <ResultLoader />
      ) : submitted ? (
        <FinalScore score={score} />
      ) : (
        <div className="grid w-2/4 mx-auto mb-18">
            <QuestionCard
              question={questions[index].q}
              options={questions[index].opts}
              selected={selected[index]}
              chooseOption={chooseOption}
            />
      {!isLoading && !submitted && (
        <div 
         className="
        relative
        flex
        mt-4
        justify-end
       gap-3"
        >
          {/* Previous */}
          {  index < questions.length - 1 && (
         <button
  onClick={prev}
  disabled={index === 0}
  className={`
    cursor-pointer w-10 h-10 flex items-center justify-center rounded-[10px] border transition-all duration-300 ease-out
    ${
      index > 0
        ? `
          border-[#96E5FF]
          bg-[linear-gradient(-89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)]
        `
        : `
          bg-[#F0FBFF]
          border-[#CFE6F8]
          opacity-50 cursor-not-allowed
        `
    }
  `}
>
  <Image
    src={backArrow}
    alt="back arrow"
    className="w-5 h-auto"
  />
</button>
          )}
          {/* Next or Submit */}
          {index < questions.length - 1 ? (
         <button
  onClick={next}
  className={`w-10 h-10   cursor-pointer flex items-center justify-center rounded-[10px] border transition-all duration-300
          border-[#96E5FF]
          bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)]
  `}
>
                      <Image src={forwardArrow} alt="back"  className="w-5 h-auto"/>
</button>
          ) : (
     <button
  onClick={submitQuiz}
  className={`
    px-6 py-2 cursor-pointer rounded-xl font-semibold transition-all duration-300
    ${
      selected[index]
        ? `
          text-[#15313D]
          border border-[#96E5FF]
          bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)]
        `
        : `
          text-white
          bg-gray-300 
          cursor-not-allowed
        `
    }
  `}
  disabled={!selected[index]}
>
  Submit
</button>
          )}
        </div>
      )}
        </div>
      )}
{!submitted && (
  <AnimatePresence >
    {index === 0 && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative p-0 "
      >
        {/* BEST OF LUCK BUBBLE */}
        <Image
          src={bestOfLuck}
          alt="Best of Luck"
          className="
            absolute
            bottom-32
            -left-24
            w-[160px]
            pointer-events-none
          "
        />
        {/* CAT PAW */}
        <Image
          src={cat}
          alt="Cat Paw"
          className="absolute -bottom-5 left-6 w-[150px]"
        />
      </motion.div>
    )}
  </AnimatePresence>
)}
      {/* NAV BUTTONS */}
    </div>
  </div>
  );
}
