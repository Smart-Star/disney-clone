// https://api.themoviedb.org/3/trending/all/day?api_key=4601008a6fea5b0d369e4566b01b7a36
// https://api.themoviedb.org/3/discover/movie?api_key=4601008a6fea5b0d369e4566b01b7a36&with_genres=%2C
const movie_base_url = 'https://api.themoviedb.org/3';
const api_key = '4601008a6fea5b0d369e4566b01b7a36';

export const movie_url = `${movie_base_url}/trending/all/day?api_key=${api_key}`;

export const image_base_url = 'https://image.tmdb.org/t/p/original';

export const movie_genre_base_url = `${movie_base_url}/discover/movie?api_key=${api_key}`;
