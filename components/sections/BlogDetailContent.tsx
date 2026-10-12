import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaCheckCircle, FaComment, FaQuoteLeft, FaUser } from 'react-icons/fa';
import { BlogDetailContentProps } from '@/types/templates.types';

export const BlogDetailContent = ({ data }: BlogDetailContentProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#071016] py-8 text-white lg:py-12">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-start gap-7 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(17rem,0.75fr)] lg:px-8">
        <article className="min-w-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#101a20]">
            <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover" priority />
          </div>
          <span className="mt-5 inline-flex rounded-full border border-[#d89f28] px-4 py-2 text-xs font-bold uppercase text-[#f5b634]">{data.category}</span>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{data.title1} {data.title2}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#f5b634]" />{data.date}</span>
            <span className="flex items-center gap-2"><FaUser className="text-[#f5b634]" />{data.authorLabel}</span>
            <span className="flex items-center gap-2"><FaComment className="text-[#f5b634]" />{data.readTime}</span>
          </div>
          <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base">{data.description}</p>
          <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">{data.introText}</p>

          {data.articleSections.map((section) => (
            <div key={section.id} className="mt-7">
              <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">{section.text}</p>
            </div>
          ))}

          <blockquote className="mt-7 flex gap-5 rounded-xl border-l-8 border-[#f5b634] bg-[#101b21] p-6 sm:p-8">
            <FaQuoteLeft className="mt-1 shrink-0 text-4xl text-[#f5b634]" />
            <p className="font-serif text-lg italic leading-7 text-white/90 sm:text-xl">{data.quote}</p>
          </blockquote>

          <div className="mt-7">
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">{data.benefitsTitle}</h2>
            <div className="relative mt-5 aspect-[16/8] overflow-hidden rounded-xl bg-[#101a20]">
              <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover" />
            </div>
            <div className="mt-5 space-y-4">
              {data.benefits.map((benefit) => (
                <div key={benefit.id}>
                  <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/70 sm:text-base">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">{data.tipsTitle}</h2>
            <div className="mt-5 space-y-3">
              {data.tips.map((tip) => (
                <div key={tip.id} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#f5b634]" />
                  <p className="text-sm leading-6 text-white/75 sm:text-base"><strong className="text-white">{tip.title}</strong> {tip.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-7 text-sm leading-7 text-white/75 sm:text-base">{data.closingText}</p>
        </article>

        <aside className="flex w-full flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-xl bg-[#101a20] p-5">
            <h2 className="font-serif text-2xl font-bold text-white">{data.recentPostsTitle}</h2>
            <span className="mt-3 block h-0.5 w-12 bg-[#f5b634]" />
            <div className="mt-5 space-y-5">
              {data.recentPosts.map((post) => (
                <Link key={post.id} href={post.url} className="group flex gap-3">
                  <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-black">
                    <Image src={post.image} alt={post.imageAlt} fill sizes="80px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-[#f5b634]">{post.date}</span>
                    <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-white/85 transition-colors group-hover:text-[#f5b634]">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#101a20] p-5">
            <h2 className="font-serif text-2xl font-bold text-white">{data.categoriesTitle}</h2>
            <span className="mt-3 block h-0.5 w-12 bg-[#f5b634]" />
            <div className="mt-4 divide-y divide-white/10">
              {data.categories.map((category) => (
                <Link key={category.id} href={category.url} className="flex items-center justify-between py-3 text-sm text-white/75 transition-colors hover:text-[#f5b634]">
                  <span>{category.label}</span><span className="text-[#f5b634]">›</span>
                </Link>
              ))}
            </div>
          </div>

          {data.tagsTitle && data.tags && (
            <div className="rounded-xl bg-[#101a20] p-5">
              <h2 className="font-serif text-2xl font-bold text-white">{data.tagsTitle}</h2>
              <span className="mt-3 block h-0.5 w-12 bg-[#f5b634]" />
              <div className="mt-4 flex flex-wrap gap-2">
                {data.tags.map((tag) => (
                  <Link key={tag.id} href={tag.url} className="rounded-full border border-[#a97820] px-3 py-1.5 text-xs text-white/80 transition-colors hover:bg-[#f5b634] hover:text-black">{tag.label}</Link>
                ))}
              </div>
            </div>
          )}

          <div className="relative overflow-hidden rounded-xl bg-[#101a20] p-6">
            {data.sidebarCta.image && data.sidebarCta.imageAlt && <Image src={data.sidebarCta.image} alt={data.sidebarCta.imageAlt} fill sizes="320px" className="object-cover opacity-25" />}
            <div className="relative">
              <p className="text-sm font-bold text-[#f5b634]">{data.sidebarCta.subtitle}</p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-white">{data.sidebarCta.title1} {data.sidebarCta.title2}</h2>
              <p className="mt-3 text-sm leading-6 text-white/75">{data.sidebarCta.description}</p>
              <Link href={data.sidebarCta.buttonUrl} className="mt-5 inline-flex rounded-full bg-[#f5b634] px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-[#ed111c] hover:text-white">{data.sidebarCta.buttonText}</Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
