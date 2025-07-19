import React from 'react';

import program_1 from '../../assets/program-1.jpeg';
import program_2 from '../../assets/program-2.jpeg';
import program_3 from '../../assets/program-3.jpeg';
import program_4 from '../../assets/program-4.jpeg';

const images = [
  {
    src: program_1,
    alt: 'Career & Employment',
  },
  {
    src: program_2,
    alt: 'Education',
  },
  {
    src: program_3,
    alt: 'Development',
  },
  {
    src: program_4,
    alt: 'Recruitment',
  },
];

const Programs = () => {
  return (
    <div className='gap-10 flex mx-26 items-center justify-between'>
      {images.map((image, index) => (
        <div key={index} className='flex flex-col gap-4'>
          <img
            src={image.src}
            alt={image.alt}
            className='h-80 w-80 object-cover'
          />
          <div className='caption p-6 border-2 border-gray-300 rounded-lg text-center w-full'>
            <p>{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;
