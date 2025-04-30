import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
        <text
          x="60"
          y="90"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fontSize="80"
          fill="#029e10"
        >
          G
        </text>

        <rect
          x="112"
          y="70"
          width="20"
          height="6"
          rx="3"
          ry="3"
          fill="#029e10"
        />

        <text
          x="140"
          y="90"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fontSize="50"
          fill="#333333"
        >
          Rentify
        </text>

        <path
          d="M60,105 L300,105"
          stroke="#029e10"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M60,112 L300,112"
          stroke="#029e10"
          strokeWidth="1"
          strokeDasharray="3,2"
          opacity="0.6"
        />

        <path
          d="M45,40 L45,55 L60,55"
          stroke="#029e10"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M315,40 L315,55 L300,55"
          stroke="#029e10"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M45,125 L45,110 L60,110"
          stroke="#029e10"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M315,125 L315,110 L300,110"
          stroke="#029e10"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </Link>
  );
}
