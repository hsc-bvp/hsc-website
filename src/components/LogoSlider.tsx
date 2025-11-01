'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const logos = ['/logo1.png', '/logo2.png', '/logo3.png']; // Add more logos if needed

  // Duplicate the logos array to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    let position = 0;
    const speed = 0.1;

    const animate = () => {
      position -= speed;

      // Reset position when first set of logos fully scrolled
      if (position <= -100) {
        position = 0;
      }

      slider.style.transform = `translateX(${position}%)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const logoWidth = 100 / logos.length; // Dynamic width based on number of logos

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="relative h-[30vh] w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="absolute top-0 left-0 flex h-full w-[200%]"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="relative h-full flex-shrink-0"
              style={{ width: `${logoWidth}%` }}
            >
              <Image
                src={logo}
                alt={`Logo ${index % logos.length + 1}`}
                layout="fill"
                objectFit="contain"
                className="select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
