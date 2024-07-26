import { MenuContext } from "@/common/context/MenuContext";
import SearchBox from "@/components/elements/SearchBox";
import { ModeToggle } from "@/components/mode-toggle";
import useIsMobile from "@/lib/hooks/useIsMobile";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import ProfileHeader from "./ProfileHeader";


interface ProfileProps {
    isScrolled?: boolean;
}

const SiteProfile = ({ isScrolled = false }: ProfileProps) => {
    const isMobile = useIsMobile();

    const getImageSize = () => {
        let size = isMobile ? 40 : 80;
        if (!isMobile && isScrolled) {
            size = 0;
        }
        return size;
    };

    const [expandMenu, setExpandMenu] = useState<boolean>(false);

    const hideNavbar = () => {
        setExpandMenu(false);
    };

    useEffect(() => {
        if (expandMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [expandMenu]);

    return (
        <MenuContext.Provider value={{ hideNavbar }}>
            <div
                className={clsx(
                    ' p-5 z-40 w-full gap-5 items-center sm:shadow-none xl:p-0 shadow-lg dark:border-b dark:border-neutral-800',
                    expandMenu && 'fixed pb-0 top-0 bg-background',
                )}
            >
                <div className='flex items-start justify-between xl:flex-col xl:space-y-9'>
                    <ProfileHeader expandMenu={expandMenu} imageSize={getImageSize()} />
                    {/* <ProfileHeader expandMenu={expandMenu} imageSize={55} /> */}

                    {isMobile && (
                        <div
                            className={clsx(
                                'mt-2 flex items-center gap-5 xl:hidden',
                                expandMenu &&
                                'h-[120px] flex-col-reverse !items-end justify-between pb-1',
                            )}
                        >
                            <ModeToggle />
                            <MobileMenuButton
                                expandMenu={expandMenu}
                                setExpandMenu={setExpandMenu}
                            />
                        </div>
                    )}
                </div>

                {isMobile && (
                    <AnimatePresence>
                        {expandMenu && (
                            <div className='space-y-5 pt-6'>
                                <SearchBox />
                                <MobileMenu />
                            </div>
                        )}
                    </AnimatePresence>
                )}
            </div>
        </MenuContext.Provider>
    );
};

export default SiteProfile;
