import {useEffect, useState} from "react";
import {Select, Option} from "@material-tailwind/react";
import BioCard from "../components/Card";

export default function Biodatas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/biodata.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="px-4 lg:px-24 flex flex-col lg:flex-row gap-4 justify-between">
        <div className="lg:h-screen">
          <div className="mt-6 space-y-4 lg:space-y-24">
            <Select variant="outlined" label="Filter By Age" color="purple">
              <Option>18-24</Option>
              <Option>25-31</Option>
              <Option>32-39</Option>
              <Option>41+</Option>
            </Select>
            <Select variant="outlined" label="Filter By Gender" color="purple">
              <Option>Male</Option>
              <Option>Female</Option>
            </Select>
            <Select
              variant="outlined"
              label="Filter By Division"
              color="purple"
            >
              <Option>Dhaka</Option>
              <Option>Chattagram</Option>
              <Option>Rangpur</Option>
              <Option>Barisal</Option>
              <Option>Khulna</Option>
              <Option>Maymansign</Option>
              <Option>Sylhet</Option>
            </Select>
          </div>
        </div>
        <div className="">
          <div className="grid w-full grid-cols-1 gap-4 px-4 mt-6 md:grid-cols-2 lg:px-24">
            {data.slice(0, 6).map((data) => (
              <BioCard key={data.biodataId} data={data}></BioCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
