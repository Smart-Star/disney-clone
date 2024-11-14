import { useEffect } from 'react';
import { useMovieStore } from './constants/movieStore';
import { Category, Header, Production, Slider } from './components';

function App() {
  const { movieList, fetchMovies } = useMovieStore();

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      fetchMovies();
    }

    return () => {
      isCancelled = true;
      console.log('cancelled.');
    };
  }, []);

  return (
    <div>
      {movieList && movieList?.length && (
        <>
          <Header />
          <Slider />
          <Production />
          <Category />
        </>
      )}
    </div>
  );
}

export default App;
