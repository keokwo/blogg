"use client"

import { CommandPaletteProvider } from '@/common/context/CommandPaletteContext';
import CommandPalette from '@/components/elements/CommandPalette';
import Layout from '@/components/layouts';
import { Toast } from '@/components/ui/toast';
import { cn } from '@/lib/utils';
import AOS from 'aos';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import defaultSEOConfig from '../next-seo.config';
import './globals.css';

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  variable: '--font-sans'
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-mono'
})

const ProgressBar = dynamic(
  () => import('@/components/elements/ProgressBar'),
  { ssr: false },
);

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <script async defer src="https://analytics.neoartd.my.id/script.js" data-website-id="656da7af-7455-487a-9ddf-6f17d3eeaba3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#121212" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body
        className={cn(
          'min-h-svh [max-width:1850px] mx-auto bg-background font-sans antialiased',
          satoshi.variable,
          geistMono.variable,
        )}
        suppressHydrationWarning
      >
        <DefaultSeo {...defaultSEOConfig} />
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <CommandPaletteProvider>
            <Layout>
              <CommandPalette />
              <ProgressBar />
              <Toast />
              <main>{children}</main>
            </Layout>
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

