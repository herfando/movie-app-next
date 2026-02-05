'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MotionProgressBarProps {
  percentage: number;
  colorbar?: string;
  duration?: number;
}

export default function ProgressBar({
  percentage,
  colorbar,
  duration,
}: MotionProgressBarProps) {
  return (
    <div className='flex place-items-center gap-16'>
      <div className='h-14 w-full rounded-full bg-[#D5D7DA]'>
        <motion.div
          className='h-full rounded-full'
          style={{ backgroundColor: colorbar || '#6600EB' }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: duration || 1 }}
        />
      </div>
      <div className='text-[18px] font-semibold text-black dark:text-white'>
        {percentage}%
      </div>
    </div>
  );
}
