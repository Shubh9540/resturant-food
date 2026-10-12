import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ChefSectionProps } from '@/types/templates.types';

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

export const ChefSection = ({ data }: ChefSectionProps) => {
  if (!data) return null;

  return (
    <section
      className="relative w-full bg-[#030303] bg-contain bg-center py-8 lg:py-12"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="mx-auto w-full max-w-[1080px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-20 bg-[#ed111c]" />
            <p className="font-serif text-2xl italic text-[#ed111c] sm:text-3xl">{data.subtitle}</p>
            <span className="h-0.5 w-20 bg-[#ed111c]" />
          </div>
          <h2 className="mt-2 uppercase text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.title} <span className="text-[#ffc800]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.chefs.map((chef) => (
            <article key={chef.id} className="overflow-hidden rounded-xl border-2 border-[#e0b900] bg-[#050505]">
              <div className="aspect-[5/4] overflow-hidden">
                <img src={chef.image} alt={chef.imageAlt} className="h-full w-full object-cover object-top" />
              </div>

              <div className="flex min-h-48 flex-col items-center px-5 py-3 text-center">
                <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                  {chef.namePrefix} <span className="text-[#ffc800]">{chef.nameHighlight}</span>
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">{chef.role}</p>
                <span className="mt-2 h-0.5 w-10 bg-[#ed111c]" />
                <p className="mt-2 text-sm leading-5 text-white/90">{chef.description}</p>

                <div className="mt-auto flex items-center justify-center gap-3 pt-3">
                  {chef.socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.id}
                      href={socialLink.url}
                      aria-label={socialLink.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 text-sm text-white transition-colors duration-300 hover:border-[#ffc800] hover:bg-[#ffc800] hover:text-black"
                    >
                      {renderIcon(socialLink.icon)}
                    </a>
                  ))}
                </div>
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
