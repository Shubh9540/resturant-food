'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaComment, FaUser } from 'react-icons/fa';
import { BlogPageSectionProps } from '@/types/templates.types';

export const BlogPageSection = ({ data }: BlogPageSectionProps) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  if (!data || !data.pages[activePageIndex]) return null;

  const activePage = data.pages[activePageIndex];

  return (
    <section className="w-full bg-[#030303] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-[#ed111c] sm:w-20" />
            <p className="font-serif text-2xl italic text-[#ed111c] sm:text-3xl">{data.subtitle}</p>
            <span className="h-0.5 w-12 bg-[#ed111c] sm:w-20" />
          </div>
          <h2 className="mt-2 text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.title1} <span className="text-[#ffc800]">{data.title2}</span> {data.title3}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-white/85 sm:text-base">{data.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activePage.blogs.map((blog) => (
            <article key={blog.id} className="group overflow-hidden rounded-xl border-2 border-[#b89400] bg-[#050505]">
              <Link href={blog.url} className="block">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image src={blog.image} alt={blog.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute right-0 top-0 flex min-w-16 flex-col items-center rounded-bl-xl border-b border-l border-[#b89400] bg-black px-3 py-2 font-serif text-white">
                    <span className="text-2xl leading-none text-[#ffc800]">{blog.dateDay}</span>
                    <span className="mt-1 text-lg leading-none">{blog.dateMonth}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-white/85">
                    <span className="inline-flex items-center gap-2"><FaUser className="text-[#ffc800]" />{blog.author}</span>
                    <span className="h-4 w-px bg-[#806800]" />
                    <span className="inline-flex items-center gap-2"><FaComment className="text-[#ffc800]" />{blog.commentLabel}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-white transition-colors group-hover:text-[#ffc800]">{blog.title}</h3>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button type="button" aria-label={data.previousPageLabel} disabled={activePageIndex === 0} onClick={() => setActivePageIndex((current) => Math.max(0, current - 1))} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:border-[#ffc800] hover:text-[#ffc800] disabled:cursor-not-allowed disabled:opacity-40"><FaArrowLeft /></button>
          {data.pages.map((page, index) => (
            <button key={page.id} type="button" onClick={() => setActivePageIndex(index)} className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-colors ${activePageIndex === index ? 'bg-[#ffc800] text-black' : 'text-white hover:text-[#ffc800]'}`}>{page.label}</button>
          ))}
          <button type="button" aria-label={data.nextPageLabel} disabled={activePageIndex === data.pages.length - 1} onClick={() => setActivePageIndex((current) => Math.min(data.pages.length - 1, current + 1))} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:border-[#ffc800] hover:text-[#ffc800] disabled:cursor-not-allowed disabled:opacity-40"><FaArrowRight /></button>
        </div>
      </div>
    </section>
  );
};
