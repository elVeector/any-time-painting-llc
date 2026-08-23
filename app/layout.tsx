import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Any Time Painting LLC | Pintura profesional en Chino, CA',
  description: 'Servicios de pintura residencial y comercial, interior y exterior, en Chino, California. Solicita una cotización gratuita.',
  openGraph: { title: 'Any Time Painting LLC | Chino, CA', description: 'Pintura residencial y comercial con preparación cuidadosa y resultados profesionales.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
