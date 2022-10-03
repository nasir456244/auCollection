import React from 'react';
import moment from 'moment';
const InfoPage = ({id, Title, Category, Description, 
Address, Number, createdAt, photos}) => {
  return (
    <div className='text-black'>
        <p>{id}</p>
        <p>{Title}</p>    
        <p>{photos && photos[0]}</p>    
        <p>{Category}</p>    
        <p>{Description}</p>    
        <p>{createdAt && moment(createdAt?.toDate())?.format('Do MMM YYYY, h:mm a')}</p>    
    
    </div>
  )
}

export default InfoPage