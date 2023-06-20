import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../assets/site/banner-1.jpg";
import banner2 from "../assets/site/banner-2.jpg";
import banner3 from "../assets/site/banner-3.jpg";
import banner4 from "../assets/site/banner-4.jpg";

const DemoCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      stopOnHover={false}
      interval={7000}
      transitionTime={500}
      swipeable={true}
      emulateTouch={true}
    >
      <div className="banner">
        <img
          src={banner1}
          loading="lazy"
          alt="banner img"
          className="banner-img"
        />
      </div>
      <div className="banner">
        <img
          src={banner2}
          loading="lazy"
          alt="banner img"
          className="banner-img"
        />
      </div>
      <div className="banner">
        <img
          src={banner3}
          loading="lazy"
          alt="banner img"
          className="banner-img"
        />
      </div>
      <div className="banner">
        <img
          src={banner4}
          loading="lazy"
          alt="banner img"
          className="banner-img"
        />
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
