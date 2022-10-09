
import React from 'react';
const EmptyIfonPage = () => {
  return (
    <div className='flex items-center justify-center sm:my-[20px] md:my-[40px] lg:my-[70px]'>
      <div className="w-[900px] mx-8 bg-white rounded-[10px] max-h-full overflow-hidden">
      <div className="h-[250px] bg-blue-500 animate-pulse mx-6 rounded-[10px] max-w-full overflow-auto flex-wrap mt-5 items-center gap-2 justify-center flex p-5">
      <div className='w-[170px] h-[170px] bg-white animate-pulse rounded-[10px]' />
        <div className='w-[170px] h-[170px] bg-white animate-pulse rounded-[10px]' />
        <div className='w-[170px] h-[170px] bg-white animate-pulse rounded-[10px]' />
      </div>
      <div className="flex mt-6 items-center justify-center flex-col">
        <div variant="h5" className="mb-2 animate-pulse w-[200px] rounded-[10px] h-[40px] bg-gray-300">
        </div>
        <div className="w-[400px] animate-pulse h-[80px] bg-gray-300 rounded-[10px]">
        </div>
      </div>
      <div divider className="flex items-center px-5 border-t-[2px] mt-6 justify-between py-3">
        <div>
            <div className='bg-gray-300 animate-pulse w-[200px] h-[30px] rounded-[10px]' />
        </div>
        <div className="flex gap-1">
          <div className='w-[150px] animate-pulse h-[30px] bg-gray-300 rounded-[10px]' />
        </div>
      </div>
    </div>    
    
    </div>
  )
}

export default EmptyIfonPage