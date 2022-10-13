import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CollectBrisbaneContext } from '@/context/CollectBrisbane'



const styles = {
  body: ` flex items-center w-full justify-center h-full mt-[200px] sm:px-2 `,
  content: `flex flex-col w-full h-full items-center justify-center mb-16`,
  user: ` w-full flex items-center justify-center flex-col h-max`,
  setting: `max-w-[600px] bg-[#fff] sm:mb-[40px] md:mb-[100px] h-max pb-4 shadow-2xl rounded-[4px] `,
  top: `w-full bg-[#F7FAFC] border-b-2 border-[#E2E8F0] flex items-center justify-between p-5 shadow-2xl rounded-[4px]`,
  buttons: `w-full flex items-center justify-end pr-5`,
  stripeButton: `font-semibold text-[16px] hover:bg-[#2d3748] w-max h-max ml-1 rounded-[5px] 
  text-[#fff] bg-[#000] py-2 px-4`,
}

const Dashboard = () => {
  const { user, logout } = useContext(CollectBrisbaneContext);


  return (
      <div className={styles.body} >
        {user ?
          <div className={styles.content}>
            <div className={styles.user}>
              {user?.image && <Image className='rounded-[50%]' src={user?.image} width={100} height={100} alt='profile' />}
              <h3 className=' mt-3 font-semibold text-[16px] text-gray-900 not-italic'>{user?.name}</h3>
              <p className='font-medium text-gray-700 mb-5'>{user?.email}</p>

            </div>
            <div className={styles.setting}>
              <div className={styles.top}>
                <p className='text-[#718096] font-semibold text-[14px] not-italic'>SETTINGS</p>
              </div>

              <div className={styles.middle}>

                <p className='font-medium p-5 text-gray-500'>Please sign in to unlock the best of AuCollection if you are not signed in other wise navigate to the collection page and add a a collection and we will contact you after reviweing your collection.</p>
              </div>

              <div className={styles.buttons}>
                <button onClick={logout} className=' hover:bg-blue-500 bg-gray-500 font-medium text-[15px] mr-1 rounded-[5px] py-[9px] px-4'> Log Out</button>
              </div>

            </div>


          </div>

          :
          <div className={styles.setting}>
            <div className={styles.top}>
              <p className='text-[#718096] font-semibold text-[14px] not-italic'>SETTINGS</p>
              <p className='bg-[#ceedff] text-[13px] not-italic px-1 font-semibold text-[#153e75] uppercase'></p>
            </div>

            <div className={styles.middle}>

                <p className='font-medium p-5 text-gray-500'>Please sign in to unlock the best of AuCollection if you are not signed in other wise navigate to the collection page and add a a collection and we will contact you after reviweing your collection.</p>
            </div>

            <div className={styles.buttons}>
              <Link href='/login'>
                <a className='hover:bg-blue-500 bg-gray-500 font-medium text-[15px] mr-1 rounded-[5px] py-[9px] px-4'>Log in</a>
              </Link>
            </div>

          </div>

        }
      </div>

  )
}

export default Dashboard