'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProgressBar from '../ui/motion-progressbar';
import { skillData } from '../data/skill-data';

export default function Skill() {
  return (
    <section className='h-auto pt-40 pb-40 md:pb-80' id='skill'>
      <div className='pt-40 pb-48 text-center text-[32px] font-bold md:text-[48px] dark:text-white'>
        My Profesional Skill
      </div>

      <div className='custom-container item relative flex flex-wrap justify-center gap-20'>
        {skillData.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className='w-582 space-y-20 space-x-20 rounded-2xl p-16 shadow-[0_0_10px_#A5A5A533]'
          >
            <div className='flex gap-12'>
              <p className='dark:black grid h-[52.58px] w-[52.58px] place-items-center rounded-full bg-[#F5F5F5]'>
                {skill.image}
              </p>
              <p className='self-center text-[18px] font-semibold'>
                {skill.name}
              </p>
            </div>

            <p className='text-[rgba(65,70,81,1)] md:text-[16px]'>
              {skill.description}
            </p>

            {/* <ProgressBar percentage={skill.percentage} duration={2} /> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
