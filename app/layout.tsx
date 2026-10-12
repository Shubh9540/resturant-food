import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import rawData from "@/data/templates.json";
import type { RestaurantFoodTemplateData } from "@/types/templates.types";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const templateData: RestaurantFoodTemplateData = rawData;
const siteMetadata = templateData.common.globalUI.siteMetadata;

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: siteMetadata.icon,
    shortcut: siteMetadata.icon,
    apple: siteMetadata.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
