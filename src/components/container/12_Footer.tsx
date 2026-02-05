import React from 'react';
import Image from 'next/image';
import { section } from 'framer-motion/client';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className='h-auto w-full flex-col justify-between bg-[#10242a] pt-40 pb-40 text-white dark:bg-black/60'>
      <div className='custom-container flex-between h-auto w-full flex-wrap space-y-20 pt-40 pb-40 md:space-y-0 md:pt-0 md:pb-0'>
        <div className='flex flex-wrap gap-16'>
          {/* Your Logo */}
          <div className='flex w-141 gap-8 font-semibold whitespace-nowrap hover:cursor-pointer hover:text-blue-800 md:text-[21.33px]'>
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
          {/* copyright */}
          <div className='md:text-md self-center'>
            © {year} Herfando. All rights reserved
          </div>
        </div>
        {/* sosmed */}
        {/* <div className='flex gap-16'>
          <div className='flex h-48 w-48 items-center justify-center rounded-full bg-[#2a9e8b]'>
            <Image
              className='w-28.83 h-28.83'
              src='/icons/10_web.svg'
              alt='web'
              width={28.83}
              height={28.83}
            />
          </div>
          <div className='flex h-48 w-48 items-center justify-center rounded-full bg-[#2a9e8b]'>
            <Image
              className='w-28.83 h-28.83'
              src='/icons/11_instagram.svg'
              alt='instagram'
              width={28.83}
              height={28.83}
            />
          </div>
          <div className='flex h-48 w-48 items-center justify-center rounded-full bg-[#2a9e8b]'>
            <Image
              className='w-28.83 h-28.83'
              src='/icons/12_linkid.svg'
              alt='linkid'
              width={28.83}
              height={28.83}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
