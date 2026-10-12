import React from 'react';
import { RestaurantFoodTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { NotFoundSection } from '@/components/sections/NotFoundSection';

export default function NotFoundPage() {
  const templateData: RestaurantFoodTemplateData = rawData;
  const sectionData = templateData?.categories?.RestaurantFood?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.RestaurantFoodTopBar1} logoData={sectionData.Header?.variants?.RestaurantFoodHeader1} />
      <Header data={sectionData.Header?.variants?.RestaurantFoodHeader1} />
      
      <NotFoundSection data={commonData.notFound} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
