import React from 'react';

const Updates = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>Latest Updates</h2>
      <div className='gap-10 flex text-gray-700 mt-16 mx-34 items-center justify-between'>
        <div className='flex flex-col gap-4'></div>;
        <div className='flex flex-col gap-4'>
          <img
            src='https://via.placeholder.com/150'
            alt='Update 1'
            className='h-80 w-80 object-cover'
          />
          <div className='caption p-6 border-2 border-gray-300 rounded-lg text-center w-full'>
            <p>Update 1: New features released</p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <img
            src='https://via.placeholder.com/150'
            alt='Update 2'
            className='h-80 w-80 object-cover'
          />
          <div className='caption p-6 border-2 border-gray-300 rounded-lg text-center w-full'>
            <p>Update 2: Maintenance scheduled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
