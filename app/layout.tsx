import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Any Time Painting LLC | Professional Painting in Chino, CA',
  description: 'Residential and commercial painting services for interiors and exteriors in Chino, California. Request a free estimate.',
  openGraph: { title: 'Any Time Painting LLC | Chino, CA', description: 'Residential and commercial painting with careful preparation and professional results.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
