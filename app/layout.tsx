"use client"
import { CommandPaletteProvider } from "@/common/context/CommandPaletteContext";
import CommandPalette from "@/components/elements/CommandPalette";
import Layout from "@/components/layouts";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import AOS from 'aos';
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import { useEffect } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  variable: '--font-sans'
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-mono'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);
  return (
    <html lang="en" suppressHydrationWarning >
      <head />
      <body
        className={cn(
          "relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased",
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <CommandPaletteProvider>
            <TooltipProvider>
              <Layout>
                <CommandPalette />
                {children}
                <Toaster />
              </Layout>
            </TooltipProvider>
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
