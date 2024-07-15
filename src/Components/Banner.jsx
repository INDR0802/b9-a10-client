import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [text] = useTypewriter({
    words: ["Imagine!", "Generate!", "Design!", "Aesthetize!"],
    loop: 0,
  });

  return (
    <div
      data-aos="fade-top"
      data-aos-delay="500"
      className=" bg-[url('/bg.svg')] flex flex-col gap-10 md:gap-1 md:flex-row max-w-[1175px] mx-2 md:mx-auto justify-center items-center mt-10 mb-10 text-white px-10 rounded-2xl">
      <div
        className="text-center md:-mt-10 mt-10  md:text-start space-y-5 w-[80vw]"
        data-aos="fade-right"
        data-aos-delay="500">
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-red-600">ArtisanAvenue</span>
        </h1>
        <p className="text-2xl">
          Here we{" "}
          <span className="text-orange-600 text-3xl font-bold">{text}</span>
        </p>
        <p className="px-[70px] md:px-[0px]">
          Crafting Creativity, One Piece at a Time!
        </p>
      </div>
      <div
        className="carousel w-[90vw] md:w-[95vw] h-[400px] my-10 rounded-2xl"
        data-aos="fade-left"
        data-aos-delay="500">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/ThmkH3C/1-07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/wrPgdkR/3-a116c2ad-b3cd-4d23-a8e3-9c068b20484a.jpg"
            className="w-full h-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/GMDVQkm/realistic-landscape.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/MpRDkjQ/images.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
