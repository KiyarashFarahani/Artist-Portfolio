import localFont from 'next/font/local';

// Custom font configuration - Siavash Font
export const customFont = localFont({
  src: [
    {
      path: '../../public/fonts/siavash.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-siavash',
  display: 'swap',
});

// Editorial Pro font for regular Persian text
export const editorialPro = localFont({
  src: [
    {
      path: '../../public/fonts/EditorialPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/EditorialPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-editorial-pro',
  display: 'swap',
});
