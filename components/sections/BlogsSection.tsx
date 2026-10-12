import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaComment, FaUser } from 'react-icons/fa';
import { BlogsSectionProps } from '@/types/templates.types';

export const BlogsSection = ({ data, isPage = false }: BlogsSectionProps) => {
  if (!data?.blogs.length) return null;

  const visibleBlogs = isPage ? data.pageBlogs : data.blogs.slice(0, 3);

  return (
    <section className="w-full bg-black py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-4xl text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#f00000] sm:w-20" />
            <span className="font-serif text-xl italic text-[#f00000] sm:text-2xl">
              {data.subtitle}
            </span>
            <span className="h-px w-12 bg-[#f00000] sm:w-20" />
          </div>

          <h2 className="text-3xl font-black uppercase leading-none text-white sm:text-4xl lg:text-5xl">
            {data.title1}{' '}
            <span className="text-[#ffc400]">{data.title2}</span>{' '}
            {data.title3}
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/90 sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog) => {
            const [dateDay, ...dateDetails] = blog.date.split(' ');

            return (
              <article
                key={blog.id}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#806800] bg-[#050505] transition-transform duration-300 hover:-translate-y-1"
              >
                <Link href={blog.url} className="relative block h-48 overflow-hidden sm:h-52">
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt ?? blog.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute right-0 top-0 flex min-w-14 flex-col items-center rounded-bl-lg border-b border-l border-[#806800] bg-black px-3 py-2 font-serif text-white">
                      <span className="text-xl leading-none text-[#ffc400]">{dateDay}</span>
                      <span className="mt-1 text-lg leading-none">{dateDetails[0]}</span>
                    </div>
                  </Link>

                <div className="flex flex-1 flex-col p-4">
                  {(blog.author || blog.commentLabel) && (
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-white/90">
                      {blog.author && (
                        <span className="inline-flex items-center gap-2">
                          <FaUser className="text-[#ffc400]" />
                          {blog.author}
                        </span>
                      )}
                      {blog.author && blog.commentLabel && <span className="h-4 w-px bg-[#806800]" />}
                      {blog.commentLabel && (
                        <span className="inline-flex items-center gap-2">
                          <FaComment className="text-[#ffc400]" />
                          {blog.commentLabel}
                        </span>
                      )}
                    </div>
                  )}

                  <Link href={blog.url}>
                    <h3 className="font-serif text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#ffc400] sm:text-2xl">
                      {blog.title}
                    </h3>
                  </Link>

                  {isPage && (
                    <>
                      <p className="mt-3 flex-1 text-sm leading-6 text-white/70">{blog.description}</p>
                      <Link
                        href={blog.url}
                        className="mt-4 inline-flex items-center gap-3 text-sm font-bold text-[#ffc400] transition-opacity duration-300 hover:opacity-70"
                      >
                        {data.readMoreText}
                        <FaArrowRight className="text-xs" />
                      </Link>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
