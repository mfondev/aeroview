import React from "react";
import MainHeader from "@/components/header/mainHeader";
import Faq from "@/components/faq/faq";
import Footer from "@/components/navigation/footer";
import FlightPage from "@/components/flights/mainFlight";
import Testimonial from "@/components/testimonial";

export default function Home() {
  
  return (
    <>
      <MainHeader />
      <FlightPage />
      <Faq />
      <Testimonial />
      <Footer />
    </>
  );
}

