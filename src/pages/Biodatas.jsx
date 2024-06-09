import {select, option, Spinner} from "@material-tailwind/react";
import BioCard from "../components/Card";
import {useQuery} from "@tanstack/react-query";
import CardSkeleton from "../components/CardSkeleton";
import {useEffect, useState} from "react";

export default function Biodatas() {
  const skeletons = Array.from({length: 20});
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const {
    isPending,
    isError,
    error,
    data: biodatas,
  } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/biodatas");
      return res.json();
    },
  });

  useEffect(() => {
    if (biodatas) {
      let filtered = biodatas;

      if (ageFilter) {
        const ageRange = ageFilter.split("-");
        const minAge = parseInt(ageRange[0], 10);
        const maxAge = parseInt(ageRange[1], 10);
        filtered = filtered.filter(
          (data) => data.age >= minAge && data.age <= maxAge
        );
      }

      if (genderFilter) {
        filtered = filtered.filter((data) => data.gender === genderFilter);
      }

      if (divisionFilter) {
        filtered = filtered.filter(
          (data) => data.permanentDivision === divisionFilter
        );
      }

      setFilteredData(filtered);
    }
  }, [ageFilter, genderFilter, divisionFilter, biodatas]);

  if (isPending) {
    return (
      <>
        <div className="px-4 lg:px-24 flex flex-col lg:flex-row gap-4 justify-between">
          <div className="lg:h-screen">
            <div className="mt-6 space-y-4 lg:space-y-24">
              <select variant="outlined" label="Filter By Age" color="purple">
                <option>18-24</option>
                <option>25-31</option>
                <option>32-39</option>
                <option>41+</option>
              </select>
              <select
                variant="outlined"
                label="Filter By Gender"
                color="purple"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
              <select
                variant="outlined"
                label="Filter By Division"
                color="purple"
              >
                <option>Dhaka</option>
                <option>Chattagram</option>
                <option>Rangpur</option>
                <option>Barisal</option>
                <option>Khulna</option>
                <option>Maymansign</option>
                <option>Sylhet</option>
              </select>
            </div>
          </div>
          <div className="">
            <div className="grid w-full grid-cols-1 gap-12 px-4 mt-6 md:grid-cols-2 lg:px-24 justify-between">
              {skeletons.map((_, index) => (
                <CardSkeleton key={index}></CardSkeleton>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div className="px-4 lg:px-24 flex flex-col lg:flex-row gap-4 justify-between">
        <div className="lg:h-screen">
          <div className="mt-6 space-y-4 lg:space-y-24 flex flex-col">
            <select
              className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
              label="Filter By Age"
              color="purple"
              onChange={(e) => setAgeFilter(e.target.value)}
            >
              <option disabled selected>
                Select Age
              </option>
              <option>18-24</option>
              <option>25-31</option>
              <option>32-39</option>
              <option>41+</option>
            </select>
            <select
              className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
              label="Filter By Gender"
              color="purple"
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option disabled selected>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <select
              className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
              label="Filter By Division"
              color="purple"
              onChange={(e) => setDivisionFilter(e.target.value)}
            >
              <option disabled selected>
                Select Division
              </option>
              <option>Dhaka</option>
              <option>Chattagram</option>
              <option>Rangpur</option>
              <option>Barisal</option>
              <option>Khulna</option>
              <option>Maymansign</option>
              <option>Sylhet</option>
            </select>
          </div>
        </div>
        <div className="">
          <div className="grid w-full grid-cols-1 gap-6 px-4 mt-6 md:grid-cols-2 lg:px-24 justify-between">
            {filteredData.map((data) => (
              <BioCard key={data.biodataId} data={data}></BioCard>
            ))}
          </div>
        </div>
        {filteredData.length == 0 ? (
          <div className="text-center flex justify-center items-center mx-auto">
            <h3 className="font-medium text-3xl">No Results Found</h3>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
