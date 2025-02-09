import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

const Testimonals = () => {
  return (
    <div className="testimonalDiv">
      <p className="TestimonalHead">Testimonals</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper testimonalSwipe"
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide className="testimonal1" key={index}>
            <div className="testimage">
              <img src="/assets/images/testimonal/review1.jpg" alt="Reviewer" />
            </div>
            <div className="testiReview">
              <p className="testpara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur ea at commodi quod aliquam similique inventore sunt,
                laborum sequi natus, explicabo fuga voluptatum beatae labore
                obcaecati delectus consequatur repellat. Magni est eum
                temporibus vel ea?
              </p>
              <div>
                {[...Array(4)].map((_, i) => (
                  <MdOutlineStarPurple500
                    key={i}
                    style={{ color: "coral", fontSize: "20px" }}
                  />
                ))}
                <MdOutlineStarOutline
                  style={{ color: "coral", fontSize: "20px" }}
                />
              </div>
              <h6 className="Testiname">Reviewer Name</h6>
              <p className="testDes">Product Manager</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonals;
