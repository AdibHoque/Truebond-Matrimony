import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PremiumCards from "../components/PremiumCards";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero></Hero>
      </div>
      <PremiumCards></PremiumCards>
      <HowItWorks></HowItWorks>
    </>
  );
}
