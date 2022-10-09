import React from 'react';
import moment from 'moment';
import Image from 'next/image';
const InfoPage = ({id, Title, Category, Description, 
Address, Number, createdAt, photos}) => {
  return (
    <div className='flex items-center justify-center sm:my-[20px] md:my-[40px] lg:my-[70px]'>
      <div className="relative flex flex-col bg-clip-border text-gray-700 shadow-md max-w-[1000px] mx-8 bg-white rounded-[10px] max-h-full overflow-hidden">
      <div color="blue" className="max-h-[400px] mx-6 rounded-[10px] bg-blue-500 max-w-full overflow-auto flex-wrap mt-5 items-center gap-2 justify-center flex p-5">
      {photos?.map((photo) => (
          <Image priority='true' key={photo} className="rounded-[10px] bg-[#fff]" layout='fixed' width={200} height={200} src={photo}  alt="collection-Photo" />
        ))}
      </div>
      <div className="text-center p-6">
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
         {Title}
        </h5>
        <p className='block antialiased font-sans text-base font-light leading-relaxed text-inherit'>
          {Description}
        </p>
      </div>
      <div className="p-6 border-t border-blue-gray-50 flex items-center justify-between py-3">
        <p className='block antialiased font-sans text-sm font-light leading-normal text-inherit'>{Address}</p>
        <p className="antialiased font-sans text-sm font-light leading-normal text-gray-700 flex gap-1">
          {createdAt && moment(createdAt?.toDate())?.format('Do MMM YYYY, h:mm a')}
        </p>
      </div>
    </div>    
    
    </div>
  )
}

export default InfoPage