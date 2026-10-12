import React from 'react';
import rawData from '@/data/templates.json';
import { RestaurantFoodTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ChefPageSection } from '@/components/sections/ChefPageSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ChefsPage() {
  const templateData: RestaurantFoodTemplateData = rawData;
  const sectionData = templateData?.categories?.RestaurantFood?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <TopBar data={sectionData.TopBar?.variants?.RestaurantFoodTopBar1} />
      <Header data={sectionData.Header?.variants?.RestaurantFoodHeader1} />
      <Breadcrumb data={commonData.teamBreadcrumb} />
      <ChefPageSection data={sectionData.ChefPage?.variants?.RestaurantFoodChefPage1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
