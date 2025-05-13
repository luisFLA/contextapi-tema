'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { TemaContext } from './Contextos/TemaContext';
import TemaItem from './Components/TemaItem';

export default function Home() {
  const { temas } = useContext(TemaContext);
  const router = useRouter();

  return (
    <div className="container mt-4">
      <h4 className="text-center mb-4">Pantalla Principal</h4>
      
      {temas.map((tema) => (
        <TemaItem key={tema.id} {...tema} />
      ))}

      <div className="text-center mt-3">
        <button
          className="btn btn-outline-primary"
          onClick={() => router.push('/(general)/configuracion')}
        >
          Visualizar temas interesantes
        </button>
      </div>
    </div>
  );
}

