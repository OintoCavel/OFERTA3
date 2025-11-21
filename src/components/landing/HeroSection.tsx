'use client';
import { Crown, UserCheck } from "lucide-react";
import { CtaButton } from "./CtaButton";
import React from 'react';

// Define the type for the custom element if using TypeScript in a strict environment
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        id: string;
      }, HTMLElement>;
    }
  }
}

export function HeroSection() {

  const handleScrollToOffer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black py-20 lg:py-32">
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase text-destructive drop-shadow-lg">
          Você ainda não sabe fazer uma mulher gozar de verdade.
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-md">
          Descubra o método que já ajudou mais de 35.000 homens a proporcionarem orgasmos múltiplos e a liberarem jatos de prazer nas suas parceiras.
        </p>
        
        <div className="mt-8 w-full">
             <vturb-smartplayer 
                id="vid-691fc47b813dc92a81d50346"
                style={{display: 'block', margin: '0 auto', width: '100%'}}
             ></vturb-smartplayer>
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-base lg:text-lg">
            <Crown className="h-5 w-5 lg:h-6 lg:w-6" />
            <span>ACESSO VITALÍCIO</span>
          </div>
          <p className="mt-2 text-white font-semibold text-base lg:text-lg flex items-center justify-center gap-2">
            <UserCheck className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
            <span>+35 mil homens já transformaram a sua vida sexual</span>
          </p>
        </div>
        <div className="mt-12">
          <CtaButton onClick={handleScrollToOffer} />
        </div>
      </div>
    </section>
  );
}
