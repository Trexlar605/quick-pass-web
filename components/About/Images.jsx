import Carousel from "./Slide";
import img1 from "public/images/driving.jpg";
import img2 from "public/images/driving.jpg";
import img3 from "public/images/driving.jpg";
const slides = [img1, img2, img3];

export default function ImageCarousel() {
  return (
    <div className="relative">
      <div className="max-w-lg">
        <Carousel>
          {" "}
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
