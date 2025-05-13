'use client';
import React, { useEffect, useState } from 'react';
import { TemaContext } from '../Contextos/TemaContext';

type Tema = {
  id: number;
  titulo: string;
  interesante: boolean;
};

export default function TemaProvider({ children }: { children: React.ReactNode }) {
  const [temas, setTemas] = useState<Tema[]>([]);

  useEffect(() => {
    const listaInicial = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      titulo: `Tema ${i + 1}`,
      interesante: false,
    }));
    setTemas(listaInicial);
  }, []);

  const alternarInteresante = (id: number) => {
    setTemas((prevTemas) =>
      prevTemas.map((tema) =>
        tema.id === id ? { ...tema, interesante: !tema.interesante } : tema
      )
    );
  };

  return (
    <TemaContext.Provider value={{ temas, alternarInteresante }}>
      {children}
    </TemaContext.Provider>
  );
}
