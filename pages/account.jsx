import Header from '@/components/Header'
import { CollectBrisbaneContext } from '@/context/CollectBrisbane';
import { Button } from '@material-tailwind/react';
import React, { useContext } from 'react'

const Account = () => {
  const { user, logout } = useContext(CollectBrisbaneContext);

  return (
    <div>
        <Header />
        {user && <Button onClick={logout}>log out</Button>}
    </div>
  )
}

export default Account