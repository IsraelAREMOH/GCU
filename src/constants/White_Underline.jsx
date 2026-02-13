import React from "react";

const White_Underline = () => {
  return (
    <div>
      <div className="flex justify-center mt-2">
        <div className="relative w-24 h-1 bg-[#f4f6ff] rounded-full">
          {/* Line and Dot */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#F4F6FF] rounded-full"></div>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#F4F6FF] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default White_Underline;
