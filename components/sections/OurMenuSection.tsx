import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { OurMenuSectionProps } from '@/types/templates.types';

export const OurMenuSection = ({ data }: OurMenuSectionProps) => {
  if (!data) return null;

  return (
    <section id="menu" className="w-full bg-[#030303] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1336px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
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

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {data.items.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border border-white/35 bg-[#080808] transition-all duration-300 hover:-translate-y-1 hover:border-[#ffc800]"
            >
              <div className="aspect-[7/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex min-h-16 flex-col items-center justify-center px-3 py-3 text-center">
                <h3 className="text-xl font-bold text-white lg:text-2xl">{item.title}</h3>
                <span className="mt-2 h-0.5 w-10 bg-[#ed111c] transition-all duration-300 group-hover:w-16" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
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
      </div>
    </section>
  );
};
