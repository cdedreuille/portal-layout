export const Cards = ({ number = 4 }: { number?: number }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {Array.from({ length: number }).map((_, index) => (
        <div
          key={index}
          className="bg-[#191919] w-full h-[200px] border border-white/10 rounded p-4"
        >
          card
        </div>
      ))}
    </div>
  );
};
