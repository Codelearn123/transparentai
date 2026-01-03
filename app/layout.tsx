import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PixelClips - AI-Powered Visual Creation",
  description: "Transform your ideas into stunning visuals with the power of AI. Access 12+ cutting-edge AI models for image and video generation.",
  keywords: ["AI", "image generation", "video generation", "AI art", "FLUX", "Stable Diffusion", "Midjourney"],
  authors: [{ name: "PixelClips" }],
  openGraph: {
    title: "PixelClips - AI-Powered Visual Creation",
    description: "Transform your ideas into stunning visuals with the power of AI",
    type: "website",
    url: "https://pixelclips.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelClips - AI-Powered Visual Creation",
    description: "Transform your ideas into stunning visuals with the power of AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
