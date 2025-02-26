"use client";
import React from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisProvider = ({ children }:{children: React.ReactNode}) => {
  useEffect(() => {
    const lenis = new Lenis({
        lerp: 0.1, 
      });

    function raf(time : number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
};

export default LenisProvider;