import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service || {};
  return (
    <div className='card card-compact bg-base-100 w-96 shadow-xl'>
      <figure>
        <Image
          alt='serviceImg'
          src={img}
          width={120}
          height={120}
          className='w-full h-64'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <div className='card-actions justify-between items-center'>
          <h6 className='text-primary font-semibold'>Price: {price}</h6>
          <Link href={`/services/${_id}`} className='btn btn-primary'>ViewDetails</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
