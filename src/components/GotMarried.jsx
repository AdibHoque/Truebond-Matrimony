import {useEffect, useState} from "react";
import {MarriedCard} from "./MarriedCard";
import SectionTitle from "./SectionTitle";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";

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
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
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
            {data.map((data) => (
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
