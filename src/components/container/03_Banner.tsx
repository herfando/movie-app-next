'use client';

import React from 'react';
import MotionWrapper from '../ui/motion-wrapper';
import Image from 'next/image';

const items = [
  'Frontend Developer',
  'React & Next.js',
  'Programmers',
  'Mobile Developers',
];

export default function Banner() {
  return (
    <div className='absolute z-12 h-80 w-full bg-[linear-gradient(180deg,rgba(16,36,42,1)_0%,rgba(16,36,42,1)_50%,white_50%,white_100%)] dark:bg-[linear-gradient(180deg,black_0%,black_100%)]'>
      <MotionWrapper
        asChild
        initial={{ rotate: -1.5 }}
        animate={{ rotate: [-1.5, 0, -1.5] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className='flex-center top-full z-12 h-84 w-full -translate-y-0 gap-[22.3] overflow-hidden bg-black text-[24px] font-bold whitespace-nowrap text-white md:h-[140] md:-translate-y-20 md:text-[48px] dark:bg-white dark:text-black'>
          {items.map((text, i) => (
            <React.Fragment key={i}>
              <Image
                src='/icons/04_sharp_rectangle.png'
                alt='icons'
                width={48}
                height={52.5}
                className='h-35 w-32 md:h-52.5 md:w-48'
              />
              <h1>{text}</h1>
            </React.Fragment>
          ))}
        </div>
      </MotionWrapper>
    </div>
  );
}
