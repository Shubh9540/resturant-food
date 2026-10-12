"use client";

import React, { useState } from 'react';
import { EnquirySectionProps } from '@/types/templates.types';
import {
  FaArrowRight,
  FaChartBar,
  FaChevronDown,
  FaClock,
  FaEnvelope,
  FaHandshake,
  FaLock,
  FaPhoneAlt,
  FaRegCommentDots,
  FaShieldAlt,
  FaUser,
  FaUserTie,
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUserTie':
      return <FaUserTie />;
    case 'FaClock':
      return <FaClock />;
    case 'FaLock':
      return <FaLock />;
    case 'FaChartBar':
      return <FaChartBar />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaHandshake':
      return <FaHandshake />;
    default:
      return null;
  }
};

export const EnquirySection = ({ data }: EnquirySectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-12">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#eaf4ff] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 translate-x-1/2 rounded-full bg-[#eef6ff] opacity-80 blur-3xl" />

      <div className="relative mx-auto max-w-[1250px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-[#dce8f7] pb-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#0876ff]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0876ff]">{data.intro.eyebrow}</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-[#061a3a] md:text-5xl">
              {data.intro.title} <span className="text-[#0876ff]">{data.intro.titleHighlight}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#64748b] md:text-base">{data.intro.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {data.intro.highlights.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#eaf4ff] text-lg text-[#0876ff]">
                    {renderIcon(item.icon)}
                  </span>
                  <div>
                    <h2 className="text-sm font-bold text-[#061a3a]">{item.title}</h2>
                    <p className="mt-1 text-xs leading-5 text-[#64748b]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-[#0876ff] lg:col-span-5 lg:border-l lg:pl-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#0876ff]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0876ff]">{data.vision.eyebrow}</span>
            </div>
            <h2 className="text-2xl font-extrabold leading-tight text-[#061a3a] md:text-3xl">
              {data.vision.title1}
              <span className="block text-[#0876ff]">{data.vision.title2}</span>
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#64748b] md:text-base">{data.vision.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#0876ff]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0876ff]">{data.priority.eyebrow}</span>
            </div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#061a3a] md:text-4xl">
              {data.priority.title1} <span className="text-[#0876ff]">{data.priority.title2}</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#64748b]">{data.priority.description}</p>

            <div className="mt-6 space-y-5">
              {data.priority.features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#eaf4ff] text-lg text-[#0876ff]">
                    {renderIcon(feature.icon)}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#061a3a]">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-[#64748b]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dce8f7] bg-white p-5 shadow-[0_18px_55px_rgba(15,64,120,0.08)] md:p-7 lg:col-span-7">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-8 bg-[#0876ff]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0876ff]">{data.form.eyebrow}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#061a3a] md:text-3xl">{data.form.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#64748b]">{data.form.description}</p>

            <form
              className="mt-6 space-y-4"
              onChange={() => setSubmitted(false)}
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                event.currentTarget.reset();
              }}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="relative block">
                  <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#7187a3]" />
                  <input name="fullName" type="text" required placeholder={data.form.fullNamePlaceholder} className="w-full rounded-md border border-[#dce8f7] bg-[#fbfdff] py-3 pl-11 pr-4 text-sm text-[#061a3a] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10" />
                </label>
                <label className="relative block">
                  <FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#7187a3]" />
                  <input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="w-full rounded-md border border-[#dce8f7] bg-[#fbfdff] py-3 pl-11 pr-4 text-sm text-[#061a3a] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10" />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="relative block">
                  <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#7187a3]" />
                  <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full rounded-md border border-[#dce8f7] bg-[#fbfdff] py-3 pl-11 pr-4 text-sm text-[#061a3a] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10" />
                </label>
                <label className="relative block">
                  <select name="service" required defaultValue="" className="w-full appearance-none rounded-md border border-[#dce8f7] bg-[#fbfdff] px-4 py-3 pr-10 text-sm text-[#52657d] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10">
                    <option value="" disabled>{data.form.servicePlaceholder}</option>
                    {data.form.servicesList.map((service) => (
                      <option key={service.id} value={service.value}>{service.label}</option>
                    ))}
                  </select>
                  <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#7187a3]" />
                </label>
              </div>

              <label className="relative block">
                <FaChartBar className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#7187a3]" />
                <select name="investmentType" required defaultValue="" className="w-full appearance-none rounded-md border border-[#dce8f7] bg-[#fbfdff] py-3 pl-11 pr-10 text-sm text-[#52657d] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10">
                  <option value="" disabled>{data.form.investmentPlaceholder}</option>
                  {data.form.investmentTypes.map((investmentType) => (
                    <option key={investmentType.id} value={investmentType.value}>{investmentType.label}</option>
                  ))}
                </select>
                <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#7187a3]" />
              </label>

              <label className="relative block">
                <FaRegCommentDots className="pointer-events-none absolute left-4 top-4 text-sm text-[#7187a3]" />
                <textarea name="message" required rows={5} placeholder={data.form.messagePlaceholder} className="w-full resize-none rounded-md border border-[#dce8f7] bg-[#fbfdff] py-3 pl-11 pr-4 text-sm text-[#061a3a] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10" />
              </label>

              <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-md bg-[#0876ff] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(8,118,255,0.24)] transition hover:bg-[#0564dd] focus:outline-none focus:ring-2 focus:ring-[#0876ff] focus:ring-offset-2">
                {data.form.buttonText}
                <FaArrowRight />
              </button>

              {submitted && (
                <p role="status" className="rounded-md border border-[#b7dfc6] bg-[#effaf3] px-4 py-3 text-sm font-semibold text-[#167443]">
                  {data.form.successMessage}
                </p>
              )}

              <div className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-[#64748b]">
                <FaLock className="mt-1 flex-shrink-0 text-[#7187a3]" />
                <p>{data.form.privacyText}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
