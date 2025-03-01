import React, { useEffect, useState } from "react";

const CircularProgressBar = ({ percentage, skillName }) => {
  const radius = 50; // Radius of the circle
  const strokeWidth = 10; // Width of the progress circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    // Animate the circular progress bar by updating the stroke-dashoffset
    const targetOffset = circumference - (percentage / 100) * circumference;
    setOffset(targetOffset);
  }, [percentage, circumference]);

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg width="120" height="120" className="transform rotate-90">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#fb923c"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute text-center text-xl font-bold">{`${percentage}%`}</div>
      <div className="mt-2 text-xl">{skillName}</div>
    </div>
  );
};

export default CircularProgressBar;
