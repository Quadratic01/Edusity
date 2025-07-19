import React from 'react';
import program_1 from '../../assets/program-1.jpeg';
import program_2 from '../../assets/program-2.jpeg';
import program_3 from '../../assets/program-3.jpeg';
import program_4 from '../../assets/program-4.jpeg';

const images = [ program_1, program_2, program_3, program_4 ] => {

}

const Programs = () => {
  return (
    <div className='programs gap-10 m-24 w-full flex items-center justify-between'>
      <div className='program basis-auto'>
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
