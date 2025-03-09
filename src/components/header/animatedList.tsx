"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedList() {
  const listItems = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const animateRandomItem = () => {
      if (listItems.current.length === 0) return;

      const randomIndex = Math.floor(Math.random() * listItems.current.length);
      const selectedItem = listItems.current[randomIndex];

      gsap.to(selectedItem, {
        scale: 1.2,
        backgroundColor: "#e8f0fb",
        borderRadius: "5px",
        x: 10,
        duration: 0.8,
        paddingTop: 5,
        paddingBottom: 5,
        border: "1px solid #fff",
        onStart: () => {
          const priceText = selectedItem.querySelector("p");
          if (priceText) gsap.to(priceText, { color: "#2563eb", duration: 0.4 });
        },
        onComplete: () => {
          gsap.to(selectedItem, {
            scale: 1,
            backgroundColor: "transparent",
            duration: 0.6,
            paddingTop: 0,
            paddingBottom: 0,
            onStart: () => {
              const priceText = selectedItem.querySelector("p");
              if (priceText) gsap.to(priceText, { color: "#374151", duration: 0.4 }); 
            },
            onComplete: animateRandomItem, 
          });
        },
      });
    };

    animateRandomItem();
  }, []);

  const prices = ["$4,215.00", "$3,890.00", "$5,120.00", "$4,730.00", "$3,600.00"];

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {["United", "Katak", "Aeroview", "Expedia", "Booking.com"].map(
          (item, index) => (
            <li
              key={index}
              ref={(el) => {
                if (el) listItems.current[index] = el;
              }}
              className="flex items-center justify-between px-3 py- relative "
            >
              <h6 className="text-[11px] font-bold">{item}</h6>
              <p className="text-[11px] font-bold text-gray-700">{prices[index]}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
