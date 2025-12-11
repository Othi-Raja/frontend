interface Option {
  id: number;
  text: string;
}
interface QuestionCardProps {
  question: string;
  options: Option[];
  selected: number | null;
  chooseOption: (id: number) => void;
}
export default function QuestionCard({
  question,
  options,
  selected,
  chooseOption,
}: QuestionCardProps) {
  return (
    <div >
      {/* QUESTION BOX */}
      <div
        className="
          w-full rounded-[10px] py-3 mb-3 px-6 text-center
          font-medium text-[#15313D]  
          border border-[#96E5FF]
          bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)]
        "
      >
        {question}
      </div>
      {/* OPTIONS LIST */}
      <div className="space-y-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => chooseOption(opt.id)}
            className={`
              w-full py-3 rounded-xl border font-semibold transition-all duration-300 ease-out         text-[#15313D]
              ${
                selected === opt.id
                  ? `
                    border-[#96E5FF]
                    bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)]
                    text-[#15313D]
                  `
                  : `
                    border-[#96E5FF80]
                    bg-white
                    hover:bg-[linear-gradient(89.72deg,rgba(198,233,247,0.6)_0.09%,rgba(229,248,255,0.6)_99.91%)]
                    hover:border-[#96E5FF]
                  `
              }
            `}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
