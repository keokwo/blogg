import Link from 'next/link';
import Image from './Image';

const TopBar = () => {
  return (
    <div className='sticky top-0 z-10 hidden items-center justify-center gap-x-2 bg-cover bg-no-repeat p-2.5 text-sm shadow-lg dark:bg-dark bg-light dark:border-b dark:border-neutral-800 dark:text-neutral-300 sm:flex'>
      <span>🚀</span>
      <span>Hi, mari mengobrol dengan saya di</span>
      <Link
        href='/guestbook'
        className='ml-0.5 underline'
      >
        Guestbook
      </Link>
      <Image
        src='/images/dot_new_animated.svg'
        width={30}
        height={30}
        alt='new'
      />
    </div>
  );
};

export default TopBar;
