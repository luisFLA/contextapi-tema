'use client';
import { useContext } from 'react';
import { TemaContext } from '../../Contextos/TemaContext';
import { useRouter } from 'next/navigation';

export default function Configuracion() {
  const { temas } = useContext(TemaContext);
  const router = useRouter();

  const interesantes = temas.filter((t) => t.interesante);

  return (
    <div className="container mt-4">
      <h4 className="text-center mb-4">Pantalla Interesantes</h4>
      <div className="d-flex flex-column align-items-center">
        {interesantes.map((tema) => (
          <button key={tema.id} className="btn btn-warning mb-2" disabled style={{ width: '200px' }}>
            {tema.titulo}
          </button>
        ))}
        <button className="btn btn-outline-primary mt-3" onClick={() => router.back()}>
          Volver
        </button>
      </div>
    </div>
  );
}
