import {useEffect, useState} from "react";
import BioCard from "./Card";
import SectionTitle from "./SectionTitle";

export default function PremiumCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/biodata.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="my-6">
      <SectionTitle title="Premium Members"></SectionTitle>
      <div className="grid w-full grid-cols-1 gap-4 px-4 mt-6 md:grid-cols-2 lg:grid-cols-3 lg:px-24">
        {data.slice(0, 6).map((data) => (
          <BioCard key={data.biodataId} data={data}></BioCard>
        ))}
      </div>
    </div>
  );
}
