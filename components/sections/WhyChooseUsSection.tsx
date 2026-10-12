import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheck, FaGem, FaLeaf, FaRegHeart, FaStar } from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi';
import { WhyChooseUsSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLeaf':
      return <FaLeaf />;
    case 'GiChefToque':
      return <GiChefToque />;
    case 'FaGem':
      return <FaGem />;
    case 'FaRegHeart':
      return <FaRegHeart />;
    default:
      return null;
  }
};

export const WhyChooseUsSection = ({ data }: WhyChooseUsSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-black py-8 lg:min-h-[540px] lg:py-12">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/55 lg:bg-black/10" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="flex min-h-64 items-end justify-center lg:min-h-[440px] lg:justify-end">
          <div className="w-full max-w-xs rounded-2xl border border-[#ffc400] bg-[#090909]/95 p-5 text-white shadow-2xl backdrop-blur-sm sm:max-w-sm sm:p-6">
            <h3 className="text-2xl font-extrabold">
              {data.dishCard.title}{' '}
              <span className="text-[#ffc400]">{data.dishCard.highlightedTitle}</span>
            </h3>
            <div className="mt-3 flex items-center gap-1 text-[#ffc400]" aria-label={data.dishCard.ratingLabel}>
              {Array.from({ length: data.dishCard.rating }).map((_, index) => (
                <FaStar key={`dish-rating-star-${index}`} />
              ))}
            </div>
            <ul className="mt-5 space-y-3">
              {data.dishCard.ingredients.map((ingredient) => (
                <li key={ingredient.id} className="flex items-center gap-3 text-sm sm:text-base">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e50012] text-[10px] text-white">
                    <FaCheck />
                  </span>
                  {ingredient.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-black/70 p-5 backdrop-blur-sm sm:p-6 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-[#ef0000]" />
            <p className="font-serif text-xl italic text-[#ef0000] sm:text-2xl">{data.subtitle}</p>
            <span className="h-px w-14 bg-[#ef0000]" />
          </div>

          <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl">
            <span className="block">{data.title1}</span>
            <span className="mt-1 block text-[#ffc400]">{data.title2}</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
            {data.description}
          </p>

          <div className="mt-5 space-y-3">
            {data.features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e50012] text-xl text-[#ffc400]">
                  {renderIcon(feature.icon)}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white sm:text-lg">{feature.title}</h3>
                  <p className="mt-0.5 text-xs leading-5 text-white/75 sm:text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={data.primaryButton.url}
              className="inline-flex items-center justify-center gap-5 rounded-full bg-[#ffc400] px-6 py-3 text-sm font-bold text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              {data.primaryButton.text}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-white">
                <FaArrowRight />
              </span>
            </Link>
            <Link
              href={data.secondaryButton.url}
              className="inline-flex items-center justify-center gap-5 rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:border-[#ffc400] hover:text-[#ffc400]"
            >
              {data.secondaryButton.text}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
