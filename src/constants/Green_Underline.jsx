import React from "react";

const Green_Underline = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center mt-2">
          <div className="relative w-24 h-1 bg-[#19673B] rounded-full">
            {/* Left Dot */}
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#19673B] rounded-full"></div>

            {/* Right Dot */}
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#19673B] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Green_Underline;
