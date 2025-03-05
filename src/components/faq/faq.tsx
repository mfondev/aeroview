"use client";

import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "./faqs";
import { faqAnimation } from "../ui/animation";
import { faqType } from "../../../utils/types";

export default function Faq() {
  useEffect(() => {
    faqAnimation();
  }, []);
  return (
    <>
      <div className="container mx-auto mt-[400px] faq-container">
        <h3 className="text-center text-[32px] font-bold" id="faq-header">
          Frequently Asked Questions
        </h3>
        {FAQs.map((faq : faqType) => (
          <Accordion type="single" collapsible key={faq.id}>
            <AccordionItem value="item-1" id="question">
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answers}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
        {FAQs.length < 6 ? (
          <button
            className="flex items-center justify-between mt-8 bg-[#3661eb] text-white py-2 px-5 rounded-[8px] text-center mx-auto"
            id="question"
          >
            See More
          </button>
        ) : (
          <button
            className="bg-[#3661eb] text-white py-2 px-4 rounded-[5px] text-center mx-auto"
            id="question"
          >
            See Less
          </button>
        )}
      </div>
    </>
  );
}
