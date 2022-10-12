import React from 'react';
import moment from 'moment';
import Image from 'next/image';
const InfoPage = ({Title, Description, 
Address, createdAt, photos}) => {
  return (

      <div className="flex flex-col gap-2 max-w-[900px] md:mt-[50px] lg:mt-[80px] sm:mt-20 text-gray-700 shadow-lg bg-[#fff] rounded-[10px] overflow-hidden">
        <div color="blue" className="max-h-[400px] mx-6 rounded-[10px] bg-blue-500 max-w-full overflow-auto flex-wrap mt-5 items-center gap-2 justify-center flex p-5">
          {photos?.map((photo) => (
            <Image priority='true' key={photo} className="rounded-[10px] bg-[#fff]" layout='fixed' width={250} height={200} src={photo}  alt="collection-Photo" />
          ))}
        </div>
      <div className="mx-4 max-w-full p-4 break-all overflow-hidden">
        <h5 className="block antialiased text-center tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
         {Title}
        </h5>
        <p className=' font-sans text-md font-light leading-normal text-gray-700'>
          {Description}
        </p>
      </div>
      <div className="p-6 border-t border-blue-gray-50 flex items-center justify-between py-3">
        <p className='antialiased font-sans text-sm font-light leading-normal text-gray-700 flex gap-1'>{Address}</p>
        <p className="antialiased font-sans text-sm font-light leading-normal text-gray-700 flex gap-1">
          {createdAt && moment(createdAt?.toDate())?.format('Do MMM YYYY, h:mm a')}
        </p>
      </div>
    </div>    
    
  )
}

export default InfoPage