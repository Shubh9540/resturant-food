import React from 'react';
import { RestaurantFoodTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ChefSection } from '@/components/sections/ChefSection';
import { AchievementSection } from '@/components/sections/AchievementSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: RestaurantFoodTemplateData = rawData;
  const sectionData = templateData?.categories?.RestaurantFood?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.RestaurantFoodTopBar1} />
        <Header data={sectionData.Header?.variants?.RestaurantFoodHeader1} />
        <Breadcrumb data={commonData.aboutBreadcrumb} />
      </div>
      
      <AboutUsSection data={sectionData.AboutUs?.variants?.RestaurantFoodAboutUs1} />

      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.RestaurantFoodAboutWhyChooseUs1} />

      <ChefSection data={sectionData.Chef?.variants?.RestaurantFoodChef1} />
      <AchievementSection data={sectionData.Achievement?.variants?.RestaurantFoodAchievement1} />
      <JourneySection data={sectionData.Journey?.variants?.RestaurantFoodJourney1} />

      <TestimonialSection data={sectionData.Testimonials?.variants?.RestaurantFoodTestimonials1} />
          <Footer data={commonData.Footer} />
    </main>
  );
}
