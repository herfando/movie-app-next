'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MyLatestWork() {
  return (
    <section
      className='custom-container h-auto w-full pt-40 pb-40 md:pt-80 md:pb-80'
      id='projects'
    >
      {/* Title */}
      <h2 className='pb-40 text-center text-[32px] font-bold md:pb-48 md:text-[48px]'>
        My Latest Work
      </h2>

      <div className='flex w-full flex-wrap justify-center gap-24 gap-y-80 md:gap-x-200 md:gap-y-60'>
        {/* Work 1 */}
        <div className='flex w-384 flex-col gap-24'>
          <div className='flex gap-x-5'>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              React
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Zustand
            </div>{' '}
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Typescript
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Tanstack
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Tailwind
            </div>
          </div>

          <Link
            href='https://restaurant-web-mpv.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <video
                src='/video/01_restaurant.mp4'
                autoPlay
                loop
                muted
                width={381}
                height={284}
                className='h-269.09 w-361 rounded-2xl bg-neutral-800 hover:cursor-pointer md:h-284 md:w-381'
              />
            </motion.div>
          </Link>

          <p className='text-[16px] font-semibold md:text-[20px]'>
            Modern Restaurant Website
          </p>

          <Link
            href='https://restaurant-web-mpv.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight className='ml-5 h-14 w-14 self-center' />
            </div>
          </Link>
        </div>

        {/* Work 2 */}
        <div className='-mt-40 flex h-444 w-384 flex-col justify-between gap-24 md:mt-0'>
          <div className='flex gap-x-5'>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Next.js
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Context
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Typescript
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Tailwind
            </div>
          </div>
          <Link
            href='https://movie-app-next-xi.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <video
                src='/video/02_movie.mp4'
                autoPlay
                loop
                muted
                width={381}
                height={284}
                className='h-269.09 w-361 rounded-2xl bg-neutral-800 hover:cursor-pointer md:h-284 md:w-381'
              />
            </motion.div>
          </Link>

          <p className='text-[16px] font-semibold md:text-[20px]'>
            Movie Database Dashboard
          </p>

          <Link
            href='https://movie-app-next-xi.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight className='ml-5 h-14 w-14 self-center' />
            </div>
          </Link>
        </div>

        {/* Work 3 */}
        {/* <div className='flex h-444 w-384 flex-col justify-between gap-24'>
          <div className='flex gap-x-5'>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Next.js
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Redux
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Typescript
            </div>

            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Tanstack
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Tailwind
            </div>
          </div>
          <Link
            href='https://nextjs-ecommerce-mvp-chi.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Image
                src='/images/25_ecommerce.png'
                alt='hotto to backbone healt'
                width={381}
                height={284}
                className='h-269.09 w-361 object-cover hover:cursor-pointer md:h-284 md:w-381'
              />
            </motion.div>
          </Link>

          <p className='rounded-2xl text-[16px] font-semibold md:text-[20px]'>
            E-Commerce Platform Application
          </p>

          <Link
            href='https://nextjs-ecommerce-mvp-chi.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight className='ml-5 h-14 w-14 self-center' />
            </div>
          </Link>
        </div> */}

        {/* Work 4 */}
        {/* <div className='flex h-444 w-384 flex-col justify-between gap-24'>
          <div className='flex gap-x-5'>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Next.js
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Redux
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Typescript
            </div>

            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Tanstack
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Tailwind
            </div>
          </div>
          <Link
            href='https://library-web-mvp.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Image
                src='/images/26_library.png'
                alt='agriculture aplication'
                width={381}
                height={284}
                className='h-269.09 w-361 rounded-2xl object-cover hover:cursor-pointer md:h-284 md:w-381'
              />
            </motion.div>
          </Link>

          <p className='text-[16px] font-semibold md:text-[20px]'>
            Digital Library Platform
          </p>

          <Link
            href='https://library-web-mvp.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight className='ml-5 h-14 w-14 self-center' />
            </div>
          </Link>
        </div> */}

        {/* Work 5 */}
        <div className='flex h-444 w-384 flex-col justify-between gap-24'>
          <div className='flex gap-x-5'>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              React
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Zustand
            </div>{' '}
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Typescript
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Tanstack
            </div>
            <div className='flex h-28 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-5 text-[12px] md:h-36 md:text-[14px]'>
              Tailwind
            </div>
          </div>
          <Link
            href='https://social-media-web-mpv.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Image
                src='/images/27_sosmed.png'
                alt='boxinside for security locker'
                width={381}
                height={284}
                className='h-269.09 w-361 rounded-2xl object-cover hover:cursor-pointer md:h-284 md:w-381'
              />
            </motion.div>
          </Link>

          <p className='text-[16px] font-semibold md:text-[20px]'>
            Social Media Web Application
          </p>

          <Link
            href='https://social-media-web-mpv.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight className='ml-5 h-14 w-14 self-center' />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
