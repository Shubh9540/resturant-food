'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegCommentDots, FaUser } from 'react-icons/fa';
import { ContactSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPhoneAlt':
      return <FaPhoneAlt />;
    case 'FaEnvelope':
      return <FaEnvelope />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    default:
      return null;
  }
};

export const ContactSection = ({ data }: ContactSectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="w-full bg-[#030303]">
      <div className="mx-auto grid w-full max-w-[1350px] grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[580px] overflow-hidden px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <Image src={data.contactPanel.backgroundImage} alt={data.contactPanel.backgroundImageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 to-black/65" />
          <div className="relative max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#ffc800]" />
              <p className="text-sm font-bold uppercase tracking-wider text-[#ffc800]">{data.contactPanel.eyebrow}</p>
            </div>
            <h2 className="mt-4 text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              {data.contactPanel.title1}<span className="block text-[#ffc800]">{data.contactPanel.titleHighlight}</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/85 sm:text-base">{data.contactPanel.description}</p>

            <div className="mt-7 space-y-5">
              {data.contactPanel.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/60 text-xl text-[#ed111c]">{renderIcon(item.icon)}</span>
                  <div>
                    <h3 className="sr-only">{item.title}</h3>
                    {item.lines.map((line) => <p key={line.id} className="text-base leading-6 text-white">{line.text}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center bg-[#050706] px-4 py-8 sm:px-8 lg:px-10 lg:py-12">
          <form onChange={() => setSubmitted(false)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }} className="w-full rounded-xl border border-white/10 bg-[#101616]/95 p-5 sm:p-7">
            <div className="grid grid-cols-1 gap-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white">{data.form.fullNameLabel}</span>
                <span className="relative block">
                  <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/75" />
                  <input name="fullName" type="text" required placeholder={data.form.fullNamePlaceholder} className="w-full rounded-lg border border-white/20 bg-transparent py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#ffc800]" />
                </span>
              </label>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">{data.form.emailLabel}</span>
                  <span className="relative block">
                    <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/75" />
                    <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full rounded-lg border border-white/20 bg-transparent py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#ffc800]" />
                  </span>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">{data.form.phoneLabel}</span>
                  <span className="relative block">
                    <FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/75" />
                    <input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="w-full rounded-lg border border-white/20 bg-transparent py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#ffc800]" />
                  </span>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white">{data.form.subjectLabel}</span>
                <span className="relative block">
                  <FaRegCommentDots className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/75" />
                  <input name="subject" type="text" required placeholder={data.form.subjectPlaceholder} className="w-full rounded-lg border border-white/20 bg-transparent py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#ffc800]" />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white">{data.form.messageLabel}</span>
                <span className="relative block">
                  <FaRegCommentDots className="pointer-events-none absolute left-4 top-4 text-white/75" />
                  <textarea name="message" required rows={5} placeholder={data.form.messagePlaceholder} className="w-full resize-none rounded-lg border border-white/20 bg-transparent py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#ffc800]" />
                </span>
              </label>

              <button type="submit" className="flex w-full items-center justify-center gap-5 rounded-full bg-[#ffc800] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[#ed111c] hover:text-white">
                {data.form.buttonText}<span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071016] text-white"><FaArrowRight /></span>
              </button>

              {submitted && <p role="status" className="rounded-lg border border-[#ffc800]/40 bg-[#ffc800]/10 px-4 py-3 text-sm font-semibold text-[#ffc800]">{data.form.successMessage}</p>}
            </div>
          </form>
        </div>
      </div>

      <iframe src={data.location.mapUrl} title={data.location.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 sm:h-96" />
    </section>
  );
};
