import {useEffect, useState} from "react";
import BioCard from "./Card";
import SectionTitle from "./SectionTitle";
import {useQuery} from "@tanstack/react-query";
import {Option, Select, Spinner} from "@material-tailwind/react";

export default function PremiumCards() {
  const [filter, setFilter] = useState("asc");
  const {
    isPending,
    isError,
    error,
    data: premiumBiodatas,
  } = useQuery({
    queryKey: ["premiumbiodatas"],
    queryFn: async () => {
      const res = await fetch(
        "https://truebond-matrimony.vercel.app/biodatas?premium=true"
      );
      return res.json();
    },
  });
  if (isPending) {
    return (
      <div className="flex items-center justify-center w-full h-96">
        <Spinner color="purple" className="w-16 h-16" />
      </div>
    );
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const sortData = (data, filter) => {
    return data.sort((a, b) => {
      if (filter === "asc") {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    });
  };
  const data = sortData(premiumBiodatas.slice(0, 6), filter);

  return (
    <div className="px-8 my-6 max-w-6xl mx-auto">
      <SectionTitle title="Premium Members"></SectionTitle>
      {/* <div className="w-32 mt-2">
        <Select
          onChange={() => setFilter(filter === "asc" ? "desc" : "asc")}
          variant="outlined"
          label="Sort"
          color="purple"
        >
          <Option defaultChecked>Age - Ascending</Option>
          <Option>Age - Descending</Option>
        </Select>
      </div> */}
      <div className="grid w-full grid-cols-1 gap-4 mt-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((data) => (
          <BioCard key={data._id} data={data}></BioCard>
        ))}
      </div>
    </div>
  );
}
