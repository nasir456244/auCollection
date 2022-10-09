import React, { Fragment, useContext, useState } from 'react'
import { getUserTable } from "queries/getUserTableQuery";
import { useQuery } from "@tanstack/react-query";
import { CollectBrisbaneContext } from '@/context/CollectBrisbane';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import InfoPage from '@/components/InfoPage';
import EmptyIfonPage from '@/components/EmptyIfonPage';



const styles = {
  container: `p-3 w-full h-full`,
};



const collection = () => {
    const { user } = useContext(CollectBrisbaneContext);
    const [tableData, setTableData] = useState([]);
    const router = useRouter();
    const id = router.query.id;


    const { isLoading } = useQuery(
        ["Collections", id],
        () => getUserTable(id, user),
        {
          onSuccess(data) {
            const newData = ({
              id: data?.id,
              ...data?.data(),
            });
            setTableData(newData);
          },
          enabled: !!user && id !== "undefined",
          staleTime: Infinity,
          refetchOnWindowFocus: false,
        }
      );

      if(isLoading) return <EmptyIfonPage />;
      
  return (
    <div className={styles.container}>
        <Header />
        <div>
          <InfoPage {...tableData} />
=        </div>
    </div>
  )
}

export default collection





