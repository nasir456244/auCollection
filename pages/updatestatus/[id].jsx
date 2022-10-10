import React from 'react'
import Header from '@/components/Header';
import UpdateStatus from '@/components/UpdateStatus';



const styles = {
  container: `p-3 w-full h-full`,
};



const UpdateStatusId = () => {

      
  return (
    <div className={styles.container}>
        <Header />
        <div>
          <UpdateStatus />
       </div>
    </div>
  )
}

export default UpdateStatusId





