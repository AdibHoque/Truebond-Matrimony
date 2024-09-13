import {Typography} from "@material-tailwind/react";
import SectionTitle from "./SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function HowItWorks() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <SectionTitle title="How It Works"></SectionTitle>
      <div className="grid grid-cols-1 px-4 mb-6 lg:grid-cols-3 lg:px-24">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col items-center justify-center"
        >
          <img src="/Signup-rafiki.svg" className="-mt-6 max-w-96" alt="" />
          <h1 className="-mt-12 text-3xl font-bold text-purple-500">
            Create a Profile
          </h1>
          <Typography
            variant="lead"
            color="gray"
            className="text-sm text-center"
          >
            Sign up and create your profile by filling out personal details,
            preferences, and uploading photos.
          </Typography>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col items-center justify-center"
        >
          <img src="/connect-rafiki.svg" className="-mt-6 max-w-96" alt="" />
          <h1 className="-mt-12 text-3xl font-bold text-purple-500">
            Search & Connect
          </h1>
          <Typography
            variant="lead"
            color="gray"
            className="text-sm text-center"
          >
            Search for potential matches based on filters like age, location,
            occupation, etc then connect with them.
          </Typography>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col items-center justify-center"
        >
          <img src="/face-rafiki.svg" className="-mt-6 max-w-96" alt="" />
          <h1 className="-mt-12 text-3xl font-bold text-purple-500">
            Arrange Meetings
          </h1>
          <Typography
            variant="lead"
            color="gray"
            className="text-sm text-center"
          >
            Arrange in-person or virtual meetings to know your potential partner
            even better & take things forward.
          </Typography>
        </div>
      </div>
    </div>
  );
}
