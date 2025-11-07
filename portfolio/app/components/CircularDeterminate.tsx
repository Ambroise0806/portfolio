"use client";

import React, { useState, useEffect } from "react";

interface CircularDeterminateProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  animated?: boolean;
}

const CircularDeterminate: React.FC<CircularDeterminateProps> = ({
  value,
  size = 48,
  strokeWidth = 4,
  animated = false,
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!animated) {
      setCurrentValue(value);
      return;
    }

    setCurrentValue(0);

    let timer: NodeJS.Timeout | null = null;

    const resetDelay = setTimeout(() => {
      const duration = 1000;
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;

      let step = 0;
      timer = setInterval(() => {
        step++;
        setCurrentValue(Math.min(step * increment, value));

        if (step >= steps && timer) {
          clearInterval(timer);
        }
      }, stepDuration);
    }, 50);

    return () => {
      clearTimeout(resetDelay);
      if (timer) clearInterval(timer);
    };
  }, [value, animated]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentValue / 100) * circumference;

  return (
    <svg
      className="inline-block"
      width={size}
      height={size}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <circle
        className="text-gray-200"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />

      <circle
        className="text-blue-900"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
};

export default CircularDeterminate;
