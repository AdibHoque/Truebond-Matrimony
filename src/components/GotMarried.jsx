import {useEffect, useState} from "react";
import {MarriedCard} from "./MarriedCard";
import SectionTitle from "./SectionTitle";

export default function GotMarried() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/gotmarried.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="my-8 px-4 lg:px-24">
        <SectionTitle title="Success Story"></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((data) => (
            <MarriedCard key={Math.random * 9999999} data={data}></MarriedCard>
          ))}
        </div>
      </div>
    </>
  );
}
