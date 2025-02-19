import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "./faqs";

export default function Faq() {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center text-[32px] font-bold">
          Frequently Asked Questions
        </h3>
        {FAQs.map((faqs, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{faqs.question}</AccordionTrigger>
              <AccordionContent>{faqs.answers}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
        {FAQs.length < 6 ? (
          <button className="flex items-center justify-between mt-8 bg-[#3661eb] text-white py-2 px-4 rounded-[5px] text-center mx-auto">
            See More
          </button>
        ) : (
          <button className="bg-[#3661eb] text-white py-2 px-4 rounded-[5px] text-center mx-auto">
            See Less
          </button>
        )}
      </div>
    </>
  );
}
