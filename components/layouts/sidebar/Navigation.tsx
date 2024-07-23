import { MENU_ACCOUNT, MENU_APPS, MENU_ITEMS, MENU_OWNER } from '@/common/constant/menu';
import Breakline from '@/components/elements/Breakline';
import Menu from './Menu';

const Navigation = () => {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  const filteredAppsMenu = MENU_APPS?.filter((item) => item?.isShow);
  const filteredAccountMenu = MENU_ACCOUNT?.filter((item) => item?.isShow);
  const filteredOwnerMenu = MENU_OWNER?.filter((item) => item?.isShow);

  return (
    <>
      <Menu list={filteredMenu} />
      <Breakline className='mx-1' />
      {/* <SignedIn> */}
      <div className='space-y-1'>
        <div className='px-4'>
          <span className='text-sm text-neutral-600'>Account</span>
        </div>
        <Menu list={filteredAccountMenu} />
        {/* <Protect
            role="org:admin"
          >
            <Menu list={filteredOwnerMenu} />
          </Protect> */}
      </div>
      <Breakline className='mx-1' />
      {/* </SignedIn> */}
      <div className='space-y-1'>
        <div className='px-4'>
          <span className='text-sm text-neutral-600'>Apps</span>
        </div>
        <Menu list={filteredAppsMenu} />
      </div>
    </>
  );
};

export default Navigation;
