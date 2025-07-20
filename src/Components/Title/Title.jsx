import React from 'react';

const Title = ({ subTitle, Title }) => {
  return (
    <div className='w-full flex flex-col mt-10 gap-6 items-center justify-center'>
      <p className='text-center text-2xl  transform uppercase self-center'>
        {subTitle}
      </p>
      <h2 className='mb-6 text-3xl font-bold'> {Title} </h2>
    </div>
  );
};

export default Title;
