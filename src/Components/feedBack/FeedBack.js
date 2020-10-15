import React, { useEffect, useState } from 'react';
import FBContainer from '../FeedBackContainer/FBContainer';

const FeedBack = () => {
        const [feedback, setFeedback] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:1000/review')
            .then(res => res.json())
            .then(data=>setFeedback(data))
        }, [])

    const cutFeedback = feedback.slice(0,3);
    return (
        <div className='container'>
            <h2 className="text-center p-5">Our clients <span style={{color:'#85b06b'}}>Feedbacks</span></h2>
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-wrap">
                {
                cutFeedback.map(feedback=> <FBContainer feedback={feedback}></FBContainer>)
               }
            </div>
            </div>
        </div>


    );
};

export default FeedBack;