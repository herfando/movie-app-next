'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/card';
import MotionWrapper from '../ui/motion-wrapper';
import { Star } from 'lucide-react';
import { section } from 'framer-motion/client';

export default function Home() {
  const stars = Array(5).fill(null);
  const avatars = [
    '02_Male Avatar',
    '03_Female Avatar',
    '04_Male Avatar',
    '05_Female Avatar',
  ];

  return (
    <section className='overflow-hidden bg-[#10242a] dark:bg-black' id='home'>
      <div className='custom-container relative grid h-400 w-full justify-center md:h-700'>
        {/* Name */}
        <MotionWrapper
          asChild
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -5, 0] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <div className='absolute top-[65%] z-12 text-center text-[clamp(25px,5vw,70px)] font-extrabold text-white md:top-[60%]'>
            HI, I’M FANDO — WEB
            <span className='text-[#2a9e8b]'> CREATOR & SOFTWARE </span>
            ENGINEER, FRONTEND
          </div>
        </MotionWrapper>

        {/* Picture Hero */}
        <div className='relativ flex h-screen w-full items-center justify-center'>
          <Image
            src='/images/01_Fando.png'
            alt='Hero Image'
            width={600}
            height={1000}
            className='absolute -top-5 left-1/2 z-10 -translate-x-[50%] object-contain md:-top-30 md:block md:-translate-x-[54.4%]'
            style={{ height: 'clamp(26.5rem, 52.99vw, 47.69rem)' }}
          />
        </div>

        {/* Circle Graphics */}
        {[
          {
            z: 4,
            top: '60.54%',
            color: '#6600EBCC',
            dark: '#B388FFCC',
            size: '13.49rem, 45.20vw, 22.63rem',
          },
          {
            z: 3,
            top: '46.89%',
            color: '#6600EB99',
            dark: '#B388FF99',
            size: '21.64rem, 72.49vw, 36.30rem',
          },
          {
            z: 2,
            top: '33.24%',
            color: '#6600EB66',
            dark: '#B388FF66',
            size: '29.79rem, 99.80vw, 49.96rem',
          },
          {
            z: 1,
            top: '19.6%',
            color: '#6600EB33',
            dark: '#B388FF33',
            size: '37.94rem, 127.09vw, 63.63rem',
          },
        ].map(({ z, top, color, dark, size }, i) => (
          <div
            key={i}
            style={{
              width: `clamp(${size})`,
              height: `clamp(${size})`,
            }}
            className={`absolute top-[${top}] left-1/2 z-${z} -translate-x-[50%] rounded-full bg-[${color}] dark:bg-[${dark}]`}
          />
        ))}

        {/* Feature Card 1 */}
        <MotionWrapper
          asChild
          initial={{ rotate: 5 }}
          animate={{ rotate: [5, -5, 0] }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Card className='absolute top-[0.908%] right-1/2 h-80 w-200 translate-x-[8.427%] space-y-5 p-10 md:top-[4.07%] md:h-125 md:w-340 md:-translate-x-[20.69%] md:space-y-10 md:p-20 dark:text-white'>
            <p className='text-[14px] font-bold whitespace-nowrap md:text-[24px]'>
              Clean Code
            </p>
            <div className='flex items-center gap-5'>
              <Image
                src='/icons/03_ceklist.svg'
                width={13.89}
                height={13.89}
                alt='ceklist'
                className='w-13.89 h-13.89'
              />
              <p className='text-[10px] md:text-sm'>
                Maintainable & scalable frontend code
              </p>
            </div>
          </Card>
        </MotionWrapper>

        {/* Feature Card 2 */}
        <MotionWrapper
          asChild
          initial={{ rotate: -5 }}
          animate={{ rotate: [-5, 5, 0] }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Card className='absolute top-[30.056%] right-1/2 h-80 w-166 -translate-x-[14.924%] p-20 md:top-[38.54%] md:h-110 md:w-283 md:-translate-x-[60.498%] dark:text-white'>
            <p className='text-[14px] font-bold whitespace-nowrap md:text-[24px]'>
              Frontend Developer
            </p>
            <div className='flex items-center gap-5'>
              <Image
                src='/icons/03_ceklist.svg'
                width={13.89}
                height={13.89}
                alt='ceklist'
                className='w-13.89 h-13.89'
              />
              <p className='text-[10px] md:text-sm'>React & Next.js</p>
            </div>
          </Card>
        </MotionWrapper>

        {/* Feature Card 3 */}
        <MotionWrapper
          asChild
          initial={{ rotate: 5 }}
          animate={{ rotate: [5, -5, 5, 0] }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Card className='absolute top-[15.454%] left-1/2 h-80 w-190 translate-x-[28.047%] space-y-5 p-10 md:top-[20.897%] md:h-120 md:w-320 md:translate-x-[15.09%] md:space-y-10 md:p-20 dark:text-white'>
            <p className='text-[14px] font-bold whitespace-nowrap md:text-[24px]'>
              Performance Focused
            </p>
            <div className='flex items-center gap-5'>
              <Image
                src='/icons/03_ceklist.svg'
                width={13.89}
                height={13.89}
                alt='ceklist'
                className='w-13.89 h-13.89'
              />
              <p className='text-[10px] md:text-sm'>
                Fast, responsive web experiences
              </p>
            </div>
          </Card>
        </MotionWrapper>
      </div>
    </section>
  );
}
