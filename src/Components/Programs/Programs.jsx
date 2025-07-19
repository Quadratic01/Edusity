import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program-1.jpeg';
import program_2 from '../../assets/program-2.jpeg';
import program_3 from '../../assets/program-3.jpeg';
import program_4 from '../../assets/program-4.jpeg';

const Programs = () => {
  return (
    <div className='programs m-24 w-20 flex items-center justify-between'>
      <div className='program'>
        <img src={program_1} alt='' />
        <div class='caption'>
          <img src='' alt='' />
          <p>Career & Employment</p>
        </div>
      </div>

      <div className='program'>
        <img src={program_2} alt='' />
        <div class='caption'>
          <img src='' alt='' />
          <p>Eduaction</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_3} alt='' />
        <div class='caption'>
          <img src='' alt='' />
          <p>Developmentt</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_4} alt='' />
        <div class='caption'>
          <img src='' alt='' />
          <p>Reciutment</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
