'use client';

import { Slot } from '@radix-ui/react-slot';
import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  asChild?: boolean;
  children: React.ReactNode;
}

const MotionSlot = motion.create(Slot);
const MotionDiv = motion.div;

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  asChild = false,
  children,
  ...props
}) => {
  const Comp = asChild ? MotionSlot : MotionDiv;

  return <Comp {...props}>{children}</Comp>;
};

export default MotionWrapper;
