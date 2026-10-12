'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaCalendarAlt, FaClock, FaConciergeBell, FaEnvelope, FaPhoneAlt, FaRegCommentDots, FaStar, FaUser, FaUsers } from 'react-icons/fa';
import { BookingSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    case 'FaUsers': return <FaUsers />;
    case 'FaStar': return <FaStar />;
    case 'FaConciergeBell': return <FaConciergeBell />;
    default: return null;
  }
};

export const BookingSection = ({ data }: BookingSectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="w-full bg-[#030303] py-8 text-white lg:py-12">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-[#ed111c] sm:w-20" />
            <p className="font-serif text-2xl italic text-[#ed111c] sm:text-3xl">{data.subtitle}</p>
            <span className="h-0.5 w-12 bg-[#ed111c] sm:w-20" />
          </div>
          <h2 className="mt-2 text-4xl font-extrabold uppercase leading-none sm:text-5xl lg:text-6xl">{data.title} <span className="text-[#ffc800]">{data.highlightedTitle}</span></h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="relative min-h-[460px] overflow-hidden rounded-2xl border border-white/15 lg:min-h-full">
            <Image src={data.mainImage} alt={data.mainImageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
          </div>

          <form onChange={() => setSubmitted(false)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }} className="rounded-2xl border border-white/15 bg-[#0d1417] p-5 sm:p-7">
            <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#ffc800]" /><p className="text-xs font-bold uppercase tracking-wider text-[#ffc800]">{data.form.eyebrow}</p></div>
            <h3 className="mt-3 text-3xl font-extrabold uppercase text-white">{data.form.title} <span className="text-[#ffc800]">{data.form.highlightedTitle}</span></h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{data.form.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="relative block"><span className="sr-only">{data.form.nameLabel}</span><FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" /><input name="name" type="text" required placeholder={data.form.namePlaceholder} className="w-full rounded-lg border border-white/20 bg-transparent py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/55 focus:border-[#ffc800]" /></label>
              <label className="relative block"><span className="sr-only">{data.form.emailLabel}</span><FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" /><input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full rounded-lg border border-white/20 bg-transparent py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/55 focus:border-[#ffc800]" /></label>
            </div>
            <label className="relative mt-4 block"><span className="sr-only">{data.form.phoneLabel}</span><FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" /><input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="w-full rounded-lg border border-white/20 bg-transparent py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/55 focus:border-[#ffc800]" /></label>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="relative block"><span className="sr-only">{data.form.dateLabel}</span><FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" /><input name="date" type="date" required className="w-full rounded-lg border border-white/20 bg-transparent py-3 pl-12 pr-4 text-sm text-white [color-scheme:dark] outline-none focus:border-[#ffc800]" /></label>
              <label className="relative block"><span className="sr-only">{data.form.timeLabel}</span><FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" /><select name="time" required defaultValue="" className="w-full appearance-none rounded-lg border border-white/20 bg-[#0d1417] py-3 pl-12 pr-4 text-sm text-white outline-none focus:border-[#ffc800]"><option value="" disabled>{data.form.timePlaceholder}</option>{data.form.timeOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}</select></label>
            </div>
            <label className="relative mt-4 block"><span className="sr-only">{data.form.guestsLabel}</span><FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" /><select name="guests" required defaultValue="" className="w-full appearance-none rounded-lg border border-white/20 bg-[#0d1417] py-3 pl-12 pr-4 text-sm text-white outline-none focus:border-[#ffc800]"><option value="" disabled>{data.form.guestsPlaceholder}</option>{data.form.guestOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}</select></label>
            <label className="relative mt-4 block"><span className="sr-only">{data.form.requestLabel}</span><FaRegCommentDots className="absolute left-4 top-4 text-white/70" /><textarea name="request" rows={4} placeholder={data.form.requestPlaceholder} className="w-full resize-none rounded-lg border border-white/20 bg-transparent py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/55 focus:border-[#ffc800]" /></label>
            <button type="submit" className="mt-4 flex w-full items-center justify-center gap-5 rounded-full bg-[#ffc800] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[#ed111c] hover:text-white">{data.form.submitText}<span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071016] text-white"><FaArrowRight /></span></button>
            {submitted && <p role="status" className="mt-4 rounded-lg border border-[#ffc800]/40 bg-[#ffc800]/10 px-4 py-3 text-sm font-semibold text-[#ffc800]">{data.form.successMessage}</p>}
          </form>
        </div>

        <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/15 bg-[#0d1417] sm:grid-cols-2 lg:grid-cols-4">
          {data.features.map((feature, index) => <div key={feature.id} className={`flex gap-4 p-5 ${index > 0 ? 'border-t border-white/15 sm:border-l sm:border-t-0' : ''}`}><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#ffc800] text-xl text-[#ffc800]">{renderIcon(feature.icon)}</span><div><h3 className="font-bold text-[#ffc800]">{feature.title}</h3><p className="mt-1 text-sm leading-5 text-white/70">{feature.description}</p></div></div>)}
        </div>

        <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/15 p-6 sm:p-8">
          <Image src={data.openingHours.backgroundImage} alt={data.openingHours.backgroundImageAlt} fill sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-[#ffc800]">{data.openingHours.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase sm:text-4xl">{data.openingHours.title} <span className="text-[#ffc800]">{data.openingHours.highlightedTitle}</span></h2>
            <p className="mt-3 text-sm leading-6 text-white/80 sm:text-base">{data.openingHours.description}</p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">{data.openingHours.items.map((item) => <div key={item.id} className="flex items-center gap-4 rounded-lg bg-white p-4 text-black"><FaCalendarAlt className="text-3xl text-[#d99b00]" /><div><h3 className="font-bold">{item.days}</h3><p className="mt-1 text-sm">{item.hours}</p></div></div>)}</div>
          </div>
        </div>

        <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#ed111c] p-6 sm:p-8">
          <Image src={data.assistance.backgroundImage} alt={data.assistance.backgroundImageAlt} fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#180303]/90 to-black/40" />
          <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-[auto_1fr_1fr]">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#ed111c] text-3xl text-[#ed111c]"><FaPhoneAlt /></span>
            <div><p className="text-xs font-bold uppercase tracking-wider text-[#ffc800]">{data.assistance.eyebrow}</p><h2 className="mt-2 text-3xl font-extrabold uppercase">{data.assistance.title} <span className="text-[#ffc800]">{data.assistance.highlightedTitle}</span></h2><p className="mt-2 text-sm text-white/75">{data.assistance.description}</p></div>
            <div className="md:border-l md:border-white/20 md:pl-8"><p className="text-sm text-white/75">{data.assistance.phoneLabel}</p><a href={`tel:${data.assistance.phone}`} className="mt-1 block text-2xl font-bold text-white sm:text-3xl">{data.assistance.phone}</a><a href={`mailto:${data.assistance.email}`} className="mt-2 block text-sm text-[#ffc800]">{data.assistance.email}</a><p className="mt-2 text-sm text-white/70">{data.assistance.address}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};
