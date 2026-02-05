import React from 'react';
import { Check, X } from 'lucide-react';

export default function WhyChooseMe() {
  return (
    <section className='custom-container h-auto w-full pt-40 pb-40 md:pt-80 md:pb-80'>
      {/* Title */}
      <h2 className='pb-40 text-center text-[32px] font-bold md:pb-48 md:text-[48px]'>
        Why Choose Me
      </h2>
      {/* Header */}
      <div className='grid h-56 w-full grid-cols-3 items-center rounded-full bg-[#8B32FF] text-sm font-semibold text-white md:text-lg dark:bg-white dark:text-black'>
        <p className='text-center'>Skill</p>
        <p className='text-center'>Me</p>
        <p className='text-center'>Other</p>
      </div>
      {/* React & Next.js */}
      <div className='grid h-72 grid-cols-3 items-center text-sm text-black md:text-lg dark:text-white'>
        <p className='text-center'>React & Next.js</p>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#E17B0E] text-white md:h-28 md:w-28'>
            <Check strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#A4A7AE] text-white'>
            <X strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
      </div>
      <div className='w-full border-b border-[#D5D7DA]'></div>
      {/* Perfect Pixel */}
      <div className='grid h-72 grid-cols-3 items-center text-sm text-black md:text-lg dark:text-white'>
        <p className='text-center'>Perfect Pixel</p>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#E17B0E] text-white md:h-28 md:w-28'>
            <Check strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#A4A7AE] text-white'>
            <X strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
      </div>
      <div className='w-full border-b border-[#D5D7DA]'></div>
      {/* TypeScript Proficiency */}
      <div className='grid h-72 grid-cols-3 items-center text-sm text-black md:text-lg dark:text-white'>
        <p className='text-center'>TypeScript Proficiency</p>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#E17B0E] text-white md:h-28 md:w-28'>
            <Check strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#A4A7AE] text-white'>
            <X strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
      </div>
      <div className='w-full border-b border-[#D5D7DA]'></div>
      {/* Clean, Maintainable Code */}
      <div className='grid h-72 grid-cols-3 items-center text-sm text-black md:text-lg dark:text-white'>
        <p className='text-center'>Clean, Maintainable Code</p>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#E17B0E] text-white md:h-28 md:w-28'>
            <Check strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#A4A7AE] text-white'>
            <X strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
      </div>
      <div className='w-full border-b border-[#D5D7DA]'></div>
      {/* Performance Optimization */}
      <div className='grid h-72 grid-cols-3 items-center text-sm text-black md:text-lg dark:text-white'>
        <p className='text-center'>Performance Optimization</p>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#E17B0E] text-white md:h-28 md:w-28'>
            <Check strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#A4A7AE] text-white'>
            <X strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
      </div>
      <div className='w-full border-b border-[#D5D7DA]'></div>
      {/* Responsive Website */}
      <div className='grid h-72 grid-cols-3 items-center text-sm text-black md:text-lg dark:text-white'>
        <p className='text-center'>Responsive Website</p>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#E17B0E] text-white md:h-28 md:w-28'>
            <Check strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#A4A7AE] text-white'>
            <X strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
      </div>
      <div className='w-full border-b border-[#D5D7DA]'></div>
      {/* UI Design Proficiency (Figma) */}
      <div className='grid h-72 grid-cols-3 items-center text-sm text-black md:text-lg dark:text-white'>
        <p className='text-center'>UI Design Proficiency (Figma)</p>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#E17B0E] text-white md:h-28 md:w-28'>
            <Check strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full bg-[#A4A7AE] text-white'>
            <X strokeWidth={3} className='h-13 w-13 md:h-16 md:w-16' />
          </div>
        </div>
      </div>
      <div className='w-full border-b border-[#D5D7DA]'></div>
    </section>
  );
}
