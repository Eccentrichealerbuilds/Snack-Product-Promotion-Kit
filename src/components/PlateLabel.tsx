import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import { NebulaBackground } from './MeteorEffect';
import { ProductIcon } from './ProductIcon';
import { ContactInfo } from './ContactInfo';
export const PlateLabel = () => {
  const plateRef = useRef<HTMLDivElement>(null);
  const handleDownload = async () => {
    if (plateRef.current) {
      const dataUrl = await toPng(plateRef.current);
      const link = document.createElement('a');
      link.download = "adukes-treats-plate-label.png";
      link.href = dataUrl;
      link.click();
    }
  };
  const handleDownload4K = async () => {
    if (plateRef.current) {
      const dataUrl = await toPng(plateRef.current, {
        width: 3840,
        height: 3840,
        pixelRatio: 2
      });
      const link = document.createElement('a');
      link.download = "adukes-treats-plate-label-4k.png";
      link.href = dataUrl;
      link.click();
    }
  };
  const products = ['Cake', 'Meat Pie', 'Sausage Roll', 'Chicken Pie', 'Small Chops'];
  return (
    <div className="w-full max-w-[350px] mx-auto">
      <div ref={plateRef} className="overflow-hidden rounded-full shadow-lg aspect-square">
        <NebulaBackground className="p-6 h-full flex flex-col justify-between items-center">
          <div className="text-white text-center w-full">
            {/* Header */}
            <div className="mb-3">
              <h1 className="text-2xl font-bold tracking-tight">
                Aduke's Treats
              </h1>
              <p className="text-sm mt-1 opacity-90">Delicious Delights</p>
            </div>
            {/* Products Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mb-3 w-full">
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                {products.map((product, index) => <div key={index} className="flex items-center gap-1">
                    <ProductIcon name={product} size={14} className="text-yellow-200" />
                    <span className="text-sm">{product}</span>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Contact Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mt-auto text-white w-full">
            <ContactInfo size="sm" showTitle={false} />
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
