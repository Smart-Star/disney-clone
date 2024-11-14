import { useRef, useState } from 'react';
import { image_base_url } from '../services/globalApi';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useMovieStore } from '../constants/movieStore';
import { MovieType } from '../constants/types';

export const Slider = () => {
  const { status, movieList } = useMovieStore();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const slideLeft = (element: HTMLDivElement | null) => {
    const screenWidth = window.innerWidth;

    if (element && movieList) {
      element.scrollLeft -= screenWidth - 109;
      setCurrentSlide((prev) =>
        prev === 0 ? movieList.length - movieList.length : prev - 1
      );
    }
  };

  const slideRight = (element: HTMLDivElement | null) => {
    const screenWidth = window.innerWidth;

    if (element && movieList) {
      element.scrollLeft += screenWidth - 109;
      setCurrentSlide((prev) =>
        prev === movieList.length - 1 ? movieList.length - 1 : prev + 1
      );
    }
  };

  console.log(status);
  console.log(movieList);

  return (
    <>
      {movieList && (
        <section className="text-white relative">
          <div
            className="flex sm:px-16 px-6 py-5 overflow-x-auto w-full space-x-3 md:space-x-5 scrollbar-none scroll-smooth"
            ref={slideRef}
          >
            {movieList?.map((item: MovieType) => (
              <img
                key={item.id}
                src={image_base_url + item.backdrop_path}
                alt="poster-img"
                className="h-[170px] md:h-[260px] lg:h-[310px] min-w-full object-cover object-left-top rounded-md shadow-lg shadow-black hover:ring-[3px] hover:ring-gray-200 duration-200 ease-in-out"
              />
            ))}
          </div>

          <div className="absolute z-[100] right-24 bottom-10 hidden lg:flex gap-2">
            {movieList?.map((_, index) => (
              <div
                key={index + 'w'}
                className={`size-[6px] rounded-full ${currentSlide === index ? `bg-white` : `bg-white/50`}`}
              />
            ))}
          </div>

          <span>
            {currentSlide < movieList?.length - 1 && (
              <GoChevronRight
                size={45}
                className="absolute hidden lg:block -translate-x-1/2 -translate-y-1/2 top-1/2 right-16 z-50 opacity-25 hover:opacity-100 duration-200 drop-shadow-lg cursor-pointer"
                onClick={() => slideRight(slideRef.current)}
              />
            )}

            {currentSlide > 0 && (
              <GoChevronLeft
                size={45}
                className="absolute hidden lg:block -translate-x-1/2 -translate-y-1/2 top-1/2 left-28 z-50 opacity-25 hover:opacity-100 duration-200 drop-shadow-lg cursor-pointer"
                onClick={() => slideLeft(slideRef.current)}
              />
            )}
          </span>
        </section>
      )}
    </>
  );
};
