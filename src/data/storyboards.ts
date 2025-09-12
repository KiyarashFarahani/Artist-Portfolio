export interface StoryboardImage {
  id: string;
  src: string;
  alt: string;
}

export interface StoryboardSet {
  id: string;
  name: string;
  description: string;
  images: StoryboardImage[];
}

export const storyboardSets: StoryboardSet[] = [
  {
    id: 'gaz',
    name: 'گز',
    description: 'استوری برد گز',
    images: [
      { id: 'gaz-1', src: '/images/Storyboards/Gaz/IMG_7105.PNG', alt: 'Gaz 1' },
      { id: 'gaz-2', src: '/images/Storyboards/Gaz/IMG_7106.PNG', alt: 'Gaz 2' },
      { id: 'gaz-3', src: '/images/Storyboards/Gaz/IMG_7113.PNG', alt: 'Gaz 3' },
      { id: 'gaz-4', src: '/images/Storyboards/Gaz/IMG_7115.PNG', alt: 'Gaz 4' },
      { id: 'gaz-5', src: '/images/Storyboards/Gaz/IMG_7118.PNG', alt: 'Gaz 5' },
    ]
  },
  {
    id: 'liapho-storyboard',
    name: 'قهوه لیافو',
    description: 'استوری برد لیافو',
    images: [
      { id: 'liapho-s-1', src: '/images/Storyboards/Liapho Storyboard/IMG_7084.PNG', alt: 'Liapho Storyboard 1' },
      { id: 'liapho-s-2', src: '/images/Storyboards/Liapho Storyboard/IMG_7085.PNG', alt: 'Liapho Storyboard 2' },
      { id: 'liapho-s-3', src: '/images/Storyboards/Liapho Storyboard/IMG_7086.PNG', alt: 'Liapho Storyboard 3' },
      { id: 'liapho-s-4', src: '/images/Storyboards/Liapho Storyboard/IMG_7087.PNG', alt: 'Liapho Storyboard 4' },
      { id: 'liapho-s-5', src: '/images/Storyboards/Liapho Storyboard/IMG_7088.PNG', alt: 'Liapho Storyboard 5' },
      { id: 'liapho-s-6', src: '/images/Storyboards/Liapho Storyboard/IMG_7089.PNG', alt: 'Liapho Storyboard 6' },
    ]
  },
  {
    id: 'rice-shop',
    name: 'فروشگاه برنج',
    description: 'استوری برد فروشگاه برنج',
    images: [
      { id: 'rice-1', src: '/images/Storyboards/Rice Shop/IMG_7100.PNG', alt: 'Rice Shop 1' },
      { id: 'rice-2', src: '/images/Storyboards/Rice Shop/IMG_7101.PNG', alt: 'Rice Shop 2' },
      { id: 'rice-3', src: '/images/Storyboards/Rice Shop/IMG_7102.PNG', alt: 'Rice Shop 3' },
      { id: 'rice-4', src: '/images/Storyboards/Rice Shop/IMG_7127.PNG', alt: 'Rice Shop 4' },
    ]
  },
  {
    id: 'setarvan',
    name: 'سترون',
    description: 'استوری برد سترون',
    images: [
      { id: 'setarvan-1', src: '/images/Storyboards/Setarvan/setarvan-1.PNG', alt: 'Setarvan 1' },
      { id: 'setarvan-2', src: '/images/Storyboards/Setarvan/setarvan-2.PNG', alt: 'Setarvan 2' },
      { id: 'setarvan-3', src: '/images/Storyboards/Setarvan/setarvan-3.PNG', alt: 'Setarvan 3' },
      { id: 'setarvan-4', src: '/images/Storyboards/Setarvan/setarvan-4.PNG', alt: 'Setarvan 4' },
      { id: 'setarvan-5', src: '/images/Storyboards/Setarvan/setarvan-5.PNG', alt: 'Setarvan 5' },
      { id: 'setarvan-6', src: '/images/Storyboards/Setarvan/setarvan-6.PNG', alt: 'Setarvan 6' },
    ]
  },
  {
    id: 'soghout',
    name: 'سقوط',
    description: 'استوری برد سقوط',
    images: [
      { id: 'soghout-1', src: '/images/Storyboards/soghout/IMG_7038.PNG', alt: 'Soghout 1' },
      { id: 'soghout-2', src: '/images/Storyboards/soghout/IMG_7039.PNG', alt: 'Soghout 2' },
      { id: 'soghout-3', src: '/images/Storyboards/soghout/soghout-1.PNG', alt: 'Soghout 3' },
      { id: 'soghout-4', src: '/images/Storyboards/soghout/soghout-2.PNG', alt: 'Soghout 4' },
    ]
  },
];
