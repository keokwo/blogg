import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { useWindowSize } from 'usehooks-ts';

import HeaderSidebar from './header/HeaderSidebar';
import HeaderTop from './header/HeaderTop';

import useHasMounted from '@/lib/hooks/useHasMounted';
import TopBar from '../elements/TopBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();
  const { width } = useWindowSize();
  const isMobile = width < 1200;

  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

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
      <TopBar />
      {isLearn ? (
        <div
          className={clsx(
            'mx-auto max-w-full',
            isDarkTheme ? 'dark:text-darkText' : '',
          )}
        >
          <div className='flex flex-col xl:pb-8'>
            <HeaderTop />
            <main className='transition-all duration-300'>{children}</main>
          </div>
        </div>
      ) : (
        <div
          className={clsx(
            'mx-auto max-w-7xl',
            isDarkTheme ? 'dark:text-darkText' : '',
          )}
        >
          {isFullPageHeader ? (
            <div className='flex flex-col xl:pb-8'>
              <HeaderTop />
              <main className='transition-all duration-300'>{children}</main>
            </div>
          ) : (
            <div className='flex flex-col xl:flex-row xl:gap-2 xl:py-4 xl:pb-8'>
              <HeaderSidebar />
              <main className='max-w-[915px] transition-all duration-300 lg:w-4/5'>
                {children}
              </main>
            </div>
          )}
        </div>
      )}
      {/* {isShowChatButton && <ChatButton />} */}
      {/* {isMobile ? <NowPlayingCard /> : <NowPlayingBar />} */}
    </>
  );
};

export default Layout;
