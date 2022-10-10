import React, { useContext, useEffect, useState } from 'react'
import { CollectBrisbaneContext } from '@/context/CollectBrisbane';
import { useRouter } from 'next/router';
import Authenticate from './Authenticate';
import { getDocument, UpdateDocument } from '@/lib/db';



const styles = {
    container: `w-full h-screen flex items-center justify-center`
};



const UpdateStatus = () => {
    const { user } = useContext(CollectBrisbaneContext);
    const router = useRouter();
    const id = router.query.id;
    const [status, SetStatus] = useState("")

    useEffect(() => {
        getDoc()

    },[user])

    const getDoc = async () => {
        if(!user) return;
        const res = await getDocument(id)
        SetStatus(res)
    }

    const upDateStatus = async () => {
        if(!user || status === "complete") return;
        await UpdateDocument(id).then(() => {
            alert(`You have updated document id of ${id}`)
        });
    }
     
    if(!user) return <Authenticate />;

  return (
    <div className={styles.container}>
        {status === 'complete' ?
        
            (
                <p className='text-green-500 text-xl font-medium'>You have already updated the status</p>
            )
            :
            (
                <div className="flex flex-col items-center justify-center gap-10 p-6 mb-10">
                    <p className='text-black font-medium'>Update status for document {id}</p>
                    <button disabled={status === "complete"} onClick={upDateStatus} className='font-medium disabled:cursor-not-allowed rounded-[12px] bg-cyan-400 p-6'>Update Status</button>
                </div>
            )}
    </div>
  )
}

export default UpdateStatus





