import clsx from 'clsx';
import Link from 'next/link';

import { VerifiedIcon } from 'lucide-react';
import Image from '../../elements/Image';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
  isScrolled?: boolean;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={clsx(
        'flex w-full flex-grow items-center gap-4 xl:flex-col xl:items-start xl:gap-0.5 xl:px-2',
        expandMenu && 'flex-col !items-start',
      )}
    >
      <Image
        src='/images/muqoffin.png'
        alt='Muhammad Muqoffin Nuha'
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        rounded='rounded-full'
        className='rotate-3 dark:border-neutral-600 xl:hover:scale-105'
      />
      <>
        <div className='flex items-center gap-2 mt-1 xl:mt-4'>
          <Link href='/' passHref>
            <h2 className='flex-grow text-lg font-medium xl:text-xl'>
              Muhammad Muqoffin Nuha
            </h2>
          </Link>
          <VerifiedIcon size={18} className='text-blue-400' />
        </div>
        <div className='hidden text-[15px] text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 xl:flex'>
          @initheo
        </div>
      </>
    </div>
  );
};

export default ProfileHeader;
