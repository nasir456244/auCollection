
import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
const EmptyIfonPage = () => {
  return (
    <div className='flex items-center justify-center sm:my-[20px] md:my-[40px] lg:my-[70px]'>
      <Card className="w-[900px] max-h-full overflow-hidden">
      <CardHeader color="blue" className="h-[250px] animate-pulse max-w-full overflow-auto flex-wrap mt-5 items-center gap-2 justify-center flex p-5">
      <div className='w-[170px] h-[170px] bg-white animate-pulse rounded-[10px]' />
        <div className='w-[170px] h-[170px] bg-white animate-pulse rounded-[10px]' />
        <div className='w-[170px] h-[170px] bg-white animate-pulse rounded-[10px]' />
      </CardHeader>
      <CardBody className="flex items-center justify-center flex-col">
        <Typography variant="h5" className="mb-2 animate-pulse w-[200px] rounded-[10px] h-[40px] bg-gray-300">
        </Typography>
        <Typography className="w-[400px] animate-pulse h-[80px] bg-gray-300 rounded-[10px]">
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">
            <div className='bg-gray-300 animate-pulse w-[200px] h-[30px] rounded-[10px]' />
        </Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          <div className='w-[150px] animate-pulse h-[30px] bg-gray-300 rounded-[10px]' />
        </Typography>
      </CardFooter>
    </Card>    
    
    </div>
  )
}

export default EmptyIfonPage