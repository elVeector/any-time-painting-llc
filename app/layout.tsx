import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pinta Norte | Pintura profesional en Chihuahua',
  description: 'Pintura residencial y comercial en Chihuahua. Interiores, exteriores, fachadas y acabados con cotización sin costo.',
  openGraph: { title: 'Pinta Norte | Pintura profesional', description: 'Transformamos hogares y negocios con color, detalle y un trabajo bien hecho.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
