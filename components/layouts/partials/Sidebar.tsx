import { useEffect, useState } from 'react';

import useIsMobile from '@/lib/hooks/useIsMobile';

import SearchBox from '@/components/elements/SearchBox';
import ThemeSwitcher from '@/components/elements/ThemeSwitcher';
import Navigation from '../sidebar/Navigation';
import SiteProfile from '../sidebar/site-profile';

const Sidebar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='sidebar'
      // className='flex flex-col space-y-6 transition-all duration-300 lg:py-8'
      className='sticky top-0 z-10 flex flex-col space-y-6 transition-all duration-300 xl:py-6'
    >
      <SiteProfile isScrolled={isScrolled} />
      {!isMobile && (
        <div className='space-y-3'>
          <div className='pb-1'>
            <SearchBox />
          </div>
          <Navigation />
          <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
          <div className='space-y-2.5 px-1'>
            <div className='px-3'>
              <span className='text-sm text-neutral-600'>Theme</span>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
