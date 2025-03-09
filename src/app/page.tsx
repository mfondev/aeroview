
import MainHeader from "@/components/header/mainHeader";
import Faq from "@/components/faq/faq";
import Footer from "@/components/navigation/footer";
import FlightPage from "@/components/flights/mainFlight";
import Testimonial from "@/components/testimonial";
import FlightSummary from "@/components/flights/flightSummary";
import AvailableFlights from "@/components/flights/availableFlights";
import FlightInfo from "@/components/flights/flightInfo";

export default function Home() {
  return (
    <>
      <MainHeader />
      <AvailableFlights />
      <FlightInfo />
      <FlightPage />
      <FlightSummary />
      <Faq />
      <Testimonial />
      <Footer />
    </>
  );
}

