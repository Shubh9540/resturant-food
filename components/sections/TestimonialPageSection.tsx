'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import { TestimonialPageSectionProps } from '@/types/templates.types';

export const TestimonialPageSection = ({ data }: TestimonialPageSectionProps) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  if (!data || !data.pages[activePageIndex]) return null;

  const activePage = data.pages[activePageIndex];

  return (
    <section className="relative w-full bg-[#030303] bg-cover bg-center py-8 lg:py-12" style={{ backgroundImage: `url(${data.backgroundImage})` }}>
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-[#ed111c] sm:w-20" />
            <p className="font-serif text-2xl italic text-[#ed111c] sm:text-3xl">{data.subtitle}</p>
            <span className="h-0.5 w-12 bg-[#ed111c] sm:w-20" />
          </div>
          <h2 className="mt-2 text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.title1} <span className="text-[#ffc800]">{data.title2}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">{data.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activePage.testimonials.map((testimonial) => (
            <article key={testimonial.id} className="relative flex min-h-80 flex-col rounded-2xl border border-[#9d8055] bg-[#07100b]/95 px-6 pb-6 pt-7 shadow-xl">
              <FaQuoteRight className="absolute right-5 top-5 text-4xl text-[#ffc800]" />
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-[#111111]">
                <Image src={testimonial.avatar} alt={testimonial.avatarAlt} fill sizes="96px" className="object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{testimonial.name}</h3>
              <p className="mt-1 text-sm text-white/65">{testimonial.location}</p>
              <span className="mt-3 h-0.5 w-12 bg-[#ed111c]" />
              <p className="mt-4 text-sm leading-6 text-white/85">{testimonial.quote}</p>
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
