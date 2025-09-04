export interface CharacterImage {
  id: string;
  src: string;
  alt: string;
}

export interface CharacterSet {
  id: string;
  name: string;
  description: string;
  images: CharacterImage[];
}

export const characterSets: CharacterSet[] = [
  {
    id: 'coffee',
    name: 'قهوه و زندگی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
    images: [
      { id: 'coffee-1', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.03.jpeg', alt: 'قهوه و زندگی - تصویر 1' },
      { id: 'coffee-2', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.04.jpeg', alt: 'قهوه و زندگی - تصویر 2' },
      { id: 'coffee-3', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.05.jpeg', alt: 'قهوه و زندگی - تصویر 3' },
      { id: 'coffee-4', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.06.jpeg', alt: 'قهوه و زندگی - تصویر 4' },
      { id: 'coffee-5', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.08.jpeg', alt: 'قهوه و زندگی - تصویر 5' },
      { id: 'coffee-6', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.09.jpeg', alt: 'قهوه و زندگی - تصویر 6' },
      { id: 'coffee-7', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.10.jpeg', alt: 'قهوه و زندگی - تصویر 7' },
      { id: 'coffee-8', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.12.jpeg', alt: 'قهوه و زندگی - تصویر 8' },
      { id: 'coffee-9', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.13.jpeg', alt: 'قهوه و زندگی - تصویر 9' },
      { id: 'coffee-10', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.14.jpeg', alt: 'قهوه و زندگی - تصویر 10' },
      { id: 'coffee-11', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.15.jpeg', alt: 'قهوه و زندگی - تصویر 11' },
      { id: 'coffee-12', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.17.jpeg', alt: 'قهوه و زندگی - تصویر 12' },
      { id: 'coffee-13', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.18.jpeg', alt: 'قهوه و زندگی - تصویر 13' },
      { id: 'coffee-14', src: '/images/character-designs/coffee/photo_2025-09-02 10.01.20.jpeg', alt: 'قهوه و زندگی - تصویر 14' },
    ]
  },
  {
    id: 'grandparents',
    name: 'پدربزرگ و مادربزرگ دوست‌داشتنی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.',
    images: [
      { id: 'grandparents-1', src: '/images/character-designs/cute grandparents/photo_2025-09-02 10.00.54.jpeg', alt: 'پدربزرگ و مادربزرگ - تصویر 1' },
      { id: 'grandparents-2', src: '/images/character-designs/cute grandparents/photo_2025-09-02 10.00.56.jpeg', alt: 'پدربزرگ و مادربزرگ - تصویر 2' },
      { id: 'grandparents-3', src: '/images/character-designs/cute grandparents/photo_2025-09-02 10.00.57.jpeg', alt: 'پدربزرگ و مادربزرگ - تصویر 3' },
      { id: 'grandparents-4', src: '/images/character-designs/cute grandparents/photo_2025-09-02 10.00.58.jpeg', alt: 'پدربزرگ و مادربزرگ - تصویر 4' },
    ]
  },
  {
    id: 'dark-creature',
    name: 'موجود تاریک',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
    images: [
      { id: 'dark-1', src: '/images/character-designs/Dark creature/photo_2025-09-02 10.00.40.jpeg', alt: 'موجود تاریک - تصویر 1' },
      { id: 'dark-2', src: '/images/character-designs/Dark creature/photo_2025-09-02 10.00.41.jpeg', alt: 'موجود تاریک - تصویر 2' },
    ]
  },
  {
    id: 'ghost',
    name: 'شبح',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    images: [
      { id: 'ghost-1', src: '/images/character-designs/ghost/photo_2025-09-02 10.00.26.jpeg', alt: 'شبح - تصویر 1' },
      { id: 'ghost-2', src: '/images/character-designs/ghost/photo_2025-09-02 10.01.21.jpeg', alt: 'شبح - تصویر 2' },
      { id: 'ghost-3', src: '/images/character-designs/ghost/photo_2025-09-02 10.01.22.jpeg', alt: 'شبح - تصویر 3' },
      { id: 'ghost-4', src: '/images/character-designs/ghost/photo_2025-09-02 10.01.24.jpeg', alt: 'شبح - تصویر 4' },
    ]
  },
  {
    id: 'woman-oldman',
    name: 'زن و مرد مسن',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.',
    images: [
      { id: 'woman-oldman-1', src: '/images/character-designs/woman and oldman/photo_2025-09-02 10.00.44.jpeg', alt: 'زن و مرد مسن - تصویر 1' },
      { id: 'woman-oldman-2', src: '/images/character-designs/woman and oldman/photo_2025-09-02 10.00.48.jpeg', alt: 'زن و مرد مسن - تصویر 2' },
    ]
  }
];
