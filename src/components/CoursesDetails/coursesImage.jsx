import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import defaultImage from "../../assets/images/default.jpg";

const CoursesImage = ({ images = [], courseName }) => {
  const [thumbsSwiper] = useState(null);

  const displayImages = images.length > 0 ? images : [{ image: defaultImage }];

  return (
    <div className="rounded-lg border overflow-hidden">
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="product-main-slider"
      >
        {displayImages.map((imageObj, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-square bg-base-100">
              <img
                src={imageObj.image}
                alt={courseName}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoursesImage;
