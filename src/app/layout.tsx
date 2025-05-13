'use client';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TemaProvider from './Provider/TemaProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <TemaProvider>
          {children}
        </TemaProvider>
      </body>
    </html>
  );
}
