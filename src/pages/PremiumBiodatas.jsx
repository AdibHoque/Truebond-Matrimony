import {select, option, Spinner, Button} from "@material-tailwind/react";
import {Select, Option} from "@material-tailwind/react";
import {Input} from "@material-tailwind/react";
import BioCard from "../components/Card";
import {useQuery} from "@tanstack/react-query";
import CardSkeleton from "../components/CardSkeleton";
import {useEffect, useState} from "react";
import {FaSearch} from "react-icons/fa";
import {FaRecycle} from "react-icons/fa6";

export default function Premium() {
  const [search, setSearch] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [division, setDivision] = useState("");
  const [currentP, setCurrentP] = useState(1);
  const skeletons = Array.from({length: 9});

  const {
    isPending,
    isError,
    error,
    data: premiumBiodatas,
  } = useQuery({
    queryKey: ["premiumBiodatas", search, age, gender, division, currentP],
    queryFn: async () => {
      const res = await fetch(
        `https://truebond-matrimony.vercel.app/biodatas?page=${currentP}&&search=${search}&&age=${age}&&gender=${gender}&&division=${division}&&isPremium=true`
      );
      return res.json();
    },
  });
  if (isPending) {
    return (
      <div className="px-4  mx-auto max-w-6xl">
        <div className="flex w-full gap-2 my-2 md:my-6">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            label="Search by Name"
          />
          <Button
            onClick={() => {
              setSearch("");
              setGender("");
              setAge("");
              setDivision("");
            }}
            size="sm"
            color="purple"
            disabled={!search}
          >
            Reset
          </Button>
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:gap-6 ">
          <Select
            onChange={(e) => setGender(e)}
            size="sm"
            label="Filter by Gender"
          >
            <Option value="">Any</Option>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
          <Select
            onChange={(e) => setDivision(e)}
            size="sm"
            label="Filter by Division"
          >
            <Option value="">Any</Option>
            <Option value="Dhaka">Dhaka</Option>
            <Option value="Chattagram">Chattagram</Option>
            <Option value="Rangpur">Rangpur</Option>
            <Option value="Barisal">Barisal</Option>
            <Option value="Khulna">Khulna</Option>
            <Option value="Maymansingh">Maymansingh</Option>
            <Option value="Sylhet">Sylhet</Option>
          </Select>
          <Select onChange={(e) => setAge(e)} size="sm" label="Filter by Age">
            <Option value="">Any</Option>
            <Option value="18-24">18-24</Option>
            <Option value="25-31">25-31</Option>
            <Option value="32-39">32-39</Option>
            <Option value="40-49">40-49</Option>
            <Option value="50-60">50-60</Option>
          </Select>
        </div>

        <div className="grid justify-between w-full grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {skeletons.map((_, index) => (
            <CardSkeleton key={index}></CardSkeleton>
          ))}
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex items-center justify-center w-full">
        <p className="text-2xl font-bold text-center text-red-500">
          Some unkown error occurred, kindly refresh.
        </p>
      </div>
    );
  }
  return (
    <div className="px-4 lg:px-1 mx-auto max-w-6xl">
      <div className="flex w-full gap-2 my-2 md:my-6">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          label="Search by Name"
        />
        <Button
          onClick={() => {
            setSearch("");
          }}
          size="sm"
          color="purple"
          disabled={!search}
        >
          Reset
        </Button>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:gap-6 ">
        <Select
          onChange={(e) => setGender(e)}
          size="sm"
          label="Filter by Gender"
        >
          <Option value="">Any</Option>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>
        <Select
          onChange={(e) => setDivision(e)}
          size="sm"
          label="Filter by Division"
        >
          <Option value="">Any</Option>
          <Option value="Dhaka">Dhaka</Option>
          <Option value="Chattagram">Chattagram</Option>
          <Option value="Rangpur">Rangpur</Option>
          <Option value="Barisal">Barisal</Option>
          <Option value="Khulna">Khulna</Option>
          <Option value="Maymansingh">Maymansingh</Option>
          <Option value="Sylhet">Sylhet</Option>
        </Select>
        <Select onChange={(e) => setAge(e)} size="sm" label="Filter by Age">
          <Option value="">Any</Option>
          <Option value="18-24">18-24</Option>
          <Option value="25-31">25-31</Option>
          <Option value="32-39">32-39</Option>
          <Option value="40-49">40-49</Option>
          <Option value="50-60">50-60</Option>
        </Select>
      </div>

      <div className="grid justify-between w-full grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {premiumBiodatas.biodatas.map((data) => (
          <BioCard key={data.biodataId} data={data}></BioCard>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        {premiumBiodatas.totalBiodatas > 0 ? (
          <div className="flex items-center justify-center my-6">
            <Button
              size="sm"
              color="purple"
              className="text-white "
              onClick={() =>
                currentP > 1
                  ? setCurrentP(currentP - 1)
                  : setCurrentP(premiumBiodatas.totalPages)
              }
            >
              Previous
            </Button>
            <div className="flex flex-col items-center justify-center gap-0 mx-6">
              <h2 className="">
                Showing {(premiumBiodatas.currentPage - 1) * 9 + 1}-
                {premiumBiodatas.currentPage * 9 > premiumBiodatas.totalBiodatas
                  ? premiumBiodatas.totalBiodatas
                  : premiumBiodatas.currentPage * 9}{" "}
                of {premiumBiodatas.totalBiodatas} Results
              </h2>
              <p className="mx-8">
                Page {premiumBiodatas.currentPage} of{" "}
                {premiumBiodatas.totalPages}
              </p>
            </div>

            <Button
              size="sm"
              color="purple"
              className="text-white "
              onClick={() =>
                currentP < premiumBiodatas.totalPages
                  ? setCurrentP(currentP + 1)
                  : setCurrentP(1)
              }
            >
              Next
            </Button>
          </div>
        ) : (
          "No Results"
        )}
      </div>
    </div>
  );
}
