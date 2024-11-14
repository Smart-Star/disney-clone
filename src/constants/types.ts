import { IconType } from 'react-icons';

export interface MenuType {
  name: string;
  Icon: IconType;
}

export interface GenereType {
  id: number;
  name: string;
}

export interface ProductionType {
  id: Number;
  image: string;
  video: string;
}

export interface MovieType {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
}
