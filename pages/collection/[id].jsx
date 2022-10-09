import React from 'react'
import Header from '@/components/Header';
import Collection from '@/components/Collection';



const styles = {
  container: `p-3 w-full h-full`,
};



const CollectionId = () => {

      
  return (
    <div className={styles.container}>
        <Header />
        <div>
          <Collection />
=        </div>
    </div>
  )
}

export default CollectionId





