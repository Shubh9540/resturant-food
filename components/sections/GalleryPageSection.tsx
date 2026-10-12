'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { GalleryPageSectionProps } from '@/types/templates.types';

export const GalleryPageSection = ({ data }: GalleryPageSectionProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null || !data) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowLeft') setSelectedIndex((current) => current === null ? null : (current - 1 + data.items.length) % data.items.length);
      if (event.key === 'ArrowRight') setSelectedIndex((current) => current === null ? null : (current + 1) % data.items.length);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data, selectedIndex]);

  if (!data) return null;

  const selectedItem = selectedIndex === null ? null : data.items[selectedIndex];

  const showPrevious = () => {
    setSelectedIndex((current) => current === null ? null : (current - 1 + data.items.length) % data.items.length);
  };

  const showNext = () => {
    setSelectedIndex((current) => current === null ? null : (current + 1) % data.items.length);
  };

  return (
    <section className="w-full bg-[#030303] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-[#ed111c] sm:w-20" />
            <p className="font-serif text-2xl italic text-[#ed111c] sm:text-3xl">{data.subtitle}</p>
            <span className="h-0.5 w-12 bg-[#ed111c] sm:w-20" />
          </div>
          <h2 className="mt-2 text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.title} <span className="text-[#ffc800]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">{data.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <button key={item.id} type="button" onClick={() => setSelectedIndex(index)} aria-label={item.imageAlt} className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#111111]">
              <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </button>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div role="dialog" aria-modal="true" aria-label={selectedItem.imageAlt} onClick={() => setSelectedIndex(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-8">
          <button type="button" aria-label={data.closeLabel} onClick={() => setSelectedIndex(null)} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#ffc800] text-black transition-colors hover:bg-[#ed111c] hover:text-white sm:right-8 sm:top-8">
            <FaTimes />
          </button>

          <button type="button" aria-label={data.previousLabel} onClick={(event) => { event.stopPropagation(); showPrevious(); }} className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffc800] text-black transition-colors hover:bg-[#ed111c] hover:text-white sm:left-8">
            <FaArrowLeft />
          </button>

          <div onClick={(event) => event.stopPropagation()} className="relative h-[75vh] w-full max-w-5xl overflow-hidden rounded-2xl">
            <Image src={selectedItem.image} alt={selectedItem.imageAlt} fill sizes="100vw" className="object-contain" priority />
          </div>

          <button type="button" aria-label={data.nextLabel} onClick={(event) => { event.stopPropagation(); showNext(); }} className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffc800] text-black transition-colors hover:bg-[#ed111c] hover:text-white sm:right-8">
            <FaArrowRight />
          </button>
        </div>
      )}
    </section>
  );
};
