import image from 'next/image';
import Image from 'next/image';
import { JSX } from 'react';

export interface SkillItem {
  name: string;
  image: JSX.Element;
  description: string;
  percentage: number;
}

export const skillData: SkillItem[] = [
  {
    name: 'HTML',
    image: (
      <Image
        src='/images/08_html.png'
        alt='html icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description:
      'Build clean, semantic, and SEO-friendly web structures. Ensure content is accessible and compatible across all browsers.',
    percentage: 90,
  },
  {
    name: 'Tailwind CSS',
    image: (
      <Image
        src='/images/06_tailwind.svg'
        alt='css icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description:
      'Tailwind CSS enables faster development, consistent user interfaces, and scalable styling, making it ideal for modern web applications.',
    percentage: 90,
  },
  {
    name: 'Javascript',
    image: (
      <Image
        src='/images/07_js.png'
        alt='javascript icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description:
      'Build interactive and dynamic web features with clean, maintainable code.',
    percentage: 90,
  },
  {
    name: 'Typescript',
    image: (
      <Image
        src='/images/11_ts.png'
        alt='typescript icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description:
      'Develop safe and scalable front-end applications with strong typing, minimizing bugs and improving maintainability.',
    percentage: 90,
  },
  {
    name: 'React',
    image: (
      <Image
        src='/images/12_reactjs.png'
        alt='react icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description:
      'Build dynamic and interactive front-end applications using React JS, leveraging reusable components and state management for an optimal user experience.',
    percentage: 90,
  },
  {
    name: 'Next.js',
    image: (
      <Image
        src='/images/13_nextjs.svg'
        alt='nextjs icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description:
      'Build modern high-performance React applications using Next.js, leveraging SSR, SSG, and dynamic routing for an optimal user experience.',
    percentage: 90,
  },
  {
    name: 'TanStack Query',
    image: (
      <Image
        src='/images/10_tanstack.png'
        alt='tanstack query icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description:
      'Efficiently manage server data with automatic caching, fetching, and state management, keeping applications responsive and high-performing.',
    percentage: 90,
  },
  {
    name: 'Redux Toolkit',
    image: (
      <Image
        src='/images/15_redux.svg'
        alt='redux toolkit icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description:
      'Manage React application state in a structured and efficient way using Redux Toolkit, simplifying complex feature development and maintaining consistent data.',
    percentage: 90,
  },
  {
    name: 'Zustand',
    image: (
      <Image
        src='/images/16_zustand.svg'
        alt='zustand icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description:
      'Manage global state in React applications in a lightweight and efficient way, simplifying feature development without excessive boilerplate.',
    percentage: 90,
  },

  {
    name: 'Framer Motion',
    image: (
      <Image
        src='/images/14_motion.png'
        alt='framer motion icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description:
      'Create smooth and responsive web animations and interactions, enhancing user experience and application interactivity.',
    percentage: 90,
  },
];
