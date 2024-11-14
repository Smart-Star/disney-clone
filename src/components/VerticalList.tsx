import { MovieType } from '../constants/types';
import { image_base_url } from '../services/globalApi';

type Props = {
  movie: MovieType;
};

export const VerticalList = ({ movie }: Props) => {
  return (
    <img
      src={image_base_url + movie.poster_path}
      alt="movie-img"
      className="w-[110px] lg:w-[250px] object-cover rounded-md shadow-lg shadow-black hover:ring-[3px] hover:ring-gray-200 hover:scale-105 duration-200 cursor-pointer"
    />
  );
};
