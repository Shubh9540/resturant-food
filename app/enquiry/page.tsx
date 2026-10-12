import React from 'react';
import { RestaurantFoodTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { EnquirySection } from '@/components/sections/EnquirySection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function EnquiryPage() {
  const templateData: RestaurantFoodTemplateData = rawData;
  const sectionData = templateData?.categories?.RestaurantFood?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.RestaurantFoodTopBar1} logoData={sectionData.Header?.variants?.RestaurantFoodHeader1} />
      <Header data={sectionData.Header?.variants?.RestaurantFoodHeader1} />
      <Breadcrumb data={commonData.enquiryBreadcrumb} />
      
      <EnquirySection data={sectionData.enquiry?.variants?.RestaurantFoodEnquiry1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
