import { BiSolidHome, BiSolidStar, BiSolidTv } from 'react-icons/bi';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { RiMovie2Line } from 'react-icons/ri';
import { GenereType, MenuType, ProductionType } from './types';
import {
  disney,
  disneyVid,
  marvel,
  marvelVid,
  natGeo,
  natGeoVid,
  pixar,
  pixarVid,
  starwar,
  starWarsVid,
} from '../assets';

export const menu: Array<MenuType> = [
  {
    name: 'HOME',
    Icon: BiSolidHome,
  },
  {
    name: 'SEARCH',
    Icon: FaSearch,
  },
  {
    name: 'WATCH LIST',
    Icon: FaPlus,
  },
  {
    name: 'ORIGINALS',
    Icon: BiSolidStar,
  },
  {
    name: 'MOVIES',
    Icon: RiMovie2Line,
  },
  {
    name: 'SERIES',
    Icon: BiSolidTv,
  },
];

export const productionList: Array<ProductionType> = [
  {
    id: 1,
    image: disney,
    video: disneyVid,
  },
  {
    id: 2,
    image: pixar,
    video: pixarVid,
  },
  {
    id: 3,
    image: marvel,
    video: marvelVid,
  },
  {
    id: 4,
    image: starwar,
    video: starWarsVid,
  },
  {
    id: 5,
    image: natGeo,
    video: natGeoVid,
  },
];

export const genere: Array<GenereType> = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];
