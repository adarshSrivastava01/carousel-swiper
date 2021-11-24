import { EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.scss";
import "swiper/modules/effect-coverflow/effect-coverflow.scss";

import Box from "./Box";

const URLS = [
  "https://picsum.photos/id/0/450/400",
  "https://picsum.photos/id/1/450/400",
  "https://picsum.photos/id/10/450/400",
  "https://picsum.photos/id/100/450/400",
  "https://picsum.photos/id/1000/450/400",
  "https://picsum.photos/id/555/450/400",
  "https://picsum.photos/id/112/450/400",
  "https://picsum.photos/id/103/450/400",
  "https://picsum.photos/id/101/450/400",
  "https://picsum.photos/id/1025/450/400",
  "https://picsum.photos/id/25/450/400",
  "https://picsum.photos/id/19/450/400",
  "https://picsum.photos/id/17/450/400",
  "https://picsum.photos/id/130/450/400",
  "https://picsum.photos/id/156/450/400",
];

const Slider = () => {
  const params = {
    modules: [EffectCoverflow],
    spaceBetween: 70,
    slidesPerView: 3,
    onSwiper: (swiper) => console.log(swiper),
    onSlideChange: () => console.log("Slide Changed"),
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      navigation: {
        nextEl: ".review-swiper-button-next",
        prevEl: ".review-swiper-button-prev",
      },
    },
    // breakpoints: {
    //   500: {
    //     width: 500,
    //     slidesPerView: 1,
    //   },
    //   1000: {
    //     width: 1000,
    //     slidesPerView: 2,
    //   },
    // },
  };

  return (
    <>
      <style global jsx>
        {`
          .swiper {
            margin: 32px auto;
            padding-top: 35px;
            padding-bottom: 35px;
          }

          // Attempts for making the buttons

          //   .swiper-button-next {
          //     z-index: 999;
          //     position: absolute;
          //     width: 20px;
          //     height: 20px;
          //     background-color: red;
          //     background-repeat: no-repeat;
          //     background-size: 100% auto;
          //     background-position: center;
          //     right: 97px;
          //     top: 50%;
          //     cursor: pointer;
          //   }

          //   .swiper-button-prev {
          //     z-index: 999;
          //     position: absolute;
          //     width: 20px;
          //     height: 20px;
          //     background-repeat: no-repeat;
          //     background-color: red;
          //     background-size: 100% auto;
          //     background-position: center;
          //     left: 27px;
          //     top: 50%;
          //     cursor: pointer;
          //   }

          // Attempts for making the carousel responsive

          //   .swiper-coverflow {
          //     width: 500px;
          //   }

          //   @media screen and (max-width: 1000px) {
          //     .swiper-coverflow {
          //       background-color: green;
          //       width: 1000px;
          //     }
          //   }

          //   @media screen and (max-width: 500px) {
          //     .swiper-coverflow {
          //       background-color: yellow;
          //       width: 500px;
          //     }
          //   }
        `}
      </style>
      <Swiper {...params}>
        {URLS.map((each) => (
          <SwiperSlide>
            {({ isActive, isPrev, isNext }) => (
              <Box {...{ url: each, isNext, isPrev, isActive }} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
