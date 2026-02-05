import React from 'react';
import Image from 'next/image';

export default function MyWorkExperience() {
  return (
    <section
      className='custom-container flex h-auto w-full flex-col justify-center pt-40 pb-60 md:pt-80 md:pb-80'
      id='experience'
    >
      {/* Title */}
      <h2 className='pb-40 text-center text-[32px] font-bold md:pb-48 md:text-[48px]'>
        My Work Experience
      </h2>
      <div className='relative grid w-full grid-cols-[40_1fr] justify-center gap-y-40 md:grid-cols-[152_80_1fr] md:gap-y-40'>
        {/* WPH */}
        {/* colom 1 */}
        <div className='hidden w-152 space-y-12 md:block'>
          <Image
            src='/images/29_wph.svg'
            alt='wph company'
            width={152}
            height={48}
            className='h-48 w-130 object-contain'
          />
          <p className='font-semibold md:text-xl'>WPH</p>
          <p className='md: text-md'>2025-2026</p>
        </div>

        {/* colom 2 */}
        <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#2a9e8b]'></div>
          </div>
        </div>
        {/* colom 3 */}
        <div>
          <h3 className='content-center font-semibold text-black md:text-[20px] dark:text-white'>
            Software Engineer, Frontend
          </h3>
          <p className='text-10 content-end text-gray-800 md:text-[16px]'>
            • Built responsive web interfaces using React and Next.js with
            Tailwind CSS <br />• Managed application state using Redux Toolkit,
            Zustand, and Context API <br />• Handled data fetching with TanStack
            Query <br />• Implemented smooth UI animations using Framer Motion{' '}
            <br />• Delivered clean, reusable, and high-performance code
          </p>
        </div>
        {/* PT Porto */}
        {/* colom 1 */}
        <div className='hidden w-152 flex-col space-y-12 md:block'>
          <Image
            src='/images/30_porto.png'
            alt='porto company'
            width={152}
            height={48}
            className='h-80 w-80 object-contain'
          />
          <p className='font-semibold md:text-xl'>Porto</p>
          <p className='md: text-md'>2024-2025</p>
        </div>

        {/* colom 2 */}
        <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#2a9e8b]'></div>
          </div>
        </div>
        {/* colom 3 */}
        <div>
          <h3 className='content-center font-semibold text-black md:text-[20px] dark:text-white'>
            Plant Manager
          </h3>
          <p className='text-10 content-end text-gray-800 md:text-[16px]'>
            • Led production team, ensuring daily targets were met efficiently.
            <br /> • Managed improvement projects using Agile/Scrum
            methodologies to enhance production efficiency and quality.
            <br /> • Developed problem-solving, time management, teamwork, and
            leadership skills.
          </p>
        </div>
        {/* SAP */}
        {/* colom 1 */}
        <div className='hidden w-152 space-y-12 md:block'>
          <Image
            src='/images/31_sap.png'
            alt='SAP company'
            width={152}
            height={48}
            className='h-60 w-60 object-contain'
          />
          <p className='font-semibold md:text-xl'>SAP</p>
          <p className='md: text-md'>2022-2024</p>
        </div>

        {/* colom 2 */}
        <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#2a9e8b]'></div>
          </div>
        </div>
        {/* colom 3 */}
        <div>
          <h3 className='content-center font-semibold text-black md:text-[20px] dark:text-white'>
            Head Production
          </h3>
          <p className='md:tet-[16px] text-10 content-end text-gray-800'>
            • Led and coordinated production teams to deliver projects on time
            <br />• Managed workflows, priorities, and cross-team communication
            <br />• Ensured quality standards and smooth project execution
          </p>
        </div>
        {/* Hankook */}
        {/* colom 1 */}
        <div className='hidden w-152 space-y-12 md:block'>
          <Image
            src='/images/32_Hankook_Tire.svg'
            alt='Hankook company'
            width={152}
            height={48}
            className='h-60 w-120 object-contain'
          />
          <p className='font-semibold md:text-xl'>Hankook</p>
          <p className='md: text-md'>2013-2021</p>
        </div>

        {/* colom 2 */}
        <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#2a9e8b]'></div>
          </div>
        </div>
        {/* colom 3 */}
        <div>
          <h3 className='content-center font-semibold text-black md:text-[20px] dark:text-white'>
            Technology & Manufacturing Staff
          </h3>
          <p className='md:tet-[16px] text-10 content-end text-gray-800'>
            • Reduced production downtime (loss time) by analyzing process
            inefficiencies and implementing improvement
            <br />• Improved product quality by reducing rejection rates through
            process analysis and process optimization
          </p>
        </div>
        {/* garis */}
        {/* <div className='absolute top-[7.299%] left-[21.2837%] z-0 h-450 w-100 border-l border-dashed border-[#A4A7AE]'></div> */}
      </div>
    </section>
  );
}
