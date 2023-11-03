import type { Metadata } from 'next';
import { M_PLUS_1p, DotGothic16 } from 'next/font/google';
import './styles/globals.css';

const mPlus1p = M_PLUS_1p({ weight: ['400', '700'], preload: false, variable: '--font-m-plus-1p' });
const dotGothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dot-gothic-16',
});

export const metadata: Metadata = {
  title: 'Hideaki Takahashi',
  description: 'Web and App Developer. CSSを愛し, CSSに愛されたエンジニア.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${mPlus1p.className} ${dotGothic16.className}`}>{children}</body>
    </html>
  );
}
