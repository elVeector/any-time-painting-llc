import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Any Time Painting LLC | Painting Services in Chino, CA',
  description: 'Residential and commercial interior and exterior painting services in Chino, California. Request a free estimate from Any Time Painting LLC.',
  openGraph: { title: 'Any Time Painting LLC | Chino, CA', description: 'Dependable residential and commercial painting with careful preparation and professional results.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
