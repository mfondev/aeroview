"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedList() {
  const listItems = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    listItems.current.forEach((li) => {
      gsap.to(li, {
        scale: 1.1, 
        backgroundColor: "#e8f0fb",
        duration: 0.8,
        borderRadius: "5px",
        x: 10, 
        "--line-width": "100%", 
        color: "#2563eb", 
        repeat: -1, 
        yoyo: true, 
        delay: Math.random() * 2, 
      });
    });
  }, []);

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {["United", "Katak", "Basis", "Expedia", "Booking.com"].map((item, index) => (
          <li
            key={index}
            ref={(el) => (listItems.current[index] = el)}
            className="flex items-center justify-between px-3 py- relative border-b-2 border-gray-300"
            style={{
              "--line-width": "50%",
              transition: "all 0.4s ease",
            } as React.CSSProperties}
          >
            <h6 className="text-sm">{item}</h6>
            <p className="text-sm text-gray-700">$4,215.00</p>
            <span
              className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
              style={{
                width: "var(--line-width)",
                transition: "width 0.4s ease",
              }}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
