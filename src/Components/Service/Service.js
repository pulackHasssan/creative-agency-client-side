import React from 'react';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

const Service = () => {
    const services = [
        {
            name: 'Web & Mobile Design',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, impedit!',
            photo: 'https://i.ibb.co/gJrtC1W/service1.png'
    
        },
        {
            name: 'Graphic Design',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit a id aperiam voluptatibus. Molestias, rem.',
            photo: 'https://i.ibb.co/47YSHnP/service2.png'
        },
        {
            name: 'Web Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corrupti reiciendis perspiciatis.',
            photo: 'https://i.ibb.co/0Mwrt1Z/service3.png'
        }
        
    ]
    return (
        <div>
            <h2 className='text-center py-5'>Provide awesome <span style={{color:'#85b06b'}}>services</span></h2>
           <div className="container">
              <div className="d-flex justify-content-around">
              <div className="d-flex flex-wrap">
                {
                services.map(service=> <ServiceContainer service={service}></ServiceContainer>)
               }
               </div>
              </div>
           </div>
        </div>
    );
};

export default Service;