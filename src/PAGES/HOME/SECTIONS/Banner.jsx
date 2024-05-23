import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
  const images = [
    "https://picsum.photos/1920/1080?random=1",
    "https://picsum.photos/1920/1080?random=2",
    "https://picsum.photos/1920/1080?random=3",
    "https://picsum.photos/1920/1080?random=4",
    "https://picsum.photos/1920/1080?random=5",
    "https://picsum.photos/1920/1080?random=6",
  ];

  return (
    <section className="h-navMinus overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
        pagination={{ dynamicBullets: true, clickable: true }}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{ nextEl: "#next", prevEl: "#prev" }}
        style={{ "--swiper-pagination-color": "#000" }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-no-repeat bg-cover bg-center bg-fixed relative"
              style={{ backgroundImage: `url(${item})` }}
            >
              <div className="px-10 lg:px-32 flex flex-col space-y-3 justify-center h-navMinus my-auto">
                <h1 className="text-5xl lg:text-7xl font-semibold text-white">
                  Hello Swiper
                </h1>
                <p className="text-sm lg:text-base bg-black bg-opacity-15 rounded-md backdrop-blur-sm max-w-4xl px-5 py-3 cursor-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium tempore veniam tempora esse aliquam ad hic
                  distinctio corporis ipsa eos in laboriosam doloremque quae,
                  ducimus inventore consequuntur accusantium ullam quo
                  necessitatibus possimus exercitationem explicabo debitis.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-between items-center">
          <button
            id="prev"
            className={`px-3 py-1 bg-black bg-opacity-65 absolute top-2/3 lg:top-1/2 left-0 z-20 rounded-r`}
          >
            <IoIosArrowRoundBack className="text-3xl text-white" />
          </button>
          <button
            id="next"
            className={`px-3 py-1 bg-black bg-opacity-65 absolute top-2/3 lg:top-1/2 right-0 z-20 rounded-l`}
          >
            <IoIosArrowRoundForward className="text-3xl text-white" />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
