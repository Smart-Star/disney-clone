import { MovieType } from '../constants/types';
import { image_base_url } from '../services/globalApi';

type Props = {
  movie: MovieType;
};

export const HorizontalList = ({ movie }: Props) => {
  return (
    <div className="space-y-1 hover:scale-105 duration-200">
      <img
        src={image_base_url + movie.backdrop_path}
        alt="movie-img"
        className="min-w-[170px] lg:min-w-[370px] object-cover rounded-md shadow-lg shadow-black hover:ring-[3px] hover:ring-gray-200 duration-200 cursor-pointer"
      />

      <h2 className="font-medium text-sm lg:text-base text-gray-200">
        {movie.title}
      </h2>
    </div>
  );
};
