import { StarFour } from "@phosphor-icons/react";

const items = [
  "Academics",
  "Sports",
  "Leadership",
  "Programming"
];

export function MarqueeBanner() {
  // We place 4 exact copies in total. The CSS animation translates from 0 to -50%.
  // This means it scrolls exactly across two full copies, then perfectly loops.
  const allItems = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-[#111111] text-[#F4F3EE] py-6 md:py-10 border-t-2 border-[#111111] overflow-hidden whitespace-nowrap flex select-none">
      <div className="animate-marquee flex items-center shrink-0 w-max">
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display font-extrabold text-4xl md:text-5xl lg:text-7xl uppercase tracking-[-0.02em] px-8 md:px-12">
              {item}
            </span>
            <StarFour 
              weight="fill" 
              className="shrink-0 text-[#C8FF00] w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
