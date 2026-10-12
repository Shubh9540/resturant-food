import React from 'react';
import Image from 'next/image';
import { JourneySectionProps } from '@/types/templates.types';

export const JourneySection = ({ data }: JourneySectionProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-8 lg:py-12">
      <div aria-hidden="true" className="absolute left-0 top-0 h-24 w-44 bg-[#0a0a0a]" />
      <div aria-hidden="true" className="absolute left-16 top-16 h-24 w-44 bg-[#0a0a0a]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 md:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:gap-10 lg:px-8">
        <div className="order-2 mx-auto w-full max-w-sm lg:order-1 lg:max-w-none">
          <div className="overflow-hidden rounded-3xl border-2 border-[#ffc400] bg-[#111111] shadow-2xl shadow-black/50">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={data.mainImage}
                alt={data.mainImageAlt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-14 bg-[#ef0000]" />
              <p className="font-serif text-xl italic text-[#ef0000] sm:text-2xl">{data.subtitle}</p>
              <span className="h-px w-14 bg-[#ef0000]" />
            </div>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              {data.title}{' '}
              <span className="text-[#ffc400]">{data.highlightedTitle}</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
              {data.description}
            </p>
          </div>

          <div className="relative mt-6 space-y-3">
            <span className="absolute bottom-8 left-9 top-8 hidden w-px bg-white/35 sm:block" />

            {data.items.map((item, index) => (
              <article key={item.id} className="relative grid grid-cols-1 items-center gap-3 sm:grid-cols-[72px_1fr] sm:gap-5">
                <div
                  className={`relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full text-lg font-black ${index % 2 === 0 ? 'bg-[#ef1018] text-white' : 'bg-[#ffc400] text-black'}`}
                >
                  {item.year}
                </div>

                <div
                  className={`grid grid-cols-1 items-center gap-4 rounded-xl border bg-[#090909]/90 p-2.5 sm:grid-cols-[145px_1fr] ${index % 2 === 0 ? 'border-[#ef1018]' : 'border-[#ffc400]'}`}
                >
                  <div className="relative h-24 overflow-hidden rounded-lg sm:h-20">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="145px"
                      className="object-cover"
                    />
                  </div>
                  <div className="pb-1 sm:pb-0">
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {item.title}{' '}
                      <span className="text-[#ffc400]">{item.highlightedTitle}</span>
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-white/80 sm:text-sm">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
