import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { HeroSectionProps } from '@/types/templates.types';

export const HeroSection = ({ data }: HeroSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative flex min-h-[32rem] w-full items-center justify-center overflow-hidden bg-[#050505] px-4 py-10 sm:min-h-[36rem] sm:px-6 lg:min-h-[34rem] lg:px-8">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <div className="mb-8 flex items-center gap-3 sm:mb-10">
          <div className="flex -space-x-3">
            {data.customers.map((customer) => (
              <div key={customer.id} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-[#222222] sm:h-12 sm:w-12">
                <Image src={customer.image} alt={customer.imageAlt} fill sizes="48px" className="object-cover object-top" />
              </div>
            ))}
          </div>

          <div className="text-left">
            <div className="flex gap-1 text-sm text-[#ffcc00] sm:text-base" role="img" aria-label={data.ratingLabel}>
              {Array.from({ length: data.rating }, (_, index) => (
                <FaStar key={`${data.ratingLabel}-${index}`} />
              ))}
            </div>
            <p className="mt-1 text-xs font-bold text-white sm:text-sm">{data.customerCountText}</p>
          </div>
        </div>

        <div className="w-full max-w-6xl uppercase">
          <div className="relative mx-auto w-fit">
            <span className="absolute -top-5 left-2 z-20 -rotate-6 rounded-md bg-[#ffcc00] px-3 py-1 text-xs font-black text-[#050505] shadow-lg sm:-top-7 sm:px-4 sm:py-1.5 sm:text-base lg:left-10 lg:text-lg">
              {data.deliciousLabel}
            </span>

            <h1 className="scale-x-90 whitespace-nowrap text-5xl font-black leading-[0.82] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem]">
              <span>{data.titleFirst}</span>{' '}
              <span className="text-[#ffcc00]">{data.titleHighlight}</span>
            </h1>

            <span className="absolute right-2 top-1/2 z-20 -translate-y-1/2 -rotate-6 rounded-md bg-[#ef1b24] px-3 py-1 text-[10px] font-black text-white shadow-lg sm:right-8 sm:px-4 sm:py-1.5 sm:text-sm lg:right-28 lg:text-base">
              {data.restaurantLabel}
            </span>
          </div>

          <div className="relative mx-auto mt-3 w-fit sm:mt-5">
            <h2 className="scale-x-90 whitespace-nowrap text-4xl font-black leading-[0.82] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem]">
              {data.titleSecond}
            </h2>

            <Link href={data.orderUrl} className="absolute -left-1 top-1/2 z-20 -translate-y-1/2 -rotate-6 rounded-full bg-[#ef1b24] px-3 py-1 text-[10px] font-black text-white shadow-lg transition-colors hover:bg-[#ffcc00] hover:text-[#050505] sm:-left-8 sm:px-4 sm:py-1.5 sm:text-sm lg:-left-12 lg:text-base">
              {data.orderLabel}
            </Link>
          </div>
        </div>

        <div className="mt-10 text-sm leading-6 text-white/90 sm:text-base">
          <p>{data.description}</p>
          <p>
            {data.descriptionPrefix}{' '}
            <span className="font-semibold text-[#ffcc00]">{data.descriptionHighlight}</span>
          </p>
          <span className="mx-auto mt-2 block h-0.5 w-32 bg-[#ffcc00]" />
        </div>
      </div>
    </section>
  );
};
