import axios from 'axios';
import { create } from 'zustand';
import { movie_url } from '../services/globalApi';

export interface MovieState {
  status: 'Loading...' | 'Completed.' | 'Error!';
  movieList: [] | null;
  fetchMovies: () => void;
}

export const useMovieStore = create<MovieState>()((set) => ({
  status: 'Loading...',
  movieList: null,
  genreMovieList: null,

  fetchMovies: async () => {
    try {
      set({ status: `Loading...` });

      const res = await axios.get(movie_url);
      if (res.data && res.data.results) {
        set({ movieList: res.data.results, status: 'Completed.' });
      }
    } catch (e: unknown | any) {
      console.log(`An eroor occured!`, e.toJSON().message);
      set({ status: `Error!` });
    }
  },
}));

/* 
axios
  .get(movie_url)
  .then((res) => {
    if (res.data && res.data?.results) {
      set({ movieList: res.data.results });
      set({ status: `Completed.` });
    }
  })
  .catch((e) => {
    console.log(`An eroor occured.`, e.message);
    set({ status: `Error!` });
  });
*/
