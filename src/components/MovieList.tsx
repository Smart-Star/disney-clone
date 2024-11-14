import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { movie_genre_base_url } from '../services/globalApi';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { HorizontalList } from './HorizontalList';
import { MovieType } from '../constants/types';
import { VerticalList } from './VerticalList';

type Props = {
  genreId: number;
  index_: number;
};

type Status = 'Loading...' | 'Completed.' | 'Error!';

export const MovieList = ({ genreId, index_ }: Props) => {
  const [genreMovieList, setGenreMovieList] = useState<[] | null>(null);
  const [horizontalSlide, setHorizontalSlide] = useState<number>(0);
  const [verticalSlide, setVerticalSlide] = useState<number>(0);
  const [_, setStatus] = useState<Status>(`Loading...`);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const fetchMoviesByGenre = useCallback(async () => {
    try {
      setStatus(`Loading...`);

      const res = await axios.get(
        `${movie_genre_base_url}&with_genres=${genreId}`
      );
      if (res.data && res.data.results) {
        setGenreMovieList(res.data.results);
        setStatus('Completed.');
      }
    } catch (e: unknown | any) {
      console.log(`An eroor occured!`, e.toJSON().message);
      setStatus(`Error!`);
    }
  }, []);

  const slideLeft = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft -= 850;

      if (index_ % 3 === 0) {
        setVerticalSlide((prev) => (prev === 0 ? 0 : prev - 5));
      } else {
        setHorizontalSlide((prev) => (prev === 0 ? 0 : prev - 5));
      }
    }
  };

  const slideRight = () => {
    if (slideRef.current && genreMovieList) {
      slideRef.current.scrollLeft += 850;

      if (index_ % 3 === 0) {
        setVerticalSlide((prev) => (prev === 25 ? 25 : prev + 5));
      } else {
        setHorizontalSlide((prev) => (prev === 40 ? 40 : prev + 5));
      }
    }
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      fetchMoviesByGenre();
    }

    return () => {
      isCancelled = true;
      console.log(`cancelled.`);
    };
  }, []);

  return (
    <section className="relative">
      <div
        className="flex overflow-x-auto space-x-3 md:space-x-5 sm:pl-16 pl-6 pr-6 py-2 lg:py-5 lg:pb-10 scrollbar-none scroll-smooth"
        ref={slideRef}
      >
        {genreMovieList?.map((item: MovieType) => (
          <>
            {index_ % 3 === 0 ? (
              <VerticalList key={item.id} movie={item} />
            ) : (
              <HorizontalList key={item.id} movie={item} />
            )}
          </>
        ))}
      </div>

      <span>
        {horizontalSlide !== 40 && verticalSlide !== 25 && (
          <GoChevronRight
            size={45}
            className={`absolute hidden lg:block -translate-x-1/2 -translate-y-1/2 top-1/2 right-16 ${index_ % 3 !== 0 && `-mt-6`} z-50 opacity-70 hover:opacity-100 duration-200 drop-shadow-lg cursor-pointer`}
            onClick={slideRight}
          />
        )}

        {(horizontalSlide > 0 || verticalSlide > 0) && (
          <GoChevronLeft
            size={45}
            className={`absolute hidden lg:block -translate-x-1/2 -translate-y-1/2 top-1/2 left-28 ${index_ % 3 !== 0 && `-mt-6`} z-50 opacity-70 hover:opacity-100 duration-200 drop-shadow-lg cursor-pointer`}
            onClick={slideLeft}
          />
        )}
      </span>
    </section>
  );
};
