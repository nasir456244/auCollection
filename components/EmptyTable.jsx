import { IconButton } from '@material-tailwind/react';
import React from 'react'

const EmptyTable = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div>
                <h2 className="text-2xl text-gray-900 font-semibold leading-tight">My Collections</h2>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th 
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left 
                                    text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Client / Invoice
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left 
                                    text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 
                                    text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Issued / Due
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left 
                                    text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-[50%] animate-pulse">
                                        </div>
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                    <div
                                        className="inline-block  flex items-center justify-center text-gray-500 hover:text-gray-700"
                                    >
                                        <IconButton color='gray'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </IconButton> 
                                    </div>
                                </td>
                                
                            </tr>

                            <tr>
                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-[50%] animate-pulse">
                                        </div>
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                    <div
                                        className="inline-block  flex items-center justify-center text-gray-500 hover:text-gray-700"
                                    >
                                        <IconButton color='gray'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </IconButton> 
                                    </div>
                                </td>
                                
                            </tr>


                            <tr>
                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-[50%] animate-pulse">
                                        </div>
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                    <div
                                        className="inline-block  flex items-center justify-center text-gray-500 hover:text-gray-700"
                                    >
                                        <IconButton color='gray'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </IconButton> 
                                    </div>
                                </td>
                                
                            </tr>

                            <tr>
                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-[50%] animate-pulse">
                                        </div>
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b w-[380px] border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3 bg-gray-300 relative rounded-[10px] h-[30px] w-[150px]">
                                        </div>
                                    </div>
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                    <div
                                        className="inline-block  flex items-center justify-center text-gray-500 hover:text-gray-700"
                                    >
                                        <IconButton color='gray'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </IconButton> 
                                    </div>
                                </td>                            
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmptyTable;