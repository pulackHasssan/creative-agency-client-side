import React from 'react';
import FBContainer from '../FeedBackContainer/FBContainer';

const FeedBack = () => {
    const feedBacks = [
        {
            user: 'Jane',
            email: 'example@gamil.com',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima quos blanditiis aliquam possimus impedit adipisci omnis ex ab est.'
        },
        {
            user: 'Martin',
            email: 'laample@gamil.com',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima quos blanditiis aliquam possimus impedit adipisci omnis ex ab est.'
        },
        {
            user: 'David',
            email: 'imample@gamil.com',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima quos blanditiis aliquam possimus impedit adipisci omnis ex ab est.'
        },
        {
            user: 'Rick',
            email: 'diample@gamil.com',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima quos blanditiis aliquam possimus impedit adipisci omnis ex ab est.'
        }
    ];
    const first3 = feedBacks.slice(0,3);
    return (
        <div className='container'>
            <h2 className="text-center p-5">Our clients <span style={{color:'#85b06b'}}>Feedbacks</span></h2>
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-wrap">
                {
                first3.map(feedback=> <FBContainer feedback={feedback}></FBContainer>)
               }
            </div>
            </div>
        </div>


    );
};

export default FeedBack;