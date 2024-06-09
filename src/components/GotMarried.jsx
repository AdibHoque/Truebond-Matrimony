import {useEffect, useState} from "react";
import {MarriedCard} from "./MarriedCard";
import SectionTitle from "./SectionTitle";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import {useQuery} from "@tanstack/react-query";
import {Spinner} from "@material-tailwind/react";

export default function GotMarried() {
  const {
    isPending,
    isError,
    error,
    data: marriedstory,
  } = useQuery({
    queryKey: ["marriedstory"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/marriedstory");
      return res.json();
    },
  });

  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (marriedstory) {
      const sorted = marriedstory.sort((a, b) => {
        const dateA = new Date(a.marriageDate);
        const dateB = new Date(b.marriageDate);
        return dateB - dateA;
      });
      setSortedData(sorted);
    }
  }, [marriedstory]);

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
      <div className="my-8 px-4 lg:px-24">
        <SectionTitle title="Success Story"></SectionTitle>
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            color=""
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1, // 1 slide per view at >= 640px
              },
              768: {
                slidesPerView: 2, // 2 slides per view at >= 768px
              },
              1024: {
                slidesPerView: 3, // 3 slides per view at >= 1024px
              },
            }}
            className="mySwiper"
          >
            {sortedData.map((data) => (
              <SwiperSlide key={Math.random * 9999999}>
                <MarriedCard data={data}></MarriedCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
