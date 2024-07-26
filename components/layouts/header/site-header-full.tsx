import { MENU_ITEMS } from '@/common/constant/menu';
import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';
import Image from '@/components/elements/Image';
import { Icons } from '@/components/icons';
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from "@/lib/utils";
import clsx from 'clsx';
import { HomeIcon, MenuIcon, PanelRightClose, PencilIcon, VerifiedIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import SiteProfile from '../sidebar/site-profile';

const DATA = {
    navbar: [
        { href: "#", icon: HomeIcon, label: "Home" },
        { href: "#", icon: PencilIcon, label: "Blog" },
    ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "#",
                icon: Icons.gitHub,
            }
        },
    },
};

export function SiteHeaderFull() {
    const { setIsOpen } = useContext(CommandPaletteContext);
    const [showMenu, setShowMenu] = useState(false);

    const pathname = usePathname();
    const { setTheme } = useTheme();
    const menus = MENU_ITEMS.filter(
        (item) => item.isShow && item.title !== 'Home',
    );

    return (
        <header
            className={cn(
                "supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
            )}
        >
            <div className="container hidden lg:flex h-16 items-center">
                {/* <MainNav /> */}
                <div className="mr-4 flex">
                    <div className="relative mr-6 flex items-center space-x-2">
                        <Image
                            src='/images/muqoffin.png'
                            alt='Muhammad Muqoffin Nuha'
                            width={40}
                            height={40}
                            rounded='rounded-full'
                            className='border-2 rotate-3 border-neutral-400 dark:border-neutral-600 lg:hover:scale-105' />
                        {!showMenu && (
                            <div className='flex items-center gap-3'>
                                <Link href='/' passHref>
                                    <h2 className='flex-grow text-lg font-medium lg:text-xl'>
                                        Muhammad Muqoffin Nuha
                                    </h2>
                                </Link>
                                <Tooltip>
                                    <TooltipTrigger aria-label="Verified">
                                        <VerifiedIcon
                                            size={18}
                                            className='text-blue-400'
                                            data-aos='flip-right' />
                                    </TooltipTrigger>
                                    <TooltipContent>Verified</TooltipContent>
                                </Tooltip>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
                    {showMenu && (
                        <div className='flex items-center gap-6' data-aos='flip-up'>
                            {menus.map((menu, index) => (
                                <Link
                                    key={index}
                                    href={menu.href}
                                    passHref
                                    className={clsx(
                                        'hover:animate-pulse',
                                        pathname === menu?.href &&
                                        'font-semibold animate-pulse'
                                    )}
                                >
                                    <div>{menu.title}</div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {!showMenu && (
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <Button
                                variant="outline"
                                className={cn(
                                    "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
                                )}
                                onClick={() => setIsOpen(true)}
                            >
                                <span className="hidden lg:inline-flex">Search...</span>
                                <span className="inline-flex lg:hidden">Search...</span>
                                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                                    <span className="text-xs">⌘</span>K
                                </kbd>
                            </Button>
                        </div>
                    )}
                    <nav className="flex items-center gap-1">

                        <button
                            className='flex items-center gap-2 p-2 border rounded-md backdrop-blur dark:border-neutral-700 dark:bg-neutral-900'
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            {showMenu ? <PanelRightClose size={18} /> : <MenuIcon size={18} />}
                        </button>

                        <ModeToggle />
                    </nav>
                </div>
            </div>
            <div className="block lg:hidden h-16 items-center">
                <SiteProfile />
            </div>
            <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
        </header>
    );
}