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
    id: 'storyboard-set-1',
    name: 'داستان اول',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.',
    images: [
      { id: 'storyboard-1', src: '/images/storyboards/photo_2025-09-02 10.00.27.jpeg', alt: 'استوری برد - تصویر 1' },
      { id: 'storyboard-2', src: '/images/storyboards/photo_2025-09-02 10.00.29.jpeg', alt: 'استوری برد - تصویر 2' },
      { id: 'storyboard-3', src: '/images/storyboards/photo_2025-09-02 10.00.30.jpeg', alt: 'استوری برد - تصویر 3' },
      { id: 'storyboard-4', src: '/images/storyboards/photo_2025-09-02 10.00.31.jpeg', alt: 'استوری برد - تصویر 4' },
      { id: 'storyboard-5', src: '/images/storyboards/photo_2025-09-02 10.00.32.jpeg', alt: 'استوری برد - تصویر 5' },
      { id: 'storyboard-6', src: '/images/storyboards/photo_2025-09-02 10.00.33.jpeg', alt: 'استوری برد - تصویر 6' },
    ]
  },
  {
    id: 'storyboard-set-2',
    name: 'داستان دوم',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.',
    images: [
      { id: 'storyboard-7', src: '/images/storyboards/photo_2025-09-02 10.00.34.jpeg', alt: 'استوری برد - تصویر 7' },
      { id: 'storyboard-8', src: '/images/storyboards/photo_2025-09-02 10.00.37.jpeg', alt: 'استوری برد - تصویر 8' },
      { id: 'storyboard-9', src: '/images/storyboards/photo_2025-09-02 10.00.39.jpeg', alt: 'استوری برد - تصویر 9' },
      { id: 'storyboard-10', src: '/images/storyboards/photo_2025-09-02 10.00.42.jpeg', alt: 'استوری برد - تصویر 10' },
      { id: 'storyboard-11', src: '/images/storyboards/photo_2025-09-02 10.00.43.jpeg', alt: 'استوری برد - تصویر 11' },
      { id: 'storyboard-12', src: '/images/storyboards/photo_2025-09-02 10.00.45.jpeg', alt: 'استوری برد - تصویر 12' },
    ]
  },
  {
    id: 'storyboard-set-3',
    name: 'داستان سوم',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.',
    images: [
      { id: 'storyboard-13', src: '/images/storyboards/photo_2025-09-02 10.00.46.jpeg', alt: 'استوری برد - تصویر 13' },
      { id: 'storyboard-14', src: '/images/storyboards/photo_2025-09-02 10.00.47.jpeg', alt: 'استوری برد - تصویر 14' },
      { id: 'storyboard-15', src: '/images/storyboards/photo_2025-09-02 10.00.59.jpeg', alt: 'استوری برد - تصویر 15' },
      { id: 'storyboard-16', src: '/images/storyboards/photo_2025-09-02 10.01.00.jpeg', alt: 'استوری برد - تصویر 16' },
      { id: 'storyboard-17', src: '/images/storyboards/photo_2025-09-02 10.01.01.jpeg', alt: 'استوری برد - تصویر 17' },
      { id: 'storyboard-18', src: '/images/storyboards/photo_2025-09-02 10.01.02.jpeg', alt: 'استوری برد - تصویر 18' },
    ]
  }
];
