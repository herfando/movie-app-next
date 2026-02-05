'use client';
import React from 'react';
import { Mail, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <section
      className='custom-container relative z-3 h-auto w-full bg-white pt-100 md:pt-150 dark:bg-black'
      id='about'
    >
      <div className='space-y-10'>
        <p className='text-md font-semibold text-black md:text-lg dark:text-white'>
          Hi, I’m Herfando 👋
        </p>
        <p className='text-[20px] font-semibold text-black md:text-[32px] dark:text-white'>
          Building sleek, user-friendly interfaces with React & Next.js.{' '}
          <span className='text-[rgba(164,167,174,1)]'>
            <br />
            Delivering fast, responsive, and user-focused web experiences.
          </span>
        </p>
      </div>

      {/* Coloumn 1 */}
      <div className='mt-40 flex flex-wrap justify-center gap-60'>
        {/* Why Choosen Me */}
        <div className='relative h-374 w-361 space-y-20 overflow-hidden rounded-2xl bg-[rgba(225,123,14,1)] p-24 md:h-395 md:w-400 dark:bg-[rgba(160,90,30,1)]'>
          <p className='font-bold text-white md:text-[32px]'>Why Choose Me</p>

          <p className='md:text-md font-regular text-white'>
            Delivering excellence with innovative solutions and seamless
            execution.
          </p>

          {/* layer 1 */}
          <motion.div
            className='absolute top-[50.126%] left-0 flex -translate-x-[13.22%] gap-10'
            animate={{ x: [0, 40, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <p className='h-36 w-119 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              React & Next.js
            </p>
            <p className='h-36 w-168 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              Frontend Developer
            </p>
            <p className='h-36 w-154 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              Resposive Design
            </p>
          </motion.div>

          {/* layer 2 */}
          <motion.div
            className='absolute top-[63.29%] left-0 flex -translate-x-[13.22%] gap-10'
            animate={{ x: [0, -50, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <p className='h-36 w-119 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              React & Next.js
            </p>
            <p className='h-36 w-119 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              React & Next.js
            </p>
            <p className='h-36 w-163 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              Modern Web Stack
            </p>
            <p className='h-36 w-119 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              React & Next.js
            </p>
          </motion.div>

          {/* layer 3 */}
          <motion.div
            className='absolute top-[76.455%] left-0 flex -translate-x-[13.22%] gap-10'
            animate={{ x: [0, 30, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <p className='h-36 w-119 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              React & Next.js
            </p>
            <p className='h-36 w-116 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              Clean Code
            </p>
            <p className='h-36 w-206 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              Performance Optimation
            </p>
          </motion.div>
        </div>

        {/* Skill */}
        <div className='relative h-374 w-361 space-y-15 overflow-hidden rounded-2xl bg-[#181D27] p-24 md:h-395 md:w-400 dark:bg-[#0F141C]'>
          <p className='font-bold text-white md:text-[32px]'>Skill</p>

          <div className='flex gap-5'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                color='orange'
                className='h-21.8 w-22.83 fill-[#F3993F]'
              />
            ))}
          </div>

          <p className='md:text-md font-regular text-white'>
            Modern technologies skills to deliver impactful and efficient
            solutions
          </p>

          {/* layer 1 */}
          <motion.div
            className='flex-between'
            animate={{ x: [0, 40, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/06_tailwind.svg'
                alt='CSS icon'
                width={26.24}
                height={30.81}
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/07_js.png'
                alt='javascript icon'
                width={26.24}
                height={30.81}
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/08_html.png'
                alt='html icon'
                width={26.24}
                height={30.81}
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/09_expressjs.png'
                alt='express js icon'
                width={26.24}
                height={30.81}
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/10_tanstack.png'
                alt='tanstack icon'
                width={26.24}
                height={30.81}
              />
            </p>
          </motion.div>

          {/* layer 2 */}
          <motion.div
            className='flex-between translate-y-9'
            animate={{ x: [0, -40, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/11_ts.png'
                alt='typescript icon'
                width={26.24}
                height={30.81}
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/12_reactjs.png'
                alt='react js icon'
                width={26.24}
                height={30.81}
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/13_nextjs.svg'
                alt='nextjs icon'
                width={26.24}
                height={30.81}
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/14_motion.png'
                alt='motion icon'
                width={26.24}
                height={30.81}
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/15_redux.svg'
                alt='redux icon'
                width={26.24}
                height={30.81}
              />
            </p>
          </motion.div>
        </div>

        {/* Coloumn 2 */}

        <div className='flex flex-wrap justify-center justify-items-center gap-60 p-24'>
          {/* Herfando */}
          <div className='relative h-374 w-361 space-y-15 overflow-hidden rounded-2xl bg-[#181D27] p-24 md:h-395 md:w-400 dark:bg-[#0F141C]'>
            <div className='translate-y-[40%] place-items-center -space-y-30 px-10 text-[64px] font-bold text-[#F39C3F] md:text-[71.63px] dark:text-white'>
              <p></p> <p>FANDO</p>
            </div>
            <Image
              className='absolute top-[0%] left-0 h-600 w-400 object-cover'
              width={381}
              height={384}
              alt='image'
              src='/images/02_Fando4.png'
            />
            {/* Button */}
            <a
              href='https://wa.me/6282213114640?text=Hello%20Herfando, '
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='absolute top-[82.939%] left-1/2 h-48 w-233 -translate-x-1/2 gap-8 rounded-full border border-[#2a9e8b] bg-white text-sm font-extrabold text-black hover:cursor-pointer hover:bg-[#2a9e8b] hover:text-white lg:flex dark:bg-black dark:text-white'>
                <Mail className='size-20' />
                Hire Me
              </Button>
            </a>
          </div>
          {/* My Experience */}
          <div className='relative h-374 w-361 space-y-20 overflow-hidden rounded-2xl md:h-395 md:w-400'>
            {/* background image (TIDAK ikut animasi) */}
            <Image
              src='/images/16_5 years experience.png'
              alt='experience'
              width={400}
              height={395}
              className='h-374 w-361 md:h-395 md:w-400'
            />

            {/* title */}
            <div className='absolute inset-0 top-[25.822%] right-1/2 translate-x-1/2 items-center text-[32px] font-bold text-[#2a9e8b] md:text-[40px] dark:text-black'>
              <div className='flex flex-col items-center justify-center'>
                <p>My</p>
                <p>Experience</p>
              </div>
            </div>

            {/* screenshots */}
            <div className='flex'>
              {/* screenshot 1 */}
              <Link
                href='https://restaurant-web-mpv.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <motion.div
                  className='absolute inset-0 top-[74.936%] left-[9.448%]'
                  whileHover={{ scale: 1.08, y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Image
                    src='/images/23_restaurant.png'
                    alt='experience1'
                    width={95}
                    height={71}
                    className='h-71 w-95 rounded-sm border border-white object-cover hover:cursor-pointer'
                  />
                </motion.div>
              </Link>

              {/* screenshot 2 */}
              <Link
                href='https://movie-app-next-xi.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <motion.div
                  className='absolute inset-0 top-[74.936%] left-[37.532%]'
                  whileHover={{ scale: 1.08, y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Image
                    src='/images/24_movie2.png'
                    alt='experience2'
                    width={95}
                    height={71}
                    className='h-71 w-95 rounded-sm border border-white object-cover hover:cursor-pointer'
                  />
                </motion.div>
              </Link>

              {/* screenshot 3 */}
              <Link
                href='https://nextjs-ecommerce-mvp-chi.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <motion.div
                  className='absolute inset-0 top-[74.936%] left-[65.616%]'
                  whileHover={{ scale: 1.08, y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Image
                    src='/images/25_ecommerce.png'
                    alt='experience3'
                    width={95}
                    height={71}
                    className='h-71 w-95 rounded-sm border border-white object-cover hover:cursor-pointer'
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Building Digital Products */}
        {/* <div className='relative h-452 w-361 space-y-20 overflow-hidden rounded-2xl bg-linear-to-r from-[#002C6E] to-[#0C4EAF] px-18 py-32 md:h-395 md:w-783 md:p-24 dark:from-[#00142E] dark:to-[#002B5B]'>
          <div className='text-[28px] font-bold text-white md:text-[32px]'>
            <p>Building Digital</p>
            <p className='flex gap-5'>
              Products
              <Image
                src='/icons/05_magicwand.svg'
                alt='magicwand'
                width={20}
                height={20}
                className='h-20 w-20 self-center'
              ></Image>
            </p> */}
        {/* Maps */}
        {/* <Image
              src='/images/21_Round Pixel World Map.svg'
              alt='pixel world map'
              width={657.6}
              height={411}
              className='w-657.6 absolute top-0 left-[30.779%] hidden h-411 self-center pr-113 pb-20 md:block'
            ></Image>
            <Image
              src='/images/22_Round Pixel World Map-mobile.svg'
              alt='pixel world map'
              width={365}
              height={367}
              className='absolute top-[18.14%] left-0 block h-367 w-365 self-center md:hidden'
            ></Image>
          </div> */}
        {/* Detail Achievement */}
        {/* <div className='absolute flex flex-col space-y-28 space-x-39 text-white md:top-[68.607%] md:left-[4.086%] md:flex-row'>
            <p className='text-[36px] font-bold md:text-[48px]'>
              50+
              <span className='block text-[14px] font-medium md:text-[18px]'>
                Global Client’s Handle
              </span>
            </p>
            <p className='text-[36px] font-bold md:text-[48px]'>
              99%
              <span className='block text-[14px] font-medium md:text-[18px]'>
                Client Satisfaction Rate
              </span>
            </p>
            <p className='text-[36px] font-bold md:text-[48px]'>
              100+
              <span className='block text-[14px] font-medium md:text-[18px]'>
                Project Delivered
              </span>
            </p>
          </div> */}
        {/* Flag Country */}
        {/* Indonesia */}
        {/* <div className='absolute top-[75.66%] left-[72.022%] flex space-x-4 md:top-[61.518%] md:left-[87.739%]'>
            <Image
              src='/icons/06_Flag Indonesia.png'
              alt='flag indonesia'
              width={50}
              height={16.38}
              className='h-16.38 w-50'
            ></Image>
            <Image
              src='/icons/09_Frame 1618873380.svg'
              alt='dot'
              width={10.67}
              height={10.67}
              className='h-10.67 w-10.67 self-start'
            ></Image>
          </div> */}
        {/* USA */}
        {/* <div className='top:left-[81.864%] absolute top-[46.017%] left-[77.285%] flex space-x-4 md:top-[27.088%]'>
            <Image
              src='/icons/07_Flag USA.png'
              alt='flag USA'
              width={50}
              height={16.38}
              className='h-16.38 w-50'
            ></Image>
            <Image
              src='/icons/09_Frame 1618873380.svg'
              alt='dot'
              width={10.67}
              height={10.67}
              className='h-10.67 w-10.67 self-start'
            ></Image>
          </div> */}
        {/* Germany */}
        {/* <div className='absolute top-[29.20%] left-[50.969%] flex space-x-4 md:top-[33.924%] md:left-[40.996%]'>
            <Image
              src='/icons/08_Flag Germany.png'
              alt='flag Germany'
              width={50}
              height={16.38}
              className='h-16.38 w-50'
            ></Image>
            <Image
              src='/icons/09_Frame 1618873380.svg'
              alt='dot'
              width={10.67}
              height={10.67}
              className='h-10.67 w-10.67 self-start'
            ></Image>
          </div>
        </div> */}
      </div>
    </section>
  );
}
