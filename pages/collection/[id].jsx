import React from 'react'
import Header from '@/components/Header';
import Collection from '@/components/Collection';



const styles = {
  container: `p-3 w-full h-full overflow-hidden`,
};



const CollectionId = () => {

      
  return (
    <div className={styles.container}>
        <Header />
        <Collection />
    </div>
  )
}

export default CollectionId





