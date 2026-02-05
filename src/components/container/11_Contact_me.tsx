'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendToWA = () => {
    const phone = '6282213114640';
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // wrapper tiap baris kontak (icon + teks)
  const ContactItem = ({
    href,
    imgSrc,
    alt,
    label,
  }: {
    href: string;
    imgSrc: string;
    alt: string;
    label: string;
  }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='flex space-x-16 hover:cursor-pointer'
    >
      <div className='flex h-40 w-40 items-center justify-center rounded-full border border-neutral-400 bg-white md:h-48 md:w-48'>
        <Image
          src={imgSrc}
          alt={alt}
          width={11.67}
          height={16.67}
          className='w-11.67 h-16.67 md:h-24 md:w-24'
        />
      </div>
      <a href={href} target='_blank' rel='noopener noreferrer' className='flex'>
        <p className='text-md h-30 self-center md:text-lg'>{label}</p>
      </a>
    </motion.div>
  );

  return (
    <section className='custom-container h-auto pt-40 pb-64' id='contact'>
      <div className='flex flex-wrap justify-between space-y-20'>
        {/* left column */}
        <div className='w-361 space-y-24 md:w-453 md:space-y-32'>
          <h2 className='text-[32px] font-bold md:text-[48px]'>
            I've been waiting for you.
          </h2>
          <p className='text-md md:text-lg'>
            Fill in the form or Send us an email
          </p>

          <ContactItem
            href='https://wa.me/6282213114640?text=Hello%20Herfando, '
            imgSrc='/icons/13_whatsapp.svg'
            alt='phone'
            label='+62-82213114640'
          />

          <ContactItem
            href='https://compose.mail.yahoo.com/?to=herfando_91@yahoo.com'
            imgSrc='/icons/14_yahoo.svg'
            alt='email'
            label='herfando_91@yahoo.com'
          />

          <ContactItem
            href='https://github.com/herfando'
            imgSrc='/icons/15_github.svg'
            alt='github'
            label='github.com/herfando'
          />

          <ContactItem
            href='https://www.linkedin.com/in/fando-933b48107/'
            imgSrc='/icons/16_linkedin.svg'
            alt='linkedin'
            label='linkedin.com/in/fando-933b48107'
          />

          <ContactItem
            href='https://www.google.com/maps/place/South+Sumatra,+Indonesia'
            imgSrc='/icons/17_maps.svg'
            alt='maps'
            label='South Sumatra, Indonesia'
          />
        </div>

        {/* right column */}
        <div className='h-494 w-full p-32 font-semibold md:h-645 md:w-537 md:text-[24px]'>
          <h2 className='pb-10'>Send a Message</h2>

          <div className='space-y-5 pb-8'>
            <p className='md:text-md font-semibold'>Name</p>
            <input
              placeholder='Your Name'
              type='text'
              className='font-regular text-md h-56 w-full rounded-2xl border border-[#E9EAEB] px-20 md:w-473 md:text-lg'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='space-y-5 pb-8'>
            <p className='md:text-md font-semibold'>Email</p>
            <input
              placeholder='Your Email'
              type='email'
              className='font-regular text-md h-56 w-full rounded-2xl border border-[#E9EAEB] px-20 md:w-473 md:text-lg'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='space-y-5 pb-24'>
            <p className='md:text-md font-semibold'>Message</p>
            <input
              placeholder='Your Message'
              type='text'
              className='font-regular text-md h-180 w-full rounded-2xl border border-[#E9EAEB] px-20 md:w-473 md:text-lg'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button
            className='h-56 w-full cursor-pointer self-end rounded-full border border-neutral-400 bg-white font-bold text-black hover:bg-[#2a9e8b] hover:text-white md:w-473 dark:bg-black dark:text-white dark:hover:bg-[#2a9e8b]'
            onClick={sendToWA}
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}
