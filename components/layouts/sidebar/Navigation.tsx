import { MENU_ACCOUNT, MENU_APPS, MENU_ITEMS, MENU_OWNER } from '@/common/constant/menu';
import Menu from './Menu';

const Navigation = () => {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  const filteredAppsMenu = MENU_APPS?.filter((item) => item?.isShow);
  const filteredAccountMenu = MENU_ACCOUNT?.filter((item) => item?.isShow);
  const filteredOwnerMenu = MENU_OWNER?.filter((item) => item?.isShow);

  return (
    <>
      <Menu list={filteredMenu} />
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
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
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
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
