import React from 'react';

const Reviews = ({}) => {
  const reviews = [
    {
      quote:
        'I had no idea how much my CV was holding me back until I received a review from this team. They pointed out unclear formatting, inconsistent language, and areas where I was underselling my achievements.',
      author: 'Quadratic',
    },
    {
      quote:
        'The team was incredibly supportive and provided me with actionable insights that I could implement right away. My CV has never looked better!',
      author: 'Mujaahid',
    },
    {
      quote:
        'I was amazed at how quickly the team was able to identify the weaknesses in my CV and provide me with a comprehensive plan to improve it. Their feedback was invaluable!',
      author: 'Puzzle',
    },
  ];
  return (
    <div className='reviews-container my-24 w-full flex flex-col items-center justify-center gap-2'>
      <p className='text-3xl font-bold'> Our Clients Love What We Do </p>
      <h2 className='italic text-lg text-center max-w-2xl'>
        We are proud to have served many clients with excellence and dedication.{' '}
        <br />
        Kindly Read what our esteem customer says about us
      </h2>

      {/* Placeholder for reviews, can be replaced with actual review components */}

      <div className='w-full mt-5 flex items-center gap-4 justify-center p-4 rounded-lg'>
        {reviews.map((review, index) => (
          <div
            key={index}
            className='review1 w-80 min-h-10 p-6 bg-gray-200 rounded-lg'
          >
            <p className='text-sm text-center '>
              "{review.quote}"
              <div className='text-center mt-6 italic font-semibold'>
                - {review.author}
              </div>
            </p>
          </div>
        ))}
      </div>
      <button className='p-3 border-2 mb-6 bg-blue-800 text-white rounded-sm text-center'>
        {' '}
        Read More Reviews{' '}
      </button>
    </div>
  );
};

export default Reviews;
