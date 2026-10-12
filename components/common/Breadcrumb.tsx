import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data, dynamicTitle }: BreadcrumbProps) => {
  if (!data) return null;

  const headingTitle = dynamicTitle ?? data.title;

  return (
    <section
      className="relative flex min-h-56 w-full items-center justify-center overflow-hidden bg-[#151b20] bg-cover bg-center px-4 py-8 md:min-h-64 lg:py-12"
      style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')` } : undefined}
    >
      {data.bgImage && <div className="absolute inset-0 bg-[#151b20]/80" />}

      {data.decorations && (
        <>
          <Image
            src={data.decorations.topLeft.image}
            alt={data.decorations.topLeft.imageAlt}
            width={100}
            height={100}
            className="absolute left-8 top-1/4 hidden h-auto w-20 animate-float-slow opacity-10 md:block lg:left-12 lg:w-24"
          />

          <div className="absolute bottom-8 right-[28%] hidden -rotate-90 opacity-10 md:block">
            <div className="animate-float-medium">
              <div className="rotate-90">
                <Image
                  src={data.decorations.moving.image}
                  alt={data.decorations.moving.imageAlt}
                  width={73}
                  height={81}
                  className="h-auto w-14 lg:w-16"
                />
              </div>
            </div>
          </div>

          <Image
            src={data.decorations.right.image}
            alt={data.decorations.right.imageAlt}
            width={422}
            height={371}
            className="absolute right-0 top-0 h-full w-auto max-w-[45%] object-cover object-left opacity-30 sm:max-w-[38%] md:opacity-60 lg:max-w-none lg:opacity-100"
          />
        </>
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-white md:text-5xl">
          {headingTitle}
        </h1>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-white md:text-base">
          {data.paths.map((path, index) => {
            const pathLabel = dynamicTitle && index === data.paths.length - 1 ? dynamicTitle : path.label;

            return (
              <React.Fragment key={path.id}>
                {path.url ? (
                  <Link href={path.url} className="text-[#ffc400] transition-colors duration-300 hover:text-white">
                    {pathLabel}
                  </Link>
                ) : (
                  <span>{pathLabel}</span>
                )}
                {index < data.paths.length - 1 && (
                  <span className="inline-block -rotate-12 text-white">|</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
