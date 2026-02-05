'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const questions = [
  {
    id: 1,
    question: "What's your approach to front-end development?",
    answer:
      'I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.',
  },
  {
    id: 2,
    question: "What's your approach to front-end development?",
    answer: '',
  },
  {
    id: 3,
    question: "What's your approach to front-end development?",
    answer: '',
  },
  {
    id: 4,
    question: "What's your approach to front-end development?",
    answer: '',
  },
  {
    id: 5,
    question: "What's your approach to front-end development?",
    answer: '',
  },
];

export default function HaveQuestions() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className='custom-container grid grid-cols-1 gap-16 py-40 md:grid-cols-2 md:py-80'>
      {/* Left Side */}
      <div className='space-y-8'>
        <h2 className='text-[32px] font-bold md:text-[48px]'>
          Have Questions?
        </h2>
        <div className='flex flex-col items-center space-y-4 md:items-start'>
          <Image
            src='/images/35_image.png'
            alt='Profile'
            width={80}
            height={80}
            className='h-20 w-20 rounded-full object-cover'
          />
          <p className='text-md text-gray-700 dark:text-gray-300'>
            Have more questions? Send me a message.
          </p>
          <button className='rounded-full bg-[#8B32FF] px-6 py-2 text-white hover:bg-[#6f28cc]'>
            Get in touch
          </button>
        </div>
      </div>

      {/* Right Side - FAQ */}
      <div className='space-y-4'>
        {questions.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-lg border px-6 py-4 transition-all ${
                isOpen ? 'border-[#8B32FF]' : 'border-gray-300'
              }`}
            >
              <button
                className='flex w-full items-center justify-between text-left text-[16px] font-semibold text-black dark:text-white'
                onClick={() => setOpenId(isOpen ? 0 : item.id)}
              >
                {item.question}
                <span className='text-xl'>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && item.answer && (
                <p className='mt-4 text-sm text-gray-700 dark:text-gray-300'>
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
