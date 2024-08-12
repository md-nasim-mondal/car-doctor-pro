import { services } from '@/lib/services';
import React from 'react';
import ServiceCard from '../cards/ServiceCard';

const Services = () => {
  return (
    <div className='text-slate-8000 min-h-screen'>
      <div className='text-center container mx-auto'>
        <h3 className='text-2xl font-bold text-orange-600'>Services</h3>
        <h2 className='text-5xl'>Our Service Area</h2>
        <p className='capitalize'>The majority have suffered alteration in some form, by injected humor, Or Randomized <br /> Words Which Don&apos;t Look Even Slightly Believable </p>
      </div>
      <div className='container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services?.map((service) => (
          <ServiceCard key={service?._id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
