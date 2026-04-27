import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2026 Glen. All rights reserved.
      </small>
      <p className="text-xs w-full max-w-[600px] mx-auto leading-relaxed whitespace-normal break-words">
        <span className="font-semibold italic">Built with:</span> React &
        Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer
        Motion, React Email & Resend, and hosted on Vercel.
      </p>
    </footer>
  );
}
