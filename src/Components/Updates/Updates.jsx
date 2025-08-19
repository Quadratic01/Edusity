import React from 'react';

const Updates = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>
        {' '}
        Lastest Updates{' '}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold'>Update Title 1</h3>
          <p className='text-gray-600 mt-2'>
            This is a brief description of the first update.
          </p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold'>Update Title 2</h3>
          <p className='text-gray-600 mt-2'>
            This is a brief description of the second update.
          </p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold'>Update Title 3</h3>
          <p className='text-gray-600 mt-2'>
            This is a brief description of the third update.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Updates;
