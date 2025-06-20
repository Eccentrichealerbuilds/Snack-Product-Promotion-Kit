import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import { NebulaBackground } from './MeteorEffect';
import { ProductIcon } from './ProductIcon';
import { ContactInfo } from './ContactInfo';
export const Flyer = () => {
  const flyerRef = useRef<HTMLDivElement>(null);
  const handleDownload = async () => {
    if (flyerRef.current) {
      const dataUrl = await toPng(flyerRef.current);
      const link = document.createElement('a');
      link.download = "adukes-treats-flyer.png";
      link.href = dataUrl;
      link.click();
    }
  };
  const handleDownload4K = async () => {
    if (flyerRef.current) {
      const dataUrl = await toPng(flyerRef.current, {
        width: 3840,
        height: 2160,
        pixelRatio: 2
      });
      const link = document.createElement('a');
      link.download = "adukes-treats-flyer-4k.png";
      link.href = dataUrl;
      link.click();
    }
  };
  const products = ['Cake', 'Chin-chin', 'Meat Pie', 'Sausage Roll', 'Chicken Pie', 'Fish Roll', 'Small Chops', 'Breads', 'Zobo', 'Juices', 'Smoothies'];
  const parfaits = ['Cake Parfait', 'Yogurt Parfait', 'Fruit Parfait'];
  return (
    <div className="w-full max-w-md mx-auto">
      <div ref={flyerRef} className="overflow-hidden rounded-lg shadow-lg">
        <NebulaBackground className="p-4 md:p-6">
          <div className="text-white text-center">
            {/* Header */}
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Aduke's Treats
              </h1>
              <p className="text-lg md:text-xl mt-2 opacity-90">
                Delicious Delights For Every Occasion
              </p>
            </div>
            {/* Products Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2 border-b border-white/30 pb-1">
                Our Products
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {products.map((product, index) => <div key={index} className="flex items-center gap-2">
                    <ProductIcon name={product} size={18} className="text-yellow-200" />
                    <span>{product}</span>
                  </div>)}
              </div>
            </div>
            {/* Parfait Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2 border-b border-white/30 pb-1">
                Parfait Collection
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {parfaits.map((parfait, index) => <div key={index} className="flex items-center gap-2">
                    <ProductIcon name={parfait} size={18} className="text-pink-200" />
                    <span>{parfait}</span>
                  </div>)}
              </div>
            </div>
            {/* Contact Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <ContactInfo size="md" />
            </div>
          </div>
        </NebulaBackground>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <button onClick={handleDownload} className="px-3 py-1 rounded bg-blue-900 text-white hover:bg-blue-800 w-full">Download PNG</button>
        <button onClick={handleDownload4K} className="px-3 py-1 rounded bg-blue-900 text-white hover:bg-blue-800 w-full">Download 4K PNG</button>
      </div>
    </div>
  );
};
