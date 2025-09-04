'use client';

import { motion } from 'framer-motion';

const CustomFontExample = () => {
  return (
    <div className="p-8 space-y-6">
      {/* Using CSS classes */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Custom Font Examples</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Default Font (Inter)</h3>
            <p className="text-gray-600">This is using the default Inter font from Google Fonts.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Playfair Display</h3>
            <p className="font-playfair text-gray-600">This is using Playfair Display for elegant headings.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Siavash Font</h3>
            <p className="font-siavash text-gray-600">This is using your custom Siavash font loaded via Next.js localFont.</p>
          </div>
        </div>
      </div>

      {/* Using Tailwind classes */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-playfair font-bold mb-4">Tailwind Usage</h3>
        <div className="space-y-2">
          <p className="font-siavash text-lg">Siavash font with Tailwind class</p>
          <p className="font-playfair text-lg">Elegant serif font</p>
        </div>
      </div>
    </div>
  );
};

export default CustomFontExample;
