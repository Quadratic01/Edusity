import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program-1.jpeg';
import program_2 from '../../assets/program-2.jpeg';
import program_3 from '../../assets/program-3.jpeg';
import program_4 from '../../assets/program-4.jpeg';
import program_icon1 from '../../assets/program- .jpeg';
import program_icon2 from '../../assets/program-4.jpeg';
import program_icon3 from '../../assets/program-4.jpeg';
import program_icon4 from '../../assets/program-4.jpeg';

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program_1} alt='' />
        <div className='caption'>
          <img src='' alt='' />
          <p>Career & Employment</p>
        </div>
      </div>

      <div className='program'>
        <div className='program'>
        <img src={program_1} alt='' />
        <div className='caption'>
          <img src='' alt='' />
          <p>Career & Employment</p>
        </div>
      </div>

      <div className='program'>
        <div className='program'>
        <img src={program_1} alt='' />
        <div className='caption'>
          <img src='' alt='' />
          <p>Career & Employment</p>
        </div>
      </div>

      <div className='program'>
        <div className='program'>
        <img src={program_1} alt='' />
        <div className='caption'>
          <img src='' alt='' />
          <p>Career & Employment</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
