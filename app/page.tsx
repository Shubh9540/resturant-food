import React from 'react';
import { RestaurantFoodTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { OurServiceSection } from '@/components/sections/OurServiceSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { OurMenuSection } from '@/components/sections/OurMenuSection';
import { ChefSection } from '@/components/sections/ChefSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { BlogsSection } from '@/components/sections/BlogsSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: RestaurantFoodTemplateData = rawData;
  const sectionData = templateData?.categories?.RestaurantFood?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      {/* Header overlaps Hero via absolute positioning */}
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.RestaurantFoodTopBar1} />
        <Header data={sectionData.Header?.variants?.RestaurantFoodHeader1} />
        <HeroSection data={sectionData.Hero?.variants?.RestaurantFoodHero1} />
      </div>
      <OurServiceSection data={sectionData.OurService?.variants?.RestaurantFoodOurService1} />
      <AboutUsSection data={sectionData.AboutUs?.variants?.RestaurantFoodAboutUs1} />
      <OurMenuSection data={sectionData.OurMenu?.variants?.RestaurantFoodOurMenu1} />
      <ChefSection data={sectionData.Chef?.variants?.RestaurantFoodChef1} />
      <GallerySection data={sectionData.Gallery?.variants?.RestaurantFoodGallery1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.RestaurantFoodTestimonials1} />
      <BlogsSection data={sectionData.Blogs?.variants?.RestaurantFoodBlogs1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
