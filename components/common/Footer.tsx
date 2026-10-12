import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaAngleRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUtensils,
  FaYoutube,
} from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaYoutube':
      return <FaYoutube />;
    default:
      return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  const phoneUrl = data.contactInfo.phone.replace(/[^+\d]/g, '');

  return (
    <footer
      className="w-full bg-black bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url('${data.backgroundImage}')` }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_0.75fr_1fr_1fr] lg:gap-0">
          <div className="lg:pr-10">
            <Link href={data.logoUrl} className="inline-block" aria-label={data.logoAlt}>
              <Image
                src={data.logo}
                alt={data.logoAlt}
                width={320}
                height={100}
                className="h-auto w-64 object-contain lg:w-72"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/90 sm:text-base">
              {data.description}
            </p>

            <div className="mt-5 flex items-center gap-3">
              {data.socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-base text-white transition-colors duration-300 hover:border-[#ffc400] hover:bg-[#ffc400] hover:text-black"
                >
                  {renderSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-white/15 lg:px-8">
            <h2 className="font-serif text-2xl font-bold">{data.quickLinksTitle}</h2>
            <div className="mt-2 flex gap-1">
              <span className="h-0.5 w-7 bg-[#ef0000]" />
              <span className="h-0.5 w-7 bg-[#ffc400]" />
            </div>
            <ul className="mt-4 space-y-2">
              {data.quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="flex items-center gap-3 text-sm text-white/90 transition-colors duration-300 hover:text-[#ffc400] sm:text-base"
                  >
                    <FaAngleRight className="shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/15 lg:px-8">
            <h2 className="font-serif text-2xl font-bold">{data.openingHoursTitle}</h2>
            <div className="mt-2 flex gap-1">
              <span className="h-0.5 w-7 bg-[#ef0000]" />
              <span className="h-0.5 w-7 bg-[#ffc400]" />
            </div>
            <ul className="mt-5 space-y-7">
              {data.openingHours.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <FaCalendarAlt className="mt-1 shrink-0 text-2xl text-[#ef0000]" />
                  <div className="text-sm leading-6 text-white/90 sm:text-base">
                    <p>{item.days}</p>
                    <p>{item.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/15 lg:pl-8">
            <h2 className="font-serif text-2xl font-bold">{data.contactTitle}</h2>
            <div className="mt-2 flex gap-1">
              <span className="h-0.5 w-7 bg-[#ef0000]" />
              <span className="h-0.5 w-7 bg-[#ffc400]" />
            </div>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-[#ef0000]">
                  <FaMapMarkerAlt />
                </span>
                <span className="pt-1 text-sm leading-5 text-white/90 sm:text-base">{data.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-[#ef0000]">
                  <FaPhoneAlt />
                </span>
                <Link href={`tel:${phoneUrl}`} className="text-sm text-white/90 transition-colors duration-300 hover:text-[#ffc400] sm:text-base">
                  {data.contactInfo.phone}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-[#ef0000]">
                  <FaEnvelope />
                </span>
                <Link href={`mailto:${data.contactInfo.email}`} className="break-all text-sm text-white/90 transition-colors duration-300 hover:text-[#ffc400] sm:text-base">
                  {data.contactInfo.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/30 pt-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-sm text-white/90 sm:text-base">{data.copyrightText}</p>
          <div className="flex items-center justify-center gap-4 text-[#ffc400]">
            <FaUtensils className="text-2xl" />
            <span className="font-serif text-xl italic text-white sm:text-2xl">{data.slogan}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
