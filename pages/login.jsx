import Header from '@/components/Header'
import React, { useContext } from 'react'

import { CollectBrisbaneContext } from '@/context/CollectBrisbane'
import Authenticate from '@/components/Authenticate'

const Login = () => {
  const { user } = useContext(CollectBrisbaneContext)

  return (
    <div className='bg-gradient-to-br from-sky-50 to-gray-200 p-4 overflow-hidden h-full w-full'>
      <Header />
    {!user && <Authenticate />}
    </div>
  )
}

export default Login