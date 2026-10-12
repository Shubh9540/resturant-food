import React from 'react';
import Image from 'next/image';
import { MenuPageSectionProps } from '@/types/templates.types';

export const MenuPageSection = ({ data }: MenuPageSectionProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center md:px-6 lg:px-8 lg:py-12">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c77842] sm:text-sm">{data.subtitle}</p>
        <h2 className="mt-3 text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
          {data.title}{' '}
          <span className="text-[#ffc400]">{data.highlightedTitle}</span>
        </h2>
        <span className="mx-auto mt-4 block h-1 w-16 bg-[#e50012]" />
        <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-white/80 sm:text-base">
          {data.description}
        </p>

        <nav className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6" aria-label={data.title}>
          {data.categories.map((category) => (
            <a key={category.id} href={`#${category.id}`} className="group flex flex-col items-center">
              <span className="relative block aspect-square w-full max-w-32 overflow-hidden rounded-full border-2 border-[#9d785b] bg-[#111111]">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="128px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </span>
              <span className="mt-3 text-base font-bold text-white transition-colors duration-300 group-hover:text-[#ffc400] sm:text-lg">
                {category.navigationLabel}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <div>
        {data.categories.map((category, categoryIndex) => (
          <article
            key={category.id}
            id={category.id}
            className={`scroll-mt-24 border-t border-white/5 ${categoryIndex % 2 === 0 ? 'bg-[#101311]' : 'bg-[#151816]'}`}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[0.3fr_0.7fr]">
              <div className="relative min-h-72 overflow-hidden lg:min-h-[340px]">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/80" />
                <div className="absolute left-6 top-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ffc400]">{category.eyebrow}</p>
                  <h2 className="mt-2 text-3xl font-black uppercase text-white sm:text-4xl">{category.title}</h2>
                  <span className="mt-3 block h-1 w-14 bg-[#e50012]" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-5 p-5 sm:grid-cols-2 md:p-7 lg:p-8">
                {category.dishes.map((dish) => (
                  <div key={dish.id} className="grid grid-cols-[64px_1fr_auto] items-center gap-3 border-b border-white/10 pb-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/30 bg-black">
                      <Image src={dish.image} alt={dish.imageAlt} fill sizes="64px" className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white sm:text-base">{dish.name}</h3>
                      <p className="mt-1 text-xs leading-4 text-white/65">{dish.description}</p>
                    </div>
                    <span className="rounded-full bg-[#ffc400] px-3 py-1 text-xs font-black text-black">{dish.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
