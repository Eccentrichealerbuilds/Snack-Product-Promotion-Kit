import React from 'react';
import { NebulaBackground } from './MeteorEffect';
import { Phone, Instagram } from 'lucide-react';
export const Sticker = () => {
  return <div className="w-full max-w-[200px] overflow-hidden rounded-full shadow-lg aspect-square">
      <NebulaBackground className="p-4 h-full flex flex-col justify-center items-center">
        <div className="text-white text-center">
          {/* Logo */}
          <div className="mb-2">
            <h1 className="text-xl font-bold tracking-tight">Aduke's Treats</h1>
            <div className="h-0.5 w-16 bg-white/50 mx-auto my-1"></div>
            <p className="text-xs opacity-90">Delicious Delights</p>
          </div>
          {/* Minimal Contact */}
          <div className="flex flex-col items-center gap-1 mt-2 text-xs">
            <div className="flex items-center gap-1">
              <Phone size={10} />
              <span>07076245402</span>
            </div>
            <div className="flex items-center gap-1">
              <Instagram size={10} />
              <span>@adukes_treats</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">TikTok:</span>
              <span>@hormo234</span>
            </div>
          </div>
        </div>
      </NebulaBackground>
    </div>;
};