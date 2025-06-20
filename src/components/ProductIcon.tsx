import React from 'react';
import { CakeIcon, Coffee, Cookie, Sandwich } from 'lucide-react';
type ProductIconProps = {
  name: string;
  size?: number;
  className?: string;
};
export const ProductIcon = ({
  name,
  size = 16,
  className = ''
}: ProductIconProps) => {
  const getIcon = () => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('cake') || lowerName.includes('parfait')) {
      return <CakeIcon size={size} className={className} />;
    } else if (lowerName.includes('juice') || lowerName.includes('zobo') || lowerName.includes('smoothie')) {
      return <Coffee size={size} className={className} />;
    } else if (lowerName.includes('chin-chin') || lowerName.includes('bread')) {
      return <Cookie size={size} className={className} />;
    } else {
      return <Sandwich size={size} className={className} />;
    }
  };
  return getIcon();
};