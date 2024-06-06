import {useEffect, useState} from "react";
import BioCard from "./Card";
import SectionTitle from "./SectionTitle";
import {useQuery} from "@tanstack/react-query";
import {Spinner} from "@material-tailwind/react";

export default function PremiumCards() {
  const {
    isPending,
    isError,
    error,
    data: premiumBiodatas,
  } = useQuery({
    queryKey: ["premiumbiodatas"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/biodatas?premium=true");
      return res.json();
    },
  });

  if (isPending) {
    return <Spinner color="purple" className="h-16 w-16" />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="my-6">
      <SectionTitle title="Premium Members"></SectionTitle>
      <div className="grid w-full grid-cols-1 gap-4 px-4 mt-6 md:grid-cols-2 lg:grid-cols-3 lg:px-24">
        {premiumBiodatas.slice(0, 6).map((data) => (
          <BioCard key={data._id} data={data}></BioCard>
        ))}
      </div>
    </div>
  );
}
