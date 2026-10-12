import React from 'react';
import { AboutUsSectionProps } from '@/types/templates.types';

export const AboutUsSection = ({ data }: AboutUsSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#080806] py-8 lg:py-12">
      <div className="relative mx-auto grid w-full max-w-[1336px] grid-cols-1 items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)_minmax(0,0.75fr)] lg:gap-6 lg:px-8">
        <div className="relative order-2 mx-auto mt-1 w-full max-w-[290px] lg:order-1">
          <div aria-hidden="true" className="absolute -left-10 -top-3 h-3 w-52 -rotate-12 bg-[#ed111c]" />
          <div aria-hidden="true" className="absolute -left-14 top-3 h-2 w-44 -rotate-12 bg-[#ed111c]" />
          <div aria-hidden="true" className="absolute -left-16 top-8 h-2 w-32 -rotate-12 bg-[#ed111c]" />
          <div className="relative aspect-[10/9] overflow-hidden rounded-2xl border-2 border-[#ffd000]">
            <img
              src={data.imageMain}
              alt={data.imageMainAlt}
              className="h-full w-full object-cover"
            />
          </div>
          <img
            src={data.leftDecorationImage}
            alt={data.leftDecorationImageAlt}
            className="absolute -bottom-2 -left-16 hidden h-16 w-16 object-contain lg:block"
          />
        </div>

        <div className="order-1 flex flex-col items-center text-center lg:order-2">
          <div className="flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-[#ffd000]" />
            <p className="font-serif text-2xl italic text-[#ffd000] sm:text-3xl">{data.subtitle}</p>
            <span className="h-px w-16 bg-[#ffd000]" />
          </div>

          <h2 className="mt-4 uppercase text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl xl:text-6xl">
            <span>{data.titleFirst} </span>
            <span className="text-[#ed111c]">{data.titleRed}</span>
            <span className="block">
              {data.titleSecond} <span className="text-[#ffc800]">{data.titleGold}</span>
            </span>
          </h2>

          <span aria-hidden="true" className="mt-4 h-1.5 w-24 -rotate-3 bg-[#ed111c]" />

          <div className="relative mt-3 h-36 w-36 sm:h-40 sm:w-40">
            <svg
              viewBox="0 0 200 200"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <path
                  id="about-center-text-path"
                  d="M 100,18 A 82,82 0 1,1 99.9,18"
                  className="fill-none"
                />
              </defs>
              <text className="fill-white text-[13px] font-semibold uppercase tracking-[0.16em]">
                <textPath
                  href="#about-center-text-path"
                  startOffset="0%"
                  textLength="500"
                  lengthAdjust="spacing"
                >
                  {data.centerRingText}
                </textPath>
              </text>
            </svg>
            <img
              src={data.centerImage}
              alt={data.centerImageAlt}
              className="absolute inset-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 object-contain sm:h-28 sm:w-28"
            />
          </div>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="relative order-3 mx-auto mt-1 w-full max-w-[300px] lg:mt-24">
          <img
            src={data.rightDecorationImage}
            alt={data.rightDecorationImageAlt}
            className="absolute -right-2 -top-24 hidden h-20 w-20 object-contain lg:block"
          />
          <div aria-hidden="true" className="absolute -right-12 bottom-8 h-3 w-48 rotate-12 bg-[#ed111c]" />
          <div aria-hidden="true" className="absolute -right-14 bottom-3 h-2 w-40 rotate-12 bg-[#ed111c]" />
          <div className="relative aspect-[6/5] overflow-hidden rounded-2xl border-2 border-[#ffd000]">
            <img
              src={data.imageSecondary}
              alt={data.imageSecondaryAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
