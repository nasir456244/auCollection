import { Avatar, IconButton, Tooltip } from "@material-tailwind/react";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Table = ({ title, photo, createdAt ,id, description, status}) => {
  const router = useRouter();
  return (
    <div className="text-black w-full">

      <div className={`grid grid-cols-9 border-[1.8px] bg-white gap-3 ${status === 'complete' && 'bg-gray-200'} `}>
        <div className="flex overflow-hidden text-gray-800 font-semibold tracking-wider text-[13px] gap-2 relative col-span-2 items-center justify-start p-2">
          <div className="flex items-center justify-center rounded-[10px]">
          <Image property='true' layout="fixed" width={80} className="rounded-[10px]" height={80} src={photo} />
          </ div>
        <p>{title}</p>
        </div>

        <div className="col-span-2 font-semibold tracking-wider text-gray-800 text-[13px] overflow-hidden flex items-center justify-start">
          <p className="truncate">{description}</p>
        </div>

        <div className="overflow-hidden flex items-center text-gray-800 justify-center font-semibold text-[12px]">
          <p>{ createdAt?.seconds ? moment(createdAt?.toDate())?.format('Do MMM YYYY, h:mm a') : moment().format('Do MMM YYYY, h:mm a')}</p>    
        </div>

        <div className="overflow-hidden flex items-center justify-center">
          <p className={`bg-[#ceedff] font-semibold text-[13px] text-blue-900 uppercase rounded-[2px] px-1 ${status === 'complete' && 'bg-[#bfee90] text-green-900'}   `}>{ status }</p>
        </div>

        <div className="overflow-hidden flex items-center justify-center">
          <div className="inline-block  flex items-center justify-center 
          text-gray-500 hover:text-gray-700">
            <IconButton disabled={status !== 'complete'} className={`${status === 'complete' ? 'bg-[#bfee90] text-green-900' : 'bg-gray-300 disabled:cursor-not-allowed'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </IconButton> 
          </div>        
        </div>

        <div className="overflow-hidden flex items-center justify-center">
        <Tooltip content="visit">
          <svg onClick={() => router.push(`/collection/${id}`)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </Tooltip>

        </div>
      </div>
    </div>
  );
};

export default Table;
