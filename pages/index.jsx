import Header from '@/components/Header'
import { CollectBrisbaneContext } from '@/context/CollectBrisbane'
import Link from 'next/link'
import React, { useContext } from 'react'

const Home = () => {
    const { user } = useContext(CollectBrisbaneContext)
  return (
    <div className='p-3'>
        <Header />
        <div className='flex flex-col sm:items-start p-5 md:items-center justify-around gap-10 mt-[60px]'>
            <div className='text-blue-900 md:mr-[350px] '>
                <h2 className='text-[30px] mb-2 text-blue-900 font-medium'>AU Collection are here.</h2>
                <p className='font-semibold tracking-wider text-gray-800 text-md '>We come and collect your disposed items. </p>  
            </div>

            <div className='font-semibold tracking-wider md:mr-[350px] text-gray-800 text-md'>
                <p>These are the categories we accept.</p>
                    <li>Machinery</li>
                    <li>Car Parts</li>
                    <li>Car Bodies</li>
                    <li>Exhaust</li>
                    <p>and related Categories</p>
            </div>
            <div className='font-semibold tracking-wider md:mr-[350px] text-gray-800 text-md'>
                <p>Locations in our range at the moment. </p>
                    <li>Brisbane</li>
                    <li>Ipswich</li>
                    <li>Logan</li>
                    <li>Gold Coast</li>
            </div>

            <div className='flex flex-col gap-3 lg:ml-[150px]'>
                <h2 className='font-semibold tracking-wider text-gray-800 text-md'>
                    Sign in to unluck the best of AUC, post your disposed item/s and we will give you a call regarding pick up.
                </h2>
                <Link href={`${user ? '/mycollections' : '/login'}`}>
                    <span className='font-sans cursor-pointer font-bold center uppercase transition-all text-md py-2 px-7 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-fit mb-2'>
                        Login
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home