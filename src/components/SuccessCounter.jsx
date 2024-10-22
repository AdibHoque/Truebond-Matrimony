import {FaFemale, FaMale} from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import {FaDatabase, FaHeartCirclePlus} from "react-icons/fa6";
import {Spinner} from "@material-tailwind/react";
import {useQuery} from "@tanstack/react-query";
import CountUp from "react-countup";

const SuccessStat = ({title, stat, icon}) => (
  <div className="flex items-center justify-center gap-8">
    {icon}
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold text-purple-500">
        <CountUp end={stat} enableScrollSpy={true} duration={1.5} />
      </h1>
      <h3 className="font-semibold uppercase text-blue-gray-900">{title}</h3>
    </div>
  </div>
);

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
    <div className="max-w-6xl mx-auto space-y-6 my-12">
      <SectionTitle title="Success Counter"></SectionTitle>
      <div className="flex justify-between items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 mx-auto">
          <SuccessStat
            title="Total Biodatas"
            stat={stats.totalBiodatas}
            icon={<FaDatabase className="text-7xl text-blue-gray-900" />}
          ></SuccessStat>
          <SuccessStat
            title="Male Biodatas"
            stat={stats.maleBiodatas}
            icon={<FaMale className="text-7xl text-blue-gray-900" />}
          ></SuccessStat>

          <SuccessStat
            title="Female Biodatas"
            stat={stats.femaleBiodatas}
            icon={<FaFemale className="text-7xl text-blue-gray-900" />}
          ></SuccessStat>
          <SuccessStat
            title="Marriages"
            stat={stats.marriages}
            icon={<FaHeartCirclePlus className="text-7xl text-blue-gray-900" />}
          ></SuccessStat>
        </div>

        <img
          src="/success-amico.svg"
          className="absolute right-0 md:right-52 md:left-60 lg:right-0 lg:left-0 opacity-10 lg:opacity-100 lg:relative lg:h-[70vh] md:w-[38vw] lg:flex"
          alt=""
        />
      </div>
    </div>
  );
}
