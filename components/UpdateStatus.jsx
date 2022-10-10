import React, { useContext, useEffect, useState } from 'react'
import { CollectBrisbaneContext } from '@/context/CollectBrisbane';
import { useRouter } from 'next/router';
import { getDocument, UpdateDocument } from '@/lib/db';



const styles = {
    container: `w-full h-full flex items-center justify-center`
};



const UpdateStatus = () => {
    const { user } = useContext(CollectBrisbaneContext);
    const router = useRouter();
    const id = router.query.id;
    const [status, SetStatus] = useState("")

    useEffect(() =>  getDoc(),[user])

    const getDoc = async () => {
        if(!user || status === 'complete') return;
        const res = await getDocument(id)
        SetStatus(res)
    }

    const upDateStatus = async () => {
        if(!user || status === "complete") return;
        await UpdateDocument(id).then(() => {
            SetStatus("complete")
            alert(`You have updated document id of ${id}`)
        });
    }
     
  return (
    <div className={styles.container}>
        {user && 
            <div className="flex flex-col items-center justify-center mt-20 p-6 gap-10 mb-10">                  
                {status !== 'complete' ?
                    <>
                        <p className='text-black font-medium text-center'>Update status for document {id}</p>
                        <button disabled={status === "complete"} onClick={upDateStatus} className='font-medium disabled:cursor-not-allowed rounded-[12px] bg-cyan-400 p-6'>Update Status</button>
                    </>
                :
                    <p className='text-green-500 mt-24 text-center text-xl font-medium'>You have/already updated the status</p>
                }       
            </div>        
        } 
    </div>
  )
}

export default UpdateStatus





