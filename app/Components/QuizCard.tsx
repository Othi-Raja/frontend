"use client";
import { useState } from "react";
import Image from "next/image";
import cat from "../asserts/cat_Hand.gif";
import ResultLoader from "./ResultLoader";
import FinalScore from "./FinalScore";
import QuestionCard from "./QuestionCard";
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
    if (!selected[index]) return; // stop if no answer
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
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1000);
  };
  return (
    <div className="relative bg-[#F4FDFF] rounded-[42px] p-10 border border-[#B3D9FF]/60 shadow-lg overflow-hidden">
      {/* TITLE */}
      <h1 className="
        font-var(--font-dm-serif) italic
        text-[60px] tracking-[-4px] text-center
        bg-linear-to-r from-[#15313D] to-[#3CABDA]
        text-transparent bg-clip-text
      ">
        Test Your Knowledge
      </h1>
      {/* SUBTITLE */}
      <p className="font-var(--font-manrope) text-[16px] text-center text-[#15313D] mb-6">
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
        className={`flex-1 ${isFilled ? 'h-2': 'h-1'} bg-[#E4F3FB] rounded-full overflow-hidden`}
      >
        <div
          className={`
            h-full transition-all duration-300 w-full
            ${isFilled ? "bg-[#15313D] w-full" : ""}
            ${isCurrent ? "bg-[#15313D] w-[0%]" : ""}
          `}
        />
      </div>
    );
  })}
</div>
      {/* SCREEN LOGIC */}
      {isLoading ? (
        <ResultLoader />
      ) : submitted ? (
        <FinalScore score={score} />
      ) : (
        <div>
            <QuestionCard
              question={questions[index].q}
              options={questions[index].opts}
              selected={selected[index]}
              chooseOption={chooseOption}
            />
      {!isLoading && !submitted && (
        <div className=" bottom-8 right-8 flex gap-3">
          {/* Previous */}
          {index > 0 && index < questions.length - 1 && (
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center bg-[#F0FBFF] border border-[#CFE6F8] rounded-full"
            >
              ←
            </button>
          )}
          {/* Next or Submit */}
          {index < questions.length - 1 ? (
            <button
              onClick={next}
              className={`w-10 h-10 flex items-center justify-center rounded-full
                ${selected[index]
                  ? "bg-[#3CABDA] text-white border-[#3CABDA]"
                  : "bg-[#F0FBFF] border border-[#CFE6F8]"
                }`}
            >
              →
            </button>
          ) : (
            <button
              onClick={submitQuiz}
              disabled={!selected[index]}
              className={`px-5 py-2 rounded-xl text-white font-semibold
                ${selected[index] ? "bg-[#3CABDA]" : "bg-gray-300 cursor-not-allowed"}
              `}
            >
              Submit
            </button>
          )}
        </div>
      )}
        </div>
      )}
      {/* CAT IMAGE bottom-left */}
      {!submitted && (
        <Image src={cat} alt="Cat Paw" className="absolute bottom-0 left-6 w-[120px]" />
      )}
      {/* NAV BUTTONS */}
    </div>
  );
}
