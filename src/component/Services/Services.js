import React from 'react';
import Service from '../Service/Service';
import ServicesList from '../../hooks/ServicesList';

const Services = () => {
    const [services, setServices] = ServicesList();
    return (
        <div>
        <h1>ALL CUSTOMER SERVICES</h1>

    <div className='service-container'>

   {
      services.map(service =><Service
      key={service._id}
      service={service}>    

      </Service>) 
   } 
</div>
</div>
    );
};

export default Services;