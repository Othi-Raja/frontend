export default function ResultLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <p className="font-var(--font-dm-serif) italic text-[28px] text-[#15313D]">
        Your Final score is
      </p>

      <div className="mt-6 w-10 h-10 rounded-full border-4 border-[#15313D] animate-spin"></div>
    </div>
  );
}
