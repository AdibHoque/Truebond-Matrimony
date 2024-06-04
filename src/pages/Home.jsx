import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PremiumCards from "../components/PremiumCards";
import SuccessCounter from "../components/SuccessCounter";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero></Hero>
      </div>
      <PremiumCards></PremiumCards>
      <HowItWorks></HowItWorks>
      <SuccessCounter></SuccessCounter>
    </>
  );
}
