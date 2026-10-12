import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTripadvisor, FaYoutube } from 'react-icons/fa';
import { FiClock, FiMapPin, FiPhone, FiSearch } from 'react-icons/fi';
import { TopBarProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiMapPin':
      return <FiMapPin />;
    case 'FiPhone':
      return <FiPhone />;
    case 'FiClock':
      return <FiClock />;
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaYoutube':
      return <FaYoutube />;
    case 'FaTripadvisor':
      return <FaTripadvisor />;
    default:
      return null;
  }
};

export const TopBar = ({ data }: TopBarProps) => {
  if (!data) return null;

  return (
    <div className="relative z-[60] hidden h-9 w-full border-b border-white/10 bg-[#050505] text-white lg:block">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-between px-4 lg:px-6">
        <div className="flex h-full items-center">
          {data.infoItems.map((item, index) => {
            const content = (
              <>
                <span className="text-base text-[#ef1b24]">{renderIcon(item.icon)}</span>
                <span>{item.value}</span>
              </>
            );

            return (
              <React.Fragment key={item.id}>
                {item.url ? (
                  <a href={item.url} className="flex items-center gap-2 text-xs font-medium text-white/90 transition-colors hover:text-[#ffcc00]">
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                    {content}
                  </div>
                )}
                {index < data.infoItems.length - 1 && <span className="mx-5 h-5 w-px bg-[#ffcc00]/70" />}
              </React.Fragment>
            );
          })}
        </div>

        <div className="flex h-full items-center gap-4">
          {data.socialLinks.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-sm text-white/85 transition-colors hover:text-[#ffcc00]"
            >
              {renderIcon(social.icon)}
            </Link>
          ))}

          <span className="h-5 w-px bg-[#ffcc00]/70" />

          <button type="button" aria-label={data.searchLabel} className="flex items-center justify-center text-base text-white transition-colors hover:text-[#ffcc00]">
            <FiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};
