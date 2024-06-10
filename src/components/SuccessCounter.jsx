import {FaFemale, FaMale} from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import {FaDatabase, FaHeartCirclePlus} from "react-icons/fa6";
import {CgSpinner} from "react-icons/cg";
import {Spinner} from "@material-tailwind/react";
import {useQuery} from "@tanstack/react-query";

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
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner className="size-24" color="purple" />
      </div>
    );
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div className="my-12 px-4 lg:px-24">
        <SectionTitle title="Success Counter"></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8 gap-4 gap-y-10 lg:divide-x-2">
          <div className="flex gap-4 justify-center items-center">
            <FaDatabase className="text-6xl text-blue-gray-900" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl font-extrabold text-purple-500">
                {stats.totalBiodatas}
              </h1>
              <h3 className="uppercase font-semibold text-blue-gray-900">
                Total BioDatas
              </h3>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <FaMale className="text-6xl text-blue-gray-900" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl font-extrabold text-blue-500">
                {stats.maleBiodatas}
              </h1>
              <h3 className="uppercase font-semibold text-blue-gray-900">
                Male BioDatas
              </h3>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <FaFemale className="text-6xl text-blue-gray-900" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl font-extrabold text-pink-500">
                {stats.femaleBiodatas}
              </h1>
              <h3 className="uppercase font-semibold text-blue-gray-900">
                Female BioDatas
              </h3>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <FaHeartCirclePlus className="text-6xl text-blue-gray-900" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl font-extrabold text-purple-500">
                {stats.marriages}
              </h1>
              <h3 className="uppercase font-semibold text-blue-gray-900">
                Marriages
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
