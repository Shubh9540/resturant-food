'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GallerySectionProps } from '@/types/templates.types';

export const GallerySection = ({ data }: GallerySectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelectedIndex = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    updateSelectedIndex();
    emblaApi.on('select', updateSelectedIndex);

    return () => {
      emblaApi.off('select', updateSelectedIndex);
    };
  }, [emblaApi]);

  if (!data) return null;

  return (
    <section id="gallery" className="w-full overflow-hidden bg-[#030303] py-8 lg:py-12">
      <div className="mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <span className="h-0.5 w-20 bg-[#ed111c]" />
          <p className="font-serif text-2xl italic text-[#ed111c] sm:text-3xl">{data.subtitle}</p>
          <span className="h-0.5 w-20 bg-[#ed111c]" />
        </div>
        <h2 className="mt-2 uppercase text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
          {data.title} <span className="text-[#ffc800]">{data.highlightedTitle}</span>
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-white/80 sm:text-base">
          {data.description}
        </p>
      </div>

      <div className="relative mt-5">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex touch-pan-y">
            {data.items.map((item, index) => {
              const rawDistance = Math.abs(index - selectedIndex);
              const circularDistance = Math.min(rawDistance, data.items.length - rawDistance);
              const halfLength = Math.floor(data.items.length / 2);
              const signedDistance = ((index - selectedIndex + data.items.length + halfLength) % data.items.length) - halfLength;

              return (
                <div
                  key={item.id}
                  className={`min-w-0 shrink-0 grow-0 basis-[78%] px-2 transition-transform duration-500 sm:basis-[45%] md:basis-[30%] lg:basis-[20%] xl:basis-[14%] ${
                    data.curveEnabled
                      ? circularDistance === 0
                        ? 'lg:translate-y-6'
                        : circularDistance === 1
                          ? 'lg:translate-y-5'
                          : circularDistance === 2
                            ? 'lg:translate-y-3'
                            : 'lg:translate-y-0'
                      : ''
                  }`}
                >
                  <div
                    className={`transition-transform duration-500 hover:rotate-0 ${
                      data.curveEnabled
                        ? signedDistance <= -3
                          ? 'lg:-rotate-2'
                          : signedDistance === -2
                            ? 'lg:-rotate-1'
                            : signedDistance === 2
                              ? 'lg:rotate-1'
                              : signedDistance >= 3
                                ? 'lg:rotate-2'
                                : 'lg:rotate-0'
                        : ''
                    }`}
                  >
                  <div className="aspect-[4/5] overflow-hidden rounded-xl border-2 border-[#e0b900] bg-[#080808]">
                    <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover" />
                  </div>
                  <div aria-hidden="true" className="relative mt-1 h-14 overflow-hidden rounded-b-xl opacity-20">
                    <img src={item.image} alt="" className="h-full w-full -scale-y-100 object-cover object-bottom blur-[1px]" />
                    <span className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303]" />
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label={data.previousLabel}
          className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffc800] text-black shadow-lg transition-colors duration-300 hover:bg-[#ed111c] hover:text-white"
        >
          <FaArrowLeft />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          aria-label={data.nextLabel}
          className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffc800] text-black shadow-lg transition-colors duration-300 hover:bg-[#ed111c] hover:text-white"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="mt-1 flex justify-center">
        <Link
          href={data.buttonUrl}
          className="group inline-flex items-center gap-6 rounded-full bg-[#ffc800] py-2 pl-8 pr-2 text-sm font-bold text-black transition-all duration-300 hover:bg-[#ed111c] hover:text-white sm:text-base"
        >
          {data.buttonText}
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#080808] text-[#ffc800] transition-transform duration-300 group-hover:translate-x-1">
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};
