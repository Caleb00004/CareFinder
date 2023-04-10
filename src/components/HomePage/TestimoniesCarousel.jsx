import HomepageStyles from "@/styles/HomePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

function TestimoniesCarousel() {
  const pagination = {
    el: ".image3-swiper-pagination",
    clickable: false,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className={HomepageStyles.testimoniesSwiperContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        speed={1000}
        pagination={pagination}
        direction={"horizontal"}
        spaceBetween={30}
        grabCursor={true}
        wrapperClass={HomepageStyles.testimoniesCarousel}
        navigation={{
          nextEl: ".image3-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        className={HomepageStyles.swiper}
      >
        <div className={HomepageStyles.hospitalsCarousel}>
          <SwiperSlide className={HomepageStyles.testimoniesCarouselItem}>
            <div className={HomepageStyles.testimoniesCarouselImg}>
              <img src="/signInImage.webp" alt="" />
            </div>
            <h2>“Excellence”</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              venenatis imperdiet tempus. Curabitur eget maximus ipsum. Morbi
              aliquet felis et libero tempus, ut dictum orci laoreet.
            </p>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.testimoniesCarouselItem}>
            <div className={HomepageStyles.testimoniesCarouselImg}>
              <img src="/signUpImage.webp" alt="" />
            </div>
            <h2>“Excellence”</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              venenatis imperdiet tempus. Curabitur eget maximus ipsum. Morbi
              aliquet felis et libero tempus, ut dictum orci laoreet.
            </p>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.testimoniesCarouselItem}>
            <div className={HomepageStyles.testimoniesCarouselImg}>
              <img src="/DrOwen.png" alt="" />
            </div>
            <h2>“Excellence”</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              venenatis imperdiet tempus. Curabitur eget maximus ipsum. Morbi
              aliquet felis et libero tempus, ut dictum orci laoreet.
            </p>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
export default TestimoniesCarousel;
