export const HowItWorksStep = ({ number, text }) => (
  <div className="flex flex-col items-center text-center relative">
    {/* Number and Text in horizontal row */}
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-white font-semibold">
        {number}
      </div>
      <p className="text-sm text-white text-left max-w-[9rem]">{text}</p>
    </div>
  </div>
);
