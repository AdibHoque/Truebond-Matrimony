import {FaFemale, FaMale} from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import {FaDatabase, FaHeartCirclePlus} from "react-icons/fa6";
import {Spinner} from "@material-tailwind/react";
import {useQuery} from "@tanstack/react-query";
import CountUp from "react-countup";

export default function SuccessCounter() {
  const {
    isPending,
    isError,
    error,
    data: stats,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await fetch("https://truebond-matrimony.vercel.app/stats");
      return res.json();
    },
  });

  if (isPending) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Spinner className="size-24" color="purple" />
      </div>
    );
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div className="px-4 my-12 lg:px-24">
        <SectionTitle title="Success Counter"></SectionTitle>
        <div className="grid grid-cols-1 gap-4 my-8 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:divide-x-2">
          <div className="flex items-center justify-center gap-4">
            <FaDatabase className="text-6xl text-blue-gray-900" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-extrabold text-purple-500">
                <CountUp
                  end={stats.totalBiodatas}
                  enableScrollSpy={true}
                  duration={1.5}
                />
              </h1>
              <h3 className="font-semibold uppercase text-blue-gray-900">
                Total BioDatas
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaMale className="text-6xl text-blue-gray-900" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-extrabold text-blue-500">
                <CountUp
                  end={stats.maleBiodatas}
                  enableScrollSpy={true}
                  duration={1.5}
                />
              </h1>
              <h3 className="font-semibold uppercase text-blue-gray-900">
                Male BioDatas
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaFemale className="text-6xl text-blue-gray-900" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-extrabold text-pink-500">
                <CountUp
                  end={stats.femaleBiodatas}
                  enableScrollSpy={true}
                  duration={1.5}
                />
              </h1>
              <h3 className="font-semibold uppercase text-blue-gray-900">
                Female BioDatas
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaHeartCirclePlus className="text-6xl text-blue-gray-900" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-extrabold text-purple-500">
                <CountUp
                  end={stats.marriages}
                  enableScrollSpy={true}
                  duration={1.5}
                />
              </h1>
              <h3 className="font-semibold uppercase text-blue-gray-900">
                Marriages
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
