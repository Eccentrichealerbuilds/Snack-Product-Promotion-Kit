import React, { useState } from 'react';
import { Flyer } from './components/Flyer';
import { BottleLabel } from './components/BottleLabel';
import { PlateLabel } from './components/PlateLabel';
import { Sticker } from './components/Sticker';
export function App() {
  const [activeDesign, setActiveDesign] = useState('flyer');
  return <div className="min-h-screen w-full bg-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Aduke's Treats - Marketing Materials
        </h1>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <button onClick={() => setActiveDesign('flyer')} className={`px-4 py-2 rounded-full ${activeDesign === 'flyer' ? 'bg-blue-900 text-white' : 'bg-white border border-blue-900 text-blue-900'}`}>
            Flyer
          </button>
          <button onClick={() => setActiveDesign('bottle')} className={`px-4 py-2 rounded-full ${activeDesign === 'bottle' ? 'bg-blue-900 text-white' : 'bg-white border border-blue-900 text-blue-900'}`}>
            Bottle Label
          </button>
          <button onClick={() => setActiveDesign('plate')} className={`px-4 py-2 rounded-full ${activeDesign === 'plate' ? 'bg-blue-900 text-white' : 'bg-white border border-blue-900 text-blue-900'}`}>
            Plate Takeaway
          </button>
          <button onClick={() => setActiveDesign('sticker')} className={`px-4 py-2 rounded-full ${activeDesign === 'sticker' ? 'bg-blue-900 text-white' : 'bg-white border border-blue-900 text-blue-900'}`}>
            Sticker
          </button>
        </div>
        <div className="flex justify-center">
          {activeDesign === 'flyer' && <Flyer />}
          {activeDesign === 'bottle' && <BottleLabel />}
          {activeDesign === 'plate' && <PlateLabel />}
          {activeDesign === 'sticker' && <Sticker />}
        </div>
      </div>
    </div>;
}