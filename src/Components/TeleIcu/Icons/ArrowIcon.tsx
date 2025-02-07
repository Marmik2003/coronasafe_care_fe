import React from "react";

export const RightArrowIcon = ({ className }: React.SVGProps<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={"h-6 w-6 " + className}
      fill="currentColor"
      viewBox="0 0 24 24"
      stroke="#fff"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
