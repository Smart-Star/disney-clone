import { genere } from '../constants';
import { GenereType } from '../constants/types';
import { MovieList } from './MovieList';

export const Category = () => {
  return (
    <section className="pb-5 pt-5 md:pt-10 text-white">
      {genere.map((item: GenereType, index) => {
        index += 1;

        return (
          index <= 5 && (
            <div key={item.id} className="pb-2 lg:pb-8">
              <h2 className="sm:px-16 px-6 lg:text-[20px] font-semibold">
                {item.name}
              </h2>

              <MovieList index_={index} genreId={item.id} />
            </div>
          )
        );
      })}
    </section>
  );
};
