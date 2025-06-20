import React from 'react';
import { NebulaBackground } from './MeteorEffect';
import { ProductIcon } from './ProductIcon';
import { ContactInfo } from './ContactInfo';
export const PlateLabel = () => {
  const products = ['Cake', 'Meat Pie', 'Sausage Roll', 'Chicken Pie', 'Small Chops'];
  return <div className="w-full max-w-[350px] overflow-hidden rounded-full shadow-lg aspect-square">
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
    </div>;
};