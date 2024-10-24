import CardSkeleton from "../components/CardSkeleton";
import GotMarried from "../components/GotMarried";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PremiumCards from "../components/PremiumCards";
import SuccessCounter from "../components/SuccessCounter";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero></Hero>

      <PremiumCards></PremiumCards>
      <HowItWorks></HowItWorks>
      <SuccessCounter></SuccessCounter>
      <GotMarried></GotMarried>
    </div>
  );
}
