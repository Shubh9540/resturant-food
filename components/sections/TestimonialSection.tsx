'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { TestimonialsSectionProps } from '@/types/templates.types';

export const TestimonialSection = ({ data }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!data?.testimonials.length) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.testimonials.length);
    }, data.autoPlayIntervalMs);

    return () => window.clearInterval(interval);
  }, [data]);

  if (!data?.testimonials.length) return null;

  const activeTestimonial = data.testimonials[activeIndex];
  const total = data.testimonials.length;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#030303] bg-cover bg-center py-8 lg:py-12"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-20 bg-[#ed111c]" />
            <p className="font-serif text-2xl italic text-[#ed111c] sm:text-3xl">{data.subtitle}</p>
            <span className="h-0.5 w-20 bg-[#ed111c]" />
          </div>
          <h2 className="mt-2 uppercase text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.title1}{' '}
            <span className="text-[#ffc800]">{data.title2}</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/85 sm:text-base">{data.description}</p>
        </div>

        <div className="relative mx-auto mt-6 max-w-[1040px] px-10 sm:px-14 lg:px-0">
          <button
            type="button"
            onClick={showPrevious}
            aria-label={data.previousLabel}
            className="absolute left-0 top-32 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffc800] text-black transition-colors duration-300 hover:bg-[#ed111c] hover:text-white lg:-left-16 lg:top-1/2"
          >
            <FaArrowLeft />
          </button>

          <div className="relative flex flex-col items-center lg:min-h-[290px] lg:items-stretch lg:justify-center">
            <div className="relative z-20 h-64 w-64 shrink-0 rounded-full border-2 border-[#ffc800] bg-[#050505] p-2 sm:h-72 sm:w-72 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
              <span aria-hidden="true" className="absolute -inset-2 rotate-12 rounded-full border-x-4 border-[#ffc800]" />
              <span aria-hidden="true" className="absolute -inset-1 -rotate-6 rounded-full border-y-2 border-[#ed111c]" />
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  fill
                  sizes="(min-width: 640px) 288px, 256px"
                  className="object-cover"
                />
              </div>
            </div>

            <article className="relative mt-5 flex min-h-64 w-full flex-col justify-center rounded-2xl border border-[#e0b900] bg-black/85 px-6 py-7 text-left sm:px-8 lg:ml-64 lg:mt-0 lg:w-[calc(100%-16rem)] lg:pl-28 lg:pr-14">
              <FaQuoteLeft className="absolute left-7 top-5 text-5xl text-white/20 lg:left-10" />
              <FaQuoteRight className="absolute bottom-7 right-7 text-5xl text-white/20 lg:right-10" />

              <p className="relative z-10 text-sm leading-6 text-white/90 sm:text-base">
                {activeTestimonial.quote}
              </p>

              <h3 className="mt-3 text-xl font-bold text-white">{activeTestimonial.name}</h3>
              <span className="mt-2 h-0.5 w-12 bg-[#ed111c]" />
              <p className="mt-2 text-sm text-white/65">{activeTestimonial.location}</p>
            </article>
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label={data.nextLabel}
            className="absolute right-0 top-32 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffc800] text-black transition-colors duration-300 hover:bg-[#ed111c] hover:text-white lg:-right-16 lg:top-1/2"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {data.testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${data.slideLabel} ${index + 1}`}
              className={`h-3 w-3 rounded-full border transition-colors duration-300 ${activeIndex === index ? 'border-[#ffc800] bg-[#ffc800]' : 'border-white/70 bg-transparent'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
