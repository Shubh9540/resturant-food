'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ChefPageSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    default:
      return null;
  }
};

export const ChefPageSection = ({ data }: ChefPageSectionProps) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  if (!data || !data.pages[activePageIndex]) return null;

  const activePage = data.pages[activePageIndex];

  return (
    <section
      className="relative w-full bg-[#030303] bg-contain bg-center py-8 lg:py-12"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-[#ed111c] sm:w-20" />
            <p className="font-serif text-2xl italic text-[#ed111c] sm:text-3xl">{data.subtitle}</p>
            <span className="h-0.5 w-12 bg-[#ed111c] sm:w-20" />
          </div>
          <h2 className="mt-2 text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.title} <span className="text-[#ffc800]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">{data.description}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activePage.chefs.map((chef) => (
            <article key={chef.id} className="overflow-hidden rounded-xl border-2 border-[#e0b900] bg-[#050505]">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image src={chef.image} alt={chef.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
              </div>
              <div className="flex min-h-52 flex-col items-center px-5 py-4 text-center">
                <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                  {chef.namePrefix} <span className="text-[#ffc800]">{chef.nameHighlight}</span>
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">{chef.role}</p>
                <span className="mt-2 h-0.5 w-10 bg-[#ed111c]" />
                <p className="mt-2 text-sm leading-5 text-white/90">{chef.description}</p>
                <div className="mt-auto flex items-center justify-center gap-3 pt-3">
                  {data.socialLinks.map((socialLink) => (
                    <a key={`${chef.id}-${socialLink.id}`} href={socialLink.url} aria-label={`${chef.nameHighlight} ${socialLink.label}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 text-sm text-white transition-colors duration-300 hover:border-[#ffc800] hover:bg-[#ffc800] hover:text-black">
                      {renderIcon(socialLink.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button type="button" aria-label={data.previousPageLabel} disabled={activePageIndex === 0} onClick={() => setActivePageIndex((current) => Math.max(0, current - 1))} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:border-[#ffc800] hover:text-[#ffc800] disabled:cursor-not-allowed disabled:opacity-40">
            <FaArrowLeft />
          </button>
          {data.pages.map((page, index) => (
            <button key={page.id} type="button" onClick={() => setActivePageIndex(index)} className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-colors ${activePageIndex === index ? 'bg-[#ffc800] text-black' : 'text-white hover:text-[#ffc800]'}`}>
              {page.label}
            </button>
          ))}
          <button type="button" aria-label={data.nextPageLabel} disabled={activePageIndex === data.pages.length - 1} onClick={() => setActivePageIndex((current) => Math.min(data.pages.length - 1, current + 1))} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:border-[#ffc800] hover:text-[#ffc800] disabled:cursor-not-allowed disabled:opacity-40">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
