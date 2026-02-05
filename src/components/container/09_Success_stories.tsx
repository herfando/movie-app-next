import React from 'react';
import Image from 'next/image';

export default function SuccessStories() {
  const testimonials = [
    {
      company: 'upwork',
      logo: '/images/32_upwork.png',
      quote:
        "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We've seen a significant increase in user engagement!",
      name: 'Robert Lewandowski',
      title: 'Head of Engineering, Upwork',
    },
    {
      company: 'zapier',
      logo: '/images/33_zapier.png',
      quote:
        "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We've seen a significant increase in user engagement!",
      name: 'Dani Olmo',
      title: 'Product Manager, Zapier',
    },
    {
      company: 'zoom',
      logo: '/images/34_zoom.png',
      quote:
        "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We've seen a significant increase in user engagement!",
      name: 'Jude Bellingham',
      title: 'Vice President, Zoom',
    },
  ];

  return (
    <section className='custom-container py-40 md:py-80'>
      <h2 className='mb-24 text-center text-[32px] font-bold md:mb-48 md:text-[48px]'>
        Success Stories from Clients
      </h2>

      <div className='grid grid-cols-1 gap-24 md:grid-cols-3 md:gap-16'>
        {testimonials.map((item, index) => (
          <div key={index} className='space-y-8 text-center'>
            {/* Logo */}
            <div className='flex justify-center'>
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                width={80}
                height={80}
                className='h-20 w-20 object-contain'
              />
            </div>

            {/* Quote */}
            <p className='text-md text-gray-700 dark:text-gray-300'>
              {item.quote}
            </p>

            {/* Stars */}
            <div className='flex justify-center space-x-1 text-[#FACC15]'>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Name & Title */}
            <div className='space-y-1'>
              <p className='font-semibold text-black dark:text-white'>
                {item.name}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
