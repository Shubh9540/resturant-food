import React from 'react';
import { BlogDetailPageData, RestaurantFoodTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetailContent } from '@/components/sections/BlogDetailContent';
import { Footer } from '@/components/common/Footer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: RestaurantFoodTemplateData = rawData;
  const sectionData = templateData?.categories?.RestaurantFood?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  const blogPageData = sectionData.BlogPage?.variants?.RestaurantFoodBlogPage1;
  const blogItem = blogPageData?.pages.flatMap((page) => page.blogs).find((blog) => blog.slug === id);

  if (!blogPageData || !blogItem) {
    notFound();
  }

  const blogDetailData: BlogDetailPageData = {
    ...blogPageData.detailTemplate,
    id: blogItem.id,
    breadcrumbTitle: blogItem.title,
    breadcrumbLabel: blogItem.title,
    category: blogItem.category,
    title1: blogItem.detailTitle1,
    title2: blogItem.detailTitle2,
    description: blogItem.description,
    authorLabel: blogItem.author,
    date: blogItem.date,
    image: blogItem.image,
    imageAlt: blogItem.imageAlt,
  };

  return (
    <main className="bg-[#071016]">
      <TopBar data={sectionData.TopBar?.variants?.RestaurantFoodTopBar1} />
      <Header data={sectionData.Header?.variants?.RestaurantFoodHeader1} />
      
      <Breadcrumb data={commonData.blogDetailBreadcrumb} dynamicTitle={blogItem.title} />
      
      <BlogDetailContent data={blogDetailData} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
