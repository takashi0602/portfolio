import type { Metadata } from 'next';
import { M_PLUS_1p, DotGothic16 } from 'next/font/google';
import './styles/reset.css';
import './styles/globals.css';

const mPlus1p = M_PLUS_1p({ weight: ['400', '700'], preload: false, variable: '--font-m-plus-1p' });
const dotGothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dot-gothic-16',
});

export const metadata: Metadata = {
  title: "Takashi's portfolio",
  description: 'Web and App Developer。CSSを愛し、CSSに愛されたエンジニア。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${mPlus1p.variable} ${dotGothic16.variable}`}>
      <body>{children}</body>
    </html>
  );
}
