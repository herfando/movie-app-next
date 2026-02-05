'use client';

import React, { use, useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Mail } from 'lucide-react';
import { navigationData } from '../data/navigation-data';
import Link from 'next/link';
import ToggleDark from '../ui/toggledark';
import ToggleHamburger from '../ui/togglehamburger';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 w-full bg-[#10242a]/95 text-white backdrop-blur-lg dark:bg-black/60'>
      <div className='custom-container flex-between h-80 lg:h-85'>
        <div className='flex w-141 gap-8 text-lg font-semibold whitespace-nowrap hover:cursor-pointer hover:text-blue-800'>
          {/* 1.Image */}
          <Image
            src='/icons/01_logo.png'
            alt='logo'
            width={26.3}
            height={28.5}
            className='w-26.3 h-28.5 object-contain'
          />
          Your Logo
        </div>
        {/* 2. Nav */}
        <ul className='text-md font-regular spacing-4xl ml-99 hidden w-544 items-center justify-between gap-32 p-8 lg:flex'>
          {navigationData.map((item) => (
            <li key={item.label} className='hover:text-blue-800'>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* 3.Toggle Darkmode */}
        <ToggleDark />

        {/* 4.Button */}
        <a
          href='https://wa.me/6282213114640?text=Hello%20Herfando, '
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button className='hidden h-48 w-172 gap-8 rounded-full bg-white text-sm font-bold text-black hover:cursor-pointer hover:bg-[#2a9e8b] hover:text-white lg:flex'>
            <Mail className='size-20' />
            Hire Me
          </Button>
        </a>

        {/* 5.Hamburger */}
        <ToggleHamburger />
      </div>
    </nav>
  );
}
