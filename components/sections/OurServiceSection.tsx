import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaUtensils, FaWineBottle } from 'react-icons/fa';
import { PiCoffee } from 'react-icons/pi';
import { TbChefHat } from 'react-icons/tb';
import { OurServiceSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUtensils':
      return <FaUtensils />;
    case 'TbChefHat':
      return <TbChefHat />;
    case 'FaWineBottle':
      return <FaWineBottle />;
    case 'PiCoffee':
      return <PiCoffee />;
    default:
      return null;
  }
};

export const OurServiceSection = ({ data }: OurServiceSectionProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#050505] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.items.map((item) => (
          <article key={item.id} className="group flex min-h-[350px] flex-col rounded-xl border border-white/25 bg-[#070707] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffcc00]/70 sm:p-7">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#ffcc00] bg-[#111111]">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#ef1b24] bg-[#d91018] text-3xl text-white">
                {renderIcon(item.icon)}
              </span>
              <span className="absolute -bottom-1 right-0 h-4 w-3 bg-[#070707]" />
            </div>

            <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-white lg:text-3xl">
              {item.titleStart}{' '}
              <span className="text-[#ffcc00]">{item.titleHighlight}</span>
            </h2>

            <span className="mt-4 block h-1 w-12 bg-[#ef1b24] transition-all duration-300 group-hover:w-20" />

            <p className="mt-4 flex-1 text-sm leading-6 text-white/85 lg:text-base">
              {item.description}
            </p>

            <Link href={item.url} className="mt-6 flex w-fit items-center gap-4 text-sm font-medium text-white transition-colors hover:text-[#ffcc00]">
              <span className="border-b-2 border-[#ffcc00] pb-2">{item.linkText}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ef1b24] text-white transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight />
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
