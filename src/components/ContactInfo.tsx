import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';
type ContactInfoProps = {
  size?: 'sm' | 'md' | 'lg';
  vertical?: boolean;
  showTitle?: boolean;
};
export const ContactInfo = ({
  size = 'md',
  vertical = false,
  showTitle = true
}: ContactInfoProps) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };
  const iconSize = {
    sm: 12,
    md: 16,
    lg: 20
  };
  return <div className={`${vertical ? 'flex flex-col space-y-1' : 'flex flex-wrap justify-center gap-x-3 gap-y-1'}`}>
      {showTitle && <div className={`font-medium ${sizeClasses[size]} ${vertical ? '' : 'w-full text-center mb-1'}`}>
          Contact Us
        </div>}
      <div className={`flex items-center gap-1 ${sizeClasses[size]}`}>
        <Phone size={iconSize[size]} className="flex-shrink-0" />
        <span className="whitespace-nowrap">07076245402, 08143158101</span>
      </div>
      <div className={`flex items-center gap-1 ${sizeClasses[size]}`}>
        <MapPin size={iconSize[size]} className="flex-shrink-0" />
        <span className="whitespace-nowrap">
          Ogbomosho & Ibadan, Oyo, Nigeria
        </span>
      </div>
      <div className={`flex items-center gap-1 ${sizeClasses[size]}`}>
        <Instagram size={iconSize[size]} className="flex-shrink-0" />
        <span className="whitespace-nowrap">@adukes_treats</span>
      </div>
      <div className={`flex items-center gap-1 ${sizeClasses[size]}`}>
        <span className="whitespace-nowrap font-medium">TikTok:</span>
        <span className="whitespace-nowrap">@hormo234</span>
      </div>
    </div>;
};