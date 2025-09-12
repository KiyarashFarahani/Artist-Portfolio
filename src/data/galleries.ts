export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface GallerySet {
  id: string;
  name: string;
  description?: string;
  images: GalleryImage[];
}

// Each set corresponds to a folder under public/images based on the workspace snapshot
export const gallerySets: GallerySet[] = [
  {
    id: 'character-design',
    name: 'کاراکتر دیزاین',
    images: [
      { id: 'cd-1', src: '/images/Normal Galleries/Character Design/IMG_7050.PNG', alt: 'Character Design 1' },
      { id: 'cd-2', src: '/images/Normal Galleries/Character Design/IMG_7057.PNG', alt: 'Character Design 2' },
      { id: 'cd-3', src: '/images/Normal Galleries/Character Design/IMG_7110.PNG', alt: 'Character Design 3' },
      { id: 'cd-4', src: '/images/Normal Galleries/Character Design/IMG_7112.PNG', alt: 'Character Design 4' },
      { id: 'cd-5', src: '/images/Normal Galleries/Character Design/IMG_7121.PNG', alt: 'Character Design 5' },
      { id: 'cd-6', src: '/images/Normal Galleries/Character Design/IMG_7122.PNG', alt: 'Character Design 6' },
      { id: 'cd-7', src: '/images/Normal Galleries/Character Design/IMG_7125.PNG', alt: 'Character Design 7' },
    ],
  },
  {
    id: 'gowdal',
    name: 'گودال',
    images: [
      { id: 'gowdal-1', src: '/images/Normal Galleries/Gowdal/Gowdal-1.PNG', alt: 'Gowdal 1' },
      { id: 'gowdal-2', src: '/images/Normal Galleries/Gowdal/Gowdal-2.PNG', alt: 'Gowdal 2' },
      { id: 'gowdal-3', src: '/images/Normal Galleries/Gowdal/Gowdal-3.PNG', alt: 'Gowdal 3' },
    ],
  },
  {
    id: 'liapho-character',
    name: 'کاراکتر لیافو',
    images: [
      { id: 'liapho-1', src: '/images/Normal Galleries/Liapho Character/IMG_7076.PNG', alt: 'Liapho 1' },
      { id: 'liapho-2', src: '/images/Normal Galleries/Liapho Character/IMG_7078.PNG', alt: 'Liapho 2' },
      { id: 'liapho-3', src: '/images/Normal Galleries/Liapho Character/IMG_7080.PNG', alt: 'Liapho 3' },
      { id: 'liapho-4', src: '/images/Normal Galleries/Liapho Character/IMG_7081.PNG', alt: 'Liapho 4' },
      { id: 'liapho-11', src: '/images/Normal Galleries/Liapho Character/IMG_7111.PNG', alt: 'Liapho 11' },
      { id: 'liapho-12', src: '/images/Normal Galleries/Liapho Character/IMG_7119.PNG', alt: 'Liapho 12' },
      { id: 'liapho-13', src: '/images/Normal Galleries/Liapho Character/IMG_7120.PNG', alt: 'Liapho 13' },
    ],
  },
  {
    id: 'mahak-1',
    name: 'محک - ۱',
    images: [
      { id: 'mahak1-1', src: '/images/Normal Galleries/Mahak-1/IMG_7092.PNG', alt: 'Mahak-1 1' },
      { id: 'mahak1-2', src: '/images/Normal Galleries/Mahak-1/IMG_7093.PNG', alt: 'Mahak-1 2' },
      { id: 'mahak1-3', src: '/images/Normal Galleries/Mahak-1/IMG_7094.PNG', alt: 'Mahak-1 3' },
      { id: 'mahak1-4', src: '/images/Normal Galleries/Mahak-1/IMG_7096.PNG', alt: 'Mahak-1 4' },
    ],
  },
  {
    id: 'mahak-2',
    name: 'محک - ۲',
    images: [
      { id: 'mahak2-1', src: '/images/Normal Galleries/Mahak-2/IMG_7090.PNG', alt: 'Mahak-2 1' },
      { id: 'mahak2-2', src: '/images/Normal Galleries/Mahak-2/IMG_7097.PNG', alt: 'Mahak-2 2' },
      { id: 'mahak2-3', src: '/images/Normal Galleries/Mahak-2/IMG_7098.PNG', alt: 'Mahak-2 3' },
    ],
  },
  {
    id: 'roohe-kanoon',
    name: 'روح کانون',
    images: [
      { id: 'rk-1', src: '/images/Normal Galleries/Roohe-Kanoon/IMG_7073.PNG', alt: 'Roohe Kanoon 1' },
      { id: 'rk-2', src: '/images/Normal Galleries/Roohe-Kanoon/IMG_7123.PNG', alt: 'Roohe Kanoon 2' },
      { id: 'rk-3', src: '/images/Normal Galleries/Roohe-Kanoon/IMG_7134.PNG', alt: 'Roohe Kanoon 3' },
      { id: 'rk-4', src: '/images/Normal Galleries/Roohe-Kanoon/photo_2025-09-02 10.01.21.jpeg', alt: 'Roohe Kanoon 4' },
      { id: 'rk-5', src: '/images/Normal Galleries/Roohe-Kanoon/photo_2025-09-02 10.01.22.jpeg', alt: 'Roohe Kanoon 5' },
      { id: 'rk-6', src: '/images/Normal Galleries/Roohe-Kanoon/Roohe-Kanoon-1.PNG', alt: 'Roohe Kanoon 6' },
      { id: 'rk-7', src: '/images/Normal Galleries/Roohe-Kanoon/Roohe-Kanoon-2.PNG', alt: 'Roohe Kanoon 7' },
      { id: 'rk-8', src: '/images/Normal Galleries/Roohe-Kanoon/Roohe-Kanoon-3.PNG', alt: 'Roohe Kanoon 8' },
      { id: 'rk-9', src: '/images/Normal Galleries/Roohe-Kanoon/Roohe-Kanoon-4.PNG', alt: 'Roohe Kanoon 9' },
      { id: 'rk-10', src: '/images/Normal Galleries/Roohe-Kanoon/Roohe-Kanoon-5.PNG', alt: 'Roohe Kanoon 10' },
    ],
  },
  {
    id: 'tak-frame',
    name: 'آثار تک فریم',
    images: [
      { id: 'tak-1', src: '/images/Normal Galleries/Tak-Frame/IMG_6950.PNG', alt: 'Tak Frame 1' },
      { id: 'tak-2', src: '/images/Normal Galleries/Tak-Frame/IMG_6952.PNG', alt: 'Tak Frame 2' },
      { id: 'tak-3', src: '/images/Normal Galleries/Tak-Frame/IMG_7041.PNG', alt: 'Tak Frame 3' },
      { id: 'tak-4', src: '/images/Normal Galleries/Tak-Frame/IMG_7052.PNG', alt: 'Tak Frame 4' },
      { id: 'tak-5', src: '/images/Normal Galleries/Tak-Frame/IMG_7055.PNG', alt: 'Tak Frame 5' },
      { id: 'tak-6', src: '/images/Normal Galleries/Tak-Frame/IMG_7061.PNG', alt: 'Tak Frame 6' },
      { id: 'tak-7', src: '/images/Normal Galleries/Tak-Frame/IMG_7063.PNG', alt: 'Tak Frame 7' },
      { id: 'tak-8', src: '/images/Normal Galleries/Tak-Frame/IMG_7070.PNG', alt: 'Tak Frame 8' },
      { id: 'tak-9', src: '/images/Normal Galleries/Tak-Frame/IMG_7079.PNG', alt: 'Tak Frame 9' },
      { id: 'tak-10', src: '/images/Normal Galleries/Tak-Frame/IMG_7083.PNG', alt: 'Tak Frame 10' },
      { id: 'tak-11', src: '/images/Normal Galleries/Tak-Frame/IMG_7126.PNG', alt: 'Tak Frame 11' },
      { id: 'tak-12', src: '/images/Normal Galleries/Tak-Frame/IMG_7133.PNG', alt: 'Tak Frame 12' },
    ],
  },
];


