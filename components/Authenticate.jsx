import Image from 'next/image'
import React, { useContext } from 'react'
import  facebook   from '@/public/facebook.svg'
import  google   from '@/public/google.svg'
import  tailus   from '@/public/tailus.svg'

import { CollectBrisbaneContext } from '@/context/CollectBrisbane'
import Link from 'next/link'

const Authenticate = () => {
  const { SignInWithGoogle, SignInWithFacebook } = useContext(CollectBrisbaneContext)

  return (
    <div className=" min-h-screen sm:mt-10 md:mt-10 flex items-center justify-center">  
      <div className="relative container mb-[80px] px-6 text-gray-500">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
              <div className="rounded-xl bg-white shadow-xl">
                  <div className="p-6">
                      <div className="space-y-4">
                          <Image src={tailus} alt="tailus-logo" priority='true' height={35} width={35} />
                          <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the <br /> best of Collect Brisbane.</h2>
                      </div>
                      <div className="mt-16 flex flex-col w-full gap-4">
                          <div onClick={SignInWithGoogle} className="group w-full flex items-center justify-center cursor-pointer sm:gap-3 md:gap-10 h-12 border-2 border-gray-300 rounded-full transition duration-300 
                            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">

                                  <Image priority='true' height={25} width={25} src={google} className="absolute left-0 w-5" alt="google-logo"/>
                                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                          </div>

                          <div onClick={SignInWithFacebook} className="group cursor-pointer flex items-center justify-center sm:gap-3 md:gap-10 h-12 border-2 border-gray-300 rounded-full transition duration-300 
                              hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                  <Image priority='true' height={25} width={25} src={facebook} className="absolute left-0 w-5" alt="Facebook-logo" />
                                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
                          </div>
                      </div>
                      <div className='text-xs mt-10 space-y-4 text-gray-600 text-center'>

                          <Link href='/terms'><span className='underline cursor-pointer'>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy</span></Link>
                      </div>
                  </div>
              </div>
          </div>
    </div>
</div>
  )
}

export default Authenticate