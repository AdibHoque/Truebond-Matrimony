import {Select, Option, Spinner} from "@material-tailwind/react";
import BioCard from "../components/Card";
import {useQuery} from "@tanstack/react-query";
import CardSkeleton from "../components/CardSkeleton";

export default function Biodatas() {
  const skeletons = Array.from({length: 20});
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

  if (isPending) {
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
              <Select
                variant="outlined"
                label="Filter By Gender"
                color="purple"
              >
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
          <div className="grid w-full grid-cols-1 gap-6 px-4 mt-6 md:grid-cols-2 lg:px-24 justify-between">
            {biodatas.map((data) => (
              <BioCard key={data.biodataId} data={data}></BioCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
