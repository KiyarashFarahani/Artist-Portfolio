# Artist Portfolio

A stunning, modern web portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases artistic works with beautiful animations, responsive design, and optimized performance.

## Features

- 🎨 **Beautiful Design**: Modern, artistic layout with smooth animations
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Optimized images and code splitting
- 🎭 **Smooth Animations**: Framer Motion for delightful interactions
- 🖼️ **Image Gallery**: Masonry layout with lightbox functionality
- 📧 **Contact Form**: Functional contact form with validation
- 🔍 **SEO Optimized**: Meta tags and structured data
- ♿ **Accessible**: WCAG compliant design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Playfair Display (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd artist-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── ImageGallery.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── artworks.ts
├── lib/
└── types/
```

## Customization

### Adding Your Artwork

1. Update the `artworks` array in `src/data/artworks.ts`
2. Add your images to the `public/images/` folder
3. Update the image paths in the artworks data

### Styling

- Modify `src/app/globals.css` for global styles
- Use Tailwind classes for component styling
- Customize colors in `tailwind.config.js`

### Content

- Update the hero section in `src/components/Hero.tsx`
- Modify the about section in `src/components/About.tsx`
- Update contact information in `src/components/Contact.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

```bash
npm run build
npm start
```

## Performance Features

- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load as needed
- **Font Optimization**: Google Fonts with display swap
- **Bundle Analysis**: Built-in bundle analyzer

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ using Next.js and Tailwind CSS