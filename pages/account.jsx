import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header'
import { CollectBrisbaneContext } from '@/context/CollectBrisbane';
import React, { useContext } from 'react'

const Account = () => {
  const { user, logout } = useContext(CollectBrisbaneContext);

  return (
    <div className='p-3'>
        <Header />
        <Dashboard />
    </div>
  )
}

export default Account