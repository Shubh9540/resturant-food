'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaAward, FaUsers } from 'react-icons/fa';
import { GiChefToque, GiMeal } from 'react-icons/gi';
import { AchievementSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaAward':
      return <FaAward />;
    case 'FaUsers':
      return <FaUsers />;
    case 'GiChefToque':
      return <GiChefToque />;
    case 'GiMeal':
      return <GiMeal />;
    default:
      return null;
  }
};

export const AchievementSection = ({ data }: AchievementSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState(() =>
    Object.fromEntries((data?.items ?? []).map((item) => [item.id, 0])),
  );

  useEffect(() => {
    if (!data) return;

    const section = sectionRef.current;
    if (!section) return;

    let animationFrame = 0;
    let hasAnimated = false;

    const showFinalValues = () => {
      setCounts(Object.fromEntries(data.items.map((item) => [item.id, item.value])));
    };

    const animateCounters = () => {
      const startedAt = performance.now();

      const updateCounters = (currentTime: number) => {
        const progress = Math.min((currentTime - startedAt) / data.counterDurationMs, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCounts(
          Object.fromEntries(
            data.items.map((item) => [item.id, Math.round(item.value * easedProgress)]),
          ),
        );

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCounters);
        }
      };

      animationFrame = requestAnimationFrame(updateCounters);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        hasAnimated = true;
        observer.disconnect();

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          showFinalValues();
          return;
        }

        animateCounters();
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [data]);

  if (!data) return null;

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black py-8 lg:min-h-[435px] lg:py-8">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40 lg:bg-black/5" />

      <div className="absolute bottom-14 left-8 z-10 hidden w-28 -rotate-3 bg-[#e50012] px-3 py-4 font-serif text-2xl italic leading-tight text-white shadow-xl [clip-path:polygon(8%_0,100%_6%,94%_94%,0_100%)] lg:block">
        <span className="block">{data.motto.line1}</span>
        <span className="block">{data.motto.line2}</span>
        <span className="block text-[#ffc400]">{data.motto.highlightedLine}</span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center md:px-6 lg:px-8">
        <div className="mx-auto rounded-2xl bg-black/65 p-5 backdrop-blur-sm sm:p-6 lg:ml-[30%] lg:w-[65%] lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[#ef0000]" />
            <p className="font-serif text-xl italic text-[#ef0000] sm:text-2xl">{data.subtitle}</p>
            <span className="h-px w-14 bg-[#ef0000]" />
          </div>

          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
            {data.title1}{' '}
            <span className="text-[#ffc400]">{data.title2}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
            {data.description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.items.map((item, index) => (
              <article
                key={item.id}
                className={`relative rounded-xl border bg-black/70 px-3 pb-4 pt-9 text-center backdrop-blur-sm ${index % 2 === 0 ? 'border-[#e50012]' : 'border-[#ffc400]'}`}
              >
                <span
                  className={`absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-2xl ${index % 2 === 0 ? 'bg-[#e50012] text-white' : 'bg-[#ffc400] text-black'}`}
                >
                  {renderIcon(item.icon)}
                </span>
                <strong className="block text-4xl font-black leading-none text-white">
                  {counts[item.id] ?? 0}{item.suffix}
                </strong>
                <p className="mx-auto mt-1 max-w-28 text-sm font-medium leading-4 text-white sm:text-base">
                  {item.label}
                </p>
                <span className="mx-auto mt-2 flex h-1 w-12 overflow-hidden">
                  <span className="h-full w-1/2 bg-[#e50012]" />
                  <span className="h-full w-1/2 bg-[#ffc400]" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
