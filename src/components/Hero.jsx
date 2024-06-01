import {Button, Typography} from "@material-tailwind/react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-between min-h-[85vh] p-2 lg:flex-row lg:px-24">
        <div className="space-y-4 text-center md:text-start lg:pr-28 md:">
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-4xl md:text-5xl "
          >
            Find Your Perfect Match Using TrueBond
          </Typography>
          <Typography variant="lead">
            TrueBond connects you with like-minded individuals seeking
            meaningful relationships. Join us and discover your perfect partner
            today.
          </Typography>
          <Button color="purple">Get Started</Button>
        </div>
        <img
          className="max-w-[60%] lg:max-w-[40%]"
          src="/Wedding-amico.svg"
          alt=""
        />
      </div>
    </>
  );
}
