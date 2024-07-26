"use client";

import Link from "next/link";
import Image from '../../elements/Image';

export function SiteBanner() {
    return (
        <>
            <div className="lg:flex group hidden bg-background relative w-full z-40 top-0 py-3 transition-all duration-300 md:py-0">
                <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
                    <Link
                        href="/guestbook"
                        target="_blank"
                        className="inline-flex text-xs leading-normal md:text-sm"
                    >
                        🚀{" "}
                        <span className="ml-1 font-[580] dark:font-[550]">
                            {" "}
                            Hi, mari mengobrol dengan saya di  Guestbook
                        </span>{" "}
                        <Image
                            src='/images/dot_new_animated.svg'
                            className='ml-2 hidden transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block'
                            width={30}
                            height={30}
                            alt='new' />
                    </Link>
                </div>
                <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
            </div>
        </>
    );
}
