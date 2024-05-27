'use client'

import "./globals.css";

import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";


export default function RootLayout({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <html lang="pt-br">
      <body>
        <div ref={scrollRef}>{children}</div>
      </body>
    </html>
  );
}
