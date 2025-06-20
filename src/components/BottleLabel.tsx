import React from 'react';
import { NebulaBackground } from './MeteorEffect';
import { ProductIcon } from './ProductIcon';
import { ContactInfo } from './ContactInfo';
import { Star, Award, Leaf } from 'lucide-react';
export const BottleLabel = () => {
  const products = ['Zobo', 'Juices', 'Smoothies'];
  return <div className="w-full max-w-[300px] overflow-hidden rounded-lg shadow-lg">
      <NebulaBackground className="p-4 h-[600px] flex flex-col justify-between">
        <div className="text-white text-center">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Aduke's Treats
            </h1>
            <div className="flex items-center justify-center gap-1 mt-1">
              <Star size={14} className="text-yellow-200" />
              <p className="text-sm opacity-90">Premium Refreshments</p>
              <Star size={14} className="text-yellow-200" />
            </div>
          </div>
          {/* Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-3">
            <p className="text-sm italic">
              "Experience the perfect blend of natural flavors, crafted with
              care for your refreshment"
            </p>
          </div>
          {/* Products Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-3">
            <h2 className="text-sm font-semibold mb-2 border-b border-white/30 pb-1">
              Beverage Selection
            </h2>
            <div className="flex flex-col gap-2">
              {products.map((product, index) => <div key={index} className="flex items-center justify-center gap-2">
                  <ProductIcon name={product} size={16} className="text-yellow-200" />
                  <span className="text-sm">{product}</span>
                </div>)}
            </div>
          </div>
          {/* Quality Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-3">
            <div className="flex justify-center items-center gap-3">
              <div className="flex flex-col items-center">
                <Award size={16} className="text-yellow-200 mb-1" />
                <span className="text-xs">Premium Quality</span>
              </div>
              <div className="h-8 w-px bg-white/30" />
              <div className="flex flex-col items-center">
                <Leaf size={16} className="text-green-200 mb-1" />
                <span className="text-xs">Natural Ingredients</span>
              </div>
            </div>
          </div>
          {/* Nutritional Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-3">
            <h3 className="text-xs font-medium mb-1">
              Nutritional Information
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div className="flex justify-between">
                <span>Serving Size:</span>
                <span>500ml</span>
              </div>
              <div className="flex justify-between">
                <span>Energy:</span>
                <span>125 kcal</span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-auto text-white">
          <ContactInfo size="sm" vertical={true} showTitle={false} />
        </div>
      </NebulaBackground>
    </div>;
};