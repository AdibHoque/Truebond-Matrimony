import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
export default function SectionTitle({title}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade" className="flex items-center justify-center w-full">
      <h1 className="flex items-center justify-center text-2xl font-bold text-center text-purple-500 uppercase md:text-3xl lg:text-4xl">
        <img src="/plant-amico.svg" className="w-16" alt="" />
        {title}
        <img src="/plant-amico.svg" className="w-16" alt="" />
      </h1>
    </div>
  );
}
