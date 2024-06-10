import {Button, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative flex items-center justify-center">
      <img
        src="/purple-geometric.jpg"
        className="absolute object-fill w-full h-full max-sm:bg-purple-500 -z-40 opacity-10 -top-0 lg:flex"
        alt=""
      />
      <div className="flex flex-col-reverse items-center justify-between p-4 py-6 lg:flex-row lg:px-24">
        <div className="space-y-4 text-center lg:text-start lg:pr-28 md:">
          <Typography
            data-aos="fade-right"
            variant="h1"
            color="blue-gray"
            className="text-4xl md:text-5xl "
          >
            Find Your Perfect Match Using TrueBond
          </Typography>
          <Typography data-aos="fade-right" data-aos-delay="200" variant="lead">
            TrueBond connects you with like-minded individuals seeking
            meaningful relationships. Join us and discover your perfect partner
            today.
          </Typography>
          <Link to="/biodatas">
            <Button
              data-aos="fade-right"
              data-aos-delay="400"
              className="mt-2"
              color="purple"
            >
              Get Started
            </Button>
          </Link>
        </div>
        <img
          data-aos="fade-left"
          className="max-w-[60%] lg:max-w-[40%]"
          src="/Wedding-amico.svg"
          alt=""
        />
      </div>
    </div>
  );
}
