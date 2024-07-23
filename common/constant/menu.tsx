"use client";

import { BiRocket as ContactIcon } from 'react-icons/bi';
import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
} from 'react-icons/bs';
import { FaJava } from "react-icons/fa6";
import {
  FiPieChart as AnalyticsIcon,
  FiRss as BlogIcon,
  FiCpu as DashboardIcon,
  FiUsers,
  FiPocket as HomeIcon,
  FiBookOpen as LearnIcon,
  FiUser as ProfileIcon,
  FiCoffee as ProjectIcon,
} from 'react-icons/fi';
import { PiChatCircleDotsBold as ChatIcon } from 'react-icons/pi';
import { SiJavascript } from 'react-icons/si';
import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard',
    type: 'Pages',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
    type: 'Pages',
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog',
    type: 'Pages',
  },
  {
    title: 'Learn',
    href: '/learn',
    // href: 'https://learn.neoartd.my.id/',
    icon: <LearnIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Learn',
    type: 'Pages',
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
    type: 'Pages',
  },
  {
    title: 'Guestbook',
    href: '/guestbook',
    icon: <ChatIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Chat',
    type: 'Pages',
  },
];

export const MENU_ACCOUNT: MenuItemProps[] = [
  {
    title: 'Account',
    href: '/account',
    icon: <FiUsers size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Account',
    type: 'Pages',
  },
];

export const MENU_OWNER: MenuItemProps[] = [
  {
    title: 'Organization',
    href: '/organization',
    icon: <FiUsers size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Organization',
    type: 'Pages',
  },
];


export const MENU_APPS: MenuItemProps[] = [
  {
    title: 'JS Playground',
    href: '/playground/js',
    icon: <SiJavascript size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: JS Playground',
    type: 'Pages',
  },
  {
    title: 'Java Playground',
    href: '/playground/java',
    icon: <FaJava size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Java Playground',
    type: 'Pages',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Email',
    href: 'mailto:dev@neoartd.my.id',
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Contact: Email',
    className: '!bg-green-600 border border dark:border-neutral-700',
    type: 'Link',
  },

  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/mmuqoffinnuha1/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
    className: '!bg-blue-500 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/iniakuntheo',
    icon: <TwitterIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Twitter',
    className: '!bg-sky-500 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/s__h_113o',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
    className: '!bg-orange-700 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Github',
    href: 'https://github.com/initheo',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: '!bg-black border border dark:border-neutral-700',
    type: 'Link',
  },
];

export const EXTERNAL_LINKS: MenuItemProps[] = [
  {
    title: 'Analytics',
    href: 'https://analytics.neoartd.my.id/share/yOvmeaKfpGTd5W4N/neoartd.my.id',
    icon: <AnalyticsIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'External Link: Analytics',
    type: 'Link',
  },
];
