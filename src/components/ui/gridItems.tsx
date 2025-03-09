import gsap from "gsap";

// export const generateGridItems = () => {
//   const gridItems = [];
//   const numRows = window.innerWidth <= 567 ? 20 : 8;

//   for (let row = 0; row < numRows; row++) {
//     for (let col = 0; col < 12; col++) {
//       gridItems.push(
//         <div
//           key={`${row}-${col}`}
//           className="grid-item bg-[#dde9f7] shadow-none"
//         ></div>
//       );
//     }
//   }
//   return gridItems;
// };
export const generateGridItems = (bgColor = "#dde9f7", gap = "0px") => {
  const gridItems = [];
  const numRows = window.innerWidth <= 567 ? 20 : 8;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < 12; col++) {
      gridItems.push(
        <div
          key={`${row}-${col}`}
          className={`grid-item shadow-none`}
          style={{ backgroundColor: bgColor, margin: gap }}
        ></div>
      );
    }
  }
  return gridItems;
};


const gridItems = gsap.utils.toArray(".grid-item");

export const mainHeaderText = () => {
  gsap.fromTo(
    "#fl-text",
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "ease.in",
      delay: 1,
    }
  );
};



