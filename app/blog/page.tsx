import React from 'react';
import { RestaurantFoodTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogPageSection } from '@/components/sections/BlogPageSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function BlogsPage() {
  const templateData: RestaurantFoodTemplateData = rawData;
  const sectionData = templateData?.categories?.RestaurantFood?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.RestaurantFoodTopBar1} />
      <Header data={sectionData.Header?.variants?.RestaurantFoodHeader1} />
      
      <Breadcrumb data={commonData.blogsBreadcrumb} />
      
      <BlogPageSection data={sectionData.BlogPage?.variants?.RestaurantFoodBlogPage1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
