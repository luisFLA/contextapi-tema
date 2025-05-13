'use client'
import TemaProvider, { useTema } from "../Provider/TemaProvider";

export default function LayoutSecundario({
 children
}: {
 children: React.ReactNode;
}) {
  return (

      <div>
          {children}
      </div>
            
            
      
  );
}

