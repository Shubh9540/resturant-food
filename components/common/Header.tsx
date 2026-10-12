'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowRight, FaBars, FaTimes, FaUtensils } from 'react-icons/fa';
import { HeaderProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUtensils':
      return <FaUtensils />;
    case 'FaArrowRight':
      return <FaArrowRight />;
    default:
      return null;
  }
};

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const navLinks = [...data.navLinksLeft, ...data.navLinksRight];

  return (
    <header className="relative z-50 w-full bg-[#050505] text-white">
      <div className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between gap-4 px-4 sm:px-6 lg:gap-5">
        <Link href="/" className="flex shrink-0 items-center">
          <Image src={data.logo} alt={data.logoAlt} width={300} height={100} priority className="h-auto w-44 object-contain sm:w-52 lg:w-48 xl:w-56" />
        </Link>

        <nav className="hidden h-full flex-1 items-center justify-center gap-3 lg:flex xl:gap-6">
          {navLinks.map((link) => {
            const linkPath = link.url.split('#')[0];
            const isActive = !link.url.includes('#') && (linkPath === '/' ? pathname === '/' : pathname.startsWith(linkPath));

            return (
              <Link
                key={link.id}
                href={link.url}
                className={`relative flex h-full items-center whitespace-nowrap text-[11px] font-semibold transition-colors xl:text-xs ${isActive ? 'text-[#ffcc00]' : 'text-white hover:text-[#ffcc00]'}`}
              >
                {link.label}
                {isActive && <span className="absolute inset-x-0 bottom-4 h-0.5 bg-[#ef1b24]" />}
              </Link>
            );
          })}
        </nav>

        <Link href={data.contactButton.url} className="hidden shrink-0 items-center gap-3 rounded-full bg-[#ffcc00] py-2 pl-5 pr-2 text-xs font-bold text-[#050505] transition-colors hover:bg-[#ffdd33] lg:flex">
          <span className="text-sm">{renderIcon(data.contactButton.leadingIcon)}</span>
          <span>{data.contactButton.text}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ef1b24] text-sm text-white">
            {renderIcon(data.contactButton.trailingIcon)}
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          aria-label={mobileMenuOpen ? data.mobileMenuCloseLabel : data.mobileMenuOpenLabel}
          aria-expanded={mobileMenuOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ffcc00] text-xl text-[#ffcc00] transition-colors hover:bg-[#ffcc00] hover:text-[#050505] lg:hidden"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-[#090909] px-4 pb-5 shadow-2xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => {
              const linkPath = link.url.split('#')[0];
              const isActive = !link.url.includes('#') && (linkPath === '/' ? pathname === '/' : pathname.startsWith(linkPath));

              return (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b border-white/10 px-2 py-4 text-sm font-semibold transition-colors ${isActive ? 'text-[#ffcc00]' : 'text-white hover:text-[#ffcc00]'}`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link href={data.contactButton.url} onClick={() => setMobileMenuOpen(false)} className="mt-5 flex items-center justify-center gap-3 rounded-full bg-[#ffcc00] py-2 pl-5 pr-2 text-sm font-bold text-[#050505] transition-colors hover:bg-[#ffdd33]">
              <span>{renderIcon(data.contactButton.leadingIcon)}</span>
              <span>{data.contactButton.text}</span>
              <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#ef1b24] text-white">
                {renderIcon(data.contactButton.trailingIcon)}
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
