"use client"

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { useWindowSize } from 'usehooks-ts';
import DotPattern from '../magicui/dot-pattern';
import { SiteBanner } from './header/site-banner';
import { SiteHeaderFull } from './header/site-header-full';
import SiteHeaderSidebar from './header/site-header-sidebar';
interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { resolvedTheme } = useTheme();
    const { width } = useWindowSize();
    const isMobile = width < 1200;

    const router = usePathname();
    const pageName = router.split('/')[1];

    const isFullPageHeader =
        pageName === 'blog' ||
        router.startsWith('/blog/') ||
        pageName === 'login' ||
        router.startsWith('/login/') ||
        pageName === 'register' ||
        router.startsWith('/register/') ||
        pageName === 'forgotpass' ||
        router.startsWith('/forgot-password') ||
        pageName === 'learn' ||
        router.startsWith('/learn/')

    const isLearn =
        pageName === 'learn' ||
        router.startsWith('/learn/')

    const isShowChatButton = pageName;

    return (
        <>
            {siteConfig.banner && <SiteBanner />}
            {isFullPageHeader ? (
                <>
                    <SiteHeaderFull />
                    <main className="flex-1">{children}</main>
                    <DotPattern
                        width={20}
                        height={20}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                        )}
                    />
                </>
            ) : (
                <>
                    <div className='container flex flex-col xl:flex-row xl:gap-2 xl:py-4 xl:pb-8'>
                        <SiteHeaderSidebar />
                        <main className="flex-1">
                            {children}
                            <DotPattern
                                width={20}
                                height={20}
                                cx={1}
                                cy={1}
                                cr={1}
                                className={cn(
                                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                                )}
                            />
                        </main>
                    </div>
                </>
            )}
        </>
    );
};

export default Layout;
