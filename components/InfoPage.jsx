import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
const InfoPage = ({id, Title, Category, Description, 
Address, Number, createdAt, photos}) => {
  return (
    <div className='flex items-center justify-center sm:my-[20px] md:my-[40px] lg:my-[70px]'>
      <Card className="max-w-[1000px] max-h-full overflow-hidden">
      <CardHeader color="blue" className="max-h-[400px] max-w-full overflow-auto flex-wrap mt-5 items-center gap-2 justify-center flex p-5">
      {photos?.map((photo) => (
          <Image priority='true' key={photo} className="rounded-[10px] bg-[#fff]" layout='fixed' width={200} height={200} src={photo}  alt="collection-Photo" />
        ))}
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
         {Title}
        </Typography>
        <Typography>
          {Description}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{Address}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          {createdAt && moment(createdAt?.toDate())?.format('Do MMM YYYY, h:mm a')}
        </Typography>
      </CardFooter>
    </Card>    
    
    </div>
  )
}

export default InfoPage