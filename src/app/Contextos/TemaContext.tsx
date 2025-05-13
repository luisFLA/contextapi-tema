'use client';
import { createContext } from 'react';

export const TemaContext = createContext<{
  temas: { id: number; titulo: string; interesante: boolean }[];
  alternarInteresante: (id: number) => void;
}>({
  temas: [],
  alternarInteresante: () => {},
});
