export default function FinalScore({ score }: { score: number }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <p className="font-var(--font-dm-serif) italic text-[28px] text-[#15313D]">
        Your Final score is
      </p>

      <p className="text-[64px] font-var(--font-dm-serif) text-[#15313D]">
        {score}%
      </p>

      <button className="mt-6 px-4 py-2 bg-[#E4F3FB] rounded-lg text-[#124E70]">
        Start Again
      </button>
    </div>
  );
}
