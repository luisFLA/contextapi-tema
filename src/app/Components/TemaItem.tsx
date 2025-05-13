'use client';
import React, { useContext } from 'react';
import { TemaContext } from '../Contextos/TemaContext';

interface Props {
  id: number;
  titulo: string;
  interesante: boolean;
}

export default function TemaItem({ id, titulo, interesante }: Props) {
  const { alternarInteresante } = useContext(TemaContext);

  return (
    <div className="d-flex align-items-center mb-2">
      <button className={`btn me-2 flex-grow-1 ${interesante ? 'btn-warning' : 'btn-light'}`} disabled>
        {titulo}
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => alternarInteresante(id)}
      >
        {interesante ? 'No interesante' : 'Interesante'}
      </button>
    </div>
  );
}
